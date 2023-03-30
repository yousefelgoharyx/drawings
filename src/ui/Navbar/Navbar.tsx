"use client";
import React from "react";
import styles from "./Navbar.module.css";
import BackIcon from "@/icons/BackIcon";
import { useRouter } from "next/navigation";
import PDFIcon from "@/icons/PDFIcon";
const Navbar = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <button className={styles.arrow} onClick={() => router.push("/")}>
        <BackIcon />
      </button>
      <h2>{title}</h2>

      <button className={styles.pdf}>
        <PDFIcon />
      </button>
    </nav>
  );
};

export default Navbar;
