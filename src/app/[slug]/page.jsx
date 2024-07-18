import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import Image from "next/image";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            architecto?
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>17.07.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur quae vel mollitia nobis dolores reprehenderit
              accusantium est ab voluptate fuga!
            </p>
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, quisquam!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur quae vel mollitia nobis dolores reprehenderit
              accusantium est ab voluptate fuga!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur quae vel mollitia nobis dolores reprehenderit
              accusantium est ab voluptate fuga!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur quae vel mollitia nobis dolores reprehenderit
              accusantium est ab voluptate fuga!
            </p>
          </div>
        <div className={styles.comment}>
          <Comments />
        </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
