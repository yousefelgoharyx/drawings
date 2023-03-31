import DrawingItem from "@/ui/DrawingItem/DrawingItem";
import Grid from "@/ui/Grid/Grid";
import OuterNav from "@/ui/OuterNav/OuterNav";
const Page = () => {
  return (
    <main>
      <OuterNav
        title="ACID: DB Properties"
        subtitle="Learn about the different properties of a database."
        withBack
      />
      <Grid>
        <DrawingItem
          title="Atomicity"
          description="A property where operations either happen completely or don't happen at all. No partial success"
          to="/acid/atomicity"
        />
        <DrawingItem
          title="Consistency"
          description="One definetion is when reading from a database `always` retrieves the latest value"
          to="/acid/consistency"
        />

        <DrawingItem
          title="Isolation"
          description="A property of a database where operations on the same data never see each other's in-progress work."
          to="/acid/isolation"
        />
        <DrawingItem
          title="Durability"
          description="A property of a database that guarantees that completed updates will not be lost if the system crashes."
          to="/acid/durability"
        />
      </Grid>
    </main>
  );
};

export default Page;
