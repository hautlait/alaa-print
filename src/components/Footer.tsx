import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Printer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Printer className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">علاءالدين</h3>
                <p className="text-gray-400 text-sm">ماكينات ومستلزمات التصوير</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              نحن متخصصون في توفير أحدث ماكينات التصوير والطباعة والأحبار وقطع الغيار بأعلى جودة وأفضل الأسعار في قنا ومحافظات الصعيد.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">عن الشركة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المنتجات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الخدمات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المدونة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">فئات المنتجات</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ماكينات التصوير</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الطابعات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأحبار والتونر</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">قطع الغيار</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الاكسسوارات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">عروض خاصة</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">اتصل بنا</p>
                  <p className="text-white font-semibold">+966 11 234 5678</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-secondary-600 p-2 rounded-lg">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">البريد الإلكتروني</p>
                  <p className="text-white font-semibold">info@printstore.sa</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="bg-accent-600 p-2 rounded-lg mt-1">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">العنوان</p>
                  <p className="text-white font-semibold leading-relaxed">
                    شارع الجمهورية، وسط البلد<br />
                    قنا 83511، مصر
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">ساعات العمل</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>السبت - الخميس: 9:00 - 18:00</p>
                <p>الجمعة: مغلق</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 علاءالدين. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">شروط الاستخدام</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">سياسة الإرجاع</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;