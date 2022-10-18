import styles from "../../styles/Blog/BlogHeader.module.css"
import Image from "next/image";
import blogheadimage from "../../public/Images/blogheadimage.jpg"



const BlogHeader = () => {
    return (
        <div>
        <div className={styles.container}>
            
            <div className={styles.headerTitles}>
            <span className={styles.headerKPFC}>KPFC BILDERS</span>
            <span className={styles.blogText}>Blog</span>
            </div>

            
            </div>
            {/* <div className={styles.imageDiv}> */}
            <Image className={styles.headerImg} src={blogheadimage} 
            alt=""
            layout="responsive"
            objectFit="cover" 
            height={10}
            width={20}
            z-tabIndex={-1}
            
            />
            {/* </div> */}
        </div>
    );
}

export default BlogHeader;