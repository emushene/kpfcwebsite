import styles from "../../styles/Blog/Settings.module.css"
import Sidebar from "../Blog/Sidebar"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Settings = () => {
    return (
        <div className={styles.container}>
         <div className={styles.settingsWrapper}>
       <div className={styles.settingsTitle}>
        <spam className={styles.settingsUpdateTitle}>Update your Account</spam>
        <spam className={styles.settingsDeleteTitle}>Delete Account</spam>
       </div>
       <form className={styles.settingsForm}>
        <label>Profile Picture</label>
        <div className={styles.settingsProfPic}>
            <img src="https://www.nicepng.com/png/detail/69-698871_our-service-solutions-are-customised-according-to-customers.png" alt="" />
            <label htmlFor="fileInput" styles={{display: "none" }}>
                <div className={styles.settingProfIcon}>
                <AccountCircleIcon />
                </div>
            </label>
        </div>
        <label >Username</label>
        <input type="text" placeholder="Author"/>
        <label >Email</label>
        <input type="email" placeholder="Author@kpipes.com"/>
        <label >Password</label>
        <input type="password" />
        <button className={styles.settingsSubmit}>Update</button>
       </form>
         </div>
         <div className={styles.sidebarDiv}>
         <Sidebar />
         <input type="file" id="fileInput" />
         </div>
         
        </div>
    );
}

export default Settings;