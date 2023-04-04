import DrawingItem from "@/ui/DrawingItem/DrawingItem";
import Grid from "@/ui/Grid/Grid";
import OuterNav from "@/ui/OuterNav/OuterNav";

const Page = () => {
  return (
    <main>
      <OuterNav
        title="React Basics"
        subtitle="Learn React basics with simple drawings"
        withBack
      />
      <Grid>
        <DrawingItem
          title="1. Introduction"
          description="Introduction to React and its most fundamental concept - components."
          to="/react-basics/introduction"
        />
        <DrawingItem
          title="2. JSX"
          description="Learn how to use JSX to write React components."
          to="/react-basics/jsx"
        />
      </Grid>
    </main>
  );
};

export default Page;
