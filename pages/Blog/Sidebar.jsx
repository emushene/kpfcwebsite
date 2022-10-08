import styles from "../../styles/Blog/Sidebar.module.css";
import React from "react";
import Link from "next/link";
import BlogPage from "./BlogPage"

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>ABOUT US</span>
        <img src="./Images/company_logo.png" alt="" />
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          facilis voluptatibus laudantium quo voluptate iste excepturi esse sint
          illum aliquam. !
        </p>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>CATEGORIES</span>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}> Building Materials</li>
          <li className={styles.sidebarListItem}> Investiment </li>
          <li className={styles.sidebarListItem}> Site Engineers</li>
          <li className={styles.sidebarListItem}> Etc Etc</li>
          <li className={styles.sidebarListItem}> Machinery & Equipment</li>
          <li className={styles.sidebarListItem}> Safety</li>
          <li className={styles.sidebarListItem}> Innovation</li>
        </ul>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>FOLLOW US</span>
        <div className={styles.socialContainer}>
          <div className={styles.twitter}>
            <TwitterIcon />
            <h5>Twitter</h5>
          </div>

          <div className={styles.facebook}>
            
            <FacebookIcon />
            <h5>Facebook</h5> 
          </div>
          <div className={styles.instagram}>
            <InstagramIcon />
            <h5>Instagram</h5>

          </div>
        </div>
      </div>
      <div className={styles.internal}>






      <ul className={styles.list}>
          <li className={styles.listItem}>
         <Link href={"/Blog/BlogPage"}>Blog Home</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/Blog/Register"}> Register</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/Blog/Login"}>Login</Link>
          </li>
          <li className={styles.listItem}>
         <Link href={"/Blog/BlogPage"}>Posts</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/Blog/Post"}>Post</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/Blog/SinglePost"}> Single Post</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/Blog/Write"}>Write</Link>
          </li>
          <li className={styles.listItem}>
          <Link href={"/Blog/Settings"}>Setting</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
