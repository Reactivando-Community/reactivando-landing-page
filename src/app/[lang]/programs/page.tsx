import Link from "next/link";
import styles from "./apresentacoes.module.css";
import { getDictionary, Locale } from "@/i18n/get-dictionary";
import { presentationsRegistry } from "@/data/presentation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: `${dict.presentations.title} | Reactivando`,
    description: dict.presentations.description,
    openGraph: {
      title: `${dict.presentations.title} | Reactivando`,
      description: dict.presentations.description,
    }
  };
}

export default async function Apresentacoes({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={`${styles.title} mt-8`}>{dict.presentations.title}</h1>
        <p className={styles.description}>
          {dict.presentations.description}
        </p>
      </div>

      <div className={styles.grid}>
        {Object.entries(presentationsRegistry).map(([slug, presentation]) => (
            <Link key={slug} href={`/${lang}/presentations/${slug}`} className={styles.card}>
              {presentation.thumbnail && (
                <>
                  <div className={styles.cardImageContainer}>
                    <img src={presentation.thumbnail} alt={presentation.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.cardImageOverlay} />
                </>
              )}
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <span className={styles.tag}>{dict.presentations.tag_tech}</span>
                <h2 className={styles.cardTitle}>{presentation.title}</h2>
                <p className={styles.cardDesc}>
                  {presentation.description}
                </p>
                <span className={styles.readMore}>{dict.presentations.read_more}</span>
              </div>
            </Link>
        ))}

        {/* Keeping old legacy hardcoded presentation link if they still want it */}
        <Link href={`/${lang}/apresentacoes/como-furar-a-bolha/index.html`} className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img src="/presentation/slide-3.jpg" alt="Technology Communities" className={styles.cardImage} />
          </div>
          <div className={styles.cardImageOverlay} />
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
