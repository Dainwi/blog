'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";

const Navbar: React.FC = () => {
  // State to track whether the border should be visible
  const [showBorder, setShowBorder] = useState(false);

  // Function to handle the scroll event
  function backgroundChange() {
    if (window.scrollY > 10) {
      // If scrollY is greater than 10, show the border
      setShowBorder(true);
    } else {
      // Otherwise, hide the border
      setShowBorder(false);
    }
  }

  // Add event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", backgroundChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", backgroundChange);
    };
  }, []);

  // Define a CSS class based on whether the border should be shown
  const navbarClass = showBorder ? `${style.navBarContainer} ${style.border}` : style.navBarContainer;

  return (
    <>
      <nav className={navbarClass}>
        <ul></ul>
        <ul className={style.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/login">Login</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
