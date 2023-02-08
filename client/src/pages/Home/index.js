import React from "react";
import ProductsSlider from "../../components/ProductsSlider";
import BestSellProducts from "../../components/BestSellProducts";
import Services from "../../components/Services";
import MainHeader from "../../components/MainHeader";
import ProductsSection from "../../components/ProductsSection";
const HomePage = ({setNavBarModal, navbarModal}) => {
  return (
    <div className="flex flex-col gap-20">
      <MainHeader title="Welcome to our store" />
      <div className="flex flex-col gap-y-40">
        <Services />
        <ProductsSection />
        <section className="flex justify-center items-center bg-gray-200 h-screen w-[100%] px-40 py-10">
          <img src="/images/abaya/0001881.jpeg" className="w-full h-full" />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
