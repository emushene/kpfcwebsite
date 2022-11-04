import styles from "../styles/Skills.module.css";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import DataSlider from "./DataSlider";
import Image from "next/image";
import { partners } from "./Data/Data";



const Skills = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <h5>OUR SKILLS</h5>
          <h4>The KPIPES Resume</h4>
     
          <div className={styles.dataSlider}>
          <p>
          We specialize in distributing home construction and renovation
           plumbing products, building materials, hardware, and tools.
          </p>
            <DataSlider />
          </div>
        </div>
        <div className={styles.rightDiv}>
          <h6>OUR PARTNERS</h6>
          <h3>WE ARE TRUSTED</h3>


          <p> We endeavor to create formidable relations with our key Trusted Partners in the industry</p>

          
          <div className={styles.trusted}>
            {partners.map((Item) => (
            <div className={styles.partnerLogo}> <Image src={Item.logo} alt="" layout="responsive" objectFit="cover"/></div>
                      ))}
          </div>
          <div className={styles.callToAsk}>
            <div className={styles.askDiv}>
              <ContactPhoneIcon />
            </div>
            <div className={styles.textDiv}>
              <p>Call to Ask a Question</p>
              <h3>0725 468 228</h3>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Skills;
