import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../slices/jobsSlice";
import Banner from "../components/Banner";
import Main from "../components/Main";

function HomePage() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();
  console.log(jobs);

  // -----------data states --------
  // const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data) console.log("loading..");
        dispatch(getJobs(data.data));
      });
  }, [dispatch]);

  return (
    <div>
      <Banner />
      <Main jobs={jobs} />
    </div>
  );
}
export default HomePage;
