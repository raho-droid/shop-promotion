import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import photoCar from "../assets/contact-car.jpeg";

const Contact = () => {
  return (
    <div className="container mx-auto py-10 w-full pt-20 sm:pt-24 lg:pt-28">
      {/* İletişim Bilgileri ve Görsel Bölümü */}
      <div className="lg:flex gap-8">
        {/* Görsel Bölümü */}
        <div className="lg:w-1/2 w-full p-4 mb-16 lg:mb-0">
          <img
            src={photoCar}
            alt="Contact Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* İletişim Bilgileri Bölümü */}
        <div className="lg:w-1/2 w-full p-6">
          <h1 className="text-4xl font-bold text-primary mb-6">İletişim Kurun</h1>
          <p className="text-lg text-gray-700 mb-6">
            Hizmetlerimiz hakkında daha fazla bilgi almak veya sorularınızı
            iletmek için bizimle iletişime geçebilirsiniz. Sizinle çalışmak için
            sabırsızlanıyoruz!
          </p>

          {/* İletişim Bilgileri */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt size={24} className="text-primary" />
              <p className="text-lg">
                Telefon:{" "}
                <a href="tel:+905054428080" className="text-primary">
                  +90 505 442 8080
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt size={24} className="text-primary" />
              <p className="text-lg">
                Adres: Güçlükaya, Evrim Sk. no:4 A, 06310 Keçiören/Ankara
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Harita Bölümü */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Konumumuz</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.880895936132!2d32.86858917591122!3d39.98144978201714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34da35b4a5875%3A0x615ae7d8ed2b457b!2zR8O8w6dsw7xrYXlhLCBFdnJpbSBTay4gTm86NCwgMDYzMTAgS2XDp2nDtnJlbi9BbmthcmE!5e1!3m2!1str!2str!4v1733684727190!5m2!1str!2str"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
