import React from "react";
import { UilSearch } from "@iconscout/react-unicons";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="flex p-2 mt-4 mb-6 align-middle rounded-md bg-darkMain text-darkText">
      <UilSearch size="1.3em" className="mr-3 mt-0.5" />
      <input
        type="text"
        placeholder="Type to search"
        className="border-none bg-darkMain focus:outline-none"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default Search;
