import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CartItem from "../../components/CartItem";
import * as api from "../../api/index";
import Spinner from "../../Spinner";
import Pay from "../../components/Pay";
//import useFetchAll from "../../services/useFetchAll";

const CartPage = ({cart, updateQuantity}) => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fun = async () => {
      try {
        const {data} = await api.fetchCart();
        setCartProducts(data);
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    fun();
  }, []);

  if (loading) return <Spinner />;
  if (error) throw error;

  //console.log("products", cartProducts);

  // const numberItemsInCart = cartProducts?.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );
  return (
    <React.Fragment>
      <div className="bg-[#03271b] py-12">
        <h1 className="animate__animated animate__wobble text-2xl md:text-5xl sm:text-4xl font-semibold text-white text-center">
          Cart Page
        </h1>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-semibold text-lg text-center">
            {cartProducts.length >= 1 && (
              <div className="my-4 text-white text-2xl md:text-lg sm:text-4xl">
                <span className="text-black font-bold px-2 mx-2 border-2 bg-[#eab308] border-black rounded-full shadow shadow-2xl">
                  {cartProducts.length}
                </span>
                Item{cartProducts.length > 1 ? "s" : ""} in your cart
              </div>
            )}
          </h1>
          {cartProducts?.length > 0 && (
            <Pay
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          )}
        </div>
      </div>

      <section className="flex flex-col gap-8 mt-10">
        {cartProducts.length === 0 && (
          <p className="font-semibold text-2xl text-center">
            Your cart is <span className="text-red-800">empty</span>
          </p>
        )}
        <div id="cart-container" className="flex flex-col gap-6 mx-8">
          <ul>
            {cartProducts?.map(i => (
              <CartItem
                key={i._id}
                itemInCart={i}
                updateQuantity={updateQuantity}
              />
            ))}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CartPage;
/* 

*/
