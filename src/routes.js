import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./components/mainLayout";

import Home from "./pages/home";

const routes = () => {
  const renderComponent = (Component) => (
    <MainLayout>
      <Component/>
    </MainLayout>
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={renderComponent(Home)}
        />

        <Route
          path="/"
          element={renderComponent(Home)}
        />
      </Routes>
    </Router>
  );
};

export default routes;
