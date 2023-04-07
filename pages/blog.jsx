import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("useEffect is running!");
    fetch("/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
        console.log(parsed);
      });
  }, [0]);

  return (
    <>
      <main className={styles.main}>
        <h1>Latest Blogs</h1>
        <div className={styles.grid}>
          {blogs.map((blogitem) => {
            const slug = blogitem.title;
            return (
              <div key={slug}>
                <Link
                  href={`http://127.0.0.1:3000/blogpost/${slug.replace(
                    / /g,
                    "-"
                  )}`}
                >
                  <div className={styles.card}>
                    <h2>{blogitem.title} &rarr;</h2>
                    <p>{blogitem.content.slice(0, 50) + "..."}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Blog;
