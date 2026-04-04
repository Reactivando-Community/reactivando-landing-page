import Link from "next/link";
import styles from "./apresentacoes.module.css";
import { getDictionary, Locale } from "@/i18n/get-dictionary";

export default async function Apresentacoes({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Link href={`/${lang}`} className={styles.backLink}>
          {dict.presentations.back}
        </Link>
        <h1 className={styles.title}>{dict.presentations.title}</h1>
        <p className={styles.description}>
          {dict.presentations.description}
        </p>
      </div>

      <div className={styles.grid}>
        <Link href="/apresentacoes/como-furar-a-bolha/index.html" className={styles.card}>
          <div className={styles.cardGlow} />
          <div className={styles.cardContent}>
            <span className={styles.tag}>{dict.presentations.tag_tech}</span>
            <h2 className={styles.cardTitle}>{dict.presentations.card_title_1}</h2>
            <p className={styles.cardDesc}>
              {dict.presentations.card_desc_1}
            </p>
            <span className={styles.readMore}>{dict.presentations.read_more}</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
