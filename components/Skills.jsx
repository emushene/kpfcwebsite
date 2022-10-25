import styles from "../styles/Skills.module.css";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import DataSlider from "./DataSlider";
import Image from "next/image";
import eaclogo from "../public/Images/eaclogo.jpg"

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
          <p>
          We specialize in distributing home construction and renovation
           plumbing products, building materials, hardware, and tools.
          </p>
          <div className={styles.dataSlider}>
            <DataSlider />
          </div>
        </div>
        <div className={styles.rightDiv}>
          <p>OUR PARTNERS</p>
          <h3>WE ARE TRUSTED</h3>
          <h6> We endeavor to create formidable relations <br/> with our key Trusted Partners in the industry</h6>
          <div className={styles.trusted}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(6)).map((_, index) => (
                  <Grid xs={2} sm={2} md={4} key={index}>
                    <Item>
                      <Image src={eaclogo} 
                      alt="" className={styles.itemImage}/>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
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
