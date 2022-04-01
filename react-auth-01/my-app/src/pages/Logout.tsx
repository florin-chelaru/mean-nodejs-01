import React, {SyntheticEvent, useRef, useState} from "react";
import {Navigate} from "react-router-dom";

const Logout = () => {
  const [redirect, setRedirect] = useState(false);

  fetch('https://api.bunny.com:3000/logout', {credentials: 'include'}).then(() => setRedirect(true));

  if (redirect) {
    return <Navigate to='/login'/>;
  }

  return (
    <div>Signing out...</div>
  );
};

export default Logout;