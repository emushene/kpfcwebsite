import styles from "../../styles/About/BannerHappy.module.css"
const BannerHappy = () => {
    return (
        <div className={styles.lowerDiv}>
        <div className={styles.div40}>
            <h3>40+</h3>
            <h5>EAST AFRICA</h5>

        </div>
        <div className={styles.div10}>
        <h3>10+</h3>
            <h5>COUNTIES</h5>
        </div>
        <div className={styles.div35000}>
        <h3>3,500+</h3>
            <h5>HAPPY CLIENTS</h5>
        
        </div>
        <div className={styles.div100000}>
        <h3>10,000+</h3>
            <h5>COMPLETED ORDERS</h5>
            </div>
      </div>
    );
}

export default BannerHappy;