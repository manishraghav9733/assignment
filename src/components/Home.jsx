import React from "react";
import Logout from "./Logout";
import TodoList from "./TodoList"


const Home = () => {
  return (
    <div>
      <Logout />
      <div
        style={{
          textAlign: "center",
          margin: "0px auto",
          marginTop: "50px",
          maxWidth: "80%"
        }}
      >
      <TodoList />
      </div>
    </div>
  );
};

export default Home;
