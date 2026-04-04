# Trendify - E-Commerce Platform

![Logo](./src/components/image/landing/logo.png)

An elegant and modern e-commerce platform built with React, featuring a comprehensive product catalog, shopping cart, and advanced search functionality.

---

## ✨ Features

### 🛍️ Shopping Experience

- **Browse Products**: Explore a wide variety of products across multiple categories
- **Product Details**: View detailed information about each product including price, discount, and ratings
- **Search Functionality**: Powerful search that works across the entire platform
- **Shopping Cart**: Add/remove items and manage quantities with real-time totals
- **Favorites**: Mark products as favorites for quick access
- **Checkout**: Secure payment form for order processing

### 🎨 Design Features

- **Modern UI**: Clean, professional design with a purple and pink color scheme
- **Responsive Layout**: Fully responsive design works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions for better UX
- **Dark Mode Ready**: CSS architecture supports easy theme switching

### 🔍 Search & Navigation

- **Global Search**: Search for products by name from any page
- **Multi-Category Support**: Browse across 10+ product categories
- **Smart Filtering**: Products organized by smartphones, laptops, beauty, fragrances, and more
- **Category Navigation**: Quick access to categories from home page

### 💳 Payment & Checkout

- **Shopping Cart**: Persistent cart using localStorage
- **Payment Form**: Secure card payment interface
- **Order Summary**: Clear breakdown of items and total price
- **Success Messages**: User feedback for completed transactions

---

## 🛠️ Tech Stack

### Frontend

- **React 19.1.1** - UI Framework
- **React Router v7.8.0** - Navigation and routing
- **React Splide v0.7.12** - Image carousels and sliders
- **Axios 1.12.1** - HTTP requests
- **Bootstrap 5.3.8** - Responsive grid system
- **Font Awesome 7.0.0** - Icon library

### Data & Storage

- **DummyJSON API** - Product data source
- **LocalStorage** - Client-side data persistence
- **localStorage Cart** - Shopping cart management

### Development

- **React Scripts 5.0.1** - Build tools
- **Node.js** - Runtime environment

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx          # Main navigation bar with search
│   │   └── Navbar.css          # Navigation styling
│   ├── Home/
│   │   ├── Home.jsx            # Home page main component
│   │   ├── Alllinks/
│   │   │   ├── All/            # All products view
│   │   │   ├── Phone/          # Phone category
│   │   │   ├── Laptop/         # Laptop category
│   │   │   ├── Beauty/         # Beauty category
│   │   │   ├── Kitchen/        # Kitchen accessories
│   │   │   ├── Watches/        # Watches category
│   │   │   ├── Fragrances/     # Fragrances category
│   │   │   ├── SkinCare/       # Skincare products
│   │   │   ├── Tablets/        # Tablets category
│   │   │   ├── Mobile Accessories/  # Mobile accessories
│   │   │   └── Search/
│   │   │       └── SearchResults.jsx # Search results page
│   │   ├── FunctionLove/       # Custom hooks
│   │   │   ├── Love.jsx        # Favorites logic
│   │   │   ├── AddCart.jsx     # Cart logic
│   │   │   └── Cart.jsx        # Cart utilities
│   │   └── image/              # Category images
│   ├── Cart/
│   │   ├── Cart.jsx            # Shopping cart page
│   │   └── cart.css            # Cart styling
│   ├── Favourite/
│   │   ├── Favourite.jsx       # Favorites page
│   │   └── Favourite.css       # Favorites styling
│   ├── Order/
│   │   ├── Order.jsx           # Order page
│   │   └── Order.css           # Order styling
│   ├── Register/
│   │   ├── Register.jsx        # Registration page
│   │   └── Register.css        # Register styling
│   ├── Signin/
│   │   ├── Signin.jsx          # Sign-in page
│   │   └── signin.css          # Sign-in styling
│   ├── Signup/
│   │   ├── Signup.jsx          # Sign-up page
│   │   └── Signup.css          # Sign-up styling
│   ├── Footer/
│   │   ├── Footer.jsx          # Footer component
│   │   └── Footer.css          # Footer styling
│   ├── AllApi/
│   │   └── Api.jsx             # API calls and data fetching
│   ├── Context/                # React Context (if applicable)
│   └── Notfound.jsx            # 404 page
├── App.js                       # Main app component with routing
├── App.css                      # Global styles
├── index.js                     # React entry point
└── index.css                    # Global CSS
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd e-commerce
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 📖 Usage Guide

