import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export default function Featured() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, StoryTails here! </b>
                Discover the world of stories and tales with us.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, omnis!</h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ad excepturi nulla perferendis itaque nam quod cum est explicabo deserunt.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
}