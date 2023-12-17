import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const useOpenMenu = () => setIsOpenMenu((prev) => !prev);

  // select user
  const { user, isAuth } = useSelector((state) => state.user);

  const navbar = [
    { title: "Start a search", path: "/" },
    { title: "My Jobs", path: "/my-job" },
    { title: "Salary estimate", path: "/salary" },
    { title: "Post A Job", path: "/post-job" },
  ];
  return (
    <div>
      <header className="flex justify-between items-center max-w-screen-2xl container px-4 mx-auto py-5 mb-12 ">
        {/* logo */}
        <h2 className="text-xl font-semibold">JOB-PORTAL</h2>
        <div className="lg:hidden ">
          {isOpenMenu ? (
            <IoMdClose className="text-2xl" onClick={useOpenMenu} />
          ) : (
            <RxHamburgerMenu className="text-2xl" onClick={useOpenMenu} />
          )}
        </div>
        {/*  navbar */}
        <ul className={`hidden lg:flex gap-8 text-lg `}>
          {navbar.map((navbar) => (
            <li key={navbar.path}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={navbar.path}
              >
                {navbar.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* buttons */}
        {isAuth ? (
          <div className="flex gap-3 items-center cursor-pointer ">
            <p className="font-semibold text-lg">{user.name}</p>
            <img src={user.img} className="rounded-full w-11 h-11" />
          </div>
        ) : (
          <div className="hidden  lg:flex gap-3 items-center">
            <Link
              to="login"
              className="border p-3 mx-auto text-center rounded-sm font-semibold w-22"
            >
              Log in
            </Link>
            <Link
              to="signup"
              className="bg-blue-500 rounded-sm text-center border p-3 text-white font-semibold w-22"
            >
              Sign up
            </Link>
          </div>
        )}
      </header>
      {/* navbar for small devices */}
      <div
        className={`flex flex-col gap-4 lg:hidden  ${
          isOpenMenu ? "flex" : "hidden"
        }`}
      >
        <ul
          className={`  bg-slate-700 text-slate-100 flex-col px-8 py-2 gap-1  `}
        >
          {navbar.map((navbar) => (
            <li key={navbar.path}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={navbar.path}
              >
                {navbar.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {isAuth ? (
          <div className="flex gap-4 items-center">
            <img src={user.img} className="rounded-full w-12 h-12" />
            <p className="font-semibold text-xl">{user.name}</p>
          </div>
        ) : (
          <div>
            <Link
              to="login"
              className="border p-3 mx-auto text-center rounded-sm font-semibold w-22 mr-4"
            >
              Log in
            </Link>
            <Link
              to="signup"
              className="bg-blue-500 rounded-sm text-center border p-3 text-white font-semibold w-22"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
