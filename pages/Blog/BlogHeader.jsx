import styles from "../../styles/Blog/BlogHeader.module.css"


const BlogHeader = () => {
    return (
        <div>
        <div className={styles.container}>
            
            <div className={styles.headerTitles}>
            <span className={styles.headerKPFC}>KPFC BILDERS</span>
            <span className={styles.blogText}>Blog</span>
            </div>

            
            </div>
            <img className={styles.headerImg} src="https://lh3.googleusercontent.com/y1YkkBjbX52GicACMjPZ1ypZIe2-95mjK7gVrauPBHWdu5K16lJJuTEHXDZA3NXmz390mL14K20RXDxdFA1VKxVJQwCA=s750" alt="" />
        </div>
    );
}

export default BlogHeader;