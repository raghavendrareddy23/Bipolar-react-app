import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Pages from "./Components/Pages/Pages";
import Charts from './Components/Charts/Charts'
import Cards from './Components/Cards/Cards'
import Tables from "./Components/Table/Tables";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    // eslint-disable-next-line default-case
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/card" element={<Cards />} />
      <Route path="/table" element={<Tables />} />
      <Route path="/chart" element={<Charts />} />
      {/* Add other routes as needed */}
    </Routes>
    </div>
  );
}
export default App;
