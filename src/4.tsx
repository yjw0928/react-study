import { Button } from "antd";
import React, { useEffect, useState } from "react";

export const Demo20240801: React.FC<any> = () => {
  const [refresh, setRefresh] = useState(0);

  const onRefresh = () => {
    setRefresh(refresh + 1);
  };

  new Promise((resolve, reject) => {
    resolve(1);
  }).then(() => {
    alert("异步函数");
  });

  alert("render");

  useEffect(() => {
    alert("effect");
  }, [refresh]);
  return <Button onClick={onRefresh}>刷新{refresh}</Button>;
};
