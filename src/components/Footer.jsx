// import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
// import { footerLinks } from "../assets/data";

import React from "react";
function Footer() {
  return (
    <div className="footerContainer bg-red-500  bg-cover w-[100%] ">
      <div className="footerContent ">
        <div className="footerFirstOne">
          <BiDonateBlood className=" text-white text-2xl" />
          <span
            // className="logoText"
            style={{ fontSize: "1.25rem", color: "#fff" }}>
            <span style={{ fontSize: "1.5rem", color: "#fff" }}>B</span>Donor
          </span>
        </div>

        <div className="fotterFirstTwo">
          <AiOutlineMail className="text-white text-2xl" />
          <span style={{ color: "#fff", marginLeft: "0.9rem" }}>
            bdonor@apptech.com
          </span>
        </div>
        <span className="footerServiceHeading">Services</span>
        <span className="aboutUsHeading">About Us</span>
        <span className="ourAddressHeading">Our Address</span>
        <span className="eachService1">Service i</span>
        <span className="eachService2">Service ii</span>
        <span className="eachService3">Service iii</span>
        <span className="eachService4">Service iv</span>

        <span className="eactAboutUs1">About Us</span>
        <span className="eactAboutUs2">Contact Us</span>
        <span className="eactAboutUs3">Home</span>
        <span className="eactAboutUs4">Blog</span>
        <span className="eactAboutUs5">Donate</span>

        <span className="streetName">1390 Ratomato Street,</span>
        <span className="cityName">Baneshwor- Kathmandu, Nepal</span>
        <span className="postal">08834</span>

        <span className="copy">Copyright@apptech software inc</span>
        <span className="by">bdonor@apptech.com</span>
      </div>
    </div>
  );
}

export default Footer;
