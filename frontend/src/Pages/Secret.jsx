import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutComThunk } from "../redux/company_authSlice";
import { todoThunk } from "../redux/todoSlice";

export default function Secret() {
  const todo = useSelector((state) => {
    return state.todoReducer.todo});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoThunk());
  }, [dispatch]);

  
  return (
    <div>
      <h1>Welcome to secret page</h1>
      <p>You have logged in successfully</p>
      {todo.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
      <button onClick={() => dispatch(logoutComThunk())}>Logout</button>
    </div>
  );
}
