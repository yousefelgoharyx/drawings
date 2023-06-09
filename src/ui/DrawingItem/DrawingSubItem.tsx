import React from "react";
import styles from "./DrawingItem.module.scss";
import Link from "next/link";
type DrawingItemProps = {
  title: string;
  description: string;
  to: string;
};
const DrawingItem = (props: DrawingItemProps) => {
  return (
    <div className={styles.drawingItem}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link href={props.to}>
        <button>Learn</button>
      </Link>
    </div>
  );
};

export default DrawingItem;
