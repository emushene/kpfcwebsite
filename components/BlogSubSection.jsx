import { Button } from "@material-ui/core";
import styles from "../styles/BlogSubSection.module.css";
import * as React from "react";
import Link from "next/link"

const BlogSubSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textDiv}>
        <h3>
<<<<<<< HEAD
<<<<<<< HEAD
        Get Inspired with tips and ideas for your building project, hiring a professional, 
        materials information and much more.
        </h3>
        <p>

=======
=======
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
        Construction boom makes hardware shops most popular business in Kenya
        </h3>
        <p>
          {" "}
          The booming real estate sector in Kenya has made hardware shops the most popular businesses across the country.

The number of hardware shops is increasing every day, 
particularly in Nairobi suburbs, where building of houses seems 
to be the only meaningful business going on.

A survey in various suburbs, especially on 
the outskirts of the capital, showed that the hardware outlets
 currently outnumber grocery stores, meat shops and bars, which at one time were the most popular businesses.
 <button><Link href="/Blog"> Read more here......</Link></button>
<<<<<<< HEAD
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
=======
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
        </p>
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
