import UserEvents from "../../Components/Layout/Events/UserEvents/UserEvents"

export default function UserInfo(props) {
  return (
    <div>
      <UserEvents currentUser={props.currentUser} />
    </div>
  )
}
