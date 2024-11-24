import React, { useState } from "react";
import Img1 from "../../assets/products/nextNextStar.jpeg";
import Img2 from "../../assets/products/Digiturk.jpeg";
import Img3 from "../../assets/products/korax.jpeg";
import Img4 from "../../assets/products/next.jpeg";
import Img5 from "../../assets/products/wellbox.jpeg";
import Img6 from "../../assets/products/siyahÜçlüPriz.jpeg";
import Img7 from "../../assets/products/ÜçlüPriz.jpeg";
import Img8 from "../../assets/products/tekliPriz.jpeg";
import Img9 from "../../assets/products/tpLink.jpeg";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  { id: 1, img: Img1, title: "Next & NextStar", aosDelay: "200" },
  { id: 2, img: Img2, title: "Digiturk", aosDelay: "200" },
  { id: 3, img: Img3, title: "Korax IpTv'li Uydu", aosDelay: "200" },
  { id: 4, img: Img4, title: "Next Multi Switch", aosDelay: "200" },
  { id: 5, img: Img5, title: "Wellbox MultiSwitch", aosDelay: "200" },
  { id: 6, img: Img6, title: "Tuncmatik Siyah Korumalı Üçlü Priz", aosDelay: "200" },
  { id: 7, img: Img7, title: "Tuncmatik Beyaz Korumalı Üçlü Priz", aosDelay: "200" },
  { id: 8, img: Img8, title: "Tuncmatik Beyaz Korumalı Tekli Priz", aosDelay: "200" },
  { id: 9, img: Img9, title: "TP-LINK WI-FI Güçlendirici", aosDelay: "200" },
];

const Products = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProducts = isExpanded ? ProductsData : ProductsData.slice(0, 5);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            En Çok Tercih Edilen Ürünlerimiz
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Ürünler
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Elektrik Enerjisinin kullanımı konusundaki ihtiyaç duyulabilecek hizmeti;
            güvenli, teknolojik, ekonomik, uygun koşullarda ve modern yöntemlerle sağlayan ürünlerle çalışmaktayız.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {visibleProducts.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating || "5.0"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All / Collapse button */}
          <div className="flex justify-center">
            <button
              className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "Küçült" : "Hepsini Göster"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
