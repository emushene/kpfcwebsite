import styles from "../../styles/Services/SplitBanner.module.css";

const SplitBanner = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_1}>
                <h2>We are commited to provinding 
                    the best quality of service
                </h2>
            </div>
            <div className={styles.hero_2}>
                <h2>
                    Contact US
                </h2>
            </div>
            
        </div>
    );
}

export default SplitBanner;