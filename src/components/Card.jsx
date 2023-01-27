import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const Card = ({ cardItem, open, setOpen, setCurrentModalId }) => {
  const { bankname, address, socialMediaHandles } = cardItem;
  // const { facebook, instagram, twitter, linkedin } = socialMediaHandles;
  const handleOpen = (e) => {
    setOpen(true);
    setCurrentModalId(cardItem._id);
  };

  return (
    <div
      onClick={handleOpen}
      className=" hover:scale-105 cursor-pointer transition-all bg-white card h-[7rem] pl-[1rem] border-gray-300 border-[2px] drop-shadow-lg rounded-lg flex flex-col items-start justify-center gap-[0.5rem] w-[8.5rem]   sm:w-[10rem] md:w-[10rem] lg:w-[13rem] lg:h-[10rem] xl:w-[15rem]  home_card"
    >
      <h2 className="font-semibold text-red-500 text-lg md:text-lg lg:text-xl xl:text-2xl">
        {bankname}
      </h2>
      <h2 className="font-semibold md:text-lg lg:text-xl xl:text-2xl">
        {address}
      </h2>
      <div className="text-xs text-gray-900  md:text-sm lg:text-xl flex items-center gap-[0.5rem]">
        <a href={socialMediaHandles?.facebook}>
          <BsFacebook />
        </a>
        <a href={socialMediaHandles?.instagram}>
          <BsInstagram />
        </a>
        <a href={socialMediaHandles?.twitter}>
          <BsTwitter />
        </a>
        <a href={socialMediaHandles?.linkedin}>
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Card;
