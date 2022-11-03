import styles from "../../styles/About/Aspiration.module.css"
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";


const Aspiration = () => {
    return (
        <div className={styles.container}>
            <div className={styles.aspiration}>
            <h2> Our Aspiration</h2>
            <p>
                Setting standards in the distribution of quality building and hardware items as well 
                 as efficient plumbing and electrical materials. <br /> <br />
                 This is the goal we always have in mind.
                 <br /><br />
                 This is how we achieve above-average and profitable growth. We are commited to progress and we are avant-garde, 
                 both in leading the market and with respect to wholesale and retail distribution.
            </p>

            </div>

            <div className={styles.trusted}>
                <h6>OUR PARTNERS</h6>
                <h2>We Are Trusted</h2>
                <p>
                    We endeavour to create formidable relations with 
                    our key Trusted partners in the industruy.

                </p>
                <div className={styles.logoDiv}>
                <div className={styles.partnerLogo}> Logo</div>
                <div className={styles.partnerLogo}>Logo</div>
                <div className={styles.partnerLogo}>Logo</div>
                <div className={styles.partnerLogo}>Logo</div>
                <div className={styles.partnerLogo}>Logo</div>
                <div className={styles.partnerLogo}>Logo</div>

                
                </div>

                <div className={styles.call}>
                    <div className={styles.callIcon}>
                    <ContactPhoneIcon />
                    </div>
                    <div className={styles.callText}>
                        <h6>Call to Ask a Question</h6>
                        <h2>0725 468 228</h2>
                        </div>    
                </div>

            </div>

        </div>
    );
}

export default Aspiration;