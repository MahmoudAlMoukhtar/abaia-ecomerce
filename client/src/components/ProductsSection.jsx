import React, {useState} from "react";
import useFetch from "../services/useFetch";
import Product from "./Product";
import {useLangauges} from "../contexts/Langauges";
const ProductsSection = () => {
  const langaugesContext = useLangauges();
  const {data, loading, error} = useFetch("products");
  const [filterData, setFilterData] = useState("auto");

  const categoriesPrds = data?.map(p => p.category);
  //const uniqueCategories = [...new Set(categoriesPrds)];

  const productsSort = data?.sort((a, b) => {
    if (filterData === "sales") {
      if (a.numberSell > b.numberSell) {
        return -1;
      } else if (a.numberSell < b.numberSell) {
        return 1;
      } else {
        return 0;
      }
    } else if (filterData === "new") {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (a.price > b.price) {
        return -1;
      } else if (a.price < b.price) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  const filteredProducts = productsSort.slice(0, 3);

  if (error) throw error;
  if (loading)
    return <h1 className="text-center font-bold text-5xl my-40">Loading...</h1>;

  return (
    <section
      className="flex flex-col gap-2 justify-center items-center w-full"
      id=""
    >
      <h2 className="text-3xl">
        {langaugesContext.langauge === "ar" ? "المنتجات" : "Products"}
      </h2>
      <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
        <div className="w-20 h-[2px] bg-gray-400" />
        {"///"}
        <div className="w-20 h-[2px] bg-gray-400" />
      </div>
      <ul className="flex justify-center gap-10 items-start w-full">
        <button
          className="pb-7 transition duration-200 border-white border-b-4 hover:border-black borderr"
          onClick={() => {
            setFilterData("sales");
          }}
        >
          {langaugesContext.langauge === "ar" ? "الأكثر مبيعاً" : "Most Sales"}
        </button>
        <button
          className="pb-7 transition duration-200 border-white border-b-4 hover:border-black borderr"
          onClick={() => setFilterData("new")}
        >
          {langaugesContext.langauge === "ar" ? "منتجات جديدة" : "New products"}
        </button>
        <button
          className="pb-7 transition duration-200 border-white border-b-4 hover:border-black borderr"
          onClick={() => setFilterData("deffrent")}
        >
          {langaugesContext.langauge === "ar"
            ? "منتجات مميزة"
            : "Deffrent products"}
        </button>
      </ul>
      <div className="h-[1px] w-full bg-gray-200 translate-y-[-8px]"></div>
      <div className="flex justify-center gap-10 flex-wrap w-full px-8">
        {filteredProducts.map(p => (
          <Product product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
