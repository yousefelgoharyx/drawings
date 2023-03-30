import Navbar from "@/ui/Navbar/Navbar";
import Image from "next/image";
import img1 from "@/assets/acid/1.png";
import img2 from "@/assets/acid/2.png";
import img3 from "@/assets/acid/3.png";
import img4 from "@/assets/acid/4.png";
import img5 from "@/assets/acid/5.png";
import ImageContainer from "@/ui/ImageContainer/ImageContainer";
const page = () => {
  return (
    <div>
      <Navbar title="ACID" />
      <ImageContainer>
        <Image
          src={img1}
          style={{ width: "100%", height: "auto" }}
          alt="ACID 1"
        />

        <Image
          src={img2}
          style={{ width: "100%", height: "auto" }}
          alt="ACID 1"
        />

        <Image
          src={img3}
          style={{ width: "100%", height: "auto" }}
          alt="ACID 1"
        />
        <Image
          src={img4}
          style={{ width: "100%", height: "auto" }}
          alt="ACID 1"
        />
        <Image
          src={img5}
          style={{ width: "100%", height: "auto" }}
          alt="ACID 1"
        />
      </ImageContainer>
    </div>
  );
};

export default page;
