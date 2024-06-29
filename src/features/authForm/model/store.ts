type IAuthFormState = {
    username: string;
    password: string;
  };
  
  type TAuthFormAction =
    | { type: "setUsername"; payload: string }
    | { type: "setPassword"; payload: string };
  
  export const initialState: IAuthFormState = {
    username: "",
    password: "",
  };
  
  export const authReducer = (
    state: IAuthFormState,
    action: TAuthFormAction
  ): IAuthFormState => {
    switch (action.type) {
      case "setUsername":
        return { ...state, username: action.payload };
      case "setPassword":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  