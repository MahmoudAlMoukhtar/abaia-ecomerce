import React, {useState} from "react";

const styles = {
  cardItemCart:
    "cart-item bg-white flex flex-col-reverse px-4 sm:flex-row justify-end gap-4 sm:gap-20 sm:items-center shadow-2xl py-2 transition duration-200 cursor-default	border-2 border-gray-600 text-sm",
};

const Counter = ({counter, setCounter}) => {
  return (
    <div className="bg-gray-100 rounded-xl flex justify-between items-center lg:flex-row flex-col">
      <button
        onClick={() => {
          setCounter(currCounter => {
            if (currCounter == 0) {
              return 0;
            } else {
              return currCounter - 1;
            }
          });
        }}
        id="btn-minus-count"
        className="hover:bg-gray-700 text-white font-semibold bg-black px-4 rounded-lg"
      >
        <p className="text-2xl font-bold ">-</p>
      </button>
      <p className="text-smleading-5font-medium text-gray-900">
        <span id="" className="font-bold px-6">
          {counter}
        </span>
      </p>
      <button
        onClick={() => {
          setCounter(currCounter => {
            return currCounter + 1;
          });
        }}
        id="btn-add-count"
        className="hover:bg-gray-700 text-white font-semibold bg-black px-4 rounded-lg"
      >
        <p className="text-2xl">+</p>
      </button>
    </div>
  );
};

const CartItem = ({itemInCart, updateQuantity}) => {
  const {price, name, image, quantity, standard} = itemInCart;
  const [counter, setCounter] = useState(quantity);

  //const {size} = skus.find(s => s.sku === sku);
  return (
    <li className={styles.cardItemCart}>
      <Counter counter={counter} setCounter={setCounter} />
      <p>KWD {price}</p>
      <p>D-57</p>
      <div className="flex justify-end text-end flex-col items-end gap-1">
        <h3 className="font-bold ">{name}</h3>
        <p>{standard.size}:المقياس</p>
        <p>{standard.length}:الطول</p>
        <p>{standard.design}:التصميم الأمامي</p>
      </div>
      <img
        src={image}
        alt={name}
        className="img-cart-item w-[80] h-80 sm:w-[100px] sm:h-[100px] lg:w-[200px] lg:h-[200px] rounded-md"
      />
    </li>
  );
};
export default CartItem;
/* 
updateQuantity(sku, parseInt(e.target.value))
*/
