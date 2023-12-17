import { MdOutlineAttachEmail } from "react-icons/md";

function Newsletter() {
  return (
    <div className="hidden md:block bg-white rounded-sm p-2 shadow-sm">
      <h4 className="font-semibold text-xl mb-4 p-2 flex items-center gap-4">
        <span>
          <MdOutlineAttachEmail />
        </span>
        <p>Email me for jobs</p>
      </h4>
      <p className=" text-stone-700 px-4 mb-2">
        Insert your email and we will response to you if there is a job
        available for you
      </p>
      <div className="px-4 mb-4">
        <input
          type="text"
          placeholder="name@mail.com"
          className="border border-stone-400 rounded-sm px-3 py-1"
        />
      </div>

      <button className="mx-4 w-[40%] bg-indigo-500 px-4 py-2 text-white font-semibold rounded-md">
        Subscribe
      </button>
    </div>
  );
}

export default Newsletter;
