import React from 'react';
import { Wrench, Truck, Shield, Clock, Users, Award } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'صيانة متخصصة',
    description: 'خدمة صيانة شاملة لجميع أنواع الماكينات على يد فنيين معتمدين',
    color: 'primary'
  },
  {
    icon: Truck,
    title: 'توصيل سريع',
    description: 'خدمة توصيل لجميع أنحاء مصر خلال 24-48 ساعة',
    color: 'secondary'
  },
  {
    icon: Shield,
    title: 'ضمان شامل',
    description: 'ضمان يصل إلى 3 سنوات على المعدات وسنة على قطع الغيار',
    color: 'accent'
  },
  {
    icon: Clock,
    title: 'دعم فوري',
    description: 'فريق دعم فني متاح 24/7 لحل جميع مشاكلك التقنية',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'استشارة مجانية',
    description: 'استشارة مجانية لاختيار أفضل المعدات المناسبة لاحتياجاتك',
    color: 'secondary'
  },
  {
    icon: Award,
    title: 'جودة معتمدة',
    description: 'منتجات أصلية من أشهر العلامات التجارية العالمية',
    color: 'accent'
  }
];

const Services = () => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      accent: 'bg-accent-500'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 section-title inline-block">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات لضمان راحتك ورضاك التام
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 product-card group"
              >
                <div className={`${getColorClasses(service.color)} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            هل تحتاج مساعدة في اختيار المنتج المناسب؟
          </h3>
          <p className="text-xl mb-8 opacity-90">
            فريقنا من الخبراء جاهز لمساعدتك في اتخاذ القرار الصحيح
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              اتصل بنا الآن
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              احجز استشارة مجانية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;