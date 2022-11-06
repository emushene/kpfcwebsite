import styles from "../../styles/About/Carousal.module.css";
import Image from "next/image"
import backgroundImg from "../../public/Images/About_Us_Page_Cover.jpg"


const Corousal = () => {
  return (
    <div className={styles.container}>

      <Image src={backgroundImg} 
        alt="kpfc-builders-hardweare-best-quality-afordable-building-materials" 
        layout="responsive"
        display="none"
        
        />
          
      <div className={styles.glide}>
        
       
        <div className={styles.text}>
      
        <h1>About Us</h1>
        <p>
        What distinguishes KPFC Builders Hardware? Our understasnding of
         what true partnership and collaboration means.

        </p>
     
        </div>
      </div>
    </div>
  );
};

export default Corousal;
