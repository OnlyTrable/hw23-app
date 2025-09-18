import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (status === "successeded") {
      navigate("/profile");
    }
  }, [status, navigate]);

  return (
    <div>
      <h2>Login Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "360px",
          gap: "16px",
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
