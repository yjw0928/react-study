import React from "react";
import { Route, Routes } from "react-router-dom";
import { ALL_PAGE } from "../constants";

export const Main: React.FC = () => {
  return (
    <div className="main">
      <Routes>
        {ALL_PAGE.map((page) => {
          const Page = page.page;
          return <Route key={page.key} path={page.key} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
};
