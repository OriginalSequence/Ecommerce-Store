import React from 'react';
import { render, act, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartProvider, useCart } from './CartContext';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

const product1 = { id: 1, title: 'Product 1', price: 10 };
const product2 = { id: 2, title: 'Product 2', price: 20 };

const TestCartComponent = () => {
  const { 
    cartItems, 
    addToCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    getCartTotal, 
    getCartItemCount 
  } = useCart();

  return (
    <div>
      <button onClick={() => addToCart(product1)}>Add Product 1</button>
      <button onClick={() => addToCart(product2, 2)}>Add 2 Product 2</button>
      <button onClick={() => updateQuantity(product1.id, 5)}>Update P1 Qty to 5</button>
      <button onClick={() => updateQuantity(product2.id, 0)}>Update P2 Qty to 0 (Remove)</button>
      <button onClick={() => removeFromCart(product1.id)}>Remove Product 1</button>
      <button onClick={() => clearCart()}>Clear Cart</button>

      <div data-testid="item-count">{getCartItemCount()}</div>
      <div data-testid="total-price">{getCartTotal().toFixed(2)}</div>
      <ul data-testid="cart-items">
        {cartItems.map(item => (
          <li key={item.id}>{item.title} - Qty: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

const renderWithCartProvider = (component) => {
  return render(
    <CartProvider>
      {component}
    </CartProvider>
  );
};

describe('CartContext', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  test('initializes with an empty cart or from localStorage', () => {
    localStorageMock.clear();
    localStorageMock.setItem('shoppingCart', JSON.stringify([{ ...product1, quantity: 3 }]));
    
    renderWithCartProvider(<TestCartComponent />);
    expect(screen.getByTestId('item-count').textContent).toBe('3');
    expect(screen.getByTestId('total-price').textContent).toBe('30.00');
    expect(screen.getByText('Product 1 - Qty: 3')).toBeInTheDocument();
  });


  test('adds items to the cart and updates count/total', () => {
    renderWithCartProvider(<TestCartComponent />);
    
    act(() => {
       fireEvent.click(screen.getByText('Add Product 1'));
    });
    expect(screen.getByTestId('item-count').textContent).toBe('1');
    expect(screen.getByTestId('total-price').textContent).toBe('10.00');
    expect(screen.getByText('Product 1 - Qty: 1')).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByText('Add 2 Product 2'));
    });
    expect(screen.getByTestId('item-count').textContent).toBe('3');
    expect(screen.getByTestId('total-price').textContent).toBe('50.00');
    expect(screen.getByText('Product 2 - Qty: 2')).toBeInTheDocument();
  });

  test('updates item quantity', () => {
    renderWithCartProvider(<TestCartComponent />);
    
    act(() => {
      fireEvent.click(screen.getByText('Add Product 1'));
    });
    act(() => {
      fireEvent.click(screen.getByText('Update P1 Qty to 5'));
    });
    expect(screen.getByTestId('item-count').textContent).toBe('5');
    expect(screen.getByTestId('total-price').textContent).toBe('50.00');
    expect(screen.getByText('Product 1 - Qty: 5')).toBeInTheDocument();
  });

  test('removes item when quantity is updated to 0 or less', () => {
    renderWithCartProvider(<TestCartComponent />);
    
    act(() => {
      fireEvent.click(screen.getByText('Add 2 Product 2'));
    });
    expect(screen.getByText('Product 2 - Qty: 2')).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByText('Update P2 Qty to 0 (Remove)'));
    });
    expect(screen.queryByText('Product 2 - Qty: 2')).not.toBeInTheDocument();
    expect(screen.getByTestId('item-count').textContent).toBe('0');
    expect(screen.getByTestId('total-price').textContent).toBe('0.00');
  });

  test('removes items from the cart', () => {
    renderWithCartProvider(<TestCartComponent />);
    
    act(() => {
      fireEvent.click(screen.getByText('Add Product 1'));
      fireEvent.click(screen.getByText('Add 2 Product 2'));
    });
    expect(screen.getByTestId('item-count').textContent).toBe('3');
    act(() => {
      fireEvent.click(screen.getByText('Remove Product 1'));
    });
    expect(screen.queryByText('Product 1 - Qty: 1')).not.toBeInTheDocument();
    expect(screen.getByTestId('item-count').textContent).toBe('2');
    expect(screen.getByTestId('total-price').textContent).toBe('40.00');
  });

  test('clears the entire cart', () => {
    renderWithCartProvider(<TestCartComponent />);
    
    act(() => {
      fireEvent.click(screen.getByText('Add Product 1'));
      fireEvent.click(screen.getByText('Add 2 Product 2'));
    });
    expect(screen.getByTestId('item-count').textContent).toBe('3');
    act(() => {
      fireEvent.click(screen.getByText('Clear Cart'));
    });
    expect(screen.queryByText('Product 1 - Qty: 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Product 2 - Qty: 2')).not.toBeInTheDocument();
    expect(screen.getByTestId('item-count').textContent).toBe('0');
    expect(screen.getByTestId('total-price').textContent).toBe('0.00');
  });

  test('persists cart state to localStorage', () => {
    renderWithCartProvider(<TestCartComponent />);
    
    act(() => {
      fireEvent.click(screen.getByText('Add Product 1'));
    });
    act(() => {
       fireEvent.click(screen.getByText('Add 2 Product 2'));
    });

    const expectedCart = [
      { ...product1, quantity: 1 },
      { ...product2, quantity: 2 },
    ];
    expect(localStorageMock.getItem('shoppingCart')).toEqual(JSON.stringify(expectedCart));

    act(() => {
        fireEvent.click(screen.getByText('Clear Cart'));
    });
    expect(localStorageMock.getItem('shoppingCart')).toEqual(JSON.stringify([]));
  });
});