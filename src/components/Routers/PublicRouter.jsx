import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsAuth } from "../../redux/authorization/authSelector";

const PublicRoute = ({
  children,
  redirectTo = "/",
  restricted = false,
  ...routerProps
}) => {
  const isLoginUser = useSelector((state) => state.auth.isLoginUser);
  const shouldRedirect = isLoginUser && restricted;
  return (
    <Route {...routerProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
