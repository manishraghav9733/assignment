  const signup = (state = [], action) => {
        switch (action.type) {
            case "SIGNUP":
                return [
                  ...state,
                  {
                    id: action.id,
                    name: action.values.name,
                    password: action.values.password,
                    
                  }
                ];
          
          default:
            return state;
        }
      };
      
      export default signup;