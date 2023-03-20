import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../Admin/User";

const PrivateRoute = (props) => {
  // Fetching the user
  const { user } = useContext(UserContext);
  const location = useLocation();

  // If the user is not logged in we are redirecting them
  return user ? <Outlet /> : <Navigate to={`/?redirectTo=${encodeURI(location.pathname)}`} />;
}

export default PrivateRoute;