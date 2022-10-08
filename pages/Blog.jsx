import Head from "next/head"
import styles from "../styles/Blog.module.css"
import BlogPage from "./Blog/BlogPage"

const Blog = () => {
    return (

        <div>
        <Head>
        <title>Blog Page</title>
        <meta name="description" content="Shop best cheapest quality Hardware plumbing kenya" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      </Head>
    
     <div className={styles.single}>
      <BlogPage />
     
      </div>

        </div>
    )
}

export default Blog;