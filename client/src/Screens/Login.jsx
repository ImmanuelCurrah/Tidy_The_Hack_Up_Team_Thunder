import LoginForm from "../Components/LoginForm/LoginForm";

export default function Login(props) {
  const { setCurrentUser } = props;

  return (
    <div>
      <LoginForm setCurrentUser={setCurrentUser} />
    </div>
  );
}
