import { useDispatch } from "react-redux";
import { filterBySalary } from "../../slices/jobsSlice";

function Salary() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterBySalary(e.target.value));
  };
  return (
    <div className="px-2 mb-2">
      <h4 className="font-medium text-lg">Salary</h4>
      {/* options */}
      <main className="grid w-full place-items-center">
        <div className="grid w-[300px] grid-cols-4 gap-2 rounded-xl bg-stone-100 p-2">
          <div>
            <input
              type="radio"
              name="option"
              id="hourly"
              value="hourly"
              className="peer hidden"
              onChange={handleChange}
            />
            <label
              htmlFor="hourly"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
            >
              Hourly
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="option"
              id="monthly"
              value="monthly"
              className="peer hidden"
              onChange={handleChange}
            />
            <label
              htmlFor="monthly"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
            >
              Monthly
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="option"
              id="yearly"
              value="yearly"
              className="peer hidden"
              onChange={handleChange}
            />
            <label
              htmlFor="yearly"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
            >
              Yearly
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="option"
              id="all-types"
              value="all-types"
              className="peer hidden"
              onChange={handleChange}
            />
            <label
              htmlFor="all-types"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
            >
              All
            </label>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Salary;
