import styles from "../styles/Invest.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { color } from "@mui/system";

const Invest = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.leftDiv}>
          <h1 style={{ textAlign: "center", color: "blue", fontWeight: "600" }}>
            {" "}
            INVEST NA KPFC <br />
          </h1>
          <h1 style={{ textAlign: "center", color: "orange" }}>
            BUILDERS <br />
          </h1>
          <h1 style={{ textAlign: "center", color: "blue" }}>HARDWARE</h1>
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
              Join the KPFC Builders investiment program with <br></br>selected
              products such as <b />
              Deformed Bars, Square Tubes <br></br> & other Building Materials
            </p>
          </div>
          <Button
            variant="contained"
            style={{
              color: "orange",

              textTransform: "none",
              padding: "14px 10px",
            }}
          >
            {" "}
            Learn More
          </Button>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.rightDivText}>
          <span>
            <p>
              powered by: <br />
            </p>
            <h6 style={{ color: "blue" }}>
              {" "}
              KPIPES & Fittings <br />
              Center LTD
            </h6>
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Invest;
