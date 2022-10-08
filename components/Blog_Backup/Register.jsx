
import styles from "../../styles/Blog/Register.module.css"

const Register = () => {
    return (
        <div className={styles.register}>
           <span className={styles.registerTitle}> Register</span>
           <form className={styles.registerForm}>
           <label > Username</label>
            <input type="text" placeholder="Enter username" />
            <label > Email</label>
            <input type="email" placeholder="Enter your Email" />
            <label > Password</label>
            <input type="password" placeholder="password....." />
            <button className={styles.registerButton}>Register</button>

           </form>
           <button className={styles.loginButton}>Login</button>
        </div>
    );
}


export default Register;