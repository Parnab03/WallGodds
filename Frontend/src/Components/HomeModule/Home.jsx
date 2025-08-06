import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaSearch } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500 via-orange-500 via-red-500 to-purple-600">
            {/* Top Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">WG</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/gallery" className="text-white font-medium hover:text-yellow-300 transition-colors">
                            Gallery
                        </Link>
                        <Link to="/upload" className="text-white font-medium hover:text-yellow-300 transition-colors">
                            Upload
                        </Link>
                        <Link to="/aboutus" className="text-white font-medium hover:text-yellow-300 transition-colors">
                            About Us
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search wallpaper"
                                className="w-48 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="pt-24">
                {/* Hero Section - Full Screen */}
                <section className="h-screen flex items-center justify-center px-4">
                    <div className="max-w-4xl mx-auto w-full">
                        <div className="bg-gradient-to-br from-pink-100 to-white rounded-3xl p-8 md:p-12 shadow-2xl">
                            {/* Main Heading */}
                            <div className="text-center mb-12">
                                <h1 className="space-y-2">
                                    <div className="text-4xl md:text-6xl font-black text-white drop-shadow-text">
                                        WE
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold text-black font-comfortaa">
                                        ARE THE
                                    </div>
                                    <div className="text-5xl md:text-7xl font-black text-red-600 drop-shadow-text-lg font-rubik-mono">
                                        GOD
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold text-gray-600 font-comfortaa">
                                        OF
                                    </div>
                                    <div className="text-4xl md:text-6xl font-black text-yellow-500 drop-shadow-text font-rubik-mono">
                                        WALLPAPERS
                                    </div>
                                </h1>
                            </div>

                            {/* Call to Action Buttons */}
                            <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
                                <Link 
                                    to="/upload" 
                                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-8 rounded-2xl border-2 border-black shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span className="text-lg">BECOME A</span>
                                    <span className="text-red-500 text-xl">GOD</span>
                                </Link>
                                
                                <Link 
                                    to="/gallery" 
                                    className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 font-bold py-4 px-8 rounded-2xl border-2 border-black shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span className="text-lg">EXPLORE</span>
                                    <span className="text-yellow-600 text-xl">HEAVEN</span>
                                </Link>
                            </div>

                            {/* Visual Illustration */}
                            <div className="relative h-64 md:h-80">
                                {/* Character Illustration */}
                                <div className="absolute bottom-4 left-4 z-10">
                                    <div className="relative">
                                        {/* Character Body */}
                                        <div className="w-20 h-32 md:w-24 md:h-40 relative">
                                            {/* Hair */}
                                            <div className="absolute top-0 left-2 w-16 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-t-full"></div>
                                            {/* Shirt */}
                                            <div className="absolute top-6 left-1 w-18 h-12 bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 rounded-md"></div>
                                            {/* Jeans */}
                                            <div className="absolute top-16 left-1 w-18 h-10 bg-blue-600 rounded-b-md"></div>
                                            {/* Shoes */}
                                            <div className="absolute bottom-0 left-1 w-18 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-md"></div>
                                        </div>
                                        {/* Laptop */}
                                        <div className="absolute bottom-8 left-16 w-16 h-10 bg-blue-300 border-2 border-black rounded-md"></div>
                                    </div>
                                </div>

                                {/* Floating Icons */}
                                <div className="absolute top-0 right-4 space-y-4">
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce">
                                        中
                                    </div>
                                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                                        😎
                                    </div>
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce" style={{animationDelay: '1s'}}>
                                        ◢
                                    </div>
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-bounce" style={{animationDelay: '1.5s'}}>
                                        BUG
                                    </div>
                                </div>

                                {/* Floating Clouds */}
                                <div className="absolute top-8 right-16">
                                    <div className="w-6 h-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
                                </div>
                                <div className="absolute top-16 right-20">
                                    <div className="w-4 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
                                </div>
                                <div className="absolute top-24 right-12">
                                    <div className="w-8 h-5 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Discover Amazing Wallpapers
                            </h2>
                            <p className="text-white/80 text-xl max-w-3xl mx-auto">
                                Explore our vast collection of high-quality wallpapers for mobile, tablet, and desktop devices. 
                                Find the perfect background for your screen.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white text-3xl">📱</span>
                                </div>
                                <h3 className="text-white font-bold text-2xl mb-4">Mobile Wallpapers</h3>
                                <p className="text-white/70 text-lg">Perfect for your smartphone with optimized resolutions and stunning designs</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white text-3xl">💻</span>
                                </div>
                                <h3 className="text-white font-bold text-2xl mb-4">Desktop Wallpapers</h3>
                                <p className="text-white/70 text-lg">High-resolution backgrounds for your computer with amazing detail</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white text-3xl">🎨</span>
                                </div>
                                <h3 className="text-white font-bold text-2xl mb-4">Custom Designs</h3>
                                <p className="text-white/70 text-lg">Unique and creative wallpapers from our talented community</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
                                <div className="text-white/70">Wallpapers</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5K+</div>
                                <div className="text-white/70">Downloads</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1K+</div>
                                <div className="text-white/70">Contributors</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                                <div className="text-white/70">Support</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer Section - Now outside main content area */}
            <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        {/* About Section */}
                        <div className="text-center md:text-left">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                                <span className="text-white font-bold text-xl">WG</span>
                            </div>
                            <h3 className="text-white font-bold text-xl mb-4">WallGodds</h3>
                            <p className="text-white/70 text-lg">
                                The ultimate destination for high-quality wallpapers. 
                                Join our community of wallpaper enthusiasts.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center">
                            <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
                            <div className="space-y-3">
                                <Link to="/gallery" className="block text-white/70 hover:text-white transition-colors">
                                    Gallery
                                </Link>
                                <Link to="/upload" className="block text-white/70 hover:text-white transition-colors">
                                    Upload
                                </Link>
                                <Link to="/aboutus" className="block text-white/70 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center md:text-right">
                            <h3 className="text-white font-bold text-xl mb-6">Connect With Us</h3>
                            <div className="space-y-3">
                                <div className="text-white/70">
                                    <span className="font-semibold">Email:</span> contact@wallgodds.com
                                </div>
                                <div className="text-white/70">
                                    <span className="font-semibold">Discord:</span> Join our server
                                </div>
                                <div className="text-white/70">
                                    <span className="font-semibold">GitHub:</span> @WallGodds
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/20 mb-8"></div>

                    {/* Bottom Footer */}
                    <div className="text-center space-y-6">
                        {/* Know More Link */}
                        <Link 
                            to="/aboutus" 
                            className="inline-flex items-center space-x-3 text-white font-semibold text-lg hover:scale-105 transition-transform"
                        >
                            <FaGithub className="text-2xl" />
                            <span>Know more ☺</span>
                        </Link>

                        {/* Copyright */}
                        <div className="text-white/80 text-base">
                            © WallGodds Community 2025. All rights reserved.
                        </div>

                        {/* Work Together Section */}
                        <div className="text-3xl md:text-4xl font-black">
                            <span className="text-white">LET'S WORK</span>
                            <span className="text-orange-400 ml-3">TOGETHER</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 pt-4">
                            <a href="#" className="text-white/70 hover:text-white transition-colors">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors text-2xl">
                                📱
                            </a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors text-2xl">
                                💬
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
