
import { v4 } from "node-uuid";

export const addUser = (
            name,
            description,
            price,
            length ,
            width,
            height
            ) => 

            (
            {
            type: "ADD_USER",
            id: v4(),
            name,
            description,
            price,
            length ,
            width,
            height
            }
            );

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id: id
  };
};

export const editTodo = (id, text) => {
  return {
    type: "EDIT_TODO",
    id: id,
    text: text
  };
};