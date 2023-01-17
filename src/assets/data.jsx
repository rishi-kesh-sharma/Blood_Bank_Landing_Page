import { AiFillStar } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";

import { BsDownload, BsShare } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { IoExpandOutline } from "react-icons/io5";

const homeCardData = [
  {
    icon: (
      <BsDownload className="font-extrabold text-3xl bg-[#C6BFFB] p-[0.4rem] rounded md:text-3xl  md:rounded-md md:my-1 md:p-1 " />
    ),
    title: "Total downloads",
    count: "1.4M +",
  },
  {
    icon: (
      <BiLike className="font-extrabold text-3xl bg-[#C6BFFB] p-[3px] rounded md:text-3xl  md:rounded-md md:my-1 md:p-1 " />
    ),
    title: "Total reviews",
    count: "1.2M +",
  },
  {
    icon: (
      <BsShare className="font-extrabold text-3xl bg-[#C6BFFB] p-[3px] rounded md:text-3xl  md:rounded-md md:my-1 md:p-1 " />
    ),
    title: "Total shares",
    count: "1M +",
  },
  {
    icon: (
      <IoExpandOutline className="font-extrabold text-3xl bg-[#C6BFFB] p-[3px] rounded md:text-3xl  md:rounded-md md:my-1 md:p-1 " />
    ),
    title: "Total users",
    count: "1M +",
  },
];

export { homeCardData };
