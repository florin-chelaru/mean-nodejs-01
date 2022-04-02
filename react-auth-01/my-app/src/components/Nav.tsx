import React, {SyntheticEvent, useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "../store/UserContext";
import GoogleSignInButton, {GoogleCredentialResponse} from "./GoogleSignInButton";

const Nav = () => {
  const userContext = useContext(UserContext);
  const fetchLogout = (e: SyntheticEvent) => {
    e.preventDefault();
    fetch('https://api.bunny.com:3000/logout', {credentials: 'include'}).then(() => userContext.signOut());
  };
  const googleSignIn = async (e: GoogleCredentialResponse) => {
    console.log(e.credential);
    const response = await fetch(
      'https://api.bunny.com:3000/google',
      {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(e)
      }
    );
    if (response.ok) {
      const {email} = await response.json();
      userContext.signIn(email);
    }
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Home</Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <GoogleSignInButton onCredentialResponse={googleSignIn}/>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" onClick={fetchLogout} href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;