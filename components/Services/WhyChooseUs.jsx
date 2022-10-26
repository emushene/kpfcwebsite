import styles from "../../styles/Services/WhyChooseUs.module.css";
import staff from "../../public/Images/Staff-Image-1.webp"
import Image from "next/image";



const WhyChooseUs = () => {
  return (
    <div className={styles.topContainer}>
      <h2>WHY CHOOSE US</h2>
      <div className={styles.Image}>
      <Image src={staff} alt="" layout="fill"
      objectFit="contain" 
      />
      </div>
      <div className={styles.container}>
        <div className={styles.centerLeftDiv}>
          <div className={styles.centerLeft1}>
            <div className={styles.centerLeftBox}></div>
            <div className={styles.centerLeftText}>
              <h4>Best in the Industry</h4>
              <p>
                : We are the leading building & plumbing hardware Wholesale &
                Retail Company in Kenya, supplying both construction & plumbing
                hardware materials to commercial and residential property
                owners.
              </p>
            </div>
          </div>
          <div className={styles.centerLeft2}>
            <div className={styles.centerLeftBox}></div>
            <div className={styles.centerLeftText}>
              <h4>Award Winning</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur <br />
                adipisicing elit. Incidunt, hic? Soluta, eius unde?
              </p>
            </div>
          </div>
          <div className={styles.centerLeft3}>
            <div className={styles.centerLeftBox}></div>
            <div className={styles.centerLeftText}>
              <h4>Happy Clients</h4>
              <p>
                We pride ourselves in providing a tangible level of loyalty and
                satisfaction amongst our clients, a resonating customer
                experience after engaging with the KPFC team
              </p>
            </div>
          </div>
        </div>
        <div className={styles.centerRightDiv}>
          <div className={styles.centerRight}>
         
            <div className={styles.centerRightText}>
              <h4>Proffesional Staff</h4>
              <p>
                Our qualified pool of employees across the departments provides
                our customers with leadership, management, and/or program
                direction in collaboration with executive administration,
                faculty, and classified staff
              </p>
            </div>
            <div className={styles.centerRightBox}></div>
          
          </div>
          <div className={styles.centerRight}>
         
            <div className={styles.centerRightText}>
              <h4>24/7 Support</h4>
              <p>
                We offer dependable, on-demand support options including 24/7
                technical and remote support and where required,
                next-business-day on-site support countrywide.
              </p>
            </div>
            <div className={styles.centerRightBox}></div>
          </div>
          <div className={styles.centerRight}>
        
            <div className={styles.centerRightText}>
              <h4>Quality Assuarance</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur <br />
                adipisicing elit. Incidunt, hic? Soluta, eius unde?
              </p>
            </div>
            <div className={styles.centerRightBox}></div>
          </div>
        </div>
      </div>
      <div className={styles.banner}></div>
    </div>
  );
};

export default WhyChooseUs;
