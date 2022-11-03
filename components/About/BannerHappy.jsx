import styles from "../../styles/About/BannerHappy.module.css"
const BannerHappy = () => {
    return (
        <div className={styles.lowerDiv}>
        <div className={styles.div40}>
            <h3>40+</h3>
            <h5>BRANCHES <br />COUNTRYWIDE</h5>

        </div>
        <div className={styles.div10}>
        <h3>10+</h3>
            <h5>COUNTIES <br /> COVERED</h5>
        </div>
        <div className={styles.div35000}>
        <h3>5K+</h3>
            <h5>HAPPY <br /> CLIENTS</h5>
        
        </div>
        <div className={styles.div100000}>
        <h3>10K</h3>
            <h5>COMPLETED <br /> ORDERS</h5>
            </div>
      </div>
    );
}

export default BannerHappy;