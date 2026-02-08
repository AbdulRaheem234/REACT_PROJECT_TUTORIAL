import { useNavigate } from "react-router-dom";

function Navbar_2() {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-800 px-5 py-2">
      <button
        onClick={() => navigate("/")}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to Home
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => navigate(+1)}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Forward
      </button>
    </div>
  );
}

export default Navbar_2;
