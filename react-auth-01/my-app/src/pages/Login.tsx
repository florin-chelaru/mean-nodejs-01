import React, {SyntheticEvent, useRef, useState} from "react";
import {Navigate} from "react-router-dom";

const Login = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [redirect, setRedirect] = useState(false);
  const [denied, setDenied] = useState(false);

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    console.log({email, password});
    const response = await fetch(
      'https://api.bunny.com:3000/login',
      {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      }
    );
    if (response.ok) {
      setRedirect(true);
      setDenied(false);
    } else {
      setDenied(true);
      setRedirect(false);
    }
  };

  if (redirect) {
    return <Navigate to='/'/>;
  }

  return (
    <div>
      {denied ? <p>Login failed</p> : ''}
      <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input type="email" className="form-control" placeholder="name@example.com" ref={emailInputRef}/>
        <input type="password" className="form-control" placeholder="Password" ref={passwordInputRef}/>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;