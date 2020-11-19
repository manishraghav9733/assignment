const initialState = [];

const addUserTable = (state = initialState, action) => {
switch (action.type) {
case "ADD_USER":
return [
...state,
{
id: action.id,
name: action.name,
description: action.description,
price: action.price,
length: action.length,
width: action.width,
height: action.height
},
];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "EDIT_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
default:
return state;
}
};

export default addUserTable;