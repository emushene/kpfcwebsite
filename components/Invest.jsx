import styles from "../styles/Invest.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { color } from "@mui/system";

const Invest = () => {
  return (
    <div className={styles.container}>
      <img src="/images/invest.png"></img>
      <div>
        <div className={styles.leftDiv}>
          <h1 className={styles.topHeading}>
            
          #InvestNaKPFC Builders Today! <br />
          </h1>
          <h1 className={styles.midHeading}>
            BUILDERS <br />
          </h1>
          <h1 className={styles.topHeading} >HARDWARE</h1>
          <div className={styles.leftInnerDiv}>
            <div>
              <h1>40+</h1>
              Branches <br></br>
              Countrywide
            </div>
            <div>
              <h1> 500+</h1>
              Investiment <br />
              Opportunities
            </div>
          </div>
          <div className={styles.textDiv}>
            <p>
            Join the KPFC Builders investment program with selected 
            products such as Deformed Bars, Square Tubes & other Building Materials.
            </p>
          </div>
          <div className={styles.textDivButton}>
          <Button
            variant="contained"
            style={{
              color: "orange",

              textTransform: "none",
              padding: "14px 10px",
              width:"180px",
              borderRadius:"40px",
              
            }}
          >
            {" "}
           <a href="/Investiment">Learn More</a> 
          </Button>
          </div>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.rightDivText}>
          <span>
            <p>
              powered by: <br />
            </p>
            <h6 >
              KPIPES & Fittings <br />
              Center LTD
            </h6>
          </span>
        </div>
        <div></div>
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
              padding: "14px 10px",
              width:"180px",
              borderRadius:"40px",
            }}
          >
            {" "}
           <a href="/Investiment">Learn More</a> 
          </Button>
          </div>
     
    </div>
  );
};

export default Invest;
