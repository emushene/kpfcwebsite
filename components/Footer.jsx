import styles from "../styles/Footer.module.css";
import Link from "next/link";

import * as React from "react";
import { LocationOn, PhoneCallback, ContactMail } from "@mui/icons-material";


const Footer = () => {
  return (
    <>
      <div className={styles.inviteBar}>
        <div className={styles.viewShop}>
          <h2>VIEW SHOP</h2>
        </div>
        <div className={styles.bookAppointment}>
          <h2>BOOK AN APPOINTMENT</h2>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.bottomFour}>
          <div className={styles.officeContact}>
            <div style={{ color: "#f57200" }}>
              <h5> OFFICE CONTACT</h5>
            </div>

            <div className={styles.locationFooter}>
              <div>
                <LocationOn sx={{ fontSize: 35, color: "#f57200" }} />
              </div>
              <div>
                <p>123, Kikuyu Area Kikuyu</p>
              </div>
            </div>
            <div className={styles.phoneFooter}>
              <div>
                <PhoneCallback sx={{ fontSize: 35, color: "#f57200" }} />
              </div>
              <div>
                {" "}
                <p>+254-098786665</p>{" "}
              </div>
            </div>
            <div className={styles.emailFooter}>
              <div>
                <ContactMail sx={{ fontSize: 35, color: "#f57200" }} />
              </div>
              <div>
                <p>sales@kpipes.co.ke</p>
              </div>
            </div>
          </div>

          <div className={styles.serviceArea}>
            <div>
              <div style={{ color: "#f57200" }}>
                <h5>SERVICES AREA</h5>
              </div>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link href={"/"}>Project Management</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/About"}>Fitting & Refublishing</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/Services"}>Architectual Design</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/Blog"}>Tailor Made Delivery</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/Investiment"}>Consultancy Services</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/Contactus"}> Tools and Equipment Hire</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.usefulPages}>
            <div style={{ color: "#f57200" }}>
              <h5>USEFUL PAGES </h5>
            </div>
            <br />
            <div>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link href={"/"}>Home</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/About"}>About Us</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/Services"}>Services</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/Blog"}>Blog</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/Investiment"}>Investiment</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href={"/Contactus"}> Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.newsLetter}>
            <div style={{ color: "#f57200" }}>
              <h5>NEWS LETTERS</h5>
            </div>{" "}
            <br />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                repellat, earum recusandae error quibusdam obcaecati soluta
                porro laudantium beatae quia at, a vero id libero nesciunt, odit
                quae! Expedita, amet
              </p>
            </div>
            <div>
              <div className={styles.subscription}>
                <form action="#">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your email"
                    autocomplete="off"
                  />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <hr className={styles.horizontalLine}></hr>
        </div>
        <div className={styles.legalDivs}>
          <div>Terms Of Use</div> <hr className={styles.line1} />
          <div>Privacy Policy</div> <hr className={styles.line1} />
          <div>Cookies</div> <hr className={styles.line1} />
          <div>Help</div>
          <hr className={styles.line1} />
          <div>FAQS</div>
        </div>
        <div>
          <hr className={styles.horizontalLine} />
        </div>
        <div className={styles.allRights}>
          <div>
            All Rights Reserved
          
          </div>
          <div>Designed By</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