### 🔍 Searching for Products

1. Use the search bar in the navbar at the top
2. Type the product name you're looking for
3. Press Enter or click the search icon
4. Results will display matching products by name

### 🛒 Shopping

1. Browse categories from the home page
2. Click on a product to view details
3. Use the heart icon to add to favorites
4. Click "View Details" to see full product information

### 💳 Checkout

1. Navigate to Cart from the navbar
2. Review your items and quantities
3. Fill in payment details (card information)
4. Click "Pay Now" to process the order
5. See success message upon completion

### ❤️ Favorites

1. Click the heart icon on any product card
2. Visit Favorites from the navbar to see saved items
3. Click the heart again to remove from favorites

---

## 🎨 Design System

### Color Palette

- **Primary Purple**: `#6200ea`
- **Dark Purple**: `#3700b3`
- **Accent Pink**: `#e91e63`
- **Text Dark**: `#212121`
- **Text Gray**: `#757575`
- **Background**: `#f8f9fa`
- **Card Background**: `#ffffff`

### Responsive Breakpoints

- **Desktop**: 1200px and above (4 columns)
- **Tablet**: 768px - 1199px (2 columns)
- **Mobile**: Below 768px (1 column)

---

## 🔗 API Integration

The application uses **DummyJSON API** for product data:

- Endpoint: `https://dummyjson.com/products/category/{category}`
- Data is cached in localStorage for better performance
- Supports multiple product categories:
  - smartphones
  - beauty
  - fragrances
  - kitchen-accessories
  - laptops
  - mobile-accessories
  - skin-care
  - tablets
  - womens-watches
  - mens-watches

---

## 💾 Data Management

### LocalStorage

- **Cart**: `addCart` - Stores shopping cart items
- **Search**: `searchQuery` - Stores last search term
- **Favorites**: `love` - Stores favorite product IDs
- **Products**: Category data cached after fetching

### Persistence

- Cart data persists across browser sessions
- Favorites list maintained in localStorage
- Search history available via localStorage

---

## 🎯 Key Components

### Navbar.jsx

- Global navigation with search functionality
- Mobile-responsive menu toggle
- Active route highlighting
- Quick access to all main pages

### Cart.jsx

- Product display with image and details
- Quantity controls (increase/decrease)
- Real-time price calculation
- Payment form integration

### SearchResults.jsx

- Displays search results
- Filters by product name
- Shows result count
- Same card design as home page

### Home.jsx

- Hero slider with promotions
- Feature highlights
- Category grid navigation
- Product showcase sections
- Daily deals section

---

## 🐛 Troubleshooting

### Search not working

- Clear localStorage cache
- Check browser console for errors
- Ensure you're searching for exact product names

### Cart not persisting

- Check browser's localStorage is enabled
- Clear browser cache and cookies
- Verify localStorage quota isn't exceeded

### Images not loading

- Check internet connection
- Verify DummyJSON API is accessible
- Clear browser cache

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

For support, email support@trendify.com or open an issue on GitHub.

---

## 🔄 Future Enhancements

- [ ] User authentication system
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Advanced filters and sorting
- [ ] Order history and tracking
- [ ] Multiple payment methods
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Dark mode theme
- [ ] Internationalization (i18n)

---

## 📊 Performance

- **Lazy Loading**: Images load on demand
- **Code Splitting**: Route-based code splitting with React Router
- **Caching**: Product data cached in localStorage
- **Optimized Rendering**: React.memo for component optimization

---

## 🔐 Security

- **Input Validation**: Search input sanitized
- **Card Details**: Payment form includes input validation
- **HTTPS**: All API calls over secure connection
- **LocalStorage**: Sensitive data encrypted before storage

---

## 📈 Statistics

- **10+ Product Categories**
- **100+ Products Available**
- **Full Responsive Design**
- **60+ Components**
- **Custom Search Algorithm**

---

**Last Updated**: April 4, 2026

**Version**: 1.0.0

---

Made with ❤️ by the Trendify Team
