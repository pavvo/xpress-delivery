import React, { createContext, useState, useEffect } from "react";

import { auth } from "../config/firebase";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("user"));
    temp ? setIsAuth(!temp.isAnonymous) : setIsAuth(false);
  }, [isAuth]);

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user.user));
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch((e) => {
        alert(e);
      });
  };

  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("super");
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch((e) => {
        alert(e);
      });
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
      })
      .then(() => {
        window.location.href = "/signin";
      });
  };

  const recoverPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("We sent you a password reset link. Please check your email.");
      })
      .then(() => {
        window.location.href = "/signin";
      })
      .catch(function (e) {
        alert(e.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, signIn, logout, recoverPassword, signUp }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
