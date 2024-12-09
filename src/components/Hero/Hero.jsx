import React from "react";
import Image1 from "../../assets/hero/yeniSistem.png";
import Image2 from "../../assets/hero/kamera.png";
import Image3 from "../../assets/hero/elektrik.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Çanak Anten ve Merkezi Uydu Sistemleri",
    description: "Kurulum ve teknik servis hizmetleri sunuyoruz.",
  },
  {
    id: 2,
    img: Image2,
    title: "Güvenlik Kamera Sistemleri",
    description:
      "Denetim, kontrol, iç, dış ve çevre güvenliğinin sağlanması için kullanılan görüntüleme sistemleri kuruyoruz.",
  },
  {
    id: 3,
    img: Image3,
    title: "Elektrik Bakım Onarım",
    description:
      "Elektronik sorun ve arızalarda tamir bakım ve onarım işlemleri yapıyoruz.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[80vh] bg-gray-100 dark:bg-gray-950 dark:text-white duration-300 pt-20 sm:pt-24 lg:pt-28">
      {/* Background Pattern */}
      <div className="absolute -top-1/2 right-0 w-[900px] h-[900px] bg-primary/20 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto py-16 px-6 sm:px-12">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                {/* Text Content */}
                <div className="flex flex-col gap-6 text-center sm:text-left order-2 sm:order-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {data.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {data.description}
                  </p>
                  <div>
                    <Link to="/contact">
                      <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-10 hover:shadow-lg transition-transform text-white py-3 px-6 rounded-full text-lg font-semibold"
                      >
                        Bize Ulaşın
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[300px] sm:w-[450px] lg:w-[550px] mx-auto object-contain animate-fadeIn"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
