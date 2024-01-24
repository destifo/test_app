import { AppAction } from "../../core/models/app.action";
import { User } from "../models/user.model";

interface AuthState {
  authToken: string | null;
  refreshToken: string | null;
  user: User | null;
}

const initState: AuthState = {
  authToken: null,
  refreshToken: null,
  user: null,
};

export const authReducer = (
  state = initState,
  action: AppAction
): AuthState => {
  switch (action.type) {
    case "Login":
      return { ...state, user: null };
    case "Signup":
      return { ...state, user: null };
    default:
      return state;
  }
};
