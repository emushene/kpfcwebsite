import styles from "../styles/Navbar.module.css";
import Toplogo from "./Toplogo";
import * as React from 'react';
import { Phone, EventRepeatRounded, ContactMail } from "@mui/icons-material";


const Navbar = () => {
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
              <div style={{fontWeight: 'bold'}}> OPENING HOURS</div>
              <div className={styles.text}> Monday - Friday 7AM - 6PM</div>
            </div>
          </div>
          <div className={styles.callus}>
          <Phone sx={{ fontSize: 30 }}/>
            <div>
              <div style={{fontWeight: 'bold'}}> Call Us</div>
              <div className={styles.text}> +254 7499999</div>
            </div>
          </div>
          <div className={styles.emailus}>
          <ContactMail sx={{ fontSize: 30 }}/>
            <div>
              <div style={{fontWeight: 'bold'}}> Email Us</div>
              <div className={styles.emailadd}> sales@kpipes@kpipes.co.ke</div>
            </div>
          </div>
        </div>
      </div>
      <Toplogo />
    </nav>
  );
};//<a href="https://www.flaticon.com/free-icons/contacts" title="contacts icons">

export default Navbar;
