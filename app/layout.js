"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { auth } from "../firebase/firebaseInitialize";
import { UserContext } from "@/util/UserContext";
import { useState } from "react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [user, setUser] = useState({});

  auth.onAuthStateChanged((res) => {
    if (res) {
      setUser(res);
    } else {
      setUser(null);
    }
  });

  return (
    <html lang="en">
      <body className={poppins.className}>
        <UserContext.Provider value={user}>
          <Navbar />
          {children}
        </UserContext.Provider>
      </body>
    </html>
  );
}
