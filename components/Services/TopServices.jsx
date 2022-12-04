import styles from "../../styles/Services/TopServices.module.css";
import BannerHappy from "../About/BannerHappy";

const TopServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.topDiv}>
      
        <p className={styles.phead}>Whether you’re starting up a small hardware Business, 
          building momentum or building a home, <br />our Services will 
          free you up to do what you do best.  KPFC Builders hardware will 
          take your Products requirements and delivery to the next level,
           and put you back in business fast.</p>
        
        <h2> OUR TOP SERVICES</h2>
        <hr />
      </div>
      </div>
      <div className={styles.lowerDiv}>
        <div className={styles.topServ}>
          <div className={styles.card}>
            <h2>CUSTOMIZED ORDERS</h2>
            <p>Can’t find the right material size you need? We’re happy to help!
            You can place a custom order with us. Just contact us, and we’ll
            walk through your project and find the right materials for your
            space.</p>
          </div>
          <div className={styles.getQuote}>
            <h5>GET A QUOTE</h5>
          </div>
        </div>
        <div className={styles.topServ}>
          <div className={styles.card}>
            <h2>DELIVERY FROM STORE</h2>
            <p> If you are trying to complete a project quickly, want to get
            larger-sized items to your home or job site or if you cant make it
            into the store, “Delivery from Store” is for you.</p>
          </div>
          <div className={styles.getQuote}>
            <h5>GET A QUOTE</h5>
          </div>
        </div>
        <div className={styles.topServ}>
          <div className={styles.card}>
            <h2>INDUSTRY CONSULTING SERVICES</h2>
            <p>   Our experience with building materials across global markets allows
            us to provide expert decision analysis, proven expertise, and
            innovative thinking.</p>
          </div>
          <div className={styles.getQuote}>
            <h5>GET A QUOTE</h5>
          </div>
        </div>
        <div className={styles.topServ}>
          <div className={styles.card}>
          <h2>BULK PURCHASING</h2>
          <p>Bulk purchasing from our suppliers 
            of much larger quantities of materials than the usual, enables KPFC Builders Hardware to
           lower our prices.</p>
          </div>
          <div className={styles.getQuote}>
            <h5>GET A QUOTE</h5>
          </div>
        </div>
        
      </div>
      <div className={styles.banner}>
        <BannerHappy />
      </div>
    </div>
  );
};

export default TopServices;
