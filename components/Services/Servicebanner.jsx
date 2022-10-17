import styles from "../../styles/Services/Servicebanner.module.css";

const Servicebanner = () => {
    return (
        <div className={styles.container}>
          <div className={styles.quality}>
            <h2>Quality</h2>
            <p>Providing high-quality products, at affordable prices to our customers
                </p>
          </div>
          <div  className={styles.sustainability}>
          <h2>Sustainability</h2>
            <p>Safeguarding the well-being of the environment and the communities we work in.
                </p>
          </div>
        <div  className={styles.innovation}>
        <h2>Innovation</h2>
            <p>Organizational transformation and accelerating the development of innovative cultures
                
                </p>
        </div>
        </div>
    );
}

export default Servicebanner;