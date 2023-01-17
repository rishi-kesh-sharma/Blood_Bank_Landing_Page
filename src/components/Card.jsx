import React from "react";
const Card = ({ name, address, socials }) => {
  return (
    <div className=" bg-white card h-[5rem]    w-[8rem] md:w-[10rem] lg:w-[13rem] lg:h-[10rem] xl:w-[15rem]  home_card">
      <h2 className="font-semibold md:text-lg lg:text-xl xl:text-2xl">
        {name}
      </h2>
      <h2 className="font-semibold md:text-lg lg:text-xl xl:text-2xl">
        {address}
      </h2>
      <div className="text-xs font-semi md:text-sm lg:text-xl"> {socials}</div>
    </div>
  );
};

export default Card;
