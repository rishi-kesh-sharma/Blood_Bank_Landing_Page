import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Button = styled.button`
  box-sizing: border-box;
  width: ${(props) => (props.mdWidth ? props.mdWidth : "md:2rem")};
  height: ${(props) => (props.mdHeight ? props.mdHeight : "md:2rem")};
  background: ${({ redBackground }) => (redBackground ? "#dbdbdb" : "#b02319")};
  border-radius: 16px;
  color: ${({ redBackground }) => (!redBackground ? "#dbdbdb" : "#b02319")};
  // white;
`;
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isOnSmDevice, setIsOnSmDevice] = useState(false);
  const [redBackground, setRedBackground] = useState(false);
  const handleResize = (e) => {
    if (window.innerWidth >= 768) return setIsOnSmDevice(false);
    setIsOnSmDevice(true);
  };

  const handleNavLinksClick = (e) => {
    setShow(false);
  };

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 10) return setRedBackground(true);
    setRedBackground(false);
  });

  window.addEventListener("resize", handleResize);
  useEffect(() => {
    if (window.innerWidth >= 768) return setIsOnSmDevice(false);
    return setIsOnSmDevice(true);
  }, []);

  return (
    <div className="relative min-h-[100px] " style={{ zIndex: 1000 }}>
      {!show && (
        <FiMenu
          className="fixed z-[5000] text-gray-300 text-bold top-6 right-[3rem] text-4xl font-extralight md:hidden"
          onClick={(e) => setShow(true)}
        />
      )}
      {show && (
        <RxCross1
          className="fixed text-red-500 top-[2rem] text-3xl  left-2 z-50 md:hidden"
          onClick={(e) => setShow(false)}
        />
      )}

      {/* navbar for small device */}
      {show && isOnSmDevice && (
        <div className="bg-slate-200 md:hidden   text-red-600 fixed left-0 z-40  right-0 top-0 h-[100vh] ">
          <ul className="flex flex-col w-[100vw] items-center justify-center h-[100vh]  py-[3rem] md:hidden lg:hidden  max-h-[60rem] gap-[0.7rem]">
            <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold  ">
              <a href="#home">Home</a>
            </li>
            <hr className="bg-purple-400  w-[100%] " />

            {/* <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold  ">
              <a href="#overview">Overview</a>
            </li> */}
            <hr className="bg-purple-400 w-[100%]" />
            <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold  ">
              <a href="#banks">Blood Banks</a>
            </li>
            <hr className="bg-purple-400 w-[100%]" />
            {/* <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold  ">
              <a href="#testimonials">Testimonials</a>
            </li> */}
            <hr className="bg-purple-400 w-[100%] " />
            {/* <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold  ">
              <a href="/blog">Blog</a>
            </li> */}
            <hr className="bg-purple-400 w-[100%]" />
            <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold  ">
              <a href="/buy">
                <Button mdWidth={"110px"} mdHeight={"40px"}>
                  Buy Now
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
      {!isOnSmDevice && (
        <ul
          style={{ zIndex: 1000 }}
          className={`  fixed text-gray-200   left-0 right-0  top-0   w-[100vw] flex items-center justify-center h-[5rem] md:h-[4rem] topbar ${
            redBackground ? "bg-[#b02319] " : "bg-transparent"
          }`}>
          <li className="mx-[1rem] py-[0.4rem] text-lg font-semibold  md:text-sm  ">
            <a href="#home">Home</a>
          </li>

          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="#overview">Overview</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="#features">Features</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="#testimonials">Screenshots</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="/blog">Blog</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="/buy">
              <Button
                mdWidth={"110px"}
                mdHeight={"40px"}
                redBackground={redBackground}>
                Donate Now
              </Button>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
