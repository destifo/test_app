import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./auth/pages/login.page";
import Home from "./core/pages/home.pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
