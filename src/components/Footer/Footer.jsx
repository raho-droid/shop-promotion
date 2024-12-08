import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Ana Sayfa",
    link: "/",
  },
  {
    title: "Hakkımızda",
    link: "/about",
  },
  {
    title: "Hizmetler",
    link: "/services",
  },
  {
    title: "İletişim",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Güvenfix
            </h1>
            <p>Uydu çanak anten teknik servis.</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.id}
                    >
                      <a href={link.link}>
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <a href="https://www.google.com/maps/place/%C3%87anak+Anten+Yak%C4%B1nlarda+Uydu+Teknik+Servis+g%C3%BCvenfix/@39.9814498,32.8685892,17z/data=!3m1!4b1!4m8!3m7!1s0x14d34da1352e9f2b:0x41fa1f66c9f2eb10!8m2!3d39.9814457!4d32.8711641!9m1!1b1!16s%2Fg%2F11wg6w8g32?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
                    <FaLocationArrow />
                    <p>Güçlükaya, Evrim Sk. no:4 A, 06310 Keçiören/Ankara</p>
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <a
                    href="tel:+905054428080"
                    className="hover:text-primary duration-300"
                  >
                    0505 442 80 80
                  </a>
                </div>
              </div>
            </div>
            {/* sign */}
            <div>
              <div className="py-8 px-4">
                <p>© 2024 Kilic & Alim. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
