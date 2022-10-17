import styles from "../../styles/About/AboutVideo.module.css";
import React from "react";
import ReactPlayer from "react-player";
import InvestBanner from  "../About/InvestBanner"
import BannerHappy from "./BannerHappy";

const AboutVideo = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.vidDiv}>
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=MOV-fIsqCrg"
              className="react-player"
              playing
              width="100%"
              height="400px"
              controls={false}
            />
          </div>
        </div>
        <div className={styles.textDiv}>
          <h6>About KPFC Builders</h6>
          <h4>Karibu KPFC Builders</h4>
          <p>
          As a leading industry player, we pride ourselves in the ability to
                   contribute crucial components and be integral parts of successful
                    construction & plumbing projects.   Our tradition of always doing what 
                    we think is right. Our commitment is to move forward, together and to 
                    do everything in the best interests of our customers, their goals, and
                     their ultimate success. KPFC Builders is a leading wholesale & retail
                      business in the building & construction industry, headquartered 
                      in the town of Kikuyu in Kiambu County, Kenya.   Our founders' 
                      beliefs guide us: When you bring together skilled and knowledgeable 
                      people from different origins, you can achieve great things. The people
                       of KPFC Builders achieve this every day by steadfastly adhering to our 
                       values and principles.
          </p>
        </div>
      </div>
      <BannerHappy />
      <div className={styles.portifolio}>
        <div className={styles.experience}>
           <h6> About Kpipes & Fittings</h6> 
           <h3>10 Years Experience</h3>
           <p>
           K.Pipes and Fittings Centre, has been servicing contractors, 
           municipalities, schools, etc. in the business of installation and repair 
           of commercial and residential plumbing since 1996.   K.Pipes has grown
            to have 40+ Branches in over 10 counties to covering the entire Kenya to 
            provide our customers with the highest level of service possible.
          Our headquarters is at Kikuyu Next to Lexo Petrol Station and we have branches in;
          Kikuyu - near stage, Shop1 - along the bypass, Nanyuki, Nyahururu, Gilgil, Nakuru, 
          Molo, Naivasha, Eldoret, Bungoma, Kisii, Narok, Ruaka, Kiserian, Nyeri, Molo, Rongai, 
          Bomet, Thika, Ruthigiti, Muranga, Mai Mahiu, Ukunda, Mtwapa, Gataka, Kisii and more

          </p>
            
           
            
            </div>
        <div className={styles.addDiv}>
            <img src="https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />    
          
        </div>
      </div>
        <div className="investBanner">
            
        </div>
    </div>
  );
};

export default AboutVideo;
