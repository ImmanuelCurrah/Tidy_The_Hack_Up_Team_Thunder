import earth from "../assets/earth.png";

export default function Home(props) {
  const { currentUser } = props;
  console.log(currentUser);

  return (
    <div>
      {currentUser ? (
        <div> {`Welcome back ${currentUser.name}`} </div>
      ) : (
        <div>signup</div>
      )}
      <img src={earth} alt="a purple earth" />
      <h2>Featured Events!</h2>
    </div>
  );
}
