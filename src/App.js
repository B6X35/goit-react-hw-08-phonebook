import style from "./styles/App.module.css";
import NavAll from "./components/NavAll";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./redux/authorization/authOperation";
import { useEffect } from "react";
import { Suspense, lazy } from "react";
import PublicRoute from "./components/Routers/PublicRouter";
import PrivateRouter from "./components/Routers/PrivateRouter";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const PhonebookPage = lazy(() => import("./pages/PhonebookPage"));

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isFetchCurrentUser = useSelector((state) => state.auth.isFetchCurrentUser)

  useEffect(() => {
    token && dispatch(currentUser());
  }, []);

  return (
    <>
      {!isFetchCurrentUser && (
        <div className={style.App}>
          <NavAll />
          <Switch>
            <Suspense fallback={<h1>Loading...</h1>}>
              <PublicRoute exact path='/'>
                <HomePage />
              </PublicRoute>
              <PublicRoute exact path='/login' redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
              <PublicRoute exact path='/register' restricted>
                <RegisterPage />
              </PublicRoute>
              <PrivateRouter path='/contacts' redirectTo="/login">
                <PhonebookPage />
              </PrivateRouter>
            </Suspense>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
