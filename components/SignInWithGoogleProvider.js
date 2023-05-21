"use client";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseInitialize";
import { createuserDocument } from "@/util/createuserDocument";
const SignInWithGoogleProvider = async () => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth);
  const handleSignIn = async () => {
    await signInWithGoogle();
    auth.onAuthStateChanged((user) => {
      if (user) {
        createuserDocument(user, "");
      } else {
        console.log("No user");
      }
    });
  };
  return (
    <div>
      <div onClick={handleSignIn}>SignIn</div>
      {fbError && (
        <p color="red" fontSize="10pt">
          {fbError.message}
        </p>
      )}
    </div>
  );
};

export default SignInWithGoogleProvider;
