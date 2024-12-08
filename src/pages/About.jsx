import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaUsers, FaWrench, FaSatelliteDish } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 pt-20 sm:pt-24 lg:pt-28">
      <div className="container mx-auto px-6 sm:px-12 text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-primary mb-6">
          Hakkımızda
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Uydu çanak anten teknik servisindeki deneyimimizle
          güvenilir, profesyonel ve yenilikçi hizmet sunuyoruz. Müşteri
          memnuniyeti ve kaliteli işçilik bizim için her zaman ön plandadır.
        </p>

        {/* Değerlerimiz Bölümü */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {[
            {
              icon: <FaWrench size={40} className="text-primary mb-4" />,
              title: "Profesyonel Hizmet",
              description: "Deneyimli ekibimizle hızlı ve kaliteli teknik destek sunuyoruz.",
            },
            {
              icon: <FaCheckCircle size={40} className="text-primary mb-4" />,
              title: "Garantili Çözümler",
              description: "Tüm kurulum ve onarım işlemlerinde garanti sunuyoruz.",
            },
            {
              icon: <FaSatelliteDish size={40} className="text-primary mb-4" />,
              title: "Teknolojik Yenilik",
              description: "Son teknoloji ekipmanlarla en iyi sinyal kalitesini sağlıyoruz.",
            },
            {
              icon: <FaUsers size={40} className="text-primary mb-4" />,
              title: "Müşteri Memnuniyeti",
              description: "Sizin memnuniyetiniz, bizim için en büyük önceliktir.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Bölümü */}
        <div className="mt-12">
          <Link to="/contact">
            <button className="bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-secondary transition-colors">
              Bize Ulaşın
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
