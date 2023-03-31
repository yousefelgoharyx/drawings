import img1 from "@/assets/acid/1.png";
import img2 from "@/assets/acid/2.png";
import Viewer from "@/ui/Viewer/Viewer";
const page = () => {
  return <Viewer title="Atomicity" images={[img1, img2]} />;
};

export default page;
