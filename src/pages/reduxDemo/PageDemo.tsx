import React, { useCallback } from "react";
import { deleteTodo, todoAdded } from "./store";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const PageDemo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.todos.todos);

  const create = useCallback(() => {
    dispatch(
      todoAdded({ name: Date.now(), label: `哈哈哈哈哈哈${Date.now()}` })
    );
  }, []);

  const del = useCallback(async (id: string) => {
    await dispatch(deleteTodo(id) as any);
  }, []);

  return (
    <div>
      {data.map((item: any) => {
        return (
          <div>
            {item.label} <Button onClick={() => del(item.name)}>删除</Button>
          </div>
        );
      })}
      <Button onClick={create}>增</Button>
      <Button>改</Button>
    </div>
  );
};

export default PageDemo;
