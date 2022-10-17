import styles from "../../styles/About/InvestBanner.module.css"
import Button from "@mui/material/Button";


const InvestBanner = () => {
    return (
        <div className={styles.mainContainer}>
           
           <div className={styles.textDiv}>
           <h1>Want to #InvestNaKPFCBuilders?</h1>
                <h5>Join the KPFC Builders investment program with</h5>
                <p>As a leading industry player, we pride ourselves in the ability to
                   contribute crucial components and be integral parts of successful
                    construction & plumbing projects.   Our tradition of always doing what 
                    we think is right. Our commitment is to move forward, together and to 
                    do everything in the best interests of our customers, their goals, and
                     their ultimate success. KPFC Builders is a leading wholesale & retail
                      business in the building & construction industry, headquartered 
                      in the town of Kikuyu in Kiambu County, Kenya.   Our founders' 
                      beliefs guide us: When you bring together skilled and knowledgeable 
                      people from different origins, you can achieve great things. The people
                       of KPFC Builders achieve this every day by steadfastly adhering to our 
                       values and principles. <br>
                       </br>

                       <button className={styles.mobileButton}>Learn More</button>

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