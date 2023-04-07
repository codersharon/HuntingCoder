import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";

const slug = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { slug } = router.query;
    console.log("useEffect is running!");
    fetch(`http://127.0.0.1:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setContent(parsed.content);
        setTitle(parsed.title);
      });
  }, [router.isReady]);

  return (
    <div style={{ margin: "0% 12px" }}>
      <h1 style={{ fontSize: "xx-large", font: "bolder" }}>{title}</h1>
      <hr></hr>
      <p styles={{ fontSize: "x-large" }}>{content}</p>
    </div>
  );
};

export default slug;
