import { useDispatch } from "react-redux";
import { filterByLocation } from "../../slices/jobsSlice";

/* eslint-disable react/prop-types */
function Location() {
  const dispatch = useDispatch();

  // handler
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(filterByLocation(e.target.value));
  };

  return (
    <div className="px-2 mb-4">
      <h4 className="font-medium text-lg">Location</h4>
      {/* radio */}
      <form className="flex flex-col gap-2">
        <label htmlFor="all" className="flex items-center">
          <input
            type="radio"
            id="all"
            name="option"
            className=" h-5 w-5 text-blue-600"
            onChange={handleChange}
            value="all"
          />
          <span className="ml-2">All</span>
        </label>
        <label htmlFor="london" className="flex items-center">
          <input
            type="radio"
            id="london"
            name="option"
            className=" h-5 w-5 text-blue-600"
            onChange={handleChange}
            value="london"
          />
          <span className="ml-2">London</span>
        </label>
        <label htmlFor="seatle" className="flex items-center">
          <input
            type="radio"
            id="seatle"
            name="option"
            className=" h-5 w-5 text-blue-600"
            value="seatle"
            onChange={handleChange}
          />
          <span className="ml-2">Seatle</span>
        </label>
        <label htmlFor="madrid" className="flex items-center">
          <input
            type="radio"
            id="madrid"
            name="option"
            className=" h-5 w-5 text-blue-600"
            value="madrid"
            onChange={handleChange}
          />
          <span className="ml-2">Madrid</span>
        </label>
        <label htmlFor="boston" className="flex items-center">
          <input
            type="radio"
            id="boston"
            name="option"
            className=" h-5 w-5 text-blue-600"
            value="boston"
            onChange={handleChange}
          />
          <span className="ml-2">Boston</span>
        </label>
      </form>
    </div>
  );
}
export default Location;
