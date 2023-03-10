import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CartItem from "../../components/CartItem";
import GoSellDemo from "../../components/GoSellDemo";
import * as api from "../../api/index";
import jwt_decode from "jwt-decode";
import {useLangauges} from "../../contexts/Langauges";
//import useFetchAll from "../../services/useFetchAll";

const CartPage = ({updateQuantity, cartProducts, setCartProducts}) => {
  const langaugesContext = useLangauges();
  const user = jwt_decode(
    JSON.parse(localStorage.getItem("userEcommerce")).token
  );
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fun = async () => {
      try {
        const {data} = await api.fetchCart();
        setCartProducts(data);
        //console.log(data);
        const amountItemsInCart = data?.reduce(
          (total, item) => total + item.price,
          0
        );
        //console.log(amountItemsInCart);
        setAmount(amountItemsInCart);
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    fun();
  }, []);

  if (error) throw error;
  if (loading)
    return <h1 className="text-center font-bold text-5xl my-40">Loading...</h1>;

  return (
    <React.Fragment>
      <div className="pt-12">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {langaugesContext.langauge === "ar" ? "سلة التسوق" : "Cart"}
          </h2>
          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-20 h-[2px] bg-gray-400" />
            {"///"}
            <div className="w-20 h-[2px] bg-gray-400" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full"></div>
      </div>

      <section className="flex flex-col gap-8 mt-10">
        {cartProducts.length === 0 && (
          <h1 className="text-center font-bold text-2xl mb-20">
            {langaugesContext.langauge === "ar"
              ? "لا يوجد منتجات فى سلة التسوق"
              : "There are no products in the cart"}
          </h1>
        )}
        <div
          id="cart-container"
          className="flex flex-col-reverse lg:flex-row justify-center gap-10  mx-4"
        >
          {cartProducts.length > 0 && (
            <div className="flex flex-col gap-2 items-end text-end text-md bg-white shadow-lg p-2 w-full lg:w-60">
              <div className="flex flex-row-reverse justify-between items-center w-full">
                <p>الاجمالي الفرعي</p>
                <p>KWD {amount}</p>
              </div>
              <div className="flex flex-row-reverse justify-between items-center w-full">
                <p>الشحن</p>
                <p>تحسب عند الدفع</p>
              </div>
              <div className="flex flex-row-reverse justify-between items-center w-full">
                <p>الإجمالي</p>
                <p>تحسب عند الدفع</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p>الشحن</p>
                <p>تحسب عند الدفع</p>
              </div>
              {cartProducts?.length > 0 && (
                <GoSellDemo
                  user={user}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
              )}
            </div>
          )}
          <ul>
            {cartProducts?.map(i => (
              <CartItem
                key={i._id}
                itemInCart={i}
                updateQuantity={updateQuantity}
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
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
