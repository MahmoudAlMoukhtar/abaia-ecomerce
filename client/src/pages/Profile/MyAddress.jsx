import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import CartItem from "../../components/CartItem";
import * as api from "../../api/index";
import {useLangauges} from "../../contexts/Langauges";

const styles = {
  cardItemCart:
    " bg-white w-full flex flex-col-reverse px-4 sm:flex-row justify-end gap-4 sm:gap-6 sm:items-center shadow-2xl py-2 transition duration-200 cursor-default	border-2 border-gray-600 text-sm",
};

const MyAddress = ({user, favoraitProducts, setFavoraitProducts}) => {
  const langaugesContext = useLangauges();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigait = useNavigate();

  useEffect(() => {
    const fun = async () => {
      try {
        const {data} = await api.fetchFavoraitProducts(user.id);
        setFavoraitProducts(data);
        console.log(data);
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
  if (favoraitProducts.length === 0)
    return (
      <h1 className="text-center font-bold text-3xl my-40">
        {langaugesContext.langauge === "ar"
          ? "لايوجد منتجات مفضلة لديك"
          : "You do not have any favorite products"}
      </h1>
    );
  return (
    <ul className="w-full">
      {favoraitProducts?.map(p => (
        <li className={styles.cardItemCart} key={p._id}>
          <button
            onClick={async () => {
              if (user) {
                const res = await api.createFavoraitProduct({
                  idUser: user.id,
                  idProduct: p._id,
                });
                if (res.data.message) {
                  console.log("test filter");
                  setFavoraitProducts(
                    favoraitProducts.filter(f => f._id !== p._id)
                  );
                }
              } else {
                localStorage.removeItem("userEcommerce");
              }
            }}
            className="bg-gray-200 rounded p-2"
          >
            X
          </button>

          <p>KWD {p.price}</p>
          <p>D-57</p>
          <div className="flex justify-end text-end flex-col items-end gap-1">
            <h3 className="font-bold ">{p.name}</h3>
          </div>
          <img
            src={p.image}
            alt={p.name}
            className="img-cart-item w-[80] h-80 sm:w-[100px] sm:h-[100px]  rounded-md"
          />
        </li>
      ))}
    </ul>
  );
};

export default MyAddress;
