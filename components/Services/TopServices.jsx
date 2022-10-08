import styles from "../../styles/Services/TopServices.module.css"
import BannerHappy from "../About/BannerHappy"

const TopServices = () => {
    return (
        <div className={styles.container}>
           <div className={styles.topDiv}>
            
            <p>Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Aspernatur alias sit sunt, 
             cumque vitae ullam vel expedita, ut omnis aliquid accusamus 
            quaerat officiis quidem molestias nulla ipsa pariatur aperiam perferendis?
            </p> 
            <h2> OUR TOP SERVICES</h2>
            <hr />
           </div>
           <div className={styles.lowerDiv}>
            <div className={styles.topServ}>
                <div className={styles.card}>1</div>
                <div className={styles.getQuote}><h5>GET A QUOTE</h5></div>
            </div>
            <div className={styles.topServ}>
            <div className={styles.card}>2</div>
                <div className={styles.getQuote}><h5>GET A QUOTE</h5></div>
            </div>
            <div className={styles.topServ}>
            <div className={styles.card}>3</div>
                <div className={styles.getQuote}><h5>GET A QUOTE</h5></div>
            </div>
            <div className={styles.topServ}>
            <div className={styles.card}>4</div>
                <div className={styles.getQuote}><h5>GET A QUOTE</h5></div>
            </div>
            
           </div>
           <div><BannerHappy /></div>
           
        </div>
    );
}

export default TopServices;