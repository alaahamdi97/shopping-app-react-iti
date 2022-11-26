import aboutPage from "./aboutpage.gif";

const about = () => {
  return (
    <div className="aboutContainer justify-content-center align-items-center gap-5 d-flex container ">
      <div className="w-100">
        <h1 className=" fs-3 w-100 mt-3 fw-bold">
          Shopping has long been considered a recreational activity by many.
          Shopping online is no exception. The goal of this application is to
          develop a web based interface for online retailers. The system would
          be easy to use and hence make the shopping experience pleasant for the
          users.
        </h1>
      </div>
      <div className="w-100">
        <img className="w-100" src={aboutPage}></img>
      </div>
    </div>
  );
};

export default about;
