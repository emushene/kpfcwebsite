import { Button } from "@material-ui/core";
import styles from "../styles/BlogSubSection.module.css";
import * as React from "react";

const BlogSubSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textDiv}>
        <h3>
          This is the Sub-Headline for the blog <br />
          section of the KPFC Website
        </h3>
        <p>
          {" "}
          This is the brief overview of the blog section <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum
          aliquid deserunt, rem accusamus repudiandae voluptate! Quia, tempora
          odit error ipsa qui eum, quisquam laboriosam quidem illo quod nihil.
          Ducimus.
        </p>
      </div>

      <div className={styles.divButton}>
        <Button
          variant="contained"
          style={{
            color: "orange",

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
