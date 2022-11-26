import CounterSection from "./components/CounterSection/Counter";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Navbar/Shop/Shop";
import About from "./components/Navbar/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import Home from "./components/Navbar/Home/Home";
import { useState } from "react";
import "./App.css";
import Cart from "./components/Navbar/Cart/Cart";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import Welcome from "./components/Welcome/welcome";

function App() {
  const [Count, setCounter] = useState(0);

  const ClickBtn = (e) => {
    setCounter((ClickBtn) => ClickBtn + 1);
  };

  return (
    <BrowserRouter>
      <Navbar Count={Count} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop ClickBtn={ClickBtn} />} />
        <Route path="/CounterSection" element={<CounterSection />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
