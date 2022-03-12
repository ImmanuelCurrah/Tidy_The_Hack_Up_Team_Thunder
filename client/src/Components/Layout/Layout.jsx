import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout(props) {
  return (
    <div>
      <Navbar currentUser={props.currentUser} />
      <div className="mb-36">{props.children}</div>
      <Footer />
    </div>
  )
}
