"use client";
import BackIcon from "@/icons/BackIcon";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./OuterNav.module.scss";
type OuterNavProps = {
  title: string;
  subtitle: string;
  withBack?: boolean;
};
const OuterNav = (props: OuterNavProps) => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {props.withBack && (
        <button className={styles.back} onClick={router.back}>
          <BackIcon />
        </button>
      )}
      <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </nav>
  );
};

export default OuterNav;
