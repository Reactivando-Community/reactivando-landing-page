import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Em construção
        </div>
        <h1 className={styles.title}>
          Bem-vindo à <span className={styles.gradientText}>Reactivando</span>
        </h1>
        <p className={styles.description}>
          O motor da inovação na sociedade. Um ecossistema focado em democratizar o poder da tecnologia.
        </p>
        
        <div className={styles.actions}>
          <Link href="/apresentacoes" className={styles.primaryButton}>
            Ver Apresentações
          </Link>
          <a
            href="https://hubcommunity.io"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            Conheça o Hub Community
          </a>
        </div>
      </div>

      <div className={styles.backgroundGlow} />
    </main>
  );
}
