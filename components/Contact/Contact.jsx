import styles from "../../styles/Contact/Contact.module.css"
import Form from "../../components/Form"

const Contact = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.allBranchesList}>
                   <p> allBranchesList goes in here 
                    all telephone Numbers </p>

            </div>
            <div className={styles.contactForm}>
                <Form />
            </div>
        </div>
    );
}

export default Contact;