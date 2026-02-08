import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Product from "./page/Product";
import NotFound from "./page/NotFound";
import Men from "./page/Men";
import Women from "./page/Women";
import Courses from "./page/Courses";
import CourseDetail from "./page/CourseDetail";
import Kids from "./page/Kids";
import Navbar_2 from "./Components/Navbar_2";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <Navbar_2 />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Nested Product Routes */}
          <Route path="/product" element={<Product />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="kids" element={<Kids />} />
          </Route>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
