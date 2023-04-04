import img1 from "@/assets/react-rendering/streaming-ssr.png";
import Viewer from "@/ui/Viewer/Viewer";
const page = () => {
  return <Viewer title="Streaming SSR" images={[img1]} />;
};

export default page;
