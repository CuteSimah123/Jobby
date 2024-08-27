import { useState } from "react";
import "./LogIn.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to login
    console.log("Login attempt:", username, password);
    // For demo purposes, assume login is successful
    setError(null);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        {error && <div className="error">{error.message}</div>}
        <div
          type="submit"
          className="bg-yellow-400 rounded-full p-3 justify-center items-center flex active:bg-yellow-400/40 transition-colors cursor-pointer "
        >
          Login
        </div>
      </form>
    </div>
  );
};

export default Login;
