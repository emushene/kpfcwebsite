import styles from "../styles/Navbar.module.css";
import Toplogo from "./Toplogo";
import * as React from 'react';
import Link from "next/link";
import {useState} from 'react'
import { Phone, EventRepeatRounded, ContactMail } from "@mui/icons-material";


const Navbar = () => {

  const [open, setOpen]  = useState(false)


  return (
    <nav className={styles.navContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.companyLogo}>
        {/* <Image src="/Images/company_logo2.png" width='200' height='100'/> */}
        </div>
        <div className={styles.navIcons} >
          <div className={styles.openHrs}>
          <EventRepeatRounded sx={{ fontSize: 30 }}/>
            <div >
              <div style={{fontWeight: '900'}}> OPENING HOURS</div>
              <div className={styles.text} style={{fontWeight: '400'}}> Monday - Saturday 7AM - 6PM</div>
            </div>
          </div>
          <div className={styles.callus}>
          <Phone sx={{ fontSize: 30 }}/>
            <div>
              <div style={{fontWeight: '900'}}> Call Us</div>
              <div className={styles.text} style={{fontWeight: '100'}}> <h4>+254 791281423</h4></div>
            </div>
          </div>
          <div className={styles.emailus}>
          <ContactMail sx={{ fontSize: 30 }}/>
            <div>
              <div style={{fontWeight: '900'}}> Email Us</div>
              <div className={styles.emailadd} style={{fontWeight: '400'}}> sales@kpipes@kpipes.co.ke</div>
            </div>
          </div>
        </div>
      </div>
      <Toplogo />

      <div className={styles.hambuger} onClick={()=>setOpen(!open)}>
        <h6>MENU</h6> 
        <div className={styles.hamLines}/>
        <div className={styles.hamLines}/>
        <div className={styles.hamLines}/>
        
      <ul onClick={()=>setOpen(false)} className={styles.menu} style={{right : open ? "0px" : "-500vw" }}>
      <li className={styles.menuItem}>
         <Link href={"/"}>Home</Link>
          </li>
          <li className={styles.menuItem}>
          <Link href={"/About"}> About Us</Link>
          </li>
          <li className={styles.menuItem}>
          <Link href={"/Services"}>Services</Link>
          </li>
          <li className={styles.menuItem}>
         <Link href={"/Blog"}>Blog</Link>
          </li>
          <li className={styles.menuItem} style={{display: "none"}}>
          <Link href={"/Investiment"}>Investiment</Link>
          </li>
          <li className={styles.menuItem}>
          <Link href={"/Contactus"}> Contact Us</Link>
          </li>

      </ul>
      </div>
    </nav>
  );
};//<a href="https://www.flaticon.com/free-icons/contacts" title="contacts icons">

export default Navbar;
