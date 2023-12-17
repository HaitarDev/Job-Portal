import Location from "./Location";
import Salary from "./Salary";
import DateOfPosting from "./DateOfPosting";

/* eslint-disable react/prop-types */
function Sidebar() {
  return (
    <div className="hidden md:block bg-white rounded-sm p-2 shadow-sm">
      {/* heading */}
      <h4 className="font-semibold text-xl mb-4 p-2 ">Filters</h4>
      {/* location */}
      <Location />
      {/* salary */}
      <Salary />
      {/* date of posting */}
      <DateOfPosting />
    </div>
  );
}
export default Sidebar;
