import styles from "../../styles/About/Carousal.module.css";

const Corousal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.glide}>
        
       
        <div className={styles.text}>
        <h2>About Us</h2>
          <p>KPFC Builders Hardware, where you <br /> will find everything
            your local hardware <br /> store carries and a lot more!</p>
        </div>
      </div>
    </div>
  );
};

export default Corousal;
