import { useDispatch } from "react-redux";
import { filterByDays } from "../../slices/jobsSlice";

function DateOfPosting() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterByDays(e.target.value));
  };

  return (
    <div className="px-2 mb-2">
      <h4 className="font-medium text-lg">Date of posting</h4>

      {/* filters */}
      <form className="flex flex-col gap-2">
        <label htmlFor="all-time" className="flex items-center">
          <input
            type="radio"
            id="all-time"
            name="option"
            className=" h-5 w-5 text-blue-600"
            onChange={handleChange}
            value="all-time"
          />
          <span className="ml-2">All time</span>
        </label>
        <label htmlFor="last-24h" className="flex items-center">
          <input
            type="radio"
            id="last-24h"
            name="option"
            className=" h-5 w-5 text-blue-600"
            onChange={handleChange}
            value="last-24h"
          />
          <span className="ml-2">Last 24 hours</span>
        </label>
        <label htmlFor="last-7d" className="flex items-center">
          <input
            type="radio"
            id="last-7d"
            name="option"
            className=" h-5 w-5 text-blue-600"
            onChange={handleChange}
            value="last-7d"
          />
          <span className="ml-2">Last 7 days</span>
        </label>
        <label htmlFor="last-month" className="flex items-center">
          <input
            type="radio"
            id="last-month"
            name="option"
            className=" h-5 w-5 text-blue-600"
            onChange={handleChange}
            value="last-month"
          />
          <span className="ml-2">Last Month</span>
        </label>
      </form>
    </div>
  );
}
export default DateOfPosting;
