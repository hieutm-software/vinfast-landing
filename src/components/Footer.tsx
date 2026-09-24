import Link from "next/link";
import { Globe, MessageCircle, Video, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">VINFAST</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Cùng bạn bứt phá mọi giới hạn. VinFast - Thương hiệu xe ô tô điện thông minh toàn cầu của người Việt.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Video size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase">Dòng xe</h4>
            <ul className="space-y-4">
              {['VF 3', 'VF 5 Plus', 'VF 6', 'VF 7', 'VF 8', 'VF 9'].map((car) => (
                <li key={car}>
                  <Link href="#models" className="hover:text-blue-400 transition-colors">
                    {car}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase">Dịch vụ</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Đăng ký lái thử</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bảng giá & Trả góp</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Khuyến mãi mới nhất</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hệ thống Showroom</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bảo hành & Bảo dưỡng</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                <span>Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <a href="tel:0909090909" className="hover:text-white transition-colors">0909.090.909</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <a href="mailto:info@vinfast.vn" className="hover:text-white transition-colors">info@vinfast.vn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} VinFast. Thiết kế với mục đích minh họa landing page.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
