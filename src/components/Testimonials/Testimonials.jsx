import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Kayhan Yılmaz",
    text: "Sitemizin merkezi sistem problemini çözdüler vermiş oldukları servisten dolayı teşekür ederiz.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Hasan Polat",
    text: "Evimizin çanak anten kurulumunu yaptırdık. Kendilerinden çok memnun kaldım temiz hızlı ve kaliteli işçilik.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Müslim Çimen",
    text: "Son derece deneyimli ve işinin ehli insanlar aldıkları parayı sonuna kadar hakediyorlar Enver usta işin hakkını veriyor tavsiye ederim.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Kapadokya City",
    text: "Firmamızın kamera sistemini yaptırdık görüntüsünden ve işçiliğinden çok  memnun kaldık tanıdıklarıma tavsiye edeceğim teşekkürler güvenfix",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 6,
    name: "Semih Tumsek",
    text: "Çanak anten kurulumu yaptırdım işçilik ve kullanılan malzeme çok kaliteli tüm kanalları sıkıntısız izleyebiliyorum tavsiye ederim",
    img: "https://picsum.photos/105/105",
  },
  {
    id: 7,
    name: "Tuğçe Koyuncu",
    text: "Kaliteli işçilik ve kullanılan malzemeler çok kaliteliydi. Teşekkürler.",
    img: "https://picsum.photos/106/106",
  },
  {
    id: 8,
    name: "ogulcan sipahioglu",
    text: "Dürüst esnaf evdeki çoğu işimizi çözdü teşekkür ederim",
    img: "https://picsum.photos/107/107",
  },
  {
    id: 9,
    name: "Ümit Kargı",
    text: "Gerçekten işinin uzmanı, son derece bilgili ve çok çabuk. Çok memnunum ve herkese tavsiye ederim.",
    img: "https://picsum.photos/108/108",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Müşterilerimiz ne diyor
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Google Maps Yorumları
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hizmet verdiğimiz müşterilerimizin hakkımızda bizlere sağladığı geri dönüşler
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
