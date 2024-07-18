import React from "react";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import styles from './blogPage.module.css';

export default function BlogPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style blog</h1>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    );
}