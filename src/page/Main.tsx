import React from "react";
import { Route, Routes } from "react-router-dom";
import { PAGE_LIST } from "../constants";

export const Main: React.FC = () => {
  return (
    <div className="main">
      <Routes>
        {PAGE_LIST.map((page) => {
          const Page = page.page;
          return <Route key={page.id} path={page.id} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
};
