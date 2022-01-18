import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsAuth } from "../../redux/authorization/authSelector";

const PrivateRouter = ({ children, redirectTo = "/", ...routeProps }) => {
  const isLoginUser = useSelector((state) => state.auth.isLoginUser);
  return (
    <Route {...routeProps}>
      {isLoginUser ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRouter;