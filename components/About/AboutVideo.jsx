import styles from "../../styles/About/AboutVideo.module.css";
import React from "react";
import ReactPlayer from "react-player";
import InvestBanner from "../About/InvestBanner";
import BannerHappy from "./BannerHappy";
import Image from "next/image";
import drill from "../../public/Images/KPFC-Builders-hardware-tools-spanners-accessories.webp";

const AboutVideo = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.vidDiv}>
          <div className={styles.vidContainer}>
            <div className={styles.backDiv1}></div>
            <div className={styles.backDiv2}></div>
            <div className={styles.backDiv3}></div>
            <ReactPlayer
              url="https://youtu.be/wKJChvlnct4"
              className="react-player"
              playing
              width="100%"
              height="400px"
              controls={false}
            />
          </div>
        </div>
        <div className={styles.textDiv}>
          <h6>THE BUILDERS STORY</h6>
          <h4>About KPFC Builders</h4>
          <p>
            As a leading industry player, we pride ourselves in the ability to
            contribute crucial components and be integral parts of successful
            construction & plumbing projects. <br />
            <br /> Our tradition of always doing what we think is right. Our
            commitment is to move forward, together and to do everything in the
            best interests of our customers, their goals, and their ultimate
            success. <br />
            <br /> KPFC Builders is a leading wholesale & retail business in the
            building & construction industry, headquartered in the town of
            Kikuyu in Kiambu County, Kenya. <br />
            <br /> Our founders beliefs guide us: When you bring together
            skilled and knowledgeable people from different origins, you can
            achieve great things. The people of KPFC Builders achieve this every
            day by steadfastly adhering to our values and principles. <br /><br />
          
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore et at iure ratione,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae et illo quasi nisi voluptates, delectus, nihil nam aperiam enim nobis quam earum impedit iste corrupti ipsa nostrum. Sapiente magnam similique suscipit esse! Aliquam quas, quidem asperiores blanditiis quibusdam fugit quia assumenda delectus praesentium eveniet consequuntur accusamus excepturi perferendis eaque, dolore deserunt in pariatur earum nostrum laudantium molestiae accusantium ea saepe. Deleniti consequuntur nesciunt nemo quod, voluptatum totam, fugit unde adipisci, beatae eveniet reprehenderit! Nesciunt dolorum neque alias ipsa, consequatur aperiam nulla repudiandae at facere facilis assumenda quibusdam sit minima tenetur commodi tempore. Suscipit ratione quos quis perferendis velit quod distinctio animi sapiente eius nesciunt amet et esse, ipsa dolorum consequuntur est, optio maiores. Quos laudantium molestias cum exercitationem sapiente voluptatem provident, ullam illum accusantium incidunt dicta eveniet numquam animi nobis quae similique tempora, tenetur minus? Aliquam, dignissimos quidem quaerat ipsa magnam repellat non sed. Consequatur sapiente dolore provident. Facilis! laboriosam impedit.0
          </p>
        </div>
      </div>

      <div className={styles.portifolio}>
        <div className={styles.experience}>
          <h6> ABOUT KPIPES & FITTING CENTER LTD</h6>
          <h3>10 Years Experience</h3>
          <div className={styles.addDiv}>
          <Image src={drill} alt="KPFC-Builders-hardware-tools-spanners-accessories" layout="responsive" objectFit="cover"  />
        </div>
          
          <p>
            K.Pipes and Fittings Centre, has been servicing contractors,
            municipalities, schools, etc. in the business of installation and
            repair of commercial and residential plumbing since 1996. <br />{" "}
            <br /> K.Pipes has grown to have 40+ Branches in over 10 counties to
            covering the entire Kenya to provide our customers with the highest
            level of service possible. <br /> <br />
            Our headquarters is at Kikuyu Next to Lexo Petrol Station and we
            have branches in; <br /> <br />
            Kikuyu - near stage, Shop1 - along the bypass, Nanyuki, Nyahururu,
            Gilgil, Nakuru, Molo, Naivasha, Eldoret, Bungoma, Kisii, Narok,
            Ruaka, Kiserian, Nyeri, Molo, Rongai, Bomet, Thika, Ruthigiti,
            Muranga, Mai Mahiu, Ukunda, Mtwapa, Gataka, Kisii and more
          </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum illo esse sint officiis nostrum accusamus
           est tenetur dolore cumque facere optio repellat quae laboriosam hic ullam, tempora quod perferendis!
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minima enim doloremque similique aliquid suscipit voluptatem expedita iure assumenda? Quisquam, velit corrupti ipsum quae tempore voluptatum rem exercitationem magni dolores.
        </div>
       
      </div>
      <div className={styles.banner}>
        <BannerHappy />
      </div>

    </div>
  );
};

export default AboutVideo;
