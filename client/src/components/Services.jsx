import React from "react";
import {useNavigate} from "react-router-dom";
import {useLangauges} from "../contexts/Langauges";

const Group = ({image, nameGroup}) => {
  const navigait = useNavigate();
  return (
    <figure
      key={nameGroup}
      className=" rounded-md max-w-[400px] h-[290px] relative drop-shadow-2xl my-4 transition duration-200 cursor-pointer z-40"
      onClick={() => navigait(`/${nameGroup}`)}
    >
      <img
        src={image}
        alt="Trulli"
        className={"w-full h-80 transform	transition duration-400 "}
      />
      <figcaption className="absolute top-10 right-10 text-white font-bold bg-[#00000038]  p-4">
        <h1 className="text-xl">{nameGroup}</h1>
      </figcaption>
    </figure>
  );
};

const Services = () => {
  const langaugesContext = useLangauges();
  return (
    <section
      className="flex flex-col gap-2 justify-center items-center w-full p-2"
      id=""
    >
      <h2 className="text-3xl">
        {langaugesContext.langauge === "ar" ? "الأقسام" : "Sections"}
      </h2>
      <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
        <div className="w-20 h-[2px] bg-gray-400"></div>
        {"///"}
        <div className="w-20 h-[2px] bg-gray-400"></div>
      </div>
      <div className="flex justify-center flex-wrap gap-10 w-full hover01 column">
        <Group
          image="/images/abaya/photo6021473282487858379.jpg"
          nameGroup={
            langaugesContext.langauge === "ar"
              ? "المجموعة اليومية"
              : "Daily group"
          }
        />
        <Group
          image="/images/abaya/download.jpg"
          nameGroup={
            langaugesContext.langauge === "ar"
              ? "مجموعة المناسبات"
              : "Occasion group"
          }
        />
        <Group
          image="/images/abaya/6983311-1872109381.jpg"
          nameGroup={
            langaugesContext.langauge === "ar"
              ? "المجموعة الشتوية"
              : "Winter group"
          }
        />
        <Group
          image="/images/abaya/6983311-1872109381.jpg"
          nameGroup={
            langaugesContext.langauge === "ar"
              ? "المجموعة العملية"
              : "Working group"
          }
        />
      </div>
    </section>
  );
};

export default Services;
