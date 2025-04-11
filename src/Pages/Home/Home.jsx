import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiHeart, FiBarChart2, FiUser, FiGlobe, FiMenu, FiChevronDown, FiShoppingCart, FiStar, FiX, FiFilter } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { useState } from 'react';

const EcommerceHomepage = () => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [email, setEmail] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Product data with real image URLs from Unsplash
  const newArrivals = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "89.99",
      rating: 4,
      reviewCount: 128,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "199.99",
      rating: 5,
      reviewCount: 86,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Camera Lens",
      price: "450.00",
      rating: 4,
      reviewCount: 42,
      image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhJTIwbGVuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Running Shoes",
      price: "120.00",
      rating: 5,
      reviewCount: 210,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: "75.50",
      rating: 4,
      reviewCount: 64,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const recommendedProducts = [
    {
      id: 6,
      name: "Gaming Keyboard",
      price: "95.00",
      rating: 5,
      reviewCount: 178,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 7,
      name: "Yoga Mat",
      price: "35.99",
      rating: 4,
      reviewCount: 92,
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 8,
      name: "Desk Lamp",
      price: "45.25",
      rating: 4,
      reviewCount: 56,
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 9,
      name: "Backpack",
      price: "65.80",
      rating: 5,
      reviewCount: 143,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2twYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3">
          {/* Top Header */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 space-y-3 md:space-y-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <button 
                className="md:hidden p-2 mr-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
              <motion.div 
                className="text-2xl font-bold text-indigo-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ShopNest
              </motion.div>
              
              {/* Mobile Icons - Smaller size */}
              <div className="flex items-center space-x-3 md:hidden">
                <motion.button 
                  className="p-1.5 relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiHeart className="text-lg" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-3.5 w-3.5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </motion.button>
                <motion.button 
                  className="p-1.5 relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiUser className="text-lg" />
                </motion.button>
                <motion.button 
                  className="p-1.5 relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiShoppingCart className="text-lg" />
                  <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-[10px] rounded-full h-3.5 w-3.5 flex items-center justify-center">3</span>
                </motion.button>
              </div>
            </div>
          
            {/* Search Bar - Hidden on mobile */}
            <motion.div 
              className="hidden md:flex flex-1 mx-0 md:mx-6 w-full md:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                />
                <FiSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
            </motion.div>
          
            {/* Desktop Icons - Normal size */}
            <div className="hidden md:flex items-center justify-end space-x-4 w-full md:w-auto">
              <motion.button 
                className="p-2 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiHeart className="text-xl" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </motion.button>
              <motion.button 
                className="p-2 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiUser className="text-xl" />
              </motion.button>
              <motion.button 
                className="p-2 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiShoppingCart className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </motion.button>
            </div>
          </motion.div>
          
          {/* Mobile Search - Visible only on mobile */}
          <motion.div 
            className="md:hidden mb-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              />
              <FiSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </motion.div>
          
          {/* Country Selector and Categories */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <motion.button 
              className="flex items-center space-x-1 text-sm"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGlobe className="text-gray-600" />
              <span>{selectedLanguage} | {selectedCurrency}</span>
              <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiChevronDown className="text-gray-500" />
              </motion.span>
            </motion.button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bg-white shadow-lg rounded-md mt-1 py-1 w-64 z-20 max-h-96 overflow-y-auto"
                >
                  <div className="border-b border-gray-100 px-4 py-2">
                    <h5 className="text-xs font-bold text-gray-500 uppercase">Language</h5>
                    {['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Russian'].map(language => (
                      <motion.button
                        key={language}
                        className={`block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 ${selectedLanguage === language ? 'text-indigo-600' : ''}`}
                        onClick={() => {
                          setSelectedLanguage(language);
                          setIsDropdownOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {language}
                      </motion.button>
                    ))}
                  </div>
                  <div className="border-b border-gray-100 px-4 py-2">
                    <h5 className="text-xs font-bold text-gray-500 uppercase">Currency</h5>
                    {['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CNY', 'INR'].map(currency => (
                      <motion.button
                        key={currency}
                        className={`block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 ${selectedCurrency === currency ? 'text-indigo-600' : ''}`}
                        onClick={() => {
                          setSelectedCurrency(currency);
                          setIsDropdownOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {currency}
                      </motion.button>
                    ))}
                  </div>
                  <div className="px-4 py-2">
                    <h5 className="text-xs font-bold text-gray-500 uppercase">Country</h5>
                    {['USA', 'Canada', 'UK', 'France', 'Germany', 'Spain', 'Italy', 'Australia'].map(country => (
                      <motion.button
                        key={country}
                        className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100"
                        onClick={() => {
                          // Add your country selection logic here if needed
                          setIsDropdownOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {country}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Categories - Hidden on mobile */}
          <nav className="hidden md:flex space-x-6 overflow-x-auto py-1">
            {['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports', 'Toys', 'Books', 'Health'].map((category, index) => (
              <motion.a
                key={category}
                href="#"
                className="whitespace-nowrap text-sm font-medium hover:text-indigo-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {category}
              </motion.a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-sm font-medium flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Categories <FiChevronDown className="ml-1" />
          </button>
        </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-t"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-3">
                <nav className="flex flex-col space-y-3">
                  {['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports', 'Toys', 'Books', 'Health'].map((category, index) => (
                    <motion.a
                      key={category}
                      href="#"
                      className="text-sm font-medium hover:text-indigo-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      {category}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <button 
          className="md:hidden flex items-center justify-center w-full bg-indigo-600 text-white py-2 rounded-lg mb-4"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <FiFilter className="mr-2" />
          Filters
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar Filters - Hidden on mobile */}
          <aside className="hidden md:block w-64 pr-6">
            <div className="bg-white p-4 rounded-lg shadow-sm sticky top-24">
              <h3 className="font-bold mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Price Range</h4>
                <div className="flex items-center space-x-2">
                  <input type="number" placeholder="Min" className="w-full p-2 border rounded text-xs" />
                  <span>-</span>
                  <input type="number" placeholder="Max" className="w-full p-2 border rounded text-xs" />
                </div>
                <div className="mt-2">
                  <input type="range" className="w-full" />
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Categories</h4>
                <div className="space-y-2">
                  {['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'].map(category => (
                    <label key={category} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Brands */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Brands</h4>
                <div className="space-y-2">
                  {['Apple', 'Samsung', 'Nike', 'Sony', 'Adidas'].map(brand => (
                    <label key={brand} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Ratings */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Customer Ratings</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i} 
                            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">& Up</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </aside>
          
          {/* Mobile Filters Panel */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden">
              <div className="absolute top-0 left-0 h-full w-4/5 bg-white p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <FiX className="text-xl" />
                  </button>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Price Range</h4>
                  <div className="flex items-center space-x-2">
                    <input type="number" placeholder="Min" className="w-full p-2 border rounded text-xs" />
                    <span>-</span>
                    <input type="number" placeholder="Max" className="w-full p-2 border rounded text-xs" />
                  </div>
                  <div className="mt-2">
                    <input type="range" className="w-full" />
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    {['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'].map(category => (
                      <label key={category} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-indigo-600" />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Brands */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Brands</h4>
                  <div className="space-y-2">
                    {['Apple', 'Samsung', 'Nike', 'Sony', 'Adidas'].map(brand => (
                      <label key={brand} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-indigo-600" />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Ratings */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Customer Ratings</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <label key={rating} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-indigo-600" />
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FiStar 
                              key={i} 
                              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">& Up</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
          
          {/* Products Section */}
          <div className="flex-grow">
            {/* Hero Banner */}
            <div className="relative rounded-lg overflow-hidden mb-8 h-64">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Summer Sale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
                <div className="text-white max-w-md">
                  <h2 className="text-3xl font-bold mb-2">Summer Sale</h2>
                  <p className="mb-4 text-lg">Up to 50% off on selected items</p>
                  <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* New Arrivals */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">New Arrivals</h3>
                <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">View All</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {newArrivals.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onWishlistToggle={toggleWishlist}
                    isWishlisted={wishlist.includes(product.id)}
                  />
                ))}
              </div>
            </section>
            
            {/* Recommended */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Recommended For You</h3>
                <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">View All</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {recommendedProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onWishlistToggle={toggleWishlist}
                    isWishlisted={wishlist.includes(product.id)}
                  />
                ))}
              </div>
            </section>
            
            {/* Brands Section */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-4">Shop By Brand</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {['Apple', 'Samsung', 'Nike', 'Sony', 'Adidas'].map(brand => (
                    <div key={brand} className="flex items-center justify-center p-3 border rounded-lg hover:border-indigo-300 cursor-pointer transition-colors">
                      <img 
                        src={`https://logo.clearbit.com/${brand.toLowerCase()}.com`} 
                        alt={brand} 
                        className="h-8 object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/100x30?text='+brand;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Featured Category */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Electronics</h3>
                <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">View All</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {newArrivals.slice(0, 4).map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onWishlistToggle={toggleWishlist}
                    isWishlisted={wishlist.includes(product.id)}
                  />
                ))}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300">
                  <span className="text-sm text-gray-500 mb-2">More Products</span>
                  <span className="text-indigo-600 font-medium">View All</span>
                </div>
              </div>
            </section>
            
            {/* Special Offer */}
            <section className="mb-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Special Offer</h3>
                  <p className="mb-4">Get 20% off on your first order. Use code WELCOME20 at checkout.</p>
                  <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="Special Offer" 
                    className="h-40 object-contain"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 text-center md:text-left">
            {/* Column 1: Brand */}
            <div>
              <h4 className="font-bold text-lg mb-4">ShopNest</h4>
              <p className="text-gray-400 text-sm mb-4">
                The best online store for all your needs. Quality products at affordable prices.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook className="text-xl" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter className="text-xl" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram className="text-xl" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaPinterest className="text-xl" /></a>
              </div>
            </div>

            {/* Column 2: Shop */}
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['All Products', 'Featured', 'New Arrivals', 'Discount', 'Deals', 'Best Sellers'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 3: Customer Service */}
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Contact Us', 'FAQs', 'Shipping Policy', 'Returns & Exchanges', 'Order Tracking', 'Size Guide'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 4: About Us */}
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Our Story', 'Careers', 'Privacy Policy', 'Terms & Conditions', 'Blog', 'Press'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 5: Account */}
            <div>
              <h4 className="font-bold mb-4">Account</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['My Account', 'Order History', 'Wishlist', 'Newsletter', 'Account Settings', 'Address Book'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment + Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8 mb-8">
            
            {/* Payment Methods */}
            <div className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0">
              <h5 className="text-sm font-medium mb-3 text-center md:text-left">Payment Methods</h5>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <FaCcVisa className="text-3xl text-gray-400 hover:text-white transition-colors" />
                <FaCcMastercard className="text-3xl text-gray-400 hover:text-white transition-colors" />
                <FaCcPaypal className="text-3xl text-gray-400 hover:text-white transition-colors" />
                <FaCcApplePay className="text-3xl text-gray-400 hover:text-white transition-colors" />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                  alt="Stripe" 
                  className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-full md:w-1/2 lg:w-2/5">
              <h4 className="font-bold mb-4 text-center md:text-left">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3 text-center md:text-left">
                Subscribe to get updates on new products and special offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex mb-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700 text-white px-3 py-2 text-sm rounded-l focus:outline-none w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-r hover:bg-indigo-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 text-center md:text-left">We'll never share your email with anyone else.</p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">© 2023 ShopNest. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Enhanced Product Card Component
const ProductCard = ({ product, onWishlistToggle, isWishlisted }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Product Image */}
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {/* Wishlist Button */}
        <motion.button 
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}`}
          onClick={() => onWishlistToggle(product.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiHeart className={isWishlisted ? 'fill-white' : ''} />
        </motion.button>
        {/* Quick Add to Cart - Shows on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.button 
              className="absolute bottom-0 left-0 right-0 bg-indigo-600 text-white py-2 text-sm font-medium hover:bg-indigo-700 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              Add to Cart
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      {/* Product Info */}
      <div className="p-3">
        <h4 className="font-medium text-sm mb-1 truncate">{product.name}</h4>
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-indigo-600">${product.price}</span>
          <button className="text-xs bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700 transition-colors hidden md:block">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EcommerceHomepage;
