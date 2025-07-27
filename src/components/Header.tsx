import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Printer, Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone size={16} />
                <span>+966 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Mail size={16} />
                <span>info@printstore.sa</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse mt-1 md:mt-0">
              <MapPin size={16} />
              <span>قنا، مصر</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="bg-primary-100 p-2 rounded-lg">
              <Printer className="h-8 w-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">علاءالدين</h1>
              <p className="text-sm text-gray-600">ماكينات ومستلزمات التصوير</p>
            </div>
          </div>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="hidden md:flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-primary-600 transition-colors">
              <User size={20} />
              <span>حسابي</span>
            </button>
            <button className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-primary-600 transition-colors">
              <ShoppingCart size={20} />
              <span className="hidden md:inline">السلة</span>
              <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-1">0</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن المنتجات..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Navigation */}
        <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 md:space-x-reverse">
            <li><a href="#home" className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">الرئيسية</a></li>
            <li><a href="#copiers" className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">ماكينات التصوير</a></li>
            <li><a href="#printers" className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">الطابعات</a></li>
            <li><a href="#ink" className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">الأحبار</a></li>
            <li><a href="#parts" className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">قطع الغيار</a></li>
            <li><a href="#services" className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">خدماتنا</a></li>
            <li><a href="#contact" className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">اتصل بنا</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;