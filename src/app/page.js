import NavBar from "./components/NavBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={ styles.main }>
        <NavBar></NavBar>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
