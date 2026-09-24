"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const pricingData = [
  {
    model: "VF 3",
    subPrice: "239.000.000",
    fullPrice: "315.000.000",
    features: ["Quãng đường: 210km", "Sạc nhanh: 36 phút", "Màn hình 10 inch", "Thiết kế năng động cá tính"]
  },
  {
    model: "VF 5 Plus",
    subPrice: "468.000.000",
    fullPrice: "548.000.000",
    features: ["Quãng đường: 326km", "Trợ lý ảo tiếng Việt", "6 túi khí an toàn", "Cảnh báo điểm mù"]
  },
  {
    model: "VF 6",
    subPrice: "675.000.000",
    fullPrice: "765.000.000",
    features: ["Quãng đường: 399km", "Động cơ mạnh mẽ", "Màn hình HUD", "Hỗ trợ lái ADAS cấp độ 2"]
  }
];

export default function Pricing() {
  const [isFullPrice, setIsFullPrice] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            BẢNG GIÁ XE VINFAST
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-full border border-gray-200">
            <button 
              onClick={() => setIsFullPrice(false)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${!isFullPrice ? 'bg-white shadow-md text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Giá Thuê Pin
            </button>
            <button 
              onClick={() => setIsFullPrice(true)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${isFullPrice ? 'bg-blue-600 shadow-md text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Giá Kèm Pin
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((car, idx) => (
            <div key={car.model} className={`rounded-3xl p-8 border ${idx === 1 ? 'border-blue-600 shadow-2xl relative md:-translate-y-4 bg-blue-600 text-white' : 'border-gray-200 shadow-lg bg-white text-gray-900 hover:-translate-y-2'} transition-transform duration-300`}>
              {idx === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  BÁN CHẠY NHẤT
                </div>
              )}
              <h3 className="text-2xl font-black mb-2">{car.model}</h3>
              <p className={`text-sm mb-6 ${idx === 1 ? 'text-blue-200' : 'text-gray-500'}`}>
                {isFullPrice ? 'Giá xe đã bao gồm pin' : 'Giá xe chưa bao gồm pin'}
              </p>
              
              <div className="mb-8">
                <span className="text-3xl lg:text-4xl font-black tracking-tight">{isFullPrice ? car.fullPrice : car.subPrice}</span>
                <span className={`text-sm font-medium ml-1 ${idx === 1 ? 'text-blue-200' : 'text-gray-500'}`}>VNĐ</span>
              </div>

              <ul className="space-y-4 mb-8">
                {car.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={20} className={`shrink-0 mt-0.5 ${idx === 1 ? 'text-white' : 'text-blue-600'}`} />
                    <span className="font-medium text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-colors ${idx === 1 ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                Nhận tư vấn ngay
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-12">* Giá trên đã bao gồm VAT. Mức giá có thể thay đổi tùy theo chính sách của VinFast tại từng thời điểm.</p>
      </div>
    </section>
  );
}
