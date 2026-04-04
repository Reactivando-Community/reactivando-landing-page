import Link from "next/link";
import styles from "./page.module.css";
import { getDictionary, Locale } from "@/i18n/get-dictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          {dict.home.badge}
        </div>
        <h1 className={styles.title}>
          {dict.home.welcome} <span className={styles.gradientText}>Reactivando</span>
        </h1>
        <p className={styles.description}>
          {dict.home.description}
        </p>
        
        <div className={styles.actions}>
          <Link href={`/${lang}/apresentacoes`} className={styles.primaryButton}>
            {dict.home.button_presentations}
          </Link>
          <a
            href="https://hubcommunity.io"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            {dict.home.button_hub}
          </a>
        </div>
      </div>

      <div className={styles.backgroundGlow} />
    </main>
  );
}
