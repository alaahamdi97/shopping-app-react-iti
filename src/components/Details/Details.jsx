import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopping from "./undraw_web_shopping_re_owap.svg";
export const Details = () => {
  const params = useParams();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
    console.log(setProducts);
  };

  const [Product, setProducts] = useState({});
  console.log(Product);
  return (
    <>
      <div className="DetailsContainer">
        <div className="container mx-5  row d-flex justify-content-center gap-5 align-items-center ">
          <div className=" text-center shadow p-5 mt-4 mb-3 bg-body rounded  col-4 ">
            <img className="w-50 " src={Product.image} alt="" />
            <h1 className="fs-4 pt-4 mb-3 ">{Product.title}</h1>
            <h5 className="fs-4 text-warning"> {Product.price} $</h5>
            <h4 className="fs-4"> {Product.category}</h4>
            <h5 className="fs-6"> {Product.description}</h5>
          </div>

          <div className="w-50 ms-3 col-8">
            <img className="w-100" src={shopping}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
