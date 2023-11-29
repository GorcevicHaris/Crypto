import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Home/HomePage";
import Header from "./Header/Header";
import Context from "./Context/Context";
function App() {
  return (
    <BrowserRouter>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
