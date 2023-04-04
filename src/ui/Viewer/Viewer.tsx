import Image, { StaticImageData } from "next/image";
import React from "react";
import Navbar from "../Navbar/Navbar";
import ImageContainer from "../ImageContainer/ImageContainer";

type Props = {
  title: string;
  images: StaticImageData[];
};
const Viewer = (props: Props) => {
  return (
    <div>
      <Navbar title={props.title} />
      <ImageContainer>
        {props.images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#222",
                borderRadius: "8px",
              }}
              alt={`${props.title} ${index}`}
            />
          );
        })}
      </ImageContainer>
    </div>
  );
};

export default Viewer;
