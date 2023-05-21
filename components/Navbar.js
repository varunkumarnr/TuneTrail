import React, { useContext, useState, useEffect } from "react";
import styles from "../Styles/navbar.css";
import Link from "next/link";
import SignInWithGoogleProvider from "./SignInWithGoogleProvider";
import { UserContext } from "@/util/UserContext";
import Signout from "./Signout";
const Navbar = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <header className="header">
        <h1>
          Tune<span>Trail</span>
        </h1>
        <ul>
          <li className="h">
            {data && data.uid ? <Signout /> : <SignInWithGoogleProvider />}
          </li>
          <li>
            <Link className="h" id="ContactNav" href="">
              Profile
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
