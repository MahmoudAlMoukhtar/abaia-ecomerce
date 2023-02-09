import React from "react";
import useFetch from "../services/useFetch";
import Product from "./Product";
const ProductsMostSell = () => {
  const {data, loading, error} = useFetch("products");
  //const [filterData, setFilterData] = useState("auto");

  //const categoriesPrds = data?.map(p => p.category);
  //const uniqueCategories = [...new Set(categoriesPrds)];

  const productsSort = data?.sort((a, b) => {
    if (a.numberSell > b.numberSell) {
      return -1;
    } else if (a.numberSell < b.numberSell) {
      return 1;
    } else {
      return 0;
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
      <h2 className="text-3xl">اشتروا أيضاً</h2>
      <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
        <div className="w-20 h-[2px] bg-gray-400" />
        {"///"}
        <div className="w-20 h-[2px] bg-gray-400" />
      </div>

      <div className="h-[1px] w-full bg-gray-200 translate-y-[-8px]"></div>
      <div className="flex justify-center gap-10 flex-wrap w-full px-8">
        {filteredProducts.map(p => (
          <Product product={p} key={p._id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsMostSell;
