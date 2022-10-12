import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";

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
          <img src="./Images/Plumbing.png" alt="" style={{ height: "70px" }} />{" "}
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
          <img
            src="./Images/Building_Materials.png"
            alt=""
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
          <img
            src="./Images/Gardening_Tools_Equipment.png"
            alt=""
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
          <img
            src="./Images/Hardware_Tools.png"
            alt=""
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
          <img
            src="./Images/Iron_Sheets_Bars.png"
            alt=""
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
          <img
            src="./Images/Lighting_Electricals.png"
            alt=""
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
          <img
            src="./Images/Locks_Hinges.jpg.png"
            alt=""
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
          <img
            src="./Images/MDF_Boards.png"
            alt=""
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
          <img src="./Images/Plumbing.png" alt="" style={{ height: "70px" }} />
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
          {" "}
          <img
            src="./Images/Water_Tanks.png"
            alt=""
            style={{ height: "70px" }}
          />{" "}
         <h4> Water <br/>Tanks</h4>
        </div>

      </Carousel>
    </div>
  );
};

export default Simple;
