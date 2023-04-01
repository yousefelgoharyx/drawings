import React from "react";
import js from "@/assets/js.png";
import Image from "next/image";
const JsIcon = ({ size = 64 }: { size: number }) => {
  return <Image src={js} height={size} alt="Javascript" />;
};

export default JsIcon;
