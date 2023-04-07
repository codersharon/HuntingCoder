import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Slug = (props) => {
  const [title, setTitle] = useState(props.data.title);
  const [content, setContent] = useState(props.data.content);
  // const router = useRouter();

  // useEffect(() => {
    //   console.log("useEffect is running!");
    
    //     .then((a) => {
      //       return a.json();
      //     })
      //     .then((parsed) => {
        //       setContent(parsed.content);
        //       setTitle(parsed.title);
        //     });
        // }, [router.isReady]);
        
        return (
          <div style={{ margin: "0% 12px" }}>
      <h1 style={{ fontSize: "xx-large", font: "bolder" }}>{title}</h1>
      <hr></hr>
      <p styles={{ fontSize: "x-large" }}>{content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const response = await fetch(`http://127.0.0.1:3000/api/getblog?slug=${slug}`);
  const data = await response.json()
  

  return {
    props: {data}
  }
}


export default slug;
