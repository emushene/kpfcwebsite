import BlogHeader from "./BlogHeader";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import styles from "../../styles/Blog/BlogPage.module.css"





const BlogPage = () => {
    

   
    return (
        <div>
            <BlogHeader />
        <div className={styles.BlogPage}>
            <div className={styles.div1}><Posts  /></div>
            <div className={styles.div2}> <Sidebar /></div>
        
        
       

        </div>
        </div>
    );
}

export default BlogPage;