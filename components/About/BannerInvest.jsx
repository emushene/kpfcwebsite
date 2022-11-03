import styles from "../../styles/About/BannerInvest.module.css"
const BannerInvest = () => {
    return (
        <div className={styles.container}>
           <div className={styles.textDiv}>
           <h1>#InvestNaKPFC Builders Today!</h1>

           <p>
            Join the KPFC Builders investiment program with selected products succh as Deformed Bars, 
            Square Tubes & other Building Materials.
           </p>
           </div>
            <div className={styles.buttonDiv}>
            <button><h2>LEARN MORE</h2></button>

            </div>
          
        </div>
    );
}

export default BannerInvest;