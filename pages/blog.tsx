import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'


const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
	  console.log("useEffect is running!");
	  fetch('/api/blogs').then((a)=>{ return a.json() }).then((parsed)=>{setBlogs(parsed); console.log(parsed)})
	}, [0])
	

	return <>
		<main className={styles.main}>
		<h1>Latest Blogs</h1>
		<div className={styles.grid}>
			<Link  href="/blogpost/Documentation">
				<div className={styles.card}>
			    <h2>Documentation &rarr;</h2>
			    <p>Find in-depth information about Next.js features and API.</p>
		    </div>
			</Link>
		
			<Link  href="/blogpost/Deploy">
				<div className={styles.card}>
			    <h2>Deploy &rarr;</h2>
			    <p>Find in-depth information about Next.js features and API.</p>
		    </div>
			</Link>
		
			<Link  href="/blogpost/Example">
				<div className={styles.card}>
			    <h2>Example &rarr;</h2>
			    <p>Find in-depth information about Next.js features and API.</p>
		    </div>
			</Link>
			
			<Link  href="/blogpost/Learn">
				<div className={styles.card}>
			    <h2>Learn &rarr;</h2>
			    <p>Find in-depth information about Next.js features and API.</p>
		    </div>
			</Link>
			</div>
		</main>
	</>
}

export default Blog