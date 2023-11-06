import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fav from "../src/components/Fav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:fav" element={<Fav />} />

        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
