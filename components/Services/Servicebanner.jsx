import styles from "../../styles/Services/Servicebanner.module.css";

const Servicebanner = () => {
    return (
        <div className={styles.container}>
          <div className={styles.quality}>
            <h2>Quality</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatibus dignissimos aspernatur repellendus!
                Corrupti vel obcaecati itaque architecto ab saepe
                </p>
          </div>
          <div  className={styles.sustainability}>
          <h2>Sustainability</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatibus dignissimos aspernatur repellendus!
                Corrupti vel obcaecati itaque architecto ab saepe
                </p>
          </div>
        <div  className={styles.innovation}>
        <h2>Innovation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti vel obcaecati itaque architecto ab saepe
               Voluptatibus dignissimos aspernatur repellendus!
                
                </p>
        </div>
        </div>
    );
}

export default Servicebanner;