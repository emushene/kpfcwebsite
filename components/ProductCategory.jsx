import styles from "../styles/ProductCategory.module.css";
import * as React from 'react';
import Button from '@mui/material/Button';


const ProductCategory = () => {
  return (
    <div>
      <div>
        <div className={styles.containerProducts}>
          <div className={styles.categoryFlex}>
            <div className={styles.plumbing}></div>
            <div>
              <span className={styles.categorySpan}>PLUMBING</span>
            </div>
          </div>
          <div className={styles.categoryFlex}>
            <div className={styles.wood}></div>
            <div>
              <span className={styles.categorySpan}>WOOD</span>{" "}
            </div>
          </div>
          <div className={styles.categoryFlex}>
            <div className={styles.paints}></div>
            <div>
              <span className={styles.categorySpan}>PAINTS</span>{" "}
            </div>
          </div>
          <div className={styles.categoryFlex}>
            <div className={styles.general}></div>
            <div>
              <span className={styles.categorySpan}>GENERAL HARDWARE</span>{" "}
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.container}>
        <div className={styles.popularHeading}>
          <h1>MOST POPULAR PRODUCTS </h1>
        </div>
        <div className={styles.adverts}>
          <h1>Get Quality Plumbing Materials</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, est
            incidunt, hic soluta perferendis ipsum omnis expedita maiores
            doloribus placeat esse repudiandae cum,
          </p>
        </div>
        <div classname={styles.pictures}>
          <a href="#">
            <img
              src="/Images/doors.webp"
              alt="kpfc hardware doors"
              width="250"
              height="300"
            />
            <div className={styles.addCard}>Add to Cart</div>
          </a>
        </div>
        <div classname={styles.pictures}>
          <a href="#">
            <img
              src="/Images/cement.jpg"
              alt="kpfc hardware cement"
              width="250"
              height="300"
            />
            <div className={styles.addCard}>Add to Cart</div>
          </a>
        </div>
        <div classname={styles.pictures}>
          <a href="#">
            <img
              src="/Images/electrical.webp"
              alt="kpfc hardware Electrical"
              width="250"
              height="300"
            />
            <div className={styles.addCard}>Add to Cart</div>
          </a>
        </div>
        <div classname={styles.pictures}>
          <a href="#">
            <img
              src="/Images/duracoat.png"
              alt="ichiran"
              width="250"
              height="300"
            />
            <div className={styles.addCard}>Add to Cart</div>
          </a>
        </div>
      </div>
      <div className={styles.ourService}>
        <div className={styles.ourServiceText}>
        Free estimates are provided for work that 
        would be more involved than a service call.

        <h3> Remodeling, Replacing water <br />
        or sever lines, Repracing Fixtures, etc.
        </h3>
        </div>
        <div className={styles.ourServicesButton}>


 <Button variant="contained">OUR SERVICES</Button>


  
         
        </div>

      </div>
    </div>
  );
};

export default ProductCategory;
