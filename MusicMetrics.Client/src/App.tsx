import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./features/Layout/Layout";
import { HomePage } from "./features/Home/HomePage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
