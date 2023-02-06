import React from "react";
import { Menu } from "antd";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ALL_PAGE, menuData } from "./contants";
import "./index.less";

const Home: React.FC = () => {
  const history = useNavigate();
  const go = (id: string) => {
    history(id);
  };
  return (
    <div className="home">
      <Menu
        onClick={(info) => {
          go(info.key);
        }}
        mode="inline"
        items={menuData}
        style={{ width: 256 }}
      />

      <div className="main">
        <Routes>
          {ALL_PAGE.map((page) => {
            const Page = page.page;
            return <Route key={page.key} path={page.key} element={<Page />} />;
          })}
        </Routes>
      </div>
    </div>
  );
};

// react-router-dom 路由路径是全部匹配所以加载父级路由页面需要/*
// /* 任何路由都加载Home
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
