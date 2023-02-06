import React from "react";
import Header from "../../common/Navbar";
import Blogs from "../../components/Blogs";
import MainHeader from "../../components/MainHeader";

const BlogsPage = () => {
  return (
    <React.Fragment>
      <MainHeader title="Blogs" />
      <Blogs page="blogs" />
    </React.Fragment>
  );
};

export default BlogsPage;
