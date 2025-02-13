import React, { useState } from "react";
import Login from "./components/Login";
import Voting from "./components/Voting";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div>
      <h1>E-Voting System</h1>
      {!user ? <Login setUser={setUser} /> : <Voting user={user} />}
    </div>
  );
};

export default App;
