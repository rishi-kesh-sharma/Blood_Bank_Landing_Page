import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import axios from "axios";
import Pagination from "./Pagination";

const BloodBanks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsData, setCardsData] = useState(null);
  useEffect(() => {
    const getBanks = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/bank/all?keyword=${searchQuery}&page=${currentPage}`
      );
      setCardsData(response.data);
    };
    getBanks();
  }, [searchQuery, currentPage]);
  return (
    <div id="banks" className="my-[3rem] container max-w-[3000px]">
      <h1 className="my-[1rem] text-center text-[2rem] md:text-[2.4rem] md:my-[2rem] lg:text-[2.7rem] xl:text-[3rem] 2xl:text-center w-[100vw] 2xl:text-5xl 2xl:mb-[8rem]">
        Our <span className="text-red-500">Banks</span>
      </h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Cards cardsData={cardsData} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        next={cardsData?.next}
        prev={cardsData?.prev}
      />
    </div>
  );
};

export default BloodBanks;
