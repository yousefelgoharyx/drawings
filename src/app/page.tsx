import ReactIcon from "@/icons/React";
import styles from "./page.module.scss";
import DrawingItem from "@/ui/DrawingItem/DrawingItem";
import DatabaseIcon from "@/icons/Database";
import Grid from "@/ui/Grid/Grid";
import OuterNav from "@/ui/OuterNav/OuterNav";
import JsIcon from "@/icons/Js";

export default function Home() {
  return (
    <main>
      <OuterNav
        title="VecDraws"
        subtitle="A collection of drawings that explain concepts in computer science."
      />
      <Grid>
        <DrawingItem
          title="Rendering Teqhniques"
          description="Learn about the various ways and enviroments React can render your app."
          icon={<ReactIcon size={64} />}
          to="/react-rendering"
        />

        <DrawingItem
          title="ACID: DB features"
          description="The four properties of a database transactions that guarantee data integrity."
          icon={<DatabaseIcon size={64} />}
          to="/acid"
        />
        <DrawingItem
          title="JS Event Loop"
          description="Javascript is a single threaded language, but it can do a lot of things at once. How?"
          icon={<JsIcon size={64} />}
          to="/acid"
          soon
        />
      </Grid>
      <footer className={styles.footer}>
        <p>
          Made with <span className={styles.heart}>❤</span> by{" "}
          <a
            href="https://twitter.com/vecsai"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vecsai
          </a>
        </p>
      </footer>
    </main>
  );
}
