import { ShieldCheck, BatteryCharging, BrainCircuit, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bảo hành 10 năm",
    description: "Chính sách bảo hành dẫn đầu thị trường lên đến 10 năm hoặc 200.000 km.",
  },
  {
    icon: BatteryCharging,
    title: "Trạm sạc toàn quốc",
    description: "Quy hoạch 150.000 cổng sạc phủ khắp 63 tỉnh thành, tiếp nhiên liệu dễ dàng.",
  },
  {
    icon: BrainCircuit,
    title: "Công nghệ thông minh",
    description: "Tích hợp các tính năng ADAS và Smart Service mang lại trải nghiệm lái vượt trội.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ trợ 24/7",
    description: "Dịch vụ cứu hộ pin 24/7, sửa chữa lưu động Mobile Service thuận tiện tối đa.",
  },
];

export default function Features() {
  return (
    <section id="promotions" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background split */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl text-white overflow-hidden relative">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight">VÌ SAO CHỌN VINFAST?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Chất lượng toàn cầu, dịch vụ xuất sắc và những đặc quyền dành riêng cho khách hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white text-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100/90 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
