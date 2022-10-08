import styles from "../../styles/Blog/Posts.module.css"
import Post from "../Blog/Post"

export default function Posts () {

    return (
        <div className={styles.postsContainer}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

    );



}





// const Posts = ({Posts}) => {

//     return (
//         <div className={styles.postsContainer}>
//             <div className={styles.posts}>
//                 {Posts.map(p => (
//                     <Post />
//                 ))}
          

//            </div>
//         </div>
//     );
// }

// export default Posts;