import React from "react";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";
import Blog from "./Blog";
import useFetch from "../services/useFetch";

const Blogs = ({page}) => {
  const {data: blogs, error, loading} = useFetch("blogs");
  if (error) throw error;
  if (loading || blogs.length === 0) return <Spinner />;
  const blogsAfterSort = blogs.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const blogsAfterSlice =
    page !== "blogs" ? blogsAfterSort.slice(0, 3) : blogsAfterSort;
  return (
    <section id="blogs">
      <div
        id="bolgs-sec-container"
        className="contanier xl:px-16 lg:px-8 px-6 flex flex-col justify-between gap-y-20"
      >
        {page !== "blogs" && (
          <React.Fragment>
            <div className="w-full">
              <h1 className="text-center text-6xl font-bold">BLOGS</h1>
            </div>
            <div id="bolgs-sec-nav" className="flex justify-between">
              <h1 className="md:text-3xl sm:text-sm font-semibold">
                Recent Blog
              </h1>
              <Link
                to="/blogs"
                className="font-semibold text-sm underline decoration-2"
              >
                View All Posts
              </Link>
            </div>
          </React.Fragment>
        )}
        <div
          id="bolgs-sec-last3Blogs"
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {blogsAfterSlice.map(b => (
            <Blog blog={b} key={b.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blogs;
