"use client";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseInitialize";
const SignInWithGoogleProvider = () => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth);
  return (
    <div>
      <div onClick={() => signInWithGoogle().then(console.log("clicked"))}>
        SignIn
      </div>
      {fbError && (
        <p color="red" fontSize="10pt">
          {fbError.message}
        </p>
      )}
    </div>
  );
};

export default SignInWithGoogleProvider;
