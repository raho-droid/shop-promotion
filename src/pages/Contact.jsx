import React from "react";
import photoCar from "../assets/contact-car.jpeg";
const Contact = () => {
  return (
    <div className="container mx-auto py-10 w-full lg:flex gap-4">
      <div className="lg:w-1/2 w-full p-4 mb-16 lg:mb-0">
        <img src={photoCar} alt="" className=" w-full" />
      </div>

      <div className="lg:w-1/2 w-full p-4 ">
        <h1 className="text-4xl font-bold text-primary mb-4">İletişim</h1>
        <p>Bize aşağıdaki bilgileri kullanarak ulaşabilirsiniz:</p>
        <ul>
          <li>Telefon: +905054428080</li>
          <li>Adres: Güçlükaya, Evrim Sk. no:4 A, 06310 Keçiören/Ankara</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
