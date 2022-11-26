import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAction } from "../../Redux/FormSlice";
import loginPage from "./login.gif";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(LoginAction());
    navigate("/shop");
    console.log(data);
  };

  return (
    <div className=" d-flex mx-5  gap-5 justify-content-center align-items-center signInContainer container  mt-4  ">
      <div className="w-50 mt-3 ">
        <img className="w-100" src={loginPage}></img>
      </div>
      <div className="me-5  ">
        <Form
          className="form-control p-5 w-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-4 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                require: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="font-weight text-danger "> Email is required </p>
            )}
            <Form.Text className=" text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors?.password?.type === "required" && (
              <p className="font-weight text-danger "> Password is required </p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="font-weight text-danger ">
                {" "}
                Password "minLength" is 6
              </p>
            )}
            {errors?.password?.type === "maxLength" && (
              <p className="font-weight text-danger ">
                Password "maxLength" is 12
              </p>
            )}
          </Form.Group>

          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3 mt-3">
              <Form.Check
                label="Remember me"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
            </div>
          ))}

          <Button
            className="mt-2 mb-1 px-4 shadow  btn-secondary  "
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
