import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

function Section_1(props) {
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  );
}

export default Section_1;
