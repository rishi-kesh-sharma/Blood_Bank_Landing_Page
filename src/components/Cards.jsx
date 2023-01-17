import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./";
import KeepMountedModal from "./Modal";

const Cards = ({ cardsData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentModalId, setCurrentModalId] = useState(null);

  if (!cardsData) return "loading...";
  return (
    <div className=" grid w-[80%] max-w-[100rem] mx-auto   gap-[1rem] mt-[3rem]   grid-cols-2 place-items-start   sm:grid-cols-3 sm:gap-[2rem]  md:grid-cols-3 md:gap-[2rem] lg:mt-[2rem]   md:my-[2.5rem] lg:mb-[4rem] xl:grid-cols-4   xl:mx-auto  xl:mt-[4rem] 2xl:mx-[auto] 2xl:mt-[5rem] 2xl:grid-cols-5 2xl:max-w[3000px]">
      {cardsData?.banks?.map((cardItem, index) => {
        // const { title, count, icon } = cardItem;
        return (
          <Card
            cardItem={cardItem}
            open={openModal}
            setOpen={setOpenModal}
            setCurrentModalId={setCurrentModalId}
          />
        );
      })}
      <KeepMountedModal
        cardsData={cardsData}
        open={openModal}
        setOpen={setOpenModal}
        currentModalId={currentModalId}
      />
    </div>
  );
};

export default Cards;
