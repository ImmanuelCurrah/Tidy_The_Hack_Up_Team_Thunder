import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Navbar props={props} />
      {props.children}
      <Footer />
    </div>
  );
}
