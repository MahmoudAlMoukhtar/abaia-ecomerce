import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Spinner from "../Spinner";
import PageNotFound from "../PageNotFound";
import useDetailFetch from "../services/useDetailFetch";
import {MdFavoriteBorder} from "react-icons/md";
import {GrStar} from "react-icons/gr";
import * as api from "../api/index";
import jwt_decode from "jwt-decode";
import ProductsMostSell from "../components/ProductsMostSell";

import {Box, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import StarRating from "./RaitingStars";
import ProductsMostRevelant from "./ProductsMostRevelant";

const Counter = ({counter, setCounter}) => {
  return (
    <div className="bg-gray-100 rounded-xl flex justify-between items-center lg:flex-row md:flex-col sm:flex-row">
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

const Selectes = ({standard, setStandard, product}) => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <div className="flex flex-col items-end">
        <InputLabel id="demo-simple-select-helper-label">القياس</InputLabel>
        <Select
          className="w-40 h-8"
          value={standard.size}
          onChange={e => setStandard({...standard, size: e.target.value})}
          displayEmpty
          inputProps={{"aria-label": "Without label"}}
        >
          {product.sizes.length > 0 ? (
            product.sizes.map(s => (
              <MenuItem value={s} key={s}>
                {s}
              </MenuItem>
            ))
          ) : (
            <div>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"XL"}>XL</MenuItem>
              <MenuItem value={"XXL"}>XXL</MenuItem>
              <MenuItem value={"3XL"}>3XL</MenuItem>
            </div>
          )}
        </Select>
      </div>
      <div className="flex flex-col items-end">
        <InputLabel id="demo-simple-select-helper-label">الطول</InputLabel>
        <Select
          className="w-40 h-8"
          value={standard.length}
          onChange={e => setStandard({...standard, length: e.target.value})}
          displayEmpty
          inputProps={{"aria-label": "Without label"}}
        >
          {product.lengthes.length > 0 ? (
            product.lengthes.map(l => (
              <MenuItem value={l} key={l}>
                {l}
              </MenuItem>
            ))
          ) : (
            <div>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={60}>60</MenuItem>
              <MenuItem value={70}>70</MenuItem>
              <MenuItem value={80}>80</MenuItem>
              <MenuItem value={90}>100</MenuItem>
            </div>
          )}
        </Select>
      </div>
      <div className="flex flex-col items-end">
        <InputLabel id="demo-simple-select-helper-label">
          التصميم الأمامي
        </InputLabel>
        <Select
          className="w-40 h-8"
          value={standard.design}
          onChange={e => setStandard({...standard, design: e.target.value})}
          displayEmpty
          inputProps={{"aria-label": "Without label"}}
        >
          {product.designes.length > 0 ? (
            product.designes.map(d => (
              <MenuItem value={d} key={d}>
                {d}
              </MenuItem>
            ))
          ) : (
            <div>
              <MenuItem value={"مفتوحة"}>مفتوحة</MenuItem>
              <MenuItem value={"مقفلة"}>مقفلة</MenuItem>
            </div>
          )}
        </Select>
      </div>
    </div>
  );
};

const DetailProduct = ({favoraitProducts, setFavoraitProducts}) => {
  const [user, setUser] = useState();
  const userJson = localStorage.getItem("userEcommerce");
  if (userJson) {
    const userDecoded = jwt_decode(
      JSON.parse(localStorage.getItem("userEcommerce")).token
    );
    setUser(userDecoded);
  }
  //react router
  const {id} = useParams();
  const navigate = useNavigate();
  //state managment
  const {data: product, loading, error} = useDetailFetch("product", id);
  const [mainImage, setMainImage] = useState(product.image);
  const [ratinge, setRating] = useState(0);
  const [favoraitShow, setFavoraitShow] = useState(false);
  const [standard, setStandard] = useState({
    size: "",
    length: "",
    design: "",
  });
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setMainImage(product.image);
    console.log("product");
    if (userJson) {
      const makeRequest = async () => {
        const res = await api.fetchFavoraitProducts(user.id);
        setFavoraitProducts(true);
        //   if (res.data[0]._id === product._id) {
        //     //console.log(findeFav);
        //   }
      };
      makeRequest();
    }
  }, [product, favoraitShow]);
  //
  if (loading)
    return <h1 className="text-center font-bold text-5xl my-40">Loading...</h1>;
  if (!product)
    return (
      <h1 className="text-center font-bold text-5xl my-40">Not Fount Page!</h1>
    );
  if (error) throw error;
  //return jsx UI product
  return (
    <div className="flex flex-col gap-20 items-center">
      <section
        className={
          "flex justify-center gap-10 items-start w-full text-end text-gray-600 px-10 mt-20"
        }
      >
        <div
          id="textDetailProduct"
          className="w-full p-2 text-sm text-end w-1/2"
        >
          <div className="flex flex-col gap-6 items-end">
            <div className="flex justify-between items-center w-full">
              {userJson && (
                <MdFavoriteBorder
                  size={40}
                  className="cursor-pointer bg-white shadow-lg p-2"
                  color={favoraitShow ? "red" : "black"}
                  onClick={async () => {
                    if (user) {
                      const res = await api.createFavoraitProduct({
                        idUser: user.id,
                        idProduct: product._id,
                      });
                      setFavoraitShow(true);
                    } else {
                      localStorage.removeItem("userEcommerce");
                    }
                  }}
                />
              )}
              <h3 className="text-3xl font-semibold text-black">
                {product.name}
              </h3>
            </div>
            <div className="h-[1px] bg-gray-300 w-full"></div>
            <div className="flex justify-between items-center w-full">
              <Counter counter={counter} setCounter={setCounter} />
              <p className="text-2xl">د.إ.{product.price}</p>
            </div>
            <p>LUX-5</p>
            <p>15 - 10 days</p>

            <StarRating />
            <p className="font-semibold">Reviews|{0}</p>
            <p>{product.description}</p>
            <p>({product.offer})</p>
            <Selectes
              standard={standard}
              setStandard={setStandard}
              product={product}
            />

            <input
              type="text"
              name="message"
              id="message"
              autocomplete="given-name"
              placeholder="Write message"
              class="mt-1 block w-full rounded border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  text-end text-black p-1"
            />
            <button
              className={
                counter && userJson
                  ? "py-2 px-6 bg-black text-white font-semibold"
                  : "py-2 px-6 bg-gray-200 text-black font-semibold cursor-not-allowed"
              }
              disabled={counter === 0}
              onClick={async () => {
                const response = await api.updateCart({
                  idProduct: product._id,
                  standard,
                  quantity: counter,
                });

                navigate("/cart");
              }}
            >
              أضف إلى السلة
            </button>
          </div>
        </div>
        <div id="imagesProduct" className="flex flex-col items-center gap-4">
          <div
            id="mainImage"
            className="w-[600px] h-[600px] transition duration-200"
          >
            <img
              src={mainImage}
              alt="mainProduct"
              className="w-full h-full rounded-xl transition duration-200"
            />
          </div>
          <div className="flex justif-center gap-2 items-center w-full">
            {product?.ThumImages?.map(img => (
              <img
                src={img}
                className="w-36 h-36 rounded-xl cursor-pointer"
                onClick={() => setMainImage(img)}
                key={img}
              />
            ))}
          </div>
        </div>
      </section>
      <ProductsMostRevelant category={product.category} />
      <ProductsMostSell />
    </div>
  );
};
export default DetailProduct;
