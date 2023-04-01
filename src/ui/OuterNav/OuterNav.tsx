"use client";
import BackIcon from "@/icons/BackIcon";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./OuterNav.module.scss";
import PDFIcon from "@/icons/PDFIcon";
import Link from "next/link";
type OuterNavProps = {
  title: string;
  subtitle: string;
  withBack?: boolean;
  pdfLink?: string;
};
const OuterNav = (props: OuterNavProps) => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {props.withBack ? (
        <button className={styles.back} onClick={router.back}>
          <BackIcon />
        </button>
      ) : (
        <div className={styles.hidden}></div>
      )}
      <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>

      {props.pdfLink ? (
        <Link
          className={styles.back}
          download
          href={props.pdfLink}
          target="_blank"
        >
          <PDFIcon />
        </Link>
      ) : (
        <div className={styles.hidden}></div>
      )}
    </nav>
  );
};

export default OuterNav;
