import React from "react";
import styles from "./ImageContainer.module.css";
type ImageContainerProps = {
  children: React.ReactNode;
};
const ImageContainer = (props: ImageContainerProps) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ImageContainer;
