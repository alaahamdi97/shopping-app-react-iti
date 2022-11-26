import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Select from "react-select";
// import "./signIn.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const frameWorkOptions = [
    {
      value: 1,
      label: "Female",
    },
    {
      value: 2,
      label: "Male",
    },
  ];

  return (
    <div className="h-100 d-flex justify-content-center signOutContainer  p-3 w-100 ">
      <Form className="form-control m-5 w-75" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
          <Form.Text className="text-muted">
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
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Your password doesn't match";
                }
              },
            })}
          />
          {errors?.confirmPassword?.type === "required" && (
            <p className="font-weight text-danger "> Password is required </p>
          )}
          {errors?.confirmPassword?.type === "validate" && (
            <p className="text-danger">Not Match </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Phone Number"
            {...register("PhoneNumber", { required: true })}
          />
          {errors?.PhoneNumber?.type === "required" && (
            <p className="font-weight text-danger ">
              {" "}
              Phone Number is required
            </p>
          )}
        </Form.Group>

        <label htmlFor="Gender"> Gender</label>
        <Select className="mt-1" options={frameWorkOptions} />

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
          className="mt-2 mb-1 px-4 btn-secondary shadow  btn-Form"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
