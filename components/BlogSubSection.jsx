import { Button } from "@material-ui/core";
import styles from "../styles/BlogSubSection.module.css";
import * as React from "react";
import Link from "next/link"

const BlogSubSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textDiv}>
        <h3>

        Get Inspired with tips and ideas for your building project, hiring a professional, 
        materials information and much more.
        </h3>
 
      </div>

      <div className={styles.divButton}>
        <Button
          variant="contained"
          style={{
            color: "rgb(5, 81, 196)",

            textTransform: "none",
            padding: "10px 30px",
          }}
        >
          {"View BLOG "}
          
        </Button>
      </div>
    </div>
  );
};

export default BlogSubSection;
