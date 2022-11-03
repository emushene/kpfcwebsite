import styles from "../styles/ProductCategory.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Invest from "./Invest";
import BlogSubSection from "./BlogSubSection";
import ShopCarousel from "./../components/ShopCarousel"
import Image from "next/image";
import doors from "../public/Images/ppe-elbow-plumbing-kpfc-builders-hardware.png"
import cement from "../public/Images/paint-super-gloss-crown-plumbing-kpfc-builders-hardware.png"
import electrical from "../public/Images/double-tap-plumbing-kpfc-builders-hardware.png"
import duracoat from "../public/Images/electric-flood-light-led-kpfc-builders-hardware.png"
import d16 from "../public/Images/hose-pipe-plumbing-kpfc-builders-hardware.png"
import tools from "../public/Images/circuit-breaker-electric-kpfc-builders-hardware.png"
import leftArrow from "../public/Images/leftArrow.png"
import rightArrow from "../public/Images/rightArrow.png"
import Link from "next/link";



const ProductCategory = () => {
  return (
    <div className={styles.prodDiv}>
      <div className={styles.fullContainer}>
        <div className={styles.productsHeader}>
          <h2> PRODUCTS BY CATEGORY</h2>
                  
        </div>
        <div className={styles.categoryCorousel}>
          <ShopCarousel/>
          </div>
        <div className={styles.containerProducts}>
        <h6>MOST POPULAR PRODUCTS </h6>
             
        </div> 
      </div>
      <div className={styles.container}>
        <div className={styles.popularHeading}>
          <h1>MOST POPULAR PRODUCTS </h1>
          <div className={styles.mostDivLeft}>
            {/* <Image src={leftArrow} alt="" /> */}
          </div>
          <div className={styles.mostDivRight}>
            {/* <Image src={rightArrow} alt="" /> */}
          </div>
        </div>
        <div className={styles.adverts}>
          <h1>Get Quality Plumbing Materials</h1>
          <button className={styles.advertButton}>Shop Now</button>
        </div>
        <div className={styles.pictures1}>
          <a className={styles.a} href="#">
            <Image
              src={doors}
              alt="kpfc hardware doors"
              layout="fill"
              objectFit="contain"
              // width="260"
              // height="300"
            />
          
          </a>
         <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
        </div>
        <div className={styles.pictures2}>
          <a className={styles.a} href="#">
            <Image
              src={cement}
              alt="kpfc hardware cement"
              layout="fill"
              objectFit="contain"
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 

        </div>
        <div className={styles.pictures3}>
          <a className={styles.a} href="#">
            <Image
              src={electrical}
              alt="kpfc hardware Electrical"
              layout="fill"
              objectFit="contain"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 


        </div>
        <div className={styles.pictures4}>
          <a className={styles.a} href="#">
            <Image
              src={duracoat}
              alt="flood-light-electrical-led-kpfc-builders-hardware"
              layout="fill"
              objectFit="contain"
<<<<<<< HEAD
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
=======
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
        </div>
        <div className={styles.pictures5}>
          <a className={styles.a} href="#">
            <Image
              src={d16}
              alt="ichiran"
              layout="fill"
              objectFit="contain"
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
  
        </div>
        <div className={styles.pictures6}>
          <a className={styles.a} href="#">
            <Image
              src={tools}
              alt="ichiran"
              layout="fill"
              objectFit="contain"
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
<<<<<<< HEAD
=======
        </div>
        <div className={styles.pictures7}>
          <a className={styles.a} href="#">
            <Image
              src={tools}
              alt="ichiran"
              layout="fill"
              objectFit="contain"
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
        </div>
        <div className={styles.pictures8}>
          <a className={styles.a} href="#">
            <Image
              src={tools}
              alt="ichiran"
              layout="fill"
              objectFit="contain"
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
        </div>
        <div className={styles.pictures9}>
          <a className={styles.a} href="#">
            <Image
              src={tools}
              alt="ichiran"
              layout="fill"
              objectFit="contain"

              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
        </div>
        <div className={styles.pictures7}>
          <a className={styles.a} href="#">
            <Image
              src={tools}
              alt="ichiran"
              layout="fill"
              objectFit="contain"
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
        </div>
        <div className={styles.pictures8}>
          <a className={styles.a} href="#">
            <Image
              src={tools}
              alt="ichiran"
              layout="fill"
              objectFit="contain"
              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
        </div>
        <div className={styles.pictures9}>
          <a className={styles.a} href="#">
            <Image
              src={tools}
              alt="ichiran"
              layout="fill"
              objectFit="contain"

              // width="260"
              // height="300"
            />
          </a>
          <div className={styles.butDiv}><button className={styles.addCard}>Add to Cart</button></div> 
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
        </div>
       
              
      
        
       
      
      </div>
      <div className={styles.ourService}>
        <div className={styles.ourServiceText}>
          <p>
<<<<<<< HEAD
<<<<<<< HEAD
          Building a personal relationship with all our customers to ensure their needs
          are satisfied and feel part of our family.
=======
          We offer a wide range of quality products,
           at competitive prices <br/> all under one roof with service of a high standard.
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
=======
          We offer a wide range of quality products,
           at competitive prices <br/> all under one roof with service of a high standard.
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
          </p>
         
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
            <Link href="/Services">OUR SERVICES</Link>
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
            <Link href="/Services">OUR SERVICES</Link>
          </Button>
        </div>
      </div>
      <Invest />
      <BlogSubSection />
    </div>
  );
};

export default ProductCategory;
