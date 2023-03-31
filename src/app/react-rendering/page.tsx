import DrawingItem from "@/ui/DrawingItem/DrawingItem";
import Grid from "@/ui/Grid/Grid";
import OuterNav from "@/ui/OuterNav/OuterNav";
const Page = () => {
  return (
    <main>
      <OuterNav
        title="React Rendering"
        subtitle="Learn about the different ways to render React apps."
        withBack
      />
      <Grid>
        <DrawingItem
          title="CSR"
          description="CSR is short for Client Side Rendering. It is a technique for rendering a web page entirely the client"
          to="/react-rendering/csr"
        />
        <DrawingItem
          title="SSR"
          description="SSR is short for Server Side Rendering. It is a technique for rendering a web page on the server instead of the client. This is useful for SEO and performance."
          to="/react-rendering/ssr"
        />

        <DrawingItem
          title="Streaming SSR"
          description="how the React team is trying to solve the problems with SSR with the new architecture."
          to="/react-rendering/streaming-ssr"
        />
        <DrawingItem
          title="Selective Hydration"
          description="Another feature that the React team is working on to solve the problems with SSR."
          to="/react-rendering/selective-hydration"
        />
      </Grid>
    </main>
  );
};

export default Page;
