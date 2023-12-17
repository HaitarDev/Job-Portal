import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { format, parseISO } from "date-fns";

/* eslint-disable react/prop-types */
function Card({ job }) {
  const {
    companyLogo,
    companyName,
    description,
    employmentType,
    jobLocation,
    jobTitle,
    maxPrice,
    minPrice,
    postingDate,
  } = job;

  // format date :
  const inputDate = parseISO(postingDate);
  const formattedDate = format(inputDate, "yyyy-MM-dd");

  return (
    <div className="py-3 px-5  border-2 border-stone-200  flex flex-col lg:flex-row gap-4 cursor-pointer">
      {/* logo */}
      <div>
        <img src={companyLogo} alt={companyLogo} className="lg:w-[160px]" />
      </div>
      {/* main */}
      <div>
        <p className="text-stone-500 mb-1">{companyName}</p>
        <h4 className="font-semibold text-lg mb-2">{jobTitle}</h4>
        {/* some info */}
        <div className="text-stone-500 flex flex-col lg:flex-row  gap-1 md:gap-2 lg:gap-4 mb-2">
          <div className="flex items-center">
            <IoLocationOutline /> {jobLocation}
          </div>
          <div className="flex items-center">
            <MdOutlineAccessTime /> {employmentType}
          </div>
          <div className="flex items-center">
            <BsCurrencyDollar /> {minPrice} - {maxPrice}K
          </div>
          <div className="flex items-center">
            <MdDateRange /> {formattedDate}
          </div>
        </div>
        {/* description */}
        <div className="text-stone-500  lg:pr-10">{description}</div>
      </div>
    </div>
  );
}
export default Card;
