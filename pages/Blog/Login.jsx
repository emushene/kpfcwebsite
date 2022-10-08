import styles from "../../styles/Blog/Login.module.css"
import Sidebar from "./Sidebar";


const Login = () => {
    return (
        <div className={styles.container}>
        <div className={styles.login}>
           <span className={styles.loginTitle}> Login</span>
           <form className={styles.loginForm}>
            <label > Email</label>
            <input type="email" placeholder="Enter your Email" />
            <label > Password</label>
            <input type="password" placeholder="password....." />
            <button className={styles.loginButton}>Login</button>

           </form>
           <button className={styles.registerButton}>Register</button>
        </div>
        <Sidebar/>
        </div>
    );
}

export default Login;