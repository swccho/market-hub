import './style.css'

// Create the main app content
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">MarketHub</h1>
          </div>
          <div class="hidden md:block ml-10">
            <div class="flex items-baseline space-x-4">
              <a href="#" class="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#" class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Classified</a>
              <a href="#" class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Shop</a>
              <a href="#" class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Auctions</a>
              <a href="#" class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Companies</a>
              <a href="#" class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Jobs</a>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button class="btn-secondary">Sign In</button>
          <button class="btn-primary">Post Ad</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Find Everything You Need
          <span class="block text-primary-600">In One Place</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
          From classified ads to job opportunities, auctions to company listings. Your complete marketplace destination.
        </p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-4xl mx-auto mb-8">
        <div class="bg-white rounded-2xl shadow-lg p-6 animate-slide-up">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="md:col-span-2">
              <input type="text" placeholder="What are you looking for?" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            </div>
            <div>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>All Categories</option>
                <option>Classified Ads</option>
                <option>Shop</option>
                <option>Auctions</option>
                <option>Offers</option>
                <option>Companies</option>
                <option>Jobs</option>
              </select>
            </div>
            <div>
              <button class="w-full btn-primary">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div class="text-center animate-bounce-subtle">
          <div class="text-3xl font-bold text-primary-600">1,200+</div>
          <div class="text-gray-600">Active Listings</div>
        </div>
        <div class="text-center animate-bounce-subtle" style="animation-delay: 0.2s;">
          <div class="text-3xl font-bold text-secondary-600">850+</div>
          <div class="text-gray-600">Companies</div>
        </div>
        <div class="text-center animate-bounce-subtle" style="animation-delay: 0.4s;">
          <div class="text-3xl font-bold text-accent-600">2,500+</div>
          <div class="text-gray-600">Happy Users</div>
        </div>
        <div class="text-center animate-bounce-subtle" style="animation-delay: 0.6s;">
          <div class="text-3xl font-bold text-orange-600">95%</div>
          <div class="text-gray-600">Success Rate</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Browse by Category Section - UNIQUE DESIGN -->
  <section class="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full opacity-10 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-secondary-500 rounded-full opacity-10 animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-20 left-1/4 w-40 h-40 bg-accent-500 rounded-full opacity-10 animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-500 rounded-full opacity-10 animate-pulse" style="animation-delay: 0.5s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 category-title-animate">
          Explore by 
          <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Category</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto category-title-animate" style="animation-delay: 0.2s;">
          Discover amazing opportunities across all our specialized sections
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <!-- Classified Ads - Morphing Card -->
        <div class="category-animate-in opacity-0">
          <div class="category-morphing h-64 p-8 flex flex-col items-center justify-center text-center group cursor-pointer">
            <div class="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Classified Ads</h3>
            <p class="text-gray-200 text-sm">Buy, sell, and trade with confidence</p>
            <div class="mt-4 text-cyan-300 font-semibold">2,450+ listings</div>
          </div>
        </div>

        <!-- Shop - Floating Hexagon -->
        <div class="category-animate-in opacity-0">
          <div class="relative h-64 flex items-center justify-center category-floating">
            <div class="category-hexagon bg-gradient-to-br from-green-400 to-blue-500 cursor-pointer group">
              <div class="category-hexagon-inner text-center text-white">
                <svg class="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <h3 class="text-lg font-bold">Shop</h3>
                <p class="text-xs opacity-90">Premium products</p>
              </div>
            </div>
            <div class="category-pulse-ring"></div>
            <div class="category-pulse-ring"></div>
            <div class="category-pulse-ring"></div>
          </div>
        </div>

        <!-- Auctions - Floating Hexagon Style -->
        <div class="category-animate-in opacity-0">
          <div class="relative h-64 flex items-center justify-center category-floating">
            <div class="category-hexagon bg-gradient-to-br from-red-500 to-yellow-500 cursor-pointer group">
              <div class="category-hexagon-inner text-center text-white">
                <svg class="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
                <h3 class="text-lg font-bold">Auctions</h3>
                <p class="text-xs opacity-90">Bid & Win</p>
              </div>
            </div>
            <div class="category-pulse-ring-auction"></div>
            <div class="category-pulse-ring-auction"></div>
            <div class="category-pulse-ring-auction"></div>
          </div>
        </div>

        <!-- Offers - Blob Shape -->
        <div class="category-animate-in opacity-0">
          <div class="h-64 flex items-center justify-center">
            <div class="category-blob w-48 h-48 flex items-center justify-center cursor-pointer group">
              <div class="text-center text-white">
                <svg class="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                <h3 class="text-2xl font-bold">Offers</h3>
                <p class="text-sm opacity-90">Special deals daily</p>
                <div class="mt-2 text-yellow-300 font-semibold">Hot deals!</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Companies - Neon Effect -->
        <div class="category-animate-in opacity-0">
          <div class="category-neon h-64 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer group">
            <div class="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-cyan-400 mb-2">Companies</h3>
            <p class="text-gray-300 text-sm">Connect with businesses</p>
            <div class="mt-4 text-purple-400 font-semibold">850+ verified</div>
          </div>
        </div>

        <!-- Jobs - Animated Gradient -->
        <div class="category-animate-in opacity-0">
          <div class="h-64 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer group transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div class="mb-4 transform group-hover:rotate-12 transition-transform duration-300">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Job Videos</h3>
            <p class="text-white text-sm opacity-90">Visual job opportunities</p>
            <div class="mt-4 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <span class="text-white font-semibold text-sm">New format!</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <button class="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Explore All Categories
          <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Latest Listings Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="section-title">Latest Listings</h2>
        <p class="section-subtitle">Discover the newest additions to our marketplace</p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center mb-8 space-x-2">
        <button class="px-6 py-2 bg-primary-600 text-white rounded-full font-medium">Most Recent</button>
        <button class="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Most Popular</button>
        <button class="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Verified</button>
        <button class="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Featured</button>
      </div>

      <!-- Listings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Featured Listing -->
        <div class="card card-featured group cursor-pointer">
          <div class="relative">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Luxury Car" class="w-full h-48 object-cover rounded-t-xl">
            <div class="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</div>
            <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
              </svg>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Luxury BMW X5 2023</h3>
            <p class="text-gray-600 text-sm mb-3">Premium SUV with all features included</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-primary-600">$45,000</span>
              <span class="text-sm text-gray-500">2 hours ago</span>
            </div>
          </div>
        </div>

        <!-- Regular Listings -->
        <div class="card group cursor-pointer">
          <div class="relative">
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Smartphone" class="w-full h-48 object-cover rounded-t-xl">
            <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
              </svg>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">iPhone 15 Pro Max</h3>
            <p class="text-gray-600 text-sm mb-3">Latest model, excellent condition</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-gray-900">$899</span>
              <span class="text-sm text-gray-500">5 hours ago</span>
            </div>
          </div>
        </div>

        <div class="card group cursor-pointer">
          <div class="relative">
            <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Laptop" class="w-full h-48 object-cover rounded-t-xl">
            <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
              </svg>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">MacBook Pro 16"</h3>
            <p class="text-gray-600 text-sm mb-3">Perfect for professionals</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-gray-900">$1,299</span>
              <span class="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>

        <div class="card group cursor-pointer">
          <div class="relative">
            <img src="https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Watch" class="w-full h-48 object-cover rounded-t-xl">
            <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
              </svg>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Apple Watch Series 9</h3>
            <p class="text-gray-600 text-sm mb-3">Health and fitness companion</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-gray-900">$349</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <button class="btn-primary">View All Listings</button>
      </div>
    </div>
  </section>

  <!-- Module Sections -->
  <!-- Shop Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="section-title">Shop</h2>
          <p class="text-gray-600">Premium products from trusted sellers</p>
        </div>
        <button class="btn-secondary">View All</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div class="card group cursor-pointer">
          <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Fashion" class="w-full h-48 object-cover rounded-t-xl">
          <div class="p-4">
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Designer Jacket</h3>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-primary-600">$129</span>
              <div class="flex items-center text-yellow-400">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span class="text-gray-600 text-sm ml-1">4.8</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card group cursor-pointer">
          <img src="https://images.pexels.com/photos/1649768/pexels-photo-1649768.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Electronics" class="w-full h-48 object-cover rounded-t-xl">
          <div class="p-4">
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Wireless Headphones</h3>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-primary-600">$89</span>
              <div class="flex items-center text-yellow-400">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span class="text-gray-600 text-sm ml-1">4.9</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card group cursor-pointer">
          <img src="https://images.pexels.com/photos/1649766/pexels-photo-1649766.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Home" class="w-full h-48 object-cover rounded-t-xl">
          <div class="p-4">
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Modern Lamp</h3>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-primary-600">$45</span>
              <div class="flex items-center text-yellow-400">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span class="text-gray-600 text-sm ml-1">4.7</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card group cursor-pointer">
          <img src="https://images.pexels.com/photos/1649764/pexels-photo-1649764.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Sports" class="w-full h-48 object-cover rounded-t-xl">
          <div class="p-4">
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Fitness Equipment</h3>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-primary-600">$199</span>
              <div class="flex items-center text-yellow-400">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span class="text-gray-600 text-sm ml-1">4.6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Auctions Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="section-title">Live Auctions</h2>
          <p class="text-gray-600">Bid on exclusive items ending soon</p>
        </div>
        <button class="btn-secondary">View All</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card group cursor-pointer border-2 border-red-200 bg-red-50">
          <div class="relative">
            <img src="https://images.pexels.com/photos/1649762/pexels-photo-1649762.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Auction Item" class="w-full h-48 object-cover rounded-t-xl">
            <div class="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">LIVE</div>
            <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">2h 15m left</div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Vintage Camera Collection</h3>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600">Current Bid:</span>
              <span class="text-xl font-bold text-red-600">$1,250</span>
            </div>
            <div class="flex justify-between items-center text-sm text-gray-500">
              <span>15 bids</span>
              <span>Ends: 2h 15m</span>
            </div>
          </div>
        </div>

        <div class="card group cursor-pointer">
          <div class="relative">
            <img src="https://images.pexels.com/photos/1649760/pexels-photo-1649760.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Auction Item" class="w-full h-48 object-cover rounded-t-xl">
            <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">5h 42m left</div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Antique Furniture Set</h3>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600">Current Bid:</span>
              <span class="text-xl font-bold text-green-600">$850</span>
            </div>
            <div class="flex justify-between items-center text-sm text-gray-500">
              <span>8 bids</span>
              <span>Ends: 5h 42m</span>
            </div>
          </div>
        </div>

        <div class="card group cursor-pointer">
          <div class="relative">
            <img src="https://images.pexels.com/photos/1649758/pexels-photo-1649758.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Auction Item" class="w-full h-48 object-cover rounded-t-xl">
            <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">1d 3h left</div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Rare Art Piece</h3>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600">Current Bid:</span>
              <span class="text-xl font-bold text-purple-600">$2,100</span>
            </div>
            <div class="flex justify-between items-center text-sm text-gray-500">
              <span>23 bids</span>
              <span>Ends: 1d 3h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Companies Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="section-title">Featured Companies</h2>
          <p class="text-gray-600">Connect with verified businesses</p>
        </div>
        <button class="btn-secondary">View All</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card group cursor-pointer text-center">
          <div class="p-6">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">TechCorp Solutions</h3>
            <p class="text-gray-600 text-sm mb-3">Software Development</p>
            <div class="flex items-center justify-center text-yellow-400 mb-2">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span class="text-gray-600 text-sm ml-1">4.9 (127 reviews)</span>
            </div>
            <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
          </div>
        </div>

        <div class="card group cursor-pointer text-center">
          <div class="p-6">
            <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Fashion Hub</h3>
            <p class="text-gray-600 text-sm mb-3">Retail & Fashion</p>
            <div class="flex items-center justify-center text-yellow-400 mb-2">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span class="text-gray-600 text-sm ml-1">4.7 (89 reviews)</span>
            </div>
            <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
          </div>
        </div>

        <div class="card group cursor-pointer text-center">
          <div class="p-6">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">EduLearn Academy</h3>
            <p class="text-gray-600 text-sm mb-3">Education & Training</p>
            <div class="flex items-center justify-center text-yellow-400 mb-2">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span class="text-gray-600 text-sm ml-1">4.8 (156 reviews)</span>
            </div>
            <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
          </div>
        </div>

        <div class="card group cursor-pointer text-center">
          <div class="p-6">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2 group-hover:text-primary-600 transition-colors">Local Services Pro</h3>
            <p class="text-gray-600 text-sm mb-3">Home Services</p>
            <div class="flex items-center justify-center text-yellow-400 mb-2">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span class="text-gray-600 text-sm ml-1">4.6 (203 reviews)</span>
            </div>
            <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-16 bg-primary-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="section-title">What Our Users Say</h2>
        <p class="section-subtitle">Join thousands of satisfied customers</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="flex items-center text-yellow-400 mb-4">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>
          <p class="text-gray-600 mb-4">"MarketHub made it so easy to sell my car. The process was smooth and I got a great price!"</p>
          <div class="flex items-center">
            <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100" alt="User" class="w-10 h-10 rounded-full mr-3">
            <div>
              <div class="font-semibold">Sarah Johnson</div>
              <div class="text-sm text-gray-500">Car Seller</div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="flex items-center text-yellow-400 mb-4">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>
          <p class="text-gray-600 mb-4">"Found my dream job through their video job section. The visual format really helped me understand the role better."</p>
          <div class="flex items-center">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" alt="User" class="w-10 h-10 rounded-full mr-3">
            <div>
              <div class="font-semibold">Mike Chen</div>
              <div class="text-sm text-gray-500">Software Developer</div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="flex items-center text-yellow-400 mb-4">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>
          <p class="text-gray-600 mb-4">"The auction feature is fantastic! I've won several great deals and the bidding process is transparent and fair."</p>
          <div class="flex items-center">
            <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" alt="User" class="w-10 h-10 rounded-full mr-3">
            <div>
              <div class="font-semibold">Emma Davis</div>
              <div class="text-sm text-gray-500">Collector</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
      <p class="text-xl text-primary-100 mb-8">Join thousands of users who trust MarketHub for their buying and selling needs</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Post Your First Ad</button>
        <button class="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">Browse Listings</button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">MarketHub</h3>
          <p class="text-gray-400 mb-4">Your complete marketplace solution for buying, selling, and connecting.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Categories</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Classified Ads</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Shop</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Auctions</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Offers</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Companies</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Jobs</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Support</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Safety Tips</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Community Guidelines</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 MarketHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for category animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('category-animate-in');
        entry.target.style.opacity = '1';
      }
    });
  }, observerOptions);

  // Observe category items
  const categoryItems = document.querySelectorAll('.category-animate-in');
  categoryItems.forEach(item => {
    observer.observe(item);
  });

  // Observe title animation
  const titleElements = document.querySelectorAll('.category-title-animate');
  titleElements.forEach(element => {
    observer.observe(element);
  });

  // Add hover effects for category items
  const categoryCards = document.querySelectorAll('[class*="category-"]');
  categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add click handlers for filter tabs
  const filterTabs = document.querySelectorAll('section button');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from siblings
      const siblings = this.parentElement.querySelectorAll('button');
      siblings.forEach(sibling => {
        sibling.classList.remove('bg-primary-600', 'text-white');
        sibling.classList.add('bg-gray-100', 'text-gray-700');
      });
      
      // Add active class to clicked tab
      this.classList.remove('bg-gray-100', 'text-gray-700');
      this.classList.add('bg-primary-600', 'text-white');
    });
  });

  // Add parallax effect to background elements
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.absolute');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Add loading animation for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
      this.style.transform = 'scale(1)';
    });
    
    // Set initial state
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });

  // Add search functionality
  const searchInput = document.querySelector('input[placeholder="What are you looking for?"]');
  const searchButton = document.querySelector('button:has(svg)');
  
  if (searchInput && searchButton) {
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        console.log('Searching for:', searchTerm);
        // Add search animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      }
    });

    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchButton.click();
      }
    });
  }

  // Add card hover effects
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });

  // Add button click animations
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', function() {
  // Adjust animations based on screen size
  const isMobile = window.innerWidth < 768;
  const categoryItems = document.querySelectorAll('.category-animate-in');
  
  categoryItems.forEach((item, index) => {
    if (isMobile) {
      item.style.animationDelay = `${index * 0.1}s`;
    } else {
      item.style.animationDelay = `${index * 0.1}s`;
    }
  });
});

// Export for potential module usage
export {};