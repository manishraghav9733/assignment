const signupUser = (state = [], action) => {
switch (action.type) {
case "SIGNUP":
return [
...state,
{
id: action.id,
UserName: action.values.UserName,
password: action.values.password,

}
];

default:
return state;
}
};

export default signupUser;