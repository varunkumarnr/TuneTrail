"use client";
import React, { useContext } from "react";
import styles from "../Styles/navbar.css";
import Link from "next/link";
import SignInWithGoogleProvider from "./SignInWithGoogleProvider";
import { UserContext } from "@/util/UserContext";
import Signout from "./Signout";
import guest from "../public/user-solid.svg";
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
              {data && data.uid ? (
                <img
                  className="nav-image-user"
                  src={data.photoURL}
                  alt="guest default"
                />
              ) : (
                <img
                  className="nav-image-guest"
                  src="/user-solid.svg"
                  alt="guest default"
                />
              )}
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
