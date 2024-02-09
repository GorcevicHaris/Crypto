import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Home/HomePage";
import Header from "./Header/Header";
import Context from "./Context/Context";
import ChartPage from "./Chart/ChartPage";
function App() {
  return (
    <BrowserRouter>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chart/:coinName" element={<ChartPage />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
