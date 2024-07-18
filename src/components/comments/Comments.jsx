import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Comments() {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment" className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Suyog Chari</span>
              <span className={styles.date}>17.07.2024</span>
            </div>
          </div>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa?</p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Suyog Chari</span>
              <span className={styles.date}>17.07.2024</span>
            </div>
          </div>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa?</p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Suyog Chari</span>
              <span className={styles.date}>17.07.2024</span>
            </div>
          </div>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa?</p>
        </div>
      </div>
    </div>
  );
}
