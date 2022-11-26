// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../../Redux/CartSlice";
import "./cart.css";

const Cart = () => {
  const [total, setTotal] = useState(0);

  const cartProducts = useSelector((state) => state.addToCart.cartList);

  const dispatch = useDispatch();

  useEffect(() => {
    let t = 0;
    cartProducts.forEach((element) => {
      t += element.price * element.quantity;
    });
    setTotal(t);
  }, [cartProducts, cartProducts.quantity]);

  const removeFromCart = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <>
      <div className="cartContainer  ">
        <div>
          <div className="container mx-5  ">
            <div className=" row text-center  d-flex justify-content-between mt-5 mx-5 w-100   ">
              {cartProducts.map((Product) => {
                return (
                  <div
                    key={Product.id}
                    className=" bg-white productContainer  d-flex justify-content-between w-100  h-25 shadow p-3 mb-3  rounded col-3 me-5 "
                  >
                    <div className="w-25">
                      <img className="w-25" src={Product.image} alt="" />
                    </div>
                    <h3 className="fs-5 mt-5 w-50 ">{Product.title}</h3>
                    <h5 className="fs-4 mt-5 text-warning">
                      {" "}
                      {Product.price} $
                    </h5>

                    <button
                      className="p-2 h-50 mt-5  "
                      type="button"
                      onClick={() => removeFromCart(Product)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="shadow text-center mb-3 py-4 m-auto ">
        <h4>
          Total price is :{" "}
          <span className="text-warning">{total.toFixed(2)}$</span>
        </h4>
      </div>
    </>
  );
};

export default Cart;
