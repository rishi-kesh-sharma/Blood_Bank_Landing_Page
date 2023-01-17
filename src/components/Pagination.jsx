import React from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
const Pagination = ({ currentPage, setCurrentPage, prev, next }) => {
  console.log(currentPage);
  const handlePrevClick = (e) => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNextClick = (e) => {
    if (!next) return;
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="h-[7rem] flex justify-center items-center gap-[1rem] md:h-[3rem] md:justify-start md:w-[80%] mx-auto lg:h-[2rem]">
      <button disabled={!prev && true}>
        {" "}
        <BsArrowLeftSquare
          onClick={handlePrevClick}
          className="bg-red-500  text-[2.4rem] rounded-md text-white"
        />
      </button>
      <button disabled={!next && true}>
        {" "}
        <BsArrowRightSquare
          onClick={handleNextClick}
          className="bg-red-500  text-[2.4rem] rounded-md"
          style={{ color: "white" }}
        />
      </button>
    </div>
  );
};

export default Pagination;
