import styles from "../../styles/Services/TopServices.module.css";
import BannerHappy from "../About/BannerHappy";

const TopServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
      
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          alias sit sunt, cumque vitae ullam vel expedita, ut omnis aliquid
          accusamus quaerat officiis quidem molestias nulla ipsa pariatur
          aperiam perferendis?</p>
        
        <h2> OUR TOP SERVICES</h2>
        <hr />
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
          <div className={styles.card}>4</div>
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
