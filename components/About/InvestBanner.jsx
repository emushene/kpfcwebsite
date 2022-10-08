import styles from "../../styles/About/InvestBanner.module.css"
import Button from "@mui/material/Button";


const InvestBanner = () => {
    return (
        <div className={styles.mainContainer}>
           
           <div className={styles.textDiv}>
           <h1>Want to #InvestNaKPFCBuilders?</h1>
                <h5>Join the KPFC Builders investment program with</h5>
                <p>selected products such as Deformed Bars.
                    Square Tubes & other Building Materials.
                </p>
                <div className={styles.buttonDiv}>
            <Button
                variant="contained"
                style={{
                width: '200px',
                //   backgroundColor: "transparent",
                  textTransform: "none",
                  padding: "14px 30px",
                  borderRadius: '50px',
                  backgroundColor:'blue',
                  fontWeight: 'small'  ,
                }}
              >
                LEARN MORE
              </Button>
            </div>
            </div>
          
        </div>
    );
}

export default InvestBanner;