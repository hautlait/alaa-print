import React from 'react';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ماكينة تصوير HP LaserJet Pro MFP M428fdw',
    price: 45000,
    originalPrice: 52000,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.pexels.com/photos/4226767/pexels-photo-4226767.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'الأكثر مبيعاً',
    badgeColor: 'bg-red-500',
    features: ['طباعة ملونة', 'واي فاي', 'طباعة مزدوجة']
  },
  {
    id: 2,
    name: 'طابعة Canon PIXMA TS8320',
    price: 8500,
    originalPrice: 10200,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.pexels.com/photos/163143/office-supplies-office-computer-paper-163143.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'خصم 18%',
    badgeColor: 'bg-green-500',
    features: ['6 ألوان', 'بلوتوث', 'شاشة لمس']
  },
  {
    id: 3,
    name: 'حبر HP 305XL الأصلي - أسود',
    price: 850,
    originalPrice: 1000,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'منتج جديد',
    badgeColor: 'bg-blue-500',
    features: ['عالي الجودة', '240 صفحة', 'ضمان سنتين']
  },
  {
    id: 4,
    name: 'ماكينة تصوير Epson EcoTank L3250',
    price: 12500,
    originalPrice: 14500,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'توفير في الحبر',
    badgeColor: 'bg-purple-500',
    features: ['خزان حبر', 'اقتصادية', 'جودة عالية']
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 section-title inline-block">
            المنتجات المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختيارنا لأفضل المنتجات الأكثر طلباً من عملائنا الكرام
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 product-card border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {product.badge}
                </div>
                
                {/* Quick Actions */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <Heart size={16} className="text-gray-600 hover:text-red-500" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <Eye size={16} className="text-gray-600 hover:text-primary-600" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-2 space-x-reverse mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {product.price.toLocaleString('ar-EG')} جنيه
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {product.originalPrice.toLocaleString('ar-EG')}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full btn-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 space-x-reverse">
                  <ShoppingCart size={18} />
                  <span>أضف للسلة</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;