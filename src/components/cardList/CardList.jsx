import React from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

const getData = async (page) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    return res.json();
  };


export default async function CardList({page}) {
    const {posts,count} = await getData(page);

    const POST_PER_PAGE = 2;
    
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
              {posts?.map((item) => (
                <Card key={item._id} item={item}/>
              ))}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
        </div>
    );
}