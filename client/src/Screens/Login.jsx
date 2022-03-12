import LoginForm from "../Components/LoginForm/LoginForm";

export default function Login(props) {
  const { setCurrentUser } = props;

  return (
    <div>
      <h1>Login!</h1>
      <LoginForm setCurrentUser={setCurrentUser} />
    </div>
  );
}
