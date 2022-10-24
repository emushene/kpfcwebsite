import styles from "../../styles/Contact/Contact.module.css"
import Form from "../../components/Form"


const Contact = () => {
    return (
        
        <div className={styles.mainContainer}>
            <div className={styles.allBranchesList}>
                  <div className={styles.boxDiv}><h5>KPFC Builders Hardware</h5>
                  <p>Gatukuyu Place Kikuyu</p>
                  <p>........</p>
                  <p>009002</p>

                  </div>

                  <button> Get Directions</button>

                <div className={styles.contDiv}>  <h6>Phone</h6> 
                  <p>088754645654</p>
                  <h6>Email</h6>
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
                   <p> Monday      Closed</p>
                    
                  </div>


                <div className={styles.outlets}>
                Our Outlets:<hr/> Mtwapa Bomet | Bungoma | Kiserian | kisii | Kiambu | Mlolongo |
                 Maimahiu | Eldoret | Kawangware | Molo | Malindi | Gikambura | Murange | Gilgil | 
Naivasha | Kamandura | Nakuru | Ngong | Nanyuki | Narok | Nyahururu | Nyeri | Rongai | Ruaka | Ruthigiti | Voi | Shop 1 | Wangigi |
 Thika | Kikuyu
 

                </div>


            </div>
            
            <h5>Contact our Branches</h5>
                <p> callhhfvf </p>
           
        </div>
        <div className={styles.contactForm}>
                <Form />
            </div>
        </div>
    );
}

export default Contact;