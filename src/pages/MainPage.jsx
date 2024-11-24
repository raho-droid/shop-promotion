import React from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";

const MainPage = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <Banner />
      <Testimonials />
    </div>
  );
};

export default MainPage;
