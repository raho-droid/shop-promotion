import React from "react";
import Image1 from "../assets/ourServices/çanaklar.jpeg";
import Image2 from "../assets/ourServices/çatıKurulum.jpeg";
import Image3 from "../assets/ourServices/kurulum.jpeg";
import Image4 from "../assets/ourServices/nextÇanak.jpeg";
import Image5 from "../assets/ourServices/nextMulti.jpeg";

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
    title: "Çanak Anten Ayarı",
    description:
      "Sinyal kalitesini artırmak için çanak anten ayar hizmeti sağlıyoruz.",
    image: Image3,
  },
  {
    id: 4,
    title: "Çanak Anten Ayarı",
    description:
      "Sinyal kalitesini artırmak için çanak anten ayar hizmeti sağlıyoruz.",
    image: Image4,
  },
  {
    id: 5,
    title: "Çanak Anten Ayarı",
    description:
      "Sinyal kalitesini artırmak için çanak anten ayar hizmeti sağlıyoruz.",
    image: Image5,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Hizmetlerimiz
          </h1>
          <p className="text-gray-600 text-lg">
            Güvenilir, profesyonel ve hızlı uydu hizmetleri sunuyoruz.
            İhtiyaçlarınıza en uygun çözümleri sağlamak için buradayız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Service Info */}
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
