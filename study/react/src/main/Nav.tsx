import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { menuData } from "../constants";

const Nav: React.FC = () => {
  const history = useNavigate();
  const go = (id: string) => {
    history(id);
  };
  return (
    <Menu
      onClick={(info) => {
        go(info.key);
      }}
      mode="inline"
      items={menuData}
      style={{ width: 256 }}
    />
  );
};

export default Nav;
