import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Spinner from "../Spinner";
import PageNotFound from "../PageNotFound";
import useDetailFetch from "../services/useDetailFetch";
import {MdFavoriteBorder} from "react-icons/md";
import {GrStar} from "react-icons/gr";
import * as api from "../api/index";

import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import StarRating from "./RaitingStars";

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

const Selectes = ({standard, setStandard}) => {
  return (
    <div className="flex flex-col items-end">
      <InputLabel id="demo-simple-select-helper-label">القياس</InputLabel>
      <Select
        className="w-40"
        value={"S"}
        onChange={e => setStandard({...standard, size: e.target.value})}
        displayEmpty
        inputProps={{"aria-label": "Without label"}}
      >
        <MenuItem value={"S"}>S</MenuItem>
        <MenuItem value={"M"}>M</MenuItem>
        <MenuItem value={"XL"}>XL</MenuItem>
        <MenuItem value={"XXL"}>XXL</MenuItem>
        <MenuItem value={"3XL"}>3XL</MenuItem>
      </Select>
      <InputLabel id="demo-simple-select-helper-label">الطول</InputLabel>
      <Select
        className="w-40"
        value={50}
        onChange={e => setStandard({...standard, length: e.target.value})}
        displayEmpty
        inputProps={{"aria-label": "Without label"}}
      >
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={60}>60</MenuItem>
        <MenuItem value={70}>70</MenuItem>
        <MenuItem value={80}>80</MenuItem>
        <MenuItem value={90}>100</MenuItem>
      </Select>
      <InputLabel id="demo-simple-select-helper-label">
        التصميم الأمامي
      </InputLabel>
      <Select
        className="w-40"
        value={"مفتوحة"}
        onChange={e => setStandard({...standard, design: e.target.value})}
        displayEmpty
        inputProps={{"aria-label": "Without label"}}
      >
        <MenuItem value={"مفتوحة"}>مفتوحة</MenuItem>
        <MenuItem value={"مقفلة"}>مقفلة</MenuItem>
      </Select>
    </div>
  );
};

const DetailProduct = ({addToCart, updateQuantity}) => {
  //react router
  const {id} = useParams();
  const navigate = useNavigate();
  //state managment
  const {data: product, loading, error} = useDetailFetch("product", id);
  const [mainImage, setMainImage] = useState(product.image);
  const [ratinge, setRating] = useState(0);
  const [standard, setStandard] = useState({
    size: "",
    length: "",
    design: "",
  });
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setMainImage(product.image);
    console.log(product);
  }, [product]);
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
    <section
      className={
        "flex justify-center gap-10 items-start w-full text-end text-gray-600 px-10 mt-20"
      }
    >
      <div id="textDetailProduct" className="w-full p-2 text-sm text-end w-1/2">
        <div className="flex flex-col gap-2 items-end">
          <div className="flex justify-between items-center w-full">
            <MdFavoriteBorder
              size={40}
              className="cursor-pointer bg-white shadow-lg p-2"
            />
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
          <Selectes standard={standard} setStandard={setStandard} />
        </div>
      </div>
      <div id="imagesProduct" className="flex flex-col items-center gap-4">
        <div id="mainImage" className="w-[500px]">
          <img
            src={mainImage}
            alt="mainProduct"
            className="w-full rounded-xl"
          />
        </div>
        <div className="flex justif-center gap-6 items-center">
          {product?.ThumImages?.map(img => (
            <img
              src={img}
              className="w-40 rounded-xl cursor-pointer"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default DetailProduct;
/* 
 <select
            value={sku}
            onChange={event => {
              setSku(event.target.value);
            }}
            className="border-2 border-gray-600 rounded cursor-pointer"
          >
            <option value="">What size</option>
            {product.skus &&
              product.skus.map(s => (
                <option key={s.sku} value={s.sku}>
                  {s.size}
                </option>
              ))}
          </select>
*/