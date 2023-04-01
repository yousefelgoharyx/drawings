import React from "react";
import styles from "./DrawingItem.module.scss";
import Link from "next/link";
type DrawingItemProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  to: string;
  soon?: boolean;
};
const DrawingItem = (props: DrawingItemProps) => {
  const { soon = false } = props;
  return (
    <div className={`${styles.drawingItem} ${soon && styles.soon}`}>
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {soon && <div className={styles.soonBadge}>Soon</div>}

      <Link href={props.to}>
        <button>Learn</button>
      </Link>
    </div>
  );
};

export default DrawingItem;
