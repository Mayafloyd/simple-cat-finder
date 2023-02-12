import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import SearchPage from "./containers/searchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
