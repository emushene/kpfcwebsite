import styles from "../../styles/Blog/SinglePost.module.css"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import Sidebar from "../Blog/Sidebar";

const SinglePost = () => {
    return (
        <div className={styles.container}>
        <div className={styles.singlePost}>
         
        <div className={styles.singlePostWrapper}>
            <img src="https://girishsab.files.wordpress.com/2018/02/rotary-switch.jpg" alt="" className={styles.singlePostImg} />
            <h1 className={styles.singlePostTitle}> Lorem ipsum dolor, 
            sit
            <div className={styles.singlePostEditContainer}>
                <ModeEditOutlineOutlinedIcon className={styles.SinglePostEdit}/>
                <DeleteForeverTwoToneIcon className={styles.SinglePostDelete}/>
            </div>
        </h1>
        <div className={styles.singlePostInfo}>
            <span className={styles.singlePostAuthor}>Author: <b> Kimani Ichungwa</b> </span>
            <span className={styles.singlePostDate}>Author 1 Hr Ago</span>
        </div>
        <p className={styles.singlePostDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio ipsum molestias repellat exercitationem voluptates aut 
            laborum quam, beatae quasi saepe dolore? Eum labore,
             eligendi adipisci soluta mollitia doloribus officiis maxime.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio ipsum molestias repellat exercitationem voluptates aut 
            laborum quam, beatae quasi saepe dolore? Eum labore,
             eligendi adipisci soluta mollitia doloribus officiis maxime.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio ipsum molestias repellat exercitationem voluptates aut 
            laborum quam, beatae quasi saepe dolore? Eum labore,
             eligendi adipisci soluta mollitia doloribus officiis maxime.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio ipsum molestias repellat exercitationem voluptates aut 
            laborum quam, beatae quasi saepe dolore? Eum labore,
             eligendi adipisci soluta mollitia doloribus officiis maxime.
        </p>
        </div>
        </div>
        <Sidebar/>
        </div>
    );
}

export default SinglePost;