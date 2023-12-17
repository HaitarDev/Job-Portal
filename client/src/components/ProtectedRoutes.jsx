import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function ProtectedRoutes() {
  const navigate = useNavigate();
  // get user
  const { isAuth } = useSelector((state) => state.user);

  console.log(isAuth);

  if (isAuth)
    return (
      <>
        <Navbar />
        <Outlet />;
      </>
    );
  else {
    setTimeout(() => {
      navigate("/login");
    }, 0);
    return null;
  }

  // check if there is user , if yes go to homepage if not redirect to login page
}
export default ProtectedRoutes;
