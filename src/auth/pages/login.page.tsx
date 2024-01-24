import { useAppDispatch, useAppSelector } from "../../core/hooks/app.hooks";

interface LoginPageProps {
  authToken: string | null;
}

const LoginPage: React.FC = () => {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>This is the Login page</h1>
    </div>
  );
};

export default LoginPage;
