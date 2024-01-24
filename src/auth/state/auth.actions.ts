import { AppAction } from "../../core/models/app.action";
import { LoginRequest, SignUpRequest } from "../models/auth.model";

// export class Login {
//   readonly type = `Login`;
//   constructor(public request: LoginRequest) {}
// }

export class Signup {
  readonly type = `Signup`;
  constructor(public request: SignUpRequest) {}
}

const Login = (request: LoginRequest): AppAction => {
  return {
    type: "Login",
    payload: request,
  };
};
export default Login
