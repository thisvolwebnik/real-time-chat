import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
