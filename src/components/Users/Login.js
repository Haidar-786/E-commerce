import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useSelector } from "react-redux";
const Eye = <FontAwesomeIcon className="icon" icon={['fas','eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas','eye-slash']} />;
import {  useNavigate } from "react-router-dom";


function Login(props) {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const registeredUser = useSelector((state)=> state.userReducer.users)
  // console.log(registeredUser);

  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const refPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refPassword.current.type = showPass ? "password" : "text";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if(email === registeredUser?.email && password === registeredUser?.password){
      setFormData({
        email: "",
        password: ""
      });
      navigate('/')
    }else{
      alert('Wrong Crendentials!')
    }
    setShowPass(false);
    
  };
  const canSignIn =
  [email, password].every(Boolean); 

  return (
    <div className="login-wrapper ">
      <form onSubmit={handleSubmit} className="common-background">
      <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input
            onChange={hangleChange}
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@example.com"
            autoFocus
            required
          />
        <label htmlFor="password">Password:</label>
        <div className="eye">
          <input
            ref={refPassword}
            type="password"
            onChange={hangleChange}
            id="password"
            name="password"
            value={password}
            required
          />
          {showPass ? (
            <i onClick={showPassword}>{Eye}</i>
          ) : (
            <i onClick={showPassword}>{EyeSlash}</i>
          )}
        </div>
        <button className="loginButton" type="submit" disabled={!canSignIn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
