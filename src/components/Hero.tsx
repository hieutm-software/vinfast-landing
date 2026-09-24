import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-20">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold tracking-wider mb-4 border border-blue-500/30">
            CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tương lai của <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Di chuyển xanh
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            Khám phá các dòng xe điện thông minh của VinFast. Thiết kế thời thượng, công nghệ đỉnh cao, an toàn tuyệt đối.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#models" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Khám phá ngay
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="#pricing" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-bold transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Info size={20} />
              Nhận báo giá
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/60 text-sm mb-2 font-medium">Cuộn xuống</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
