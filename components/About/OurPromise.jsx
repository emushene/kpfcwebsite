import styles from "../../styles/About/OurPromise.module.css"
import DataSlider from "../DataSlider"

const OurPromise = () => {
    return (
        <div className={styles.container}>
            <div className={styles.resume}>
            <h6>OUR SKILLS</h6>
            <h2>THE Kpipes Resume</h2>
           
            <div className={styles.dataSlider}>
            <p> We specializes in distributing home construction and renovation plumbing 
                products, building materials, hardware, and tools
            </p>
            <div className={styles.datslideDiv}>
            <DataSlider />
            </div>
           
            </div>

            </div>
            <div className={styles.promise}>
                <h2>Our Promise </h2>
                 <p>   At KPFC we do no set limits, especially
                    when it comes to design options, quality and service. <br /><br />
                    Be it residential or commercial construction projects - we are reliable partner
                    and stand by our customers with heart and knowledge.
                    <br /><br />
                    Our reliable distribution networks are innovative, environmentally friendly, time-efficient,
                     competitively priced  and sustainable.

                     </p>

            </div>
            
        </div>
    );
}

export default OurPromise;