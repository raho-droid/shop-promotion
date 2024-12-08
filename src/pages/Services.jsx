import React from "react";
import Image1 from "../assets/ourServices/çanaklar.jpeg";
import Image2 from "../assets/ourServices/çatıKurulum.jpeg";
import Image3 from "../assets/ourServices/kurulum.jpeg";
import Image4 from "../assets/ourServices/nextÇanak.jpeg";
import Image5 from "../assets/ourServices/nextMulti.jpeg";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Uydu Kurulumu",
    description:
      "Yeni uydu anten kurulumlarında profesyonel hizmet sunuyoruz. En iyi sinyal kalitesini sağlıyoruz.",
    image: Image1,
  },
  {
    id: 2,
    title: "Bakım ve Onarım",
    description:
      "Uydu sistemlerinizin düzenli bakımını ve arıza durumlarında tamir işlemlerini gerçekleştiriyoruz.",
    image: Image2,
  },
  {
    id: 3,
    title: "Çanak Anten Kurulumu",
    description:
      "Sinyal kalitesini artırmak için çanak anten ayar hizmeti sağlıyoruz.",
    image: Image3,
  },
  {
    id: 4,
    title: "Çanak Anten Ayarı",
    description:
      "En iyi TV deneyimi için çanak antenlerinizi doğru şekilde ayarlıyoruz.",
    image: Image4,
  },
  {
    id: 5,
    title: "Merkezi Uydu Sistemleri",
    description:
      "Apartmanlar ve siteler için merkezi uydu sistemlerini kuruyor ve bakımını yapıyoruz.",
    image: Image5,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 pt-20 sm:pt-24 lg:pt-28">
      <div className="container mx-auto px-6 sm:px-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Hizmetlerimiz</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Güvenilir, profesyonel ve hızlı uydu hizmetleri sunuyoruz. 
            İhtiyaçlarınıza en uygun çözümleri sağlamak için buradayız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Service Info */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link to="/contact">
                  <button className="bg-primary text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-secondary transition-colors">
                    Bize Ulaşın
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
