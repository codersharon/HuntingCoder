import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.data);

  // useEffect(() => {

  // }, [0]);

  return (
    <>
      <main className={styles.main}>
        <h1>Latest Blogs</h1>
        <div className={styles.grid}>
          {blogs.map((blogitem) => {
            const slug = blogitem.title;
            return (
              <div key={slug} style={{cursor: "pointer"}}>
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

export async function getServerSideProps(context) {
  const response = await fetch("http://127.0.0.1:3000/api/blogs");
  const data = await response.json()
  

  return {
    props: {data}
  }
}

export default Blog;
