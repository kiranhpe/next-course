import axios from "axios";
import React from "react";
import { InputText } from "../../ui-kit/input-text";

// login form
const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);

    axios.post("/api/auth/login", {
      email: username,
      password,
    }).then((res) => {
     if(res.data) {
       localStorage.setItem("token", res.data);
     }
    });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <InputText
          placeholder="Username"
          onTextChange={(event) => handleUsernameChange(event)}
        />
        <br />
        <InputText
          placeholder="*******" type="password"
          onTextChange={(event) => handlePasswordChange(event)}
        />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default Login;
