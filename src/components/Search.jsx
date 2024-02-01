import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import RecipeResults from "./RecipeResults";

function Search() {
  const [searchItem, setSearchItem] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const changeHandler = (event) => {
    setSearchItem(event.target.value);
    setSubmitted(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="relative flex flex-col justify-center items-center"
    >
      <div className="w-[500px] relative">
        <input
          onChange={changeHandler}
          value={searchItem}
          type="search"
          placeholder="eg. Cake, Vegan, Chicken"
          className="w-full p-4 rounded-full bg-transparent border-[2px] border-black font-alata"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-300 rounded-full text-xl"
        >
          <AiOutlineSearch />
        </button>
      </div>
      <div>
        <RecipeResults searchItem={searchItem} submitted={submitted} />
      </div>
    </form>
  );
}

export default Search;
