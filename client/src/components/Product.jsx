import React from "react";
import {Link, useNavigate} from "react-router-dom";

const styles = {
  cardProduct:
    "flex flex-col justify-between items-end gap-y-2 transition duration-200 cursor-pointer",
  btnAddStyle:
    "text-white text-3xl translate-y-8 bg-black py-1 px-3 rounded-full cursor-pointer",
};

const Product = ({product: p}) => {
  const navigate = useNavigate();
  return (
    <Link
      to={`/${p.category}/${p._id}`}
      key={p._id}
      className={styles.cardProduct}
      id="product"
    >
      <img
        src={p.image}
        alt={p.name}
        className="w-[300px] h-[300px] object-cover rounded-md"
      />
      <h3>{p.name}</h3>
      <p>{p.price}.د.إ</p>
    </Link>
  );
};

export default Product;
