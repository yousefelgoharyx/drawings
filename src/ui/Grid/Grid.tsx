import React from "react";
import styles from "./Grid.module.scss";
type GridProps = {
  children: React.ReactNode;
};
const Grid = (props: GridProps) => {
  return <div className={styles.grid}>{props.children}</div>;
};

export default Grid;
