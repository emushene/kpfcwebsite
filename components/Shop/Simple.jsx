import styles from "../../styles/Shop/Simple.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import pl from "../../public/Images/Plumbing.png"
import plumbing from "../../public/Images/Plumbing.png"
import building from "../../public/Images/Building_Materials.png"
import lighting from "../../public/Images/Lighting_Electricals.png"
import hardware from "../../public/Images/Hardware_Tools.png"
import iron from "../../public/Images/Iron_Sheets_Bars.png"
import locks from "../../public/Images/Locks_Hinges.jpg.png"
import mdf from "../../public/Images/MDF_Boards.png"
import tanks from "../../public/Images/Water_Tanks.png"
import gardening from "../../public/Images/Gardening_Tools_Equipment.png"


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <div>
      <Carousel
        ssr
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue"
          }}
        >
          <Image src={pl} alt="" layout="fill" 
          objectFit="cover" height={400}
          
          />{" "}
          <h6> Plumbing</h6>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 
          }}
        >
          {" "}
          <Image
            src={building}
            alt=""
            layout="fill" 
          objectFit="cover" height={400}

            style={{ height: "70px",  }}
          />{" "}
          <h4>Building <br/>Materia</h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 
          }}
        >
          {" "}
          <Image
            src={gardening}
            alt=""
            layout="fill" 
          objectFit="cover" height={400}
            style={{ height: "70px" }}
          />{" "}
          <h4>Garden <br/>Equipment</h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 
          }}
        >
          {" "}
          <Image
            src={hardware}
            alt=""
            layout="fill" 
          objectFit="cover" height={400}
            style={{ height: "70px" }}
          />{" "}
         <h4>Hardware<br/> Tools</h4> {" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 
          }}
        >
          {" "}
          <Image
            src={iron}
            alt=""
            layout="fill" 
          objectFit="cover" height={400}
            style={{ height: "70px" }}
          />
          <h4>Iron <br/>Sheets</h4>{" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 
          }}
        >
          {" "}
          <div></div>
          <Image
            src={lighting}
            alt=""
            layout="fill" 
          objectFit="cover" height={400}
            style={{ height: "70px" }}
          />
         <h4>Lighting &<br/> Electrical</h4>{" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 
          }}
        >
          {" "}
          <Image
            src={locks}
            alt=""
            layout="fill" 
          objectFit="cover" height={400}
            style={{ height: "70px" }}
          />
          <h4>Locks & <br/>Hinges</h4>{" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 

          }}
        >
          {" "}
          <Image
            src={mdf}
            alt=""
            layout="fill" 
          objectFit="cover" height={400}
            style={{ height: "70px" }}
          />
         <h4>MDF<br/> Boards</h4> {" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 
          }}
        >
          {" "}
          <Image src={plumbing} alt=""
          layout="fill" 
          objectFit="cover" height={400} style={{ height: "70px" }} />
         <h4>Plumbing</h4> {" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "50%",
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            height: "80px",
            width: "64px",
            cursor:"pointer",
            gap: "3px,", 
            color: "white",
            backgroundColor:"blue",
            marginLeft: "-90px", 
          }}
        >
          <div className={styles.imageDiv}>
          <Image
            src={tanks}
            alt=""
            layout="fill" 
           objectFit="cover" 
            height={300}
          />{" "}
          </div>
         <h4> Water <br/>Tanks</h4>
        </div>

      </Carousel>
    </div>
  );
};

export default Simple;
