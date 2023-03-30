import React from "react";
import database from "@/assets/database.png";
import Image from "next/image";
const DatabaseIcon = ({ size = 64 }: { size: number }) => {
  return <Image src={database} height={size} alt="Database" />;
};

export default DatabaseIcon;
