import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product Title',
  price: 99.99,
  image: 'test-image.jpg',
  description: 'Test product description',
};

const mockAddToCart = jest.fn();

describe('ProductCard Component', () => {
  beforeEach(() => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);
    mockAddToCart.mockClear(); 
  });

  test('renders product information correctly', () => {
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();

    const image = screen.getByAltText(mockProduct.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.image);
  });

  test('calls onAddToCart handler when button is clicked', () => {
    const addButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 1);
  });
});