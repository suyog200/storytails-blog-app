import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const categories = [
    { name: "style", href: "/blog?cat=style" },
    { name: "fashion", href: "/blog?cat=fashion" },
    { name: "food", href: "/blog?cat=food" },
    { name: "coding", href: "/blog?cat=coding" },
    { name: "travel", href: "/blog?cat=travel" },
    { name: "culture", href: "/blog?cat=culture" }
];

export default function CategoryList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular categories</h1>
            <div className={styles.categories}>
                {categories.map((category, index) => (
                    <Link href={category.href} key={index} className={`${styles.category} ${styles[category.name]}`}>
                        <Image 
                            src={`/${category.name}.png`}
                            alt={category.name}
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </Link>
                ))}
            </div>
        </div>
    );
}
