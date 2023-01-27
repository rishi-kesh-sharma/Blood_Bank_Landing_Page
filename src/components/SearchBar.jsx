import { useRef } from "react";

const SearchBar = ({ searchQuery, setSearchQuery, setCurrentPage }) => {
  const searchInputRef = useRef();
  const handleChange = () => {
    setSearchQuery(searchInputRef.current.value);
    setCurrentPage(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchQuery(searchInputRef.current.value);
    setCurrentPage(1);
  };
  return (
    <form className="content" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        ref={searchInputRef}
        type="text"
        id="search"
        placeholder="Search..."
        name="search"
        className="border-black inline-block border-[1px] border-solid py-[0.25rem] focus:border-none px-[1rem] lg:w-[16rem] xl:text-[1.18rem] xl:h-[2.5rem] 2xl:w-[24rem] 2xl:h-[3rem] 2xl:text-2xl"
      />
      <button
        type="submit"
        className="bg-red-500 text-gray-300 px-[0.7rem] py-[0.32rem] 2xl:text-2xl h-[2.5rem]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
