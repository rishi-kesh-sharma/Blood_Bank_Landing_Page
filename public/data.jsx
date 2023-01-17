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

const products = [
  {
    icon: (
      <CiSettings className="font-semibold text-5xl bg-[#C6BFFB] p-[10px] rounded  md:text-5xl md:rounded-lg  lg:text-7xl" />
    ),
    title: "Best for organize and  customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <button className="bg-[#bd87f6] px-3 py-1 text-white rounded-xl md:rounded-xl lg:rounded-3xl ">
        Get Now
      </button>
      // lg:px-[2rem] lg:py-[0.5rem]
    ),
    image: "product1.png",
    isPositionReverse: false,
  },
  {
    icon: (
      <HiOutlineAdjustmentsVertical className="font-semibold text-5xl bg-[#C6BFFB] p-[3px] rounded  md:text-5xl md:rounded-lg md:p-2 lg:text-7xl" />
    ),
    title: "Best for organize and customize easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s,",
    button: (
      <button className="bg-[#bd87f6] px-3 py-1 text-white  rounded-xl md:rounded-xl lg:rounded-3xl lg:px-[2rem] lg:py-[0.5rem]">
        Get Now
      </button>
    ),
    image: "product2.png",
    isPositionReverse: true,
  },
];

const CenterImage = () => {
  return (
    <div className="w-[100%] lg:w-[35%] ">
      <div className="w-[80%] mx-auto max-w-[25rem]  grid place-items-center bg-[url(hexagon.png)] bg-contain bg-no-repeat  md:bg-contain p-10 bg-center  ">
        <img
          className="object-contain w-[100%] max-w-[25rem]  lg:min-h-[20rem] lg:max-h-[30rem] lg:w-[90%] lg:max-w-[500px]"
          src="product2.png"
          alt=""
        />
      </div>
    </div>
  );
};

const features = [
  {
    title: "Lorem Impulse Topic",
    icon: (
      <CiSettings className="  cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl  mt-2 rounded-full   p-2  md:text-5xl md:p-1 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <HiOutlineAdjustmentsVertical className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl  mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BiLike className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl  mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    centerImage: <CenterImage key={"center image"} />,
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <IoExpandOutline className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl  mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BsShare className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl  mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
  {
    title: "Lorem Impulse Topic",
    icon: (
      <BsDownload className=" cursor-pointer m-auto bg-[#C6BFFB] color-[#2F2F2F] text-5xl  mt-2 rounded-full   p-2  md:text-5xl md:p-2 lg:text-6xl lg:p-2 " />
    ),
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint   aliquid beatae magnam est ab, iusto labore totam vero dicta velit nam id quasi, quos ratione. Vero porro deleniti perferendis?`",
  },
];

const footerLinks = {
  services: [
    {
      name: "Service1",
      path: "/service1",
    },

    {
      name: "Service2",
      path: "/service2",
    },
    {
      name: "Service3",
      path: "/service3",
    },
    {
      name: "Service4",
      path: "/service4",
    },
    {
      name: "Service1",
      path: "/service1",
    },
    {
      name: "Service5",
      path: "/service5",
    },
  ],
  aboutUs: [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Donate",
      path: "/donate",
    },
  ],
};

const users = [
  {
    profile: "../../public/product1.png",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" key={"1"} />,
      <AiFillStar className="starImg" key={"2"} />,
      <AiFillStar className="starImg" key={"3"} />,
      <AiFillStar className="starImg" key={"4"} />,
    ],
  },
  {
    profile: "../../public/profile.jpg",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" key={"1"} />,
      <AiFillStar className="starImg" key={"2"} />,
      <AiFillStar className="starImg" key={"3"} />,
      <AiFillStar className="starImg" key={"4"} />,
    ],
  },
  {
    profile: "../../public/profile.jpg",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" key={"1"} />,
      <AiFillStar className="starImg" key={"2"} />,
      <AiFillStar className="starImg" key={"3"} />,
      <AiFillStar className="starImg" key={"4"} />,
    ],
  },
  {
    profile: "../../public/profile.jpg",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" key={"1"} />,
      <AiFillStar className="starImg" key={"2"} />,
      <AiFillStar className="starImg" key={"3"} />,
      <AiFillStar className="starImg" key={"4"} />,
    ],
  },
  {
    profile: "../../public/profile.jpg",
    name: "Pradip Sharma",
    from: "kathmandu",
    data: "Lorem Ipsum is simply dummy text of the printing simply dummy. Lorem Ipsum is a simply dummy text of the printing simply dummy. Lorem Ipsum is simply dummy text of the printing simply dummy. ",
    stars: [
      <AiFillStar className="starImg" key={"1"} />,
      <AiFillStar className="starImg" key={"2"} />,
      <AiFillStar className="starImg" key={"3"} />,
      <AiFillStar className="starImg" key={"4"} />,
    ],
  },
];
export default users;

export { features, footerLinks, homeCardData, users, products };
