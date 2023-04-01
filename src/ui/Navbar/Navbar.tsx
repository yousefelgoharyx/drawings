"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import BackIcon from "@/icons/BackIcon";
import { useRouter } from "next/navigation";
import PDFIcon from "@/icons/PDFIcon";
const Navbar = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <button className={styles.arrow} onClick={router.back}>
        <BackIcon />
      </button>
      <h2>{title}</h2>
    </nav>
  );
};

export default Navbar;
