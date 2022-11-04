import styles from "../styles/Intro.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Corousel from  "./Corousel";
const Intro = () => {
  const images = [
    "/Images/_DSC0789.JPG",
    "/Images/_DSC0789.JPG",
    "/Images/_DSC0789.JPG",
  ];
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Corousel />
    
         </div>

    </div>
  );
};

export default Intro;
