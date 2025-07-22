import React from "react";
import { NavLink, Route, Routes } from "react-router";
import { ANTDesign, MaterialUi } from "./pages";

const App = () => {
  return (
    <div>
      <NavLink to="/MaterialForm">MaterialUi form 225-rasm</NavLink>
      <NavLink to="/AntDesignForm">ANTDesign form 226-rasm</NavLink>
      <Routes>
        <Route path="/MaterialForm" element={<MaterialUi />} />
        <Route path="/AntDesignForm" element={<ANTDesign />} />
      </Routes>
    </div>
  );
};

export default App;
