import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import { useContext } from "react";
import { Context } from "./main";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
