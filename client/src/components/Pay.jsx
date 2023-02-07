import React, {useEffect, useState} from "react";
import StripeCheckout from "react-stripe-checkout";
import * as api from "../api/index";
import jwt_decode from "jwt-decode";

const Pay = ({cartProducts, setCartProducts}) => {
  const [amount, setAmount] = useState();
  const [stripeToken, setStripeToken] = useState();
  const user = jwt_decode(
    JSON.parse(localStorage.getItem("userEcommerce")).token
  );
  useEffect(() => {
    const makeRequest = async () => {
      const amountItemsInCart = cartProducts?.reduce(
        (total, item) => total + item.price,
        0
      );
      setAmount(amountItemsInCart);
      const oreders = cartProducts.map(p => ({
        idUser: user?.id,
        Username: stripeToken.card.name,
        nameProduct: p.name,
        idProduct: p._id,
        sizeProduct: p.standard.size,
        lengthProduct: p.standard.length,
        designProduct: p.standard.design,
        price: p.price,
        address: {
          city: stripeToken.card.address_city,
          country: stripeToken.card.address_country,
          line1: stripeToken.card.address_line1,
          state: stripeToken.card.address_state,
          zip: stripeToken.card.address_zip,
        },
      }));

      try {
        oreders.forEach(async order => {
          const res = await api.createOrder(order);
          console.log("order", res.data);
        });
        const response = await api.emptyCart();
        setCartProducts([]);
        // const res = await api.createPay({
        //   tokenId: stripeToken.id,
        //   amount: 2000,
        // });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cartProducts.length > 0 && makeRequest();
  }, [stripeToken]);

  const onToken = token => {
    setStripeToken(token);
    console.log(token);
  };
  return (
    <StripeCheckout
      name="Furni shop" // the pop-in header title
      description={`Your total is ${amount}`} // the pop-in header subtitle
      shippingAddress
      billingAddress
      amount={amount}
      token={onToken}
      image="/favicon.ico" // the pop-in header image
      stripeKey="pk_test_51MX0YcIrhS15eqW0IvToQz6Re2vngbG0knWAuwN85VOzUJqSlBxnXlu3Htw0G0lgRu8h0cm5kH7Sc2EkehODXfnd00n2age68M"
    >
      <button className="py-2 px-12 bg-black text-white font-semibold w-full text-center rounded">
        الدفع
      </button>
    </StripeCheckout>
  );
};

export default Pay;
