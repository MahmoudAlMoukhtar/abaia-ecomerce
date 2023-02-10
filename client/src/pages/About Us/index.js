import React from "react";
import {useLangauges} from "../../contexts/Langauges";

const AboutPage = () => {
  const langaugesContext = useLangauges();
  return (
    <div
      className={
        langaugesContext.langauge === "ar"
          ? "flex justify-center items-start gap-10 px-8 md:px-20 mt-20 text-end flex-col-reverse md:flex-row"
          : "flex justify-center items-start gap-10 px-8 md:px-20 mt-20 text-end flex-col-reverse md:flex-row-reverse"
      }
    >
      <div className="flex flex-col  justify-end items-end gap-8 w-full md:w-1/2">
        <h3 className="text-2xl font-semibold">
          {langaugesContext.langauge === "ar" ? "من نحن" : "About us"}
        </h3>
        <div className="flex justify-end items-center gap-2 text-gray-400 tracking-[-3px] text-gray-300">
          <div className="w-20 h-[2px] bg-gray-400" />
          {"///"}
          <p className="tracking-[+10px]">About company</p>
        </div>
        <p className="">
          ميليسيا شركة كويتية لتصميم وتنفيذ الازياء النسائية المنتجات المتوفره
          في المتجر تقوم على اساس عاملين : الخام والخياطة . ونحن هنا في ميليسيا
          تعاملنا باهتمام شديد بكل عاملٍ على حدا ، فحرصنا على اختيار اجود انواع
          الاقمشة من كوريا و اليابان . آخذين بالاعتبار طلبات المرأة الخليجية في
          لبس العباة من نوعية الملمس وشدة السواد وتماسك الخام لفترات طويلة ،
          ولابد لهذه الخامه الجميلة ان تحضى بخياطه على نفس المستوى ، لذلك كانت
          متطلبات السيرة الذاتية صعبة للعمل لدينا لشتراطاتنا الكثيره ومما يمييز
          شركة ميليسيا توفير ملابس للمحجبات لجميع المناسبات مثل العبايات
          اليومية، عبايات المناسبات وثياب العمل والسفر
        </p>
      </div>

      <div>
        <img
          src="/images/abaya/about_us.jpeg"
          alt="about us"
          className="w-full md:w-[600px] rounded-md"
        />
      </div>
    </div>
  );
};

export default AboutPage;
