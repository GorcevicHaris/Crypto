import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Home/HomePage";
import Header from "./Header/Header";
import Context from "./Context/Context";
import ChartPage from "./Chart/ChartPage";
import Convertor from "./Convertor/Convertor";
function App() {
  return (
    <BrowserRouter>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/convertor" element={<Convertor />} />
          <Route path="/chart/:coinName" element={<ChartPage />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
