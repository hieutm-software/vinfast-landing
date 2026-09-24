import { ChevronRight } from "lucide-react";

const cars = [
  {
    id: "vf3",
    name: "VF 3",
    type: "Mini SUV",
    price: "Từ 239.000.000 VNĐ",
    range: "210 km",
    charging: "36 phút (10-70%)",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-100",
  },
  {
    id: "vf5",
    name: "VF 5 Plus",
    type: "A-SUV",
    price: "Từ 468.000.000 VNĐ",
    range: "326 km",
    charging: "30 phút (10-70%)",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-gray-100",
  },
  {
    id: "vf6",
    name: "VF 6",
    type: "B-SUV",
    price: "Từ 675.000.000 VNĐ",
    range: "399 km",
    charging: "24 phút (10-70%)",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-zinc-100",
  },
  {
    id: "vf7",
    name: "VF 7",
    type: "C-SUV",
    price: "Từ 850.000.000 VNĐ",
    range: "431 km",
    charging: "24 phút (10-70%)",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-slate-100",
  },
  {
    id: "vf8",
    name: "VF 8",
    type: "D-SUV",
    price: "Từ 1.090.000.000 VNĐ",
    range: "471 km",
    charging: "24 phút (10-70%)",
    image: "https://images.unsplash.com/photo-1503376760367-5b61aee34346?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-neutral-100",
  },
  {
    id: "vf9",
    name: "VF 9",
    type: "E-SUV",
    price: "Từ 1.491.000.000 VNĐ",
    range: "680 km",
    charging: "26 phút (10-70%)",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-gray-100",
  },
];

export default function CarModels() {
  return (
    <section id="models" className="py-24 bg-gray-50 relative">
      <div id="pricing" className="absolute top-0 -mt-24"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            CÁC DÒNG XE VINFAST
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lựa chọn hoàn hảo cho mọi nhu cầu di chuyển. Trải nghiệm đẳng cấp và khác biệt cùng các mẫu xe điện thông minh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image Container - Aspect ratio 16:9ish */}
              <div className={`relative h-64 ${car.color} overflow-hidden`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${car.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 uppercase tracking-wide shadow-sm">
                  {car.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">{car.name}</h3>
                    <p className="text-blue-600 font-bold text-lg">{car.price}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">Quãng đường</p>
                    <p className="font-semibold text-gray-900">{car.range}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">Thời gian sạc</p>
                    <p className="font-semibold text-gray-900">{car.charging}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-900 text-white py-3 px-2 rounded-xl font-semibold hover:bg-black transition-colors text-sm">
                    Chi tiết
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-3 px-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 text-sm">
                    Nhận báo giá
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
