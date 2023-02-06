import React from "react";
import {Link} from "react-router-dom";
const Blog = ({blog}) => {
  const {img, by, date, title, id, _id} = blog;
  return (
    <Link to={`/blogs/${_id}`}>
      <div className="blog flex flex-col justify-between gap-y-2 w-80 h-80 sm:h-96 sm:w-96 hover:cursor-pointer shadow-2xl p-4 transition duration-300 hover:scale-105">
        <img
          src={img}
          alt=""
          className="w-96 rounded-xl transition duration-300 hover:opacity-70"
        />
        <h2 className="font-semibold">{title}</h2>
        <p className="font-bold text-sm text-green-800">
          <small className="text-gray-500">by</small> {by}
          <small className="text-gray-500"> on</small> {date}
        </p>
      </div>
    </Link>
  );
};

export default Blog;
