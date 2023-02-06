import React from "react";

let feachers = [
  {
    id: 1,
    icon: "/images/truck.svg",
    title: "Fast & free shipping",
    descripe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus animi possimus!",
  },
  {
    id: 2,
    icon: "/images/bag.svg",
    title: "Fast & free shipping",
    descripe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus animi possimus!",
  },
  {
    id: 3,
    icon: "/images/support.svg",
    title: "Fast & free shipping",
    descripe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus animi possimus!",
  },
  {
    id: 4,
    icon: "/images/return.svg",
    title: "Fast & free shipping",
    descripe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus animi possimus!",
  },
];

const Feacher = ({feacher}) => {
  const {title, icon, descripe} = feacher;
  return (
    <div
      id="card-feacher"
      className="flex flex-col justify-cneter items-center text-center gap-y-4 lg:w-56 border-2 bg-gray-100 rounded"
    >
      <div className="flex justify-start">
        <img src={icon} alt="" width={40} height={40} />
      </div>
      <h1 className="text-md">{title}</h1>
      <p className="text-gray-400 text-sm">{descripe}</p>
    </div>
  );
};

const WhyChoose = () => {
  return (
    <section id="why-chose" className="mt-40 flex flex-col gap-8">
      <div
        id="why-sec-text"
        className="flex flex-col justify-center items-center text-center gap-y-2"
      >
        <h1 id="why-sec-title" className="text-3xl font-semibold">
          Why Choose Us
        </h1>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam
          minus laudantium, ducimus rem officia? laudantium, ducimus rem
          officia?
        </p>
      </div>
      <div
        id="why-sec-conatiner"
        className="flex flex-col justify-between items-center lg:justify-center md:flex-row px-8 gap-8 xl:gap-16"
      >
        <div
          id=""
          className="flex flex-col items-center justify-center gap-y-12"
        >
          <div id="testest" className="grid grid-cols-2	 gap-2   ">
            {feachers.map(feacher => {
              return <Feacher feacher={feacher} key={feacher.id} />;
            })}
          </div>
        </div>
        <img
          id="why-choose-us-img"
          src="/images/why-choose-us-img.jpg"
          alt=""
          className="md:w-[400px] lg:w-[450px] xl:w-[500px] rounded-md"
        />
      </div>
    </section>
  );
};

export default WhyChoose;
