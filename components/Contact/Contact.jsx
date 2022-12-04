import styles from "../../styles/Contact/Contact.module.css"
import Form from "../../components/Form"
import Link from "next/link";


const Contact = () => {
    return (
        
        <div className={styles.mainContainer}>
            <div className={styles.allBranchesList}>
                  <div className={styles.boxDiv}><h4>KPFC Builders Hardware</h4>
                  <p>Gatukuyu Place Kikuyu</p>
                  {/* <p>........</p>
                  <p>009002</p> */}

                  </div>
                  <Link href="https://www.google.com/maps/dir//K+pipes+and+fittings+hardware/data=!4m8!4m7!1m0!1m5!1m1!1s0x182f1f01b9acb525:0x90c38c8523f0f4b5!2m2!1d36.665254!2d-1.2403051">
                  <button className={styles.btn} > Get Directions</button>
                  </Link>

                  

                <div className={styles.contDiv}>  <h3>Telephone</h3> 
                  <p>+254 724 002238</p>
                  <h4>Email</h4>
                  <p>info@kpfcbuilders.co.ke</p>
                  </div>
                    <div className={styles.hoursDiv}>
                    
                    <div ></div>

                 
                  <div className={styles.divOpenHours}>
                  <h5>Opening - Hours</h5>
                   <p> Monday      7AM - 6PM</p>
                   <p> Tuesday      7AM - 6PM</p>
                   <p> Wenesday      7AM - 6PM</p>
                   <p> Thursday      7AM - 6PM</p>
                   <p> Friday      7AM - 6PM</p>
                   <p> Saturday      7AM - 6PM</p>
                   <p> Sunday      Closed</p>
                    
                  </div>


                <div className={styles.outlets}>
                Our Outlets:<hr/> Mtwapa Bomet | Bungoma | Kiserian | kisii | Kiambu | Mlolongo |
                 Maimahiu | Eldoret | Kawangware | Molo | Malindi | Gikambura | Murange | Gilgil | 
Naivasha | Kamandura | Nakuru | Ngong | Nanyuki | Narok | Nyahururu | Nyeri | Rongai | Ruaka | Ruthigiti | Voi | Shop 1 | Wangigi |
 Thika | Kikuyu
 

                </div>


            </div>
            
            <h5>Contact our Branches</h5>
         
           
        </div>
        <div className={styles.contactForm}>
                <Form />
            </div>
        </div>
    );
}

export default Contact;