import React from "react";
import { useNavigate } from "react-router-dom";

import { PAGE_LIST } from "../constants";

import { a } from "./test";

const Nav: React.FC = () => {
  const history = useNavigate();
  const go = (id: string) => {
    history(id);
  };
  return (
    <div className="nav">
      {PAGE_LIST.map((nav) => {
        return (
          <div className="nav-item" key={nav.id} onClick={() => go(nav.id)}>
            {nav.title}
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
