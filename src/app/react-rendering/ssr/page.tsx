import img1 from "@/assets/react-rendering/ssr1.png";
import img2 from "@/assets/react-rendering/ssr2.png";
import Viewer from "@/ui/Viewer/Viewer";
const page = () => {
  return <Viewer title="SSR" images={[img1, img2]} />;
};

export default page;
