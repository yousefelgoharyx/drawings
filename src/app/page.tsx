import ReactIcon from "@/icons/React";
import styles from "./page.module.css";
import DrawingItem from "@/ui/DrawingItem/DrawingItem";
import DatabaseIcon from "@/icons/Database";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Drawy</h1>
      <p>Drawy is a collection of drawings that explain concepts in computer</p>
      <div className={styles.drawingsGrid}>
        {/* <DrawingItem
          title="React SSR"
          description="SSR is short for Server Side Rendering. It is a technique for rendering a web page on the server instead of the client. This is useful for SEO and performance."
          icon={<ReactIcon size={64} />}
          to="/react-ssr"
        /> */}

        <DrawingItem
          title="ACID"
          description="ACID is an acronym for Atomicity, Consistency, Isolation, and Durability. These are the four properties of a transaction that guarantee data integrity."
          icon={<DatabaseIcon size={64} />}
          to="/acid"
        />
      </div>
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
