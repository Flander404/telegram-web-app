import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Captcha from "./pages/Captcha";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/captcha" element={<Captcha />} />
      </Routes>
    </div>
  );
}

export default App;
