import { useState, SyntheticEvent, useContext } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { UserErrors } from "../../models/errors";
import { useNavigate } from "react-router-dom";
import { IShopContext, ShopContext } from "../../context/shop-context";

export const AuthPage = () => {
  return (
    <div>
      <div className="flex-container">
        <div className="image-container">
          <img id="vert-img" className="fade-in" src=".\images\wp5769406.png" />
        </div>
        <div className="content fade-in">
          <Register />
          <Login />
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/user/register", {
        username,
        password,
      });
      alert("Registration Completed! Now Login.");
      setUsername("");
      setPassword("");
    } catch (err) {
      if (err?.response?.data?.type === UserErrors.USERNAME_ALREADY_EXISTS) {
        alert("ERROR: Username already exists");
        setUsername("");
        setPassword("");
      } else {
        alert("ERROR: Something went wrong.");
        setUsername("");
        setPassword("");
      }
    }
  };

  return (
    <div className="auth-container ">
      <form className="forms" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="InputUsername">
            Username
          </label>
          <input
            type="text"
            className="InputUsername"
            aria-describedby="emailHelp"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="InputPassword">
            Password
          </label>
          <input
            type="password"
            className="InputPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary sub">
          Register
        </button>
      </form>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext<IShopContext>(ShopContext);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });
      setCookies("access_token", result.data.token);
      localStorage.setItem("userID", result.data.userID);
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      let errorMesssage: string = "";
      switch (err?.response?.data?.type) {
        case UserErrors.NO_USER_FOUND:
          errorMesssage = "Username doesn't exist";
          break;
        case UserErrors.WRONG_CREDENTIALS:
          errorMesssage = "Either password or username are incorrect";
          break;
        default:
          errorMesssage = "Something went wrong";
          break;
      }

      alert("ERROR: " + errorMesssage);
    }
  };

  return (
    <div className="auth-container">
      <br></br>
      <form className="forms" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="InputUsername">
            Username
          </label>
          <input
            type="text"
            className="InputUsername"
            aria-describedby="emailHelp"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="InputPassword">
            Password
          </label>
          <input
            type="password"
            className="InputPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div id="checkbx">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check"
            required
          />
          <label htmlFor="Check">Are you human?</label>
        </div>
        <button type="submit" className="btn btn-primary sub">
          Login
        </button>
      </form>
    </div>
  );
};
