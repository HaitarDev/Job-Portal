import { useEffect, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Postjob() {
  // store data ...
  const [newJob, setNewJob] = useState({});

  // navigate
  const navigate = useNavigate();
  // React Hook Form -----
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = (data) => {
    data.skillSets = selectedOption;
    console.log(data);
    setNewJob({ ...data, companyLogo: data.companyLogo[0].name });
  };

  // Select Options for tags -----
  const options = [
    { value: "javascript", label: "Javascript" },
    { value: "nodejs", label: "Nodejs" },
    { value: "c++", label: "C++" },
    { value: "python", label: "Python" },
    { value: "redux", label: "Redux" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "ruby", label: "Ruby" },
    { value: "php", label: "Php" },
    { value: "react", label: "React" },
    { value: "mongodb", label: "MongoDB" },
  ];

  // POST REQUEST ----------
  useEffect(() => {
    fetch("http://localhost:3000/jobs/post-job", {
      method: "POST",
      body: JSON.stringify(newJob),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (isSubmitSuccessful) navigate("/");
      });
  }, [newJob, reset, navigate, isSubmitSuccessful]);

  return (
    <div className="max-w-screen-2xl container px-16 mx-auto py-10 bg-stone-100">
      <form
        className="grid grid-cols-2 gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-xl">
            Job Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm focus:outline-indigo-300"
            placeholder="ex: Software Developer"
            {...register("jobTitle", { required: true })}
          />
          {/* {if(newJob) <span className="text-red-600"></span>} */}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company-name" className="text-xl">
            Company Name
          </label>
          <input
            type="text"
            id="company-name"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300"
            placeholder="ex: Insert your company name"
            {...register("companyName", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="min" className="text-xl">
            Minimum Salary
          </label>
          <input
            type="text"
            id="min"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300"
            placeholder="ex: $70"
            {...register("minPrice", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="max" className="text-xl">
            Maximum Salary
          </label>
          <input
            type="text"
            id="max"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300"
            placeholder="ex: $140"
            {...register("maxPrice", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="salary-type" className="text-xl">
            Salary Type
          </label>
          <select
            name="options"
            id="salary-type"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300 bg-white"
            {...register("salaryType", { required: true })}
          >
            <option value=""> Select your salary type</option>
            <option value="hourly">Hourly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-xl">
            Job Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300"
            placeholder="ex: $New York"
            {...register("jobLocation", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="postDate" className="text-xl">
            Job Posting Date
          </label>
          <input
            type="date"
            id="postDate"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300"
            placeholder="ex: $140"
            {...register("postingDate", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="expLevel" className="text-xl">
            Experience Level
          </label>
          <select
            name="options"
            id="expLevel"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300 bg-white"
            {...register("experienceLevel", { required: true })}
          >
            <option value=""> Select your experience level</option>
            <option value="Any experience">Any experience</option>
            <option value="Internship">Internship</option>
            <option value="Work remotely">Work remotely</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <label htmlFor="skillSets" className="text-xl">
            Required Skill Sets:
          </label>
          <Select
            id="skillSets"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isMulti
            // {...register("skillSets")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="logo" className="text-xl">
            Company Logo
          </label>
          <input
            type="file"
            id="logo"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300 bg-white"
            placeholder="Company Logo"
            {...register("companyLogo")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="emp-type" className="text-xl">
            Employment Type
          </label>
          <select
            name="options"
            id="emp-type"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300 bg-white"
            {...register("employmentType", { required: true })}
          >
            <option value=""> Select your job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Temporary">Temporary</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <label htmlFor="desc" className="text-xl">
            Job Description
          </label>
          <textarea
            id="desc"
            type="text"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300"
            placeholder="Post a description for this job"
            {...register("description", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <label htmlFor="by" className="text-xl">
            Job Posted By
          </label>
          <input
            id="by"
            type="text"
            className="w-full px-2 py-1 border border-stone-300 rounded-sm  focus:outline-indigo-300"
            placeholder="ex: Your email"
            {...register("postedBy", { required: true })}
          />
        </div>
        <button className="bg-indigo-500 text-white text-lg font-semibold px-4 py-2 rounded-sm lg:w-40">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Postjob;
