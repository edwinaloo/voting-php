import React, { useState } from "react";
import { loginUser } from "../api";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await loginUser({ email, password });
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
