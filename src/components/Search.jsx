import React from "react";
import icons from "../utils/icons";

const { FaSearch } = icons;
const Search = () => {
  return (
    <div className="w-full flex items-center bg-[#dde4e4] rounded-[20px] ">
      <span className="h-10 px-4 flex items-center justify-center text-gray-500 ">
        <FaSearch size={24} />
      </span>
      <input
        type="text"
        className="outline-none py-2  h-10 border-gray-600 w-full text-gray-500"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
};

export default Search;
