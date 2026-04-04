import Link from "next/link";
import styles from "./apresentacoes.module.css";

export default function Apresentacoes() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Voltar para Home
        </Link>
        <h1 className={styles.title}>Apresentações</h1>
        <p className={styles.description}>
          Explore nossos materiais e palestras.
        </p>
      </div>

      <div className={styles.grid}>
        <Link href="/apresentacoes/como-furar-a-bolha/index.html" className={styles.card}>
          <div className={styles.cardGlow} />
          <div className={styles.cardContent}>
            <span className={styles.tag}>Tech & Sociedade</span>
            <h2 className={styles.cardTitle}>Comunidades de Tecnologia</h2>
            <p className={styles.cardDesc}>
              A primeira apresentação oficial: O motor da inovação na sociedade. Conheça como a Reactivando fura a bolha e leva tecnologia para todos.
            </p>
            <span className={styles.readMore}>Ver apresentação →</span>
          </div>
        </Link>
        {/* Mais apresentações poderão ser adicionadas aqui futuramente */}
      </div>
    </main>
  );
}
