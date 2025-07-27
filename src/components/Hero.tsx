import React from 'react';
import { ChevronLeft, Star, Truck, Shield, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-pattern bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeInUp">
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">أكثر من 1000 عميل راضٍ</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              أحدث ماكينات 
              <span className="text-primary-600"> التصوير</span> و
              <span className="text-secondary-600"> الطباعة</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              نوفر لك أفضل المعدات والأحبار الأصلية وقطع الغيار بأسعار تنافسية مع ضمان الجودة وخدمة ما بعد البيع المتميزة في قنا ومحافظات الصعيد
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 space-x-reverse">
                <span>تسوق الآن</span>
                <ChevronLeft size={20} />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300">
                استشارة مجانية
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Truck className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">توصيل مجاني</h3>
                  <p className="text-sm text-gray-600">للطلبات أكثر من 1000 جنيه</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-secondary-100 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">ضمان شامل</h3>
                  <p className="text-sm text-gray-600">على جميع المنتجات</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-accent-100 p-2 rounded-lg">
                  <Headphones className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">دعم فني</h3>
                  <p className="text-sm text-gray-600">24/7 خدمة العملاء</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fadeInUp">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4226767/pexels-photo-4226767.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="ماكينة طباعة حديثة"
                className="w-full h-88 object-cover rounded-lg"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">جودة معتمدة</h4>
                    <p className="text-sm text-gray-600">ISO 9001:2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;