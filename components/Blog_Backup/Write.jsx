import styles from "../../styles/Blog/Write.module.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Write = () => {
    return (
        <div className={styles.write}>
            {/* <img src="https://scontent.fnbo11-1.fna.fbcdn.net/v/t39.30808-6/307771001_663016995184162_3856403205834217292_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=IMX2kZaG5B0AX_lGmOB&_nc_ht=scontent.fnbo11-1.fna&oh=00_AT-a7Bm6vgDNujWW3rY6e6-K62Y_t1JFUI0Sfcn0AeQJkw&oe=63366AD7" alt="" className={styles.writeImg}/> */}
          <form className={styles.writeForm}>
            <div className={styles.writeFormGroup}>
                <label htmlFor="fileInput">
                    <AddCircleOutlineIcon className={styles.addIcon}/>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                <input type="text" placeholder="Title" className={styles.writeInput} autoFocus={true} />
            </div>
            <div className={styles.writeFormGroup}>
                <textarea placeholder="Write about KPFC Builders Hardware" type="text" 
                className={styles.writeText+ '' +styles.writeInput+''+styles.writeText}
                ></textarea>
            </div>
            <button className={styles.writeSubmit}>PUBLISH</button>
          </form>
        </div>
    );
}

export default Write;