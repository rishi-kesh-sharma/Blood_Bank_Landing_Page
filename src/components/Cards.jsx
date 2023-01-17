import { homeCardData as cardData } from "../assets/data";
import React from "react";
import { Card } from "./";

const Cards = () => {
  return (
    <div className=" grid w-[80%] max-w-[75rem] mx-auto  gap-[1rem] mt-[2rem]   grid-cols-1 grid-rows-4 place-items-start  sm:grid-rows-2 sm:grid-cols-2 sm:gap-[2rem] md:grid-rows-1 md:grid-cols-4 lg:grid-rows-1 md:gap-[2rem] lg:mt-[2rem]   md:my-[4rem] lg:mb-[10rem]    xl:mx-auto  xl:mt-[8rem] 2xl:mx-[auto] 2xl:mt-[20rem]">
      {cardData.map((cardItem, index) => {
        const { title, count, icon } = cardItem;
        return <Card key={index} title={title} count={count} icon={icon} />;
      })}
    </div>
  );
};

export default Cards;
