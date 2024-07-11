import React from "react";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Pagination />
        </div>
    );
}