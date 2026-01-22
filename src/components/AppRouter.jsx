import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "../main";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  console.log(user);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} exact />
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} exact />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
