import styles from "../styles/ProductCategory.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Invest from "./Invest";
import BlogSubSection from "./BlogSubSection";

const ProductCategory = () => {
  return (
    <div>
      <div>
      <div className={styles.productsHeader}><h2> PRODUCTS BY CATEGOR</h2></div>
        <div className={styles.containerProducts}>
       
          <div className={styles.categoryFlex}>
          <h2 style={{color: 'blue'}}> PRODUCTS BY CATEGORY </h2>
            <div className={styles.plumbing}></div>
            <div>
              <Button
                variant="contained"
                style={{
                  color: "orange",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  padding: "14px 30px",
                }}
              >
                PLUMBING
              </Button>
            </div>
          </div>
          <div className={styles.categoryFlex}>
            <div className={styles.wood}></div>
            <div>
              <Button
                variant="contained"
                style={{
                  color: "orange",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  padding: "14px 30px",
                }}
              >
                WOOD
              </Button>
            </div>
          </div>
          <div className={styles.categoryFlex}>
            <div className={styles.paints}></div>
            <div>
              <Button
                variant="contained"
                style={{
                  color: "orange",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  padding: "14px 30px",
                }}
              >
                PAINTS
              </Button>
            </div>
          </div>
          <div className={styles.categoryFlex}>
            <div className={styles.general}></div>
            <div>
              <Button
                variant="contained"
                style={{
                  color: "orange",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  padding: "14px 30px",
                }}
              >
                GENERAL HARDWARE
              </Button>
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
          Free estimates are provided for work that would be more involved than
          a service call.
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
              borderRadius: "45%",
              color: "orange",
              backgroundColor: " rgba(10, 3, 121, 0.8)",
              textTransform: "none",
              padding: "14px 30px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            OUR SERVICES
          </Button>
        </div>
      </div>
      <Invest />
      <BlogSubSection />
    </div>
  );
};

export default ProductCategory;
