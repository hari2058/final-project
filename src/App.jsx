import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Git from "./pages/git";

function App() {
  return (
    <>
      <div className="relative">
        <div className="">
          <Navbar />
        </div>
        <Git />
        <div>
          
          <Routes>
          <Route  path="/" element={ <Home />}/>
          <Route  path="/Shop" element={ <Shop />}/>
          <Route  path="/Products" element={ <Products />}/>
          <Route  path="/Contact" element={ <Contact />}/>
          <Route  path="/Aboutus" element={ <AboutUs />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
          
       
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
