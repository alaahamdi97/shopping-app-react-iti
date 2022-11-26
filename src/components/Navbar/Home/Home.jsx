import { useSelector } from "react-redux";
import money from "./money.gif";

const Home = () => {
  const counterGlobalValue = useSelector((state) => state.counterStore.counter);

  return (
    <div className="homeContainer  fw-bold  mx-4 container d-flex justify-content-center align-items-center  ">
      <div className="w-50">
        <img className="w-100 ms-5 mt-3" src={money}></img>
      </div>
      <div className="w-75">
        <h1 className=" text-center ms-5 ">
          People Supported us with
          <span> {counterGlobalValue} $</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
