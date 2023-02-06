import React from "react";
import Header from "../../common/Navbar";
import MainHeader from "../../components/MainHeader";
import {FiSend, FiPhoneCall} from "react-icons/fi";
import {MdOutlineEmail} from "react-icons/md";
const style = {
  color: "white",
  fontSize: "2.5em",
  backgroundColor: "#065717",
  paddingRight: "10px",
  paddingLeft: "10px",
  borderRadius: "4px",
};

const ContactPage = () => {
  return (
    <section id="contact-sec" className="flex flex-col justify-between gap-8">
      <MainHeader title={"Contact Us"} />
      <div
        id="container"
        className="contanier flex flex-col justify-between gap-y-20 lg:px-40"
      >
        <div
          id="info-contant"
          className="flex justify-center items-center flex-wrap gap-6"
        >
          <div className="flex items-center gap-x-4 w-64">
            <FiSend style={style} />
            <p className="md:text-sm">43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
          <div className="flex items-center gap-x-4 w-64">
            <MdOutlineEmail style={style} />
            <p>info@yourdomain.com</p>
          </div>
          <div className="flex items-center gap-x-2 w-64">
            <FiPhoneCall style={style} />
            <p>+1 294 3925 3939</p>
          </div>
        </div>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-y-8 px-6 my-20"
        >
          <label
            for="name"
            className="text-black font-semibold flex flex-col w-[100%]"
          >
            First Name
            <input
              type="text"
              name="name"
              id="name"
              className="border-2  px-4 py-2 rounded-lg w-[100%]"
            />
          </label>
          <label
            for="name"
            className="text-black font-semibold flex flex-col w-[100%]"
          >
            Last Name
            <input
              type="text"
              name="name"
              id="name"
              className="border-2  px-4 py-2 rounded-lg w-[100%]"
            />
          </label>
          <label for="email" className="text-black font-semibold w-[100%]">
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="border-2  px-4 py-2 rounded-lg w-[100%]"
            />
          </label>
          <label for="message" className="text-black font-semibold w-[100%]">
            Message
            <textarea
              name=""
              id=""
              cols={"100"}
              rows="5"
              className="border-2 w-[100%]"
            ></textarea>
          </label>
        </form>
      </div>
    </section>
  );
};
export default ContactPage;
