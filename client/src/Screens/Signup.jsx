import SignUpForm from "../Components/SignUpForm/SignUpForm";

export default function Signup(props) {
  const { setCurrentUser } = props;

  return (
    <div>
      <SignUpForm setCurrentUser={setCurrentUser} />
    </div>
  );
}
