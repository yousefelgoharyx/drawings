import img1 from "@/assets/react-rendering/selective-hydration.png";
import Viewer from "@/ui/Viewer/Viewer";
const page = () => {
  return <Viewer title="Selective Hydration" images={[img1]} />;
};

export default page;
