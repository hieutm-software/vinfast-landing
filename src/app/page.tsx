import Hero from "@/components/Hero";
import CarModels from "@/components/CarModels";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Promotions from "@/components/Promotions";

export default function Home() {
  return (
    <>
      <Hero />
      <CarModels />
      <Pricing />
      <Promotions />
      <Features />
      
      {/* Short CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            SẴN SÀNG ĐỂ CHUYỂN ĐỔI?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Đăng ký lái thử ngay hôm nay để trải nghiệm sự khác biệt của xe điện VinFast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
              Đăng ký lái thử
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105">
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
