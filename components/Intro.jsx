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
      {/* <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
        <div className={styles.carouselDiv}>
          <img src="/Images/construction.JPG" />
          <p className="legend"> Lagend 1</p>
         </div>
        <div>
          <img src="/Images/_DSC1169.JPG" />
          <p className="legend"> Lagend 1</p>
        </div>
        <div>
          <img src="Images/_DSC1240.JPG" />
          <p className="legend"> Lagend 1</p>
        </div>
       </Carousel> */}
       </div>
       <div className={styles.reachOut}>
        <div className={styles.salesTeam}> <h2>Want To reach our Sales Team Today?</h2> </div>
        <div className={styles.appointment}> <h2>Book Appointment </h2></div>
       </div>
    </div>
  );
};

export default Intro;
