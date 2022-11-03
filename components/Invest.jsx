import styles from "../styles/Invest.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import investpic from "../public/Images/invest.webp";


const Invest = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.leftDiv}>
<<<<<<< HEAD
          <h1 className={styles.topHeading}>
            INVEST NA KPFC 
          </h1>
=======
          <h3 className={styles.topHeading}>
            #InvestNaKPFC Builders Today! 
          </h3>
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
          <h3 className={styles.midHeading}>
            BUILDERS 
          </h3>
          <h3 className={styles.topHeading}>HARDWARE</h3>
          <div className={styles.leftInnerDiv}>
            <div>
              <h1>40+</h1>
            <p>  Branches <br></br>
              Countrywide</p>
            </div>
            <div>
              <h1> 500+</h1>
              Investiment <br />
              Opportunities
            </div>
            <div className={styles.mobileImageDiv}>
          <Image
            src={investpic}
            layout="fill"
            objectFit="contain"
            objectPosition={245}
            alt=""
          />
        </div>
        <div className={styles.mobile2ImageDiv}>
          <Image
            src={investpic}
            layout="fill"
            objectFit="contain"
            objectPosition={360}
            alt=""
          />
        </div>
          </div>
          <div className={styles.textDiv}>
            <p>
              Join the KPFC Builders investment program with selected products
              such as Deformed Bars, Square Tubes & other Building Materials.
            </p>
          </div>
          <div className={styles.textDivButton}>
            <Button
              variant="contained"
              style={{
                color: "orange",

                textTransform: "none",
                padding: "14px 10px",
                width: "180px",
                borderRadius: "40px",
              }}
            >
            
              <Link href="/Investiment">Learn More</Link>
            </Button>
          </div>
        </div>
     
      <div className={styles.rightDiv}>
        <div className={styles.rightDivText}>
          <span>
            <p>
              powered by: <br />
            </p>
            <h6>
              KPIPES & Fittings <br />
              Center LTD
            </h6>
          </span>
        </div>
        <div className={styles.imageDiv}>
          <Image
            src={investpic}
            layout="fill"
            objectFit="contain"
            objectPosition={-19}
            alt=""
          />
        </div>
      </div>
      <div className={styles.textDivMobile}>
        <p>
          Join the KPFC Builders investiment program with <br></br>selected
          products such as <b />
          Deformed Bars, Square Tubes <br></br> & other Building Materials
        </p>
        <Button
          variant="contained"
          style={{
            color: "orange",

            textTransform: "none",
            padding: "10px 10px",
            width: "120px",
            borderRadius: "40px",
          }}
        >
       
          <Link href="/Investiment">Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Invest;
