import React from "react";
import styles from "../Styles/navbar.css";
import Link from "next/link";
import SignInWithGoogleProvider from "./SignInWithGoogleProvider";
const Navbar = () => {
  return (
    <div>
      <header className="header">
        <h1>
          Song<span> Scanner</span>
        </h1>
        <ul>
          <li>
            <SignInWithGoogleProvider />
          </li>
          <li>
            <Link className="h" id="ContactNav" href="#contact">
              Profile
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
