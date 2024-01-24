import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./auth/pages/login.page";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};

export default AppRouter;
