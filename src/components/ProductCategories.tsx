import React from 'react';
import { Printer, Monitor, Droplet, Settings } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'ماكينات التصوير',
    description: 'أحدث ماكينات التصوير متعددة الوظائف',
    icon: Monitor,
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 45,
    color: 'primary'
  },
  {
    id: 2,
    name: 'الطابعات',
    description: 'طابعات ليزر وحبر بجودة عالية',
    icon: Printer,
    image: 'https://images.pexels.com/photos/163143/office-supplies-office-computer-paper-163143.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 67,
    color: 'secondary'
  },
  {
    id: 3,
    name: 'الأحبار والتونر',
    description: 'أحبار وتونر أصلي ومتوافق',
    icon: Droplet,
    image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 89,
    color: 'accent'
  },
  {
    id: 4,
    name: 'قطع الغيار',
    description: 'قطع غيار أصلية لجميع الماركات',
    icon: Settings,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 34,
    color: 'primary'
  }
];

const ProductCategories = () => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-500',
        hover: 'hover:bg-primary-600',
        text: 'text-primary-600',
        iconBg: 'bg-primary-100'
      },
      secondary: {
        bg: 'bg-secondary-500',
        hover: 'hover:bg-secondary-600',
        text: 'text-secondary-600',
        iconBg: 'bg-secondary-100'
      },
      accent: {
        bg: 'bg-accent-500',
        hover: 'hover:bg-accent-600',
        text: 'text-accent-600',
        iconBg: 'bg-accent-100'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 section-title inline-block">
            أقسام المنتجات
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعتنا الواسعة من المعدات والمستلزمات بأعلى جودة وأفضل الأسعار
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 product-card cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 ${colors.iconBg} p-3 rounded-lg`}>
                    <IconComponent className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  
                  {/* Product Count */}
                  <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700">
                      {category.productCount} منتج
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <button className={`w-full ${colors.bg} ${colors.hover} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105`}>
                    تصفح المنتجات
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;