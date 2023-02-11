import React from "react";
import {Link} from "react-router-dom";
import {useLangauges} from "../contexts/Langauges";

const Footer = () => {
  const langaugesContext = useLangauges();
  return (
    <div
      className={
        langaugesContext.langauge === "ar"
          ? "relative  flex items-start justify-center gap-20 md:items-start md:justify-between flex-wrap lg:flex-nowrap w-full px-8 xl:px-20 py-8 md:text-end text-[#6A6A6A] mt-10"
          : "relative  flex items-start justify-center gap-20 md:items-start md:justify-between flex-wrap lg:flex-nowrap w-full px-8 xl:px-20 py-8 md:text-end text-[#6A6A6A] mt-10"
      }
    >
      <div className="flex flex-col items-center md:justify-end md:items-end gap-4">
        <h5 className="flex flex-col justify-center items-center md:justify-end md:items-end">
          {langaugesContext.langauge === "ar" ? "تابعنا" : "Follow us"}
          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-10 h-[1px] bg-gray-400" />
            {"///"}
            <div className="w-10 h-[1px] bg-gray-400" />
          </div>
        </h5>
        <p>
          {langaugesContext.langauge === "ar"
            ? "اشترك في النشرة البريدية"
            : "Subscribe to the newsletter"}
        </p>
        <input
          type={"text"}
          placeholder="ادخل بريدك هنا"
          className="text-end border-[1px] border-gray-400 p-1 rounded"
        />
        <button className="bg-black py-2 px-12 text-white rounded-md">
          {langaugesContext.langauge === "ar" ? "اشترك" : "Subscribe"}
        </button>
      </div>
      <div className="flex flex-col items-center md:justify-end md:items-end gap-4">
        <h5 className="flex flex-col justify-center items-center md:justify-end md:items-end">
          {langaugesContext.langauge === "ar" ? "حسابي" : "My account"}

          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-10 h-[1px] bg-gray-400" />
            {"///"}
            <div className="w-10 h-[1px] bg-gray-400" />
          </div>
        </h5>
        <ul className="flex flex-col gap-2 justify-center items-center md:justify-end md:items-end text-sm">
          <Link
            to="/account"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar" ? "حسابي" : "my account"}
          </Link>
          <Link
            to="/account/orders"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar" ? "طلباتي" : "my orders"}
          </Link>
          <Link
            to="/account/favorait"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar" ? "المفضلة" : "my favorait"}
          </Link>
          <Link
            to="/cart"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar" ? "سلة التسوق" : "cart"}
          </Link>
        </ul>
      </div>
      <div className="flex flex-col items-center md:justify-end md:items-end gap-4">
        <h5 className="flex flex-col justify-center items-center md:justify-end md:items-end">
          {langaugesContext.langauge === "ar" ? "التسوق الالكتروني" : "Shop"}

          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-10 h-[1px] bg-gray-400" />
            {"///"}
            <div className="w-10 h-[1px] bg-gray-400" />
          </div>
        </h5>
        <ul className="flex flex-col gap-2 justify-center items-center md:justify-end md:items-end text-sm">
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar" ? "بحث" : "search"}
          </Link>
          <Link
            to="/كل المنتجات"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar"
              ? "منتجات شوهدت مؤخّراً"
              : "recently products view"}
          </Link>
          <Link
            to="/منتجات جديدة"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar"
              ? "منتجات جديدة"
              : "new products"}
          </Link>
        </ul>
      </div>
      <div className="flex flex-col items-center md:justify-end md:items-end gap-4">
        <h5 className="flex flex-col justify-center items-center md:justify-end md:items-end">
          {langaugesContext.langauge === "ar" ? "معلومات" : "Information"}

          <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
            <div className="w-10 h-[1px] bg-gray-400" />
            {"///"}
            <div className="w-10 h-[1px] bg-gray-400" />
          </div>
        </h5>
        <ul className="flex flex-col gap-2 justify-center items-center md:justify-end md:items-end text-sm">
          <p> الأفنيوز المرحلة الثانية - الري</p>
          <p> سوق الكوت - الفحيحيل</p>

          <Link to="/" className=" transtion duration-100 px-2">
            0096522285151
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar"
              ? "الشحن والمرتجعات"
              : "shipping and returns"}
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar" ? "من نحن" : "about us"}
          </Link>
          <Link
            to="/"
            className="hover:border-r-4 border-black transtion duration-100 px-2"
          >
            {langaugesContext.langauge === "ar" ? "اتصل بنا" : "contact us"}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
