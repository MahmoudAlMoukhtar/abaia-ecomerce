import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Pagination} from "@material-ui/lab";
import usePagination from "../../components/Pagination";
import Product from "../../components/Product";
import {BsCircle} from "react-icons/bs";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import useFetch from "../../services/useFetch";

const ShopPage = () => {
  const {data, loading, error} = useFetch("products");
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState("auto");
  const {category} = useParams();

  const categoriesPrds = data?.map(p => p.category);
  const uniqueCategories = [...new Set(categoriesPrds)];

  const productsSort = data?.sort((a, b) => {
    if (filterData === "greater") {
      if (a.price > b.price) {
        return -1;
      } else if (a.price < b.price) {
        return 1;
      } else {
        return 0;
      }
    } else if (filterData === "lastest" || category === "منتجات جديدة") {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  const finded = productsSort.find(p => p.category === category);
  const filteredProducts = finded
    ? productsSort.filter(p => p.category === category)
    : productsSort;

  const PER_PAGE = 6;
  const count = Math.ceil(filteredProducts?.length / PER_PAGE);
  const _DATA = usePagination(filteredProducts, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  if (error) throw error;
  if (loading)
    return <h1 className="text-center font-bold text-5xl my-40">Loading...</h1>;
  if (!finded && category !== "كل المنتجات" && category !== "منتجات جديدة")
    return (
      <h1 className="text-center font-bold text-5xl my-40">Not Fount Page!</h1>
    );

  return (
    <div className="flex flex-col gap-6 text-end px-2 sm:px-8 md:px-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">{category}</h1>
        <hr />
      </div>
      <section className="flex justify-center gap-6 md:flex-row flex-col-reverse ">
        <section className="flex flex-col gap-2 w-full">
          <FormControl className="text-end">
            <InputLabel id="demo-simple-select-label">رتب بـ</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterData}
              label="auto"
              onChange={e => setFilterData(e.target.value)}
            >
              <MenuItem value={"auto"}>الموصى به</MenuItem>
              <MenuItem value={"greater"}>السعر من الأعلى إلى الأسفل</MenuItem>
              <MenuItem value={"smaller"}>السعر من الأسفل إلى الأعلى</MenuItem>
              <MenuItem value={"lastest"}>الأحدث</MenuItem>
            </Select>
          </FormControl>
          <div className="flex justify-center items-end flex-wrap gap-2 md:gap-4 lg:gap-8">
            {_DATA.currentData().map(p => {
              return <Product product={p} key={p._id} />;
            })}
          </div>
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </section>
        <aside className="md:w-60 flex md:flex-col flex-row xs:flex-col">
          <div className="flex flex-col gap-4 w-60 filter_section p-4">
            <h4>الأقسام</h4>
            <hr />
            <ul className="flex flex-col gap-2">
              <Link
                to={"/المجموعة اليومية"}
                className="flex gap-2 justify-end items-center"
              >
                المجموعة اليومية
                <BsCircle size={10} />
              </Link>
              <Link
                to={"/مجموعة المناسبات"}
                className="flex gap-2 justify-end items-center"
              >
                مجموعة المناسبات
                <BsCircle size={10} />
              </Link>
              <Link
                to={"/المجموعة العملية"}
                className="flex gap-2 justify-end items-center"
              >
                المجموعة العملية
                <BsCircle size={10} />
              </Link>
              <Link
                to={"/المجموعة الشتوية"}
                className="flex gap-2 justify-end items-center"
              >
                المجموعة الشتوية
                <BsCircle size={10} />
              </Link>
              <Link
                to={"/المجموعة الاضافية"}
                className="flex gap-2 justify-end items-center"
              >
                المجموعة الاضافية
                <BsCircle size={10} />
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-60 filter_section p-4">
            <h4>منتجات شوهدت مؤخرا</h4>
            <hr />
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 justify-end items-center">
                بليزر بقصه بالخلف
                <BsCircle size={10} />
              </li>
              <li className="flex gap-2 justify-end items-center">
                خطوط كرستال
                <BsCircle size={10} />
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ShopPage;
