import React from "react";

const styles = {
  cardItemCart:
    "cart-item bg-white flex flex-col px-4 sm:flex-row justify-between gap-2 sm:items-center shadow-2xl py-2 transition duration-200 cursor-default	border-2 border-gray-600 font-bold text-sm",
};

const CartItem = ({itemInCart, updateQuantity}) => {
  const {price, name, image, quantity} = itemInCart;
  //const {size} = skus.find(s => s.sku === sku);
  return (
    <li className={styles.cardItemCart}>
      <img
        src={image}
        alt={name}
        className="img-cart-item w-[80] h-80 sm:w-[100px] sm:h-[100px] lg:w-[200px] lg:h-[200px]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-5 my-4 text-sm gap-5 gap-2 text-start sm:text-center font-semibold md:font-bold  text-sm w-[800px]">
        <h3>{name}</h3>
        <p>${price}</p>
        <p>Quantity: {quantity}</p>
        <p>
          <select
            aria-label={`Select quantity for ${name}`}
            onChange={e => console.log("update")}
            value={quantity}
            className="border-[1px] border-gray-400 rounded p-1"
          >
            <option value="0">Remove</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
      </div>
    </li>
  );
};
export default CartItem;
/* 
updateQuantity(sku, parseInt(e.target.value))
*/
