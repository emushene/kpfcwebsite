import styles from "../../styles/Blog/Post.module.css";
import blogheadimage from "../../public/Images/blogheadimage.jpg"
import Image from "next/image";

const Post = () => {
    return (
        <div className={styles.postContainer}>
            <Image className={styles.postImg}      
               src={blogheadimage} alt="" objectFit="cover"/>
               <div className={styles.postInfo}>
                <div className={styles.postCats}>
                    <spam className={styles.postcat}>Building Materials</spam>
                    <spam className={styles.postCat}>Site Engineers</spam>
                </div>
                <span className={styles.postTitle}>
                    Lorem ipsum dolor sit amet consectetur. 
                                     
                </span>
                <hr />
                <span className={styles.postDate}>I hr Ago</span>
               </div>
               <p className={styles.postDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Expedita, consequuntur odit! Sed neque dolore deleniti a
                      corporis expedita quasi officiis sunt porro illo,
                     perspiciatis hic eius error facere repellendus veniam.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Expedita, consequuntur odit! Sed neque dolore deleniti a
                      corporis expedita quasi officiis sunt porro illo,
                     perspiciatis hic eius error facere repellendus veniam.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Expedita, consequuntur odit! Sed neque dolore deleniti a
                      corporis expedita quasi officiis sunt porro illo,
                     perspiciatis hic eius error facere repellendus veniam.
               </p>
        </div>
    );
}

export default Post;