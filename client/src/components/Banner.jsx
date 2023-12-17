/* eslint-disable react/prop-types */
import Input from "./Input";
import { FiSearch } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByQuery } from "../slices/jobsSlice";

function Banner() {
  const dispatch = useDispatch();
  //  ----------query states --------
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue, locationValue);
    dispatch(filterByQuery({ searchValue, locationValue }));
  };
  return (
    <div className="max-w-screen-2xl container px-4 mx-auto py-5">
      {/* title and description */}
      <div className="mb-8">
        <h1 className="text-5xl  font-semibold mb-4">
          Find your <span className="text-indigo-600">new job</span> today
        </h1>
        <p className="text-gray-600 lg:text-lg">
          Thousands of jobs in the computer, engineering and technology sectors
          are waiting for you.
        </p>
      </div>
      {/* inputs */}
      <form className="flex gap-1 flex-col xl:flex-row" onSubmit={handleSubmit}>
        <Input
          placeholder={"What position are you looking for ?"}
          icon={<FiSearch />}
          setter={setSearchValue}
          value={searchValue}
        />
        <Input
          placeholder={"Location"}
          icon={<CiLocationOn />}
          setter={setLocationValue}
          value={locationValue}
        />
        <button
          type="submit"
          className="bg-blue-500 px-6 py-2 rounded-md text-white font-semibold w-32 "
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Banner;
