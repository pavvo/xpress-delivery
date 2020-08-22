import React, { createContext, useState, useEffect } from "react";

import { auth, database } from "../config/firebase";
import { data } from "autoprefixer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [authError, setAuthError] = useState("");

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
        console.log(e.message);
        setAuthError(e.message);
      });
  };

  const updateUser = (userObject) => {
    const userRef = database.ref("users");
    userRef.push({ ...userObject });
  };

  const signUp = (email, password, userObject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        updateUser(userObject);
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e.message);
        setAuthError(e.message);
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
        console.log(e.message);
        setAuthError(e.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, authError, signIn, logout, recoverPassword, signUp }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
