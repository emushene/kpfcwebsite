import styles from "../../styles/Services/Carousel.module.css"

const Carousel = () => {
    return (
        <div className={styles.mainContainer}>
          <div className={styles.corouselDiv}></div>
          <div className={styles.overlay}>
            <h1>OVERVIEW</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus 
            dignissimos aspernatur repellendus! Corrupti 
            vel obcaecati itaque architecto ab saepe
            </p>
          </div>
          
        </div>
        
    );
}

export default Carousel;