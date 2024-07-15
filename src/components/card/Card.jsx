import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15.07.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            velit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex
          hic optio maxime quaerat laboriosam earum iure consectetur iusto quis.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
}
