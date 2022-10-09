import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Image } from 'semantic-ui-react';




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
// const images = [ ;;;
import plumbing from "./Images/Plumbing.png";
import plumbing from "./Images/Building_Materials.png";
import plumbing from "./Images/Gardening_Tools_Equipment.png";
import plumbing from "./Images/Hardware_Tools.png";
import plumbing from "./Images/Iron_Sheets_Bars.png";
import plumbing from "./Images/Lighting_Electricals.png";
import plumbing from "./Images/Locks_Hinges.jpg.png";
import plumbing from "./Images/MDF_Boards.png";
import plumbing from "./Images/Plumbing.png";
import plumbing from "./Images/Sanitary_Bathroom.png";
import plumbing from "./Images/Water_Tanks.png";
  
// ];

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

  <div > 
  <img src="./Images/Plumbing.png" alt="" /> Plumbing </div>
  <div id="icons"> <img src="./Images/Building_Materials.png" alt="" /> Building Materia</div>
  <div id="icons"> <img src="./Images/Gardening_Tools_Equipment.png" alt="" /> Garden Equipment</div>
  <div id="icons"> <img src="./Images/Hardware_Tools.png" alt="" /> Hardware Tools </div>
  <div id="icons"> <img src="./Images/Iron_Sheets_Bars.png" alt="" />Iron Sheets </div>
  <div id="icons"> <img src="./Images/Lighting_Electricals.png" alt="" />Lighting & Electrical </div>
  <div id="icons"> <img src="./Images/Locks_Hinges.jpg.png" alt="" />Locks & Hinges </div>
  <div id="icons"> <img src="./Images/MDF_Boards.png" alt="" />MDF Boards </div>
  <div id="icons"> <img src="./Images/Plumbing.png" alt="" />Plumbing </div>
  <div id="icons"> <img src="./Images/Water_Tanks.png" alt="" /> Water Tanks</div>


{/* 
      {images.slice(0, 5).map(image => {
        return (
          <Image
            draggable={false}
            style={{ width: "90px", 
            height: "100px",
             borderRadius: "50%",
             cursor: "pointer",
             boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
             rgba(0, 0, 0, 0.3) 0px 18px 36px -18px`,
            //  border: "2px solid rgba(5, 81, 196)"
            
            }}
            src={image}
          />
        );
      })} */}
    </Carousel>

    
    </div>
  );
};

export default Simple;
