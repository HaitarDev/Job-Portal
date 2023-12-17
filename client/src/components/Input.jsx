/* eslint-disable react/prop-types */
function Input({ placeholder, icon, setter, value }) {
  const handleClick = (e) => {
    setter(e.target.value);
  };

  return (
    <div className="relative">
      <input
        onChange={handleClick}
        value={value}
        type="text"
        placeholder={placeholder}
        className="py-2 px-4 border border-slate-500 rounded-sm active:ring-0 active:shadow-none lg:min-w-[700px] w-[350px] pl-8 "
      />
      <div className="absolute top-[4px] left-2 translate-y-1/2 text-lg">
        {icon}
      </div>
    </div>
  );
}
export default Input;
