import img1 from "@/assets/react-basics/1.png";
import Viewer from "@/ui/Viewer/Viewer";
const page = () => {
  return <Viewer title="Introduction" images={[img1]} />;
};

export default page;
