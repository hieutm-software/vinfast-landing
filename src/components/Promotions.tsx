import { Gift, Zap, Shield, Sparkles } from "lucide-react";

export default function Promotions() {
  return (
    <section id="promotions" className="py-24 bg-gray-900 relative overflow-hidden text-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-400 text-sm font-bold tracking-wider mb-4 border border-red-500/30">
            ƯU ĐÃI ĐỘC QUYỀN
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            KHUYẾN MÃI THÁNG NÀY
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nắm bắt cơ hội sở hữu xe ô tô điện thông minh với những đặc quyền hấp dẫn nhất từ VinFast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Zap,
              title: "Miễn phí sạc pin 1 năm",
              desc: "Tặng ngay 1 năm sạc pin miễn phí tại hệ thống trạm sạc công cộng V-GREEN trên toàn quốc.",
              color: "text-yellow-400",
              bg: "bg-yellow-400/10"
            },
            {
              icon: Sparkles,
              title: "Trả góp siêu ưu đãi",
              desc: "Hỗ trợ vay mua xe với lãi suất cực thấp, cố định trong nhiều năm. Thủ tục nhanh chóng, duyệt hồ sơ trong ngày.",
              color: "text-blue-400",
              bg: "bg-blue-400/10"
            },
            {
              icon: Shield,
              title: "Tặng bảo hiểm vật chất",
              desc: "Tặng ngay bảo hiểm vật chất xe 1 năm và các gói bảo dưỡng định kỳ hoàn toàn miễn phí.",
              color: "text-teal-400",
              bg: "bg-teal-400/10"
            },
            {
              icon: Gift,
              title: "Thu cũ đổi mới",
              desc: "Trợ giá thêm tiền mặt trực tiếp khi tham gia chương trình đổi xe xăng cũ lấy xe điện mới.",
              color: "text-red-400",
              bg: "bg-red-400/10"
            }
          ].map((promo, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${promo.bg} ${promo.color} group-hover:scale-110 transition-transform duration-300`}>
                <promo.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{promo.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{promo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
