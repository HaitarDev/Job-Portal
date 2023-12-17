import { useState } from "react";
import Card from "./Card";
import Newsletter from "./Newsletter";
import Sidebar from "./sidebar/Sidebar";
import ReactPaginate from "react-paginate";

/* eslint-disable react/prop-types */
function Main({ jobs }) {
  // PAgination
  const [pageNumber, setPageNumber] = useState(0);

  const jobPerPage = 6;
  const pagesVisited = pageNumber * jobPerPage;

  const displayJobs = jobs
    .slice(pagesVisited, pagesVisited + jobPerPage)
    .map((job) => {
      return <Card job={job} key={job.companyName + Math.random() * 100} />;
    });

  const pageCount = Math.ceil(jobs.length / jobPerPage);
  console.log(pagesVisited);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // other
  return (
    <div className=" bg-stone-100">
      <div className="max-w-screen-2xl container px-4 mx-auto py-5 mb-12 grid grid-cols-4 gap-8">
        {/* sidebar */}
        <Sidebar />
        {/* cards */}
        {displayJobs.length === 0 ? (
          <div className="col-span-2 bg-white text-center font-semibold text-lg py-20  shadow-sm lg:min-h-[65vh]">
            <p>There is no jobs</p>
          </div>
        ) : (
          <div className="col-span-2 bg-white rounded-sm p-2 shadow-sm lg:min-h-[65vh]">
            <h4 className="font-semibold text-xl mb-4 p-2">
              {displayJobs.length} Jobs
            </h4>

            <div className="flex flex-col gap-2 lg:gap-4 px-6 mb-2">
              {displayJobs}
              <div className="my-2">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="paginationBttns"
                  previousLinkClassName="previousBttn"
                  nextLinkClassName="nextBttn"
                  disabledClassName="paginationDisabled"
                  activeClassName="pagintionActive"
                />
              </div>
            </div>
          </div>
        )}
        {/* notifications */}
        <Newsletter />
      </div>
    </div>
  );
}
export default Main;
