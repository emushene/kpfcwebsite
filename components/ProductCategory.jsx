import styles from "../styles/ProductCategory.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Invest from "./Invest";
import BlogSubSection from "./BlogSubSection";
import Simple from "./Shop/Simple";


const ProductCategory = () => {
  return (
    <div className={styles.prodDiv}>
      <div className={styles.fullContainer}>
        <div className={styles.productsHeader}>
          <h2> PRODUCTS BY CATEGORY</h2>
                  
        </div>
        <div className={styles.categoryCorousel}>
          <Simple />
          </div>
        <div className={styles.containerProducts}>
        <h6>MOST POPULAR PRODUCTS </h6>
             
        </div> 
      </div>
      <div className={styles.container}>
        <div className={styles.popularHeading}>
          <h1>MOST POPULAR PRODUCTS </h1>
          <div className={styles.mostDivLeft}>
            <img src="./Images/leftArrow.png" alt="" />
          </div>
          <div className={styles.mostDivRight}>
            <img src="./Images/rightArrow.png" alt="" />
          </div>
        </div>
        <div className={styles.adverts}>
          <h1>Get Quality Plumbing Materials</h1>
          <button className={styles.advertButton}>Shop Now</button>
        </div>
        <div className={styles.pictures1}>
          <a className={styles.a} href="#">
            <img
              src="/Images/doors.webp"
              alt="kpfc hardware doors"
              // width="260"
              // height="300"
            />
            <button className={styles.addCard}>Add to Cart</button>
          </a>
        </div>
        <div className={styles.pictures2}>
          <a className={styles.a} href="#">
            <img
              src="/Images/cement.jpg"
              alt="kpfc hardware cement"
              // width="260"
              // height="300"
            />
            <button className={styles.addCard}>Add to Cart</button>
          </a>
        </div>
        <div className={styles.pictures3}>
          <a className={styles.a} href="#">
            <img
              src="/Images/electrical.webp"
              alt="kpfc hardware Electrical"
              // width="260"
              // height="300"
            />
            <button className={styles.addCard}>Add to Cart</button>
          </a>
        </div>
        <div className={styles.pictures4}>
          <a className={styles.a} href="#">
            <img
              src="/Images/duracoat.png"
              alt="ichiran"
              // width="260"
              // height="300"
            />
          </a>
          <button className={styles.addCard}>Add to Cart</button>
        </div>
        <div className={styles.pictures5}>
          <a className={styles.a} href="#">
            <img
              src="/Images/d16.webp"
              alt="ichiran"
              // width="260"
              // height="300"
            />
          </a>
          <button className={styles.addCard}>Add to Cart</button>
        </div>
        <div className={styles.pictures6}>
          <a className={styles.a} href="#">
            <img
              src="/Images/tools.webp"
              alt="ichiran"
              // width="260"
              // height="300"
            />
          </a>
          <button className={styles.addCard}>Add to Cart</button>
        </div>
      </div>
      <div className={styles.ourService}>
        <div className={styles.ourServiceText}>
          <p>
            Free estimates are provided for work that would be more involved
            than a service call.
          </p>
          <h3>
            {" "}
            Remodeling, Replacing water <br />
            or sever lines, Repracing Fixtures, etc.
          </h3>
        </div>
        <div className={styles.ourServicesButton}>
          <Button
            variant="contained"
            style={{
              borderRadius: "40px",
              width: "250px",
              border: "none",
              color: "orange",
              backgroundColor: "rgb(5, 81, 196)",
              textTransform: "none",
              padding: "14px 30px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <a href="/Services">OUR SERVICES</a>
          </Button>
        </div>
        <div className={styles.ourServicesButtonMobile}>
          <Button
            variant="contained"
            style={{
              borderRadius: "40px",
              width: "120px",
              border: "none",
              color: "orange",
              backgroundColor: "rgb(5, 81, 196)",
              textTransform: "none",
              padding: "2px 8px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <a href="/Services">OUR SERVICES</a>
          </Button>
        </div>
      </div>
      <Invest />
      <BlogSubSection />
    </div>
  );
};

export default ProductCategory;
