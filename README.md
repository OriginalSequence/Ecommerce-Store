# Project Store - E-commerce Application

## Overview
Project Store is a modern e-commerce web application built with React and Vite. It features a responsive design with a dark, futuristic theme that provides an immersive shopping experience. The application integrates with the FakeStore API to display products and implements a fully functional shopping cart system with persistent storage.

## Features

### User Interface
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Dark Futuristic Theme**: Modern UI with gradient accents and animations
- **Intuitive Navigation**: Easy-to-use navigation with mobile menu support

### Product Management
- **Product Catalog**: Browse all available products with details
- **Product Cards**: Visually appealing product cards with images, prices, and ratings
- **Quantity Selection**: Adjust product quantities before adding to cart

### Shopping Cart
- **Cart Management**: Add, update, and remove items from your cart
- **Persistent Storage**: Cart data is saved in local storage between sessions
- **Quantity Controls**: Easily adjust product quantities in the cart
- **Price Calculations**: Automatic calculation of cart totals

### API Integration
- **FakeStore API**: Integration with external API for product data

## Technologies Used

### Frontend
- **React**: UI component library
- **React Router**: For navigation and routing
- **Context API**: For state management (cart functionality)
- **Tailwind CSS**: For styling and responsive design

### Development & Build Tools
- **Vite**: Fast development server and build tool
- **ESLint**: Code quality and style checking
- **Jest**: Testing framework
- **React Testing Library**: Component testing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/OriginalSequence/Ecommerce-Store.git
   cd Ecommerce-Store
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```
npm run build
npm run preview
```

## Testing

Run the test suite with:

```
npm test
```

## Project Structure

- `/src`: Source code
  - `/components`: Reusable UI components
  - `/context`: React Context providers
  - `/pages`: Application pages
  - `/assets`: Static assets

## License

This project is licensed under the MIT License - see the LICENSE file for details.
