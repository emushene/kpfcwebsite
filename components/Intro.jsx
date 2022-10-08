import styles from "../styles/Intro.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Corousel from  "./Corousel";
const Intro = () => {
  const images = [
    "/Images/_DSC0789.JPG",
    "/Images/_DSC0789.JPG",
    "/Images/_DSC0789.JPG",
  ];
  return (
    <div >
      <div className={styles.container}>
        <Corousel />
         </div>
       <div className={styles.reachOut}>
        
        <div className={styles.salesTeam}> <h2>Want To reach our Sales Team Today?</h2> </div>
        <div className={styles.appointment}> <h2>Book Appointment </h2></div>
       </div>
    </div>
  );
};

export default Intro;
