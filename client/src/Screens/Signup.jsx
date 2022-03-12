import SignUpForm from "../Components/SignUpForm/SignUpForm";

export default function Signup(props) {
  const { setCurrentUser } = props;

  return (
    <div>
      <h1>Sign up!</h1>
      <SignUpForm setCurrentUser={setCurrentUser} />
    </div>
  );
}
