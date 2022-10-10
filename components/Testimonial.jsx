import { textAlign, width } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
const Testimonial = ({ deviceType }) => {
  return (
    <div style={{marginTop:"30px"}}>
      <h3 style={{marginLeft:"45%", color:"blue"}}>TESTIMONIALS</h3>
      <h1 style={{marginLeft:"40%", color:"blue"}}>Our Clients Say</h1>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
    >
    <div style={{height: "330px",position: "relative", marginLeft:"90px",   }}   >
    <div
          style={{
            border: `1px solid orange`,
            position: "absolute",
            width: "90px",
            height: "90px",
            zIndex:"2",
            top:"50px",
            left:"-50px",
            backgroundColor: "white",
          }}
        >
          <img src="./Images/morgan1.jpg" alt="" style={{objectFit:"cover", height:"85px", alignContent:"center"}} />
        </div>

        <div
          style={{
            border: `1px solid orange`,
            backgroundColor: "white",
            position: "absolute",
            width: "450px",
            height: "290px",
            zIndex:"1",
            top: "30px",
            
            
          }}
        >
          <p style={{padding:"15px",
        textAlign:"justify", marginTop:"80px",paddingLeft:"45px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis 
          nobis, necessitatibus consequuntur a eum et dolore libero minima doloremque aliquid eos eius
           dignissimos vero accusamus assumenda beatae porro. Quas, beatae?
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Laboriosam enim unde culpa deleniti nobis placeat asperiores 
           ab quas recusandae minima sit numquam, aliquam perferendis voluptatibus,
            eligendi eaque id? Architecto, suscipit!</p>
        </div>
        <div
          style={{
            backgroundColor: "orange",
            position: "absolute",
            width: "450px",
            height: "230px",
            zIndex:"-2",
            top:"130px",
            left:"30px",
          
          }}
        >
          <p style={{marginTop:"190px", padding:"15px", color:"blue"}}>
            <h4>Morgan Mwariri - Facebook</h4>
          </p>
        </div>
      </div>
     <div>to be </div>
     <div style={{height: "400px",position: "relative",  marginLeft:"-150px" }}   >
    <div
          style={{
            border: `1px solid orange`,
            position: "absolute",
            width: "90px",
            height: "90px",
            zIndex:"2",
            top:"50px",
            left:"-50px",
            backgroundColor: "white",
          }}
        >
          <img src="./Images/morgan1.jpg" alt="" style={{objectFit:"cover", height:"85px", alignContent:"center"}} />
        </div>

        <div
          style={{
            border: `1px solid orange`,
            backgroundColor: "white",
            position: "absolute",
            width: "450px",
            height: "290px",
            zIndex:"1",
            top: "30px",
            
            
          }}
        >
          <p style={{padding:"15px",
        textAlign:"justify", marginTop:"80px",paddingLeft:"45px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis 
          nobis, necessitatibus consequuntur a eum et dolore libero minima doloremque aliquid eos eius
           dignissimos vero accusamus assumenda beatae porro. Quas, beatae?
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Laboriosam enim unde culpa deleniti nobis placeat asperiores 
           ab quas recusandae minima sit numquam, aliquam perferendis voluptatibus,
            eligendi eaque id? Architecto, suscipit!</p>
        </div>
        <div
          style={{
            backgroundColor: "orange",
            position: "absolute",
            width: "450px",
            height: "230px",
            zIndex:"-2",
            top:"130px",
            left:"30px",
          
          }}
        >
          <p style={{marginTop:"190px", padding:"15px", color:"blue"}}>
            <h4>Morgan Mwariri - Facebook</h4>
          </p>
        </div>
      </div>
     <div style={{height: "400px",position: "relative", marginLeft:"200px"  }}   >
    <div
          style={{
            border: `1px solid orange`,
            position: "absolute",
            width: "90px",
            height: "90px",
            zIndex:"2",
            top:"50px",
            left:"-50px",
            backgroundColor: "white",
          }}
        >
          <img src="./Images/morgan1.jpg" alt="" style={{objectFit:"cover", height:"85px", alignContent:"center"}} />
        </div>

        <div
          style={{
            border: `1px solid orange`,
            backgroundColor: "white",
            position: "absolute",
            width: "450px",
            height: "290px",
            zIndex:"1",
            top: "30px",
            
            
          }}
        >
          <p style={{padding:"15px",
        textAlign:"justify", marginTop:"80px",paddingLeft:"45px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis 
          nobis, necessitatibus consequuntur a eum et dolore libero minima doloremque aliquid eos eius
           dignissimos vero accusamus assumenda beatae porro. Quas, beatae?
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Laboriosam enim unde culpa deleniti nobis placeat asperiores 
           ab quas recusandae minima sit numquam, aliquam perferendis voluptatibus,
            eligendi eaque id? Architecto, suscipit!</p>
        </div>
        <div
          style={{
            backgroundColor: "orange",
            position: "absolute",
            width: "450px",
            height: "230px",
            zIndex:"-2",
            top:"130px",
            left:"30px",
          
          }}
        >
          <p style={{marginTop:"190px", padding:"15px", color:"blue"}}>
            <h4>Morgan Mwariri - Facebook</h4>
          </p>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default Testimonial;
