import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import routes from "./routes/routes";

export const App = () => {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
};

