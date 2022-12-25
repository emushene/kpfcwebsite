import styles from "../styles/Upload.module.css"

const upload = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formDiv}>

            <h1>Upload Stock</h1>
            <form action="" className={styles.form}>

                <input type="text" placeholder=""/>
                <input type="text" placeholder="Name" />
                <input type="text" />
                <input type="file" id="myFile" name="filename" />

            </form>

                
            </div>


        </div>
    );
}

export default upload;