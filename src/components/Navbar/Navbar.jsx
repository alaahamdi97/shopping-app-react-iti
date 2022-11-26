import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaOpencart } from "@react-icons/all-files/fa/FaOpencart";
// import { Navbar } from "react-bootstrap";

const Navbar = () => {
  const auth = useSelector((state) => state.auth.auth);
  const cartList = useSelector((state) => state.addToCart.cartCount);
  // console.log(cartList);
  console.log(auth);

  return (
    <div>
      <nav className="navbar  container-fluid  Nav-Container navbar-expand-lg ">
        <div className="container  ">
          <Link
            to="/home"
            className="navbar-brand pe-5 fw-bold fs-2 text-white  "
          >
            WH.Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div
            className="collapse ms-5  navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav px-5 fs-5 ms-5 mb-2  mb-lg-0">
              <li className="nav-item   ">
                <Link
                  to="/About"
                  className="nav-link  text-white"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Shop" className="nav-link  text-white">
                  Shop
                </Link>
              </li>

              <li className="nav-item   ">
                <Link to="/CounterSection" className="nav-link  text-white">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Cart" className="nav-link me-5 fs-5  text-white">
                  <FaOpencart /> {cartList}
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav px-5 fs-5 ms-5 mb-2  mb-lg-0">
              <li className="nav-item ms-5 ">
                <Link to="/signIn" className="nav-link  text-white">
                  Sign in
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/signUp" className="nav-link  text-white">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
