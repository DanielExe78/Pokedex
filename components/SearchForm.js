import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useGlobalContext } from "../context/Context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const [isSearching, setIsSearching] = useState(false);
  const searchValue = React.useRef("");

  /* <HiOutlineMagnifyingGlass size={30} /> */

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchValue.current.value.toLowerCase());
    searchValue.current.value = "";
    setIsSearching(false);
  };

  return (
    <form onSubmit={handleSubmit} className="absolute top-3 right-2">
      <span
        onClick={() => setIsSearching(!isSearching)}
        className={`cursor-pointer absolute inset-y-0 left-0 flex items-center pl-2 text-black ${
          isSearching ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        <HiOutlineMagnifyingGlass size={30} />
      </span>
      <div className={`text-black ${isSearching && "animate-slide-in"}`}>
        <input
          type="text"
          ref={searchValue}
          placeholder="Search Pokemon"
          className={`${
            isSearching
              ? "w-[170px] focus:border-blue-800 border-b focus:outline-none"
              : "w-0"
          } h-[30px] border-b-blue-800 pl-9 bg-inherit placeholder:text-slate-950`}
        />
      </div>
    </form>
  );
};

export default SearchForm;
