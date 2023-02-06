import React, {useState} from "react";
import Spinner from "../Spinner";
import useFetch from "../services/useFetch";
import {useNavigate, useParams} from "react-router-dom";
import PageNotFound from "../PageNotFound";
import Product from "./Product";

const styles = {
  containerProductsCards:
    "flex justify-center gap-8 gap-x-6 my-4 flex-wrap mt-10",
  sectionFilters:
    "flex flex-col sm:flex-row justify-center gap-4 bg-white font-bold",
};

export default function Products() {
  const [size, setSize] = useState("");
  const {category} = useParams();
  const navigate = useNavigate();
  const {data: filterProducts} = useFetch("products");
  const {data: products, loading, error} = useFetch("products");

  if (error) throw error;
  if (loading) return <Spinner />;

  const categoriesPrds = filterProducts && filterProducts.map(p => p.category);
  const uniqueCategories = [...new Set(categoriesPrds)];

  const productsSort = products.sort((a, b) => {
    if (a.numberSell > b.numberSell) {
      return -1;
    } else if (a.numberSell < b.numberSell) {
      return 1;
    } else {
      return 0;
    }
  });

  const filteredProducts = size
    ? productsSort.filter(p => p.skus.find(s => s.size === parseInt(size)))
    : productsSort;

  return (
    <div className="flex flex-col justify-center gap-x-8 mt-10 px-8">
      <div>
        <section id="filters" className={styles.sectionFilters}>
          <label
            id="filter-by-size"
            htmlFor="size"
            className="filter-by flex justify-between items-center border-[1px] border-gray-400 rounded"
          >
            <p>Filter by size:</p>
            <select
              id="size"
              value={size}
              onChange={e => setSize(e.target.value)}
              className="ml-1 cursor-pointer"
            >
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </label>
          <label
            htmlFor="category"
            className="filter-by flex justify-between items-center border-[1px] border-gray-400 rounded"
          >
            <p>Filter by category:</p>
            <select
              id="category"
              value={category}
              onChange={e => navigate(`/${e.target.value}`)}
              className="ml-1 cursor-pointer"
            >
              <option value="allProducts">All Products</option>
              {uniqueCategories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          {size && <h2>Found {filteredProducts.length} items</h2>}
        </section>

        {products.length === 0 ? (
          <Spinner />
        ) : (
          <section id="products" className={styles.containerProductsCards}>
            {filteredProducts.map(p => (
              <Product product={p} key={p.name} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
