import React from "react";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative flex items-start justify-between flex-wrap lg:flex-nowrap w-full px-20 py-8 text-end text-[#6A6A6A]">
      <div className="flex flex-col justify-end items-end gap-4">
        <h5 className="flex flex-col justify-end items-end">
          تابعنا
          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-10 h-[1px] bg-gray-400" />
            {"///"}
            <div className="w-10 h-[1px] bg-gray-400" />
          </div>
        </h5>
        <p>اشترك في النشرة البريدية</p>
        <input
          type={"text"}
          placeholder="ادخل بريدك هنا"
          className="text-end border-[1px] border-gray-400 p-1 rounded"
        />
        <button className="bg-black py-2 px-12 text-white rounded-md">
          اشترك
        </button>
      </div>
      <div className="flex flex-col justify-end items-end gap-4">
        <h5 className="flex flex-col justify-end items-end">
          حسابي
          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-10 h-[1px] bg-gray-400" />
            {"///"}
            <div className="w-10 h-[1px] bg-gray-400" />
          </div>
        </h5>
        <ul className="flex flex-col gap-2 items-end justify-end text-sm">
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            حسابي
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            طلباتي
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            عناويني
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            سلة التسوق
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            المفضلة
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-end items-end gap-4">
        <h5 className="flex flex-col justify-end items-end">
          التسوق الالكتروني
          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-10 h-[1px] bg-gray-400" />
            {"///"}
            <div className="w-10 h-[1px] bg-gray-400" />
          </div>
        </h5>
        <ul className="flex flex-col gap-2 items-end justify-end text-sm">
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            بحث
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            منتجات شوهدت مؤخّراً
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            منتجات جديدة
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-end items-end gap-4">
        <h5 className="flex flex-col justify-end items-end">
          معلومات
          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-10 h-[1px] bg-gray-400" />
            {"///"}
            <div className="w-10 h-[1px] bg-gray-400" />
          </div>
        </h5>
        <ul className="flex flex-col gap-2 items-end justify-end text-sm">
          <p> الأفنيوز المرحلة الثانية - الري</p>
          <p> سوق الكوت - الفحيحيل</p>

          <Link to="/" className=" transtion duration-100 px-2">
            0096522285151
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            الشحن والمرتجعات
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            من نحن
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            اتصل بنا
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
