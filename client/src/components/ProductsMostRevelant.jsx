import React from "react";
import useFetch from "../services/useFetch";
import Product from "./Product";
const ProductsMostRevelant = ({category}) => {
  const {data, loading, error} = useFetch("products");

  const filtered = data.filter(p => {
    return p.category === category;
  });
  const filteredProducts = filtered.slice(0, 3);

  if (error) throw error;
  if (loading)
    return <h1 className="text-center font-bold text-5xl my-40">Loading...</h1>;
  return (
    <section
      className="flex flex-col gap-2 justify-center items-center w-full"
      id=""
    >
      <h2 className="text-3xl">منتجات ذات صلة</h2>
      <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
        <div className="w-20 h-[2px] bg-gray-400" />
        {"///"}
        <div className="w-20 h-[2px] bg-gray-400" />
      </div>

      <div className="h-[1px] w-full bg-gray-200 translate-y-[-8px]"></div>
      <div className="flex justify-center gap-10 flex-wrap w-full px-8">
        {filteredProducts.map(p => (
          <Product product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductsMostRevelant;
