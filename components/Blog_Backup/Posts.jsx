import styles from "../../styles/Blog/Posts.module.css"
import Post from "../Blog/Post"

const Posts = () => {
    return (
        <div className={styles.postsContainer}>
            <div className={styles.posts}>
           <Post />
           <Post />
           <Post />
           <Post />

           </div>
        </div>
    );
}

export default Posts;