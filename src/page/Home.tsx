import React from "react";
import { Main } from "./Main";
import Nav from "./Nav";
import "./Home.less";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Nav />
      <Main />
    </div>
  );
};

export default Home;
