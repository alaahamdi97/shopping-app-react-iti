import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../Redux/CartSlice";
const Shop = () => {
  const [Products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const addingHandler = (Product) => {
    dispatch(addToCart(Product));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <>
      {Products.length ? (
        <div className="ShopContainer">
          <div className="container mx-5 ">
            <div className=" row text-center  d-flex justify-content-between mt-5 mx-5 w-100   ">
              {Products.map((Product) => {
                return (
                  <div
                    key={Product.id}
                    className=" bg-white productContainer shadow p-3 mb-3  rounded col-3 me-5 "
                  >
                    <img className="w-50   pt-4" src={Product.image} alt="" />
                    <h1 className="fs-4 pt-4 mb-4  ">{Product.title}</h1>
                    <h5 className="fs-4 mb-5 text-warning ">
                      {Product.price} $
                    </h5>
                    <div className="d-flex gap-2 mx-3">
                      <Link to={`/Details/${Product.id}`}>
                        <button className="mb-3 rounded  ">Details </button>
                      </Link>
                      <Link>
                        <button
                          className="w-100  rounded"
                          type="button"
                          onClick={() => addingHandler(Product)}
                        >
                          Add
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="grow" />
        </div>
      )}
    </>
  );
};

export default Shop;
