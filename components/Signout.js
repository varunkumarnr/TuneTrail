import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseInitialize";
const Signout = () => {
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <div
      onClick={() => {
        signOut();
      }}
    >
      Signout
      {error && (
        <p color="red" fontSize="10pt">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Signout;
