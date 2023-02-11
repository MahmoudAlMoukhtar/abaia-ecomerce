import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Pagination} from "@material-ui/lab";
import usePagination from "../../components/Pagination";
import Product from "../../components/Product";
import useFetch from "../../services/useFetch";

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
        <input
          type="number"
          value={counter}
          onChange={e => setCounter(e.target.value)}
          className="w-12 text-center"
        />
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

const SearchPage = () => {
  const {data, loading, error} = useFetch("products");
  const [page, setPage] = useState(1);
  const [downCounter, setDownCounter] = useState(1);
  const [upCounter, setUpCounter] = useState(10000);
  const [filter, setFilter] = useState({
    filterDataBySearch: "",
    filterByCategory: "all",
    filterByGeaterPrice: false,
    filterBySmallerPrice: false,
  });
  const [showDetailSearch, setShowDetailSearch] = useState(false);
  const {category} = useParams();

  const productsSort = data?.sort((a, b) => {
    if (filter.filterByGeaterPrice) {
      if (a.price > b.price) {
        return -1;
      } else if (a.price < b.price) {
        return 1;
      } else {
        return 0;
      }
    } else if (filter.filterByGeaterPrice) {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  const filteredProducts = productsSort.filter(p => {
    if (filter.filterByCategory === "all") {
      return (
        p.price >= downCounter &&
        p.price <= upCounter &&
        (p.name
          .toLowerCase()
          .includes(filter.filterDataBySearch.toLowerCase()) ||
          p.description
            .toLowerCase()
            .includes(filter.filterDataBySearch.toLowerCase()))
      );
    } else {
      return (
        p.price >= downCounter &&
        p.price <= upCounter &&
        p.category === filter.filterByCategory &&
        (p.name
          .toLowerCase()
          .includes(filter.filterDataBySearch.toLowerCase()) ||
          p.description
            .toLowerCase()
            .includes(filter.filterDataBySearch.toLowerCase()))
      );
    }
  });

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

  return (
    <div className="flex flex-col gap-6 text-end px-2 sm:px-8 md:px-20">
      <div className="flex justify-center items-end flex-col gap-6 my-10">
        <h3 className="text-3xl">بحث</h3>
        <div className="flex flex-col items-center gap-6 bg-gray-100 w-full p-8 rounded">
          <label>كلمة البحث</label>
          <input
            type="text"
            onChange={e =>
              setFilter({...filter, filterDataBySearch: e.target.value})
            }
            className="w-96 border-2 border-gray-400 rounded-md"
          />
          <div className="flex justify-between items-center w-96">
            <input
              id="checkbox"
              type="checkbox"
              onChange={e => setShowDetailSearch(!showDetailSearch)}
              className="p-2 cursor-pointer"
            />
            <label htmlFor="checkbox" className="">
              بحث مفصل
            </label>
          </div>
          {showDetailSearch && (
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-row-reverse items-center gap-2">
                <label>الأقسام</label>
                <select
                  className="cursor-pointer w-96 text-end h-8 rounded shadow-md"
                  onChange={e =>
                    setFilter({...filter, filterByCategory: e.target.value})
                  }
                >
                  <option value={"all"}>كل المنتجات</option>
                  <option value={"المجموعة اليومية"}>المجموعة اليومية</option>
                  <option value={"المجموعة الاضافية"}>المجموعة الاضافية</option>
                  <option value={"المجموعة اليومية"}>المجموعة الشتوية</option>
                  <option value={"مجموعة المناسبات"}>مجموعة المناسبات</option>
                </select>
              </div>
              <div className="flex justify-end items-center gap-10">
                <label>نطاق الأسعار</label>
                <div className="flex justify-center gap-4">
                  <p>من</p>
                  <Counter setCounter={setDownCounter} counter={downCounter} />
                </div>
                <div className="flex justify-center gap-4">
                  <p>إلى</p>
                  <Counter setCounter={setUpCounter} counter={upCounter} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">{category}</h1>
        <hr />
      </div>
      <section className="flex justify-center gap-6 md:flex-row flex-col-reverse ">
        <section className="flex flex-col gap-2 w-full">
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
      </section>
    </div>
  );
};

export default SearchPage;
