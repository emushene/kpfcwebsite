import styles from "../../styles/Services/Carousel.module.css";
import Image from "next/image";
import serviceImage from "../../public/Images/ServicePage.jpg"

const Carousel = () => {
  return (
    <div className={styles.mainContainer}>
      <Image src={serviceImage} alt="KPFC-BUILDERS-HARDWARE-STORE" 
      fill
      objectFit="cover"
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              
      />
      <div className={styles.corouselDiv}></div>
      <div className={styles.overlay}>
        <h1>Services Overview</h1>
        <p>
          We thrive on offering the widest variety across our range of
          departments under one roof and trust you will find whatever you are
          looking for. We pride ourselves on building a personal relationship
          with all our customers to ensure their needs are satisfied and they
          feel part of our family.
        </p>
      </div>
    </div>
  );
};

export default Carousel;
