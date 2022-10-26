import { textAlign, width } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Testimonial.module.css";
import Image from "next/image";
import jerusha from "../public/Images/jerusha.png"
import morgan from "../public/Images/morgan.png"

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
    <div>
      <div ID={styles.desk} style={{ marginTop: "30px" }}>
        <h3 style={{ marginLeft: "45%", color: "blue" }}>TESTIMONIALS</h3>
        <h1 style={{ marginLeft: "40%", color: "blue" }}>Our Clients Say</h1>
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
              partialVisibilityGutter: 10,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 465,
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
          <div
            style={{
              minHeight: "330px",
              position: "relative",
              marginLeft: "90px",
            }}
          >
            <div
              style={{
                border: `1px solid orange`,
                position: "absolute",
                width: "90px",
                minHeight: "90px",
                zIndex: "2",
                top: "50px",
                left: "-50px",
                backgroundColor: "white",
              }}
            >
              <Image
                src={morgan}
                alt=""
                layout="fill"
                objectFit="cover"
               
              />
            </div>

            <div
              style={{
                border: `1px solid orange`,
                backgroundColor: "white",
                position: "absolute",
                width: "450px",
                minHeight: "290px",
                zIndex: "1",
                top: "30px",
              }}
            >
              <p
                style={{
                  padding: "15px",
                  textAlign: "justify",
                  marginTop: "80px",
                  paddingLeft: "45px",
                }}
              >
                I have shopped here several times in the past two years. 
                Store is beautiful inside and out and the staff is very friendly and helpful.
                 They did an exellent job on their sores building, the customer service is  
                 superb. They keep everything well
                 stocked and maintained. The prices are wholesale! I will definately be coming back.”
              </p>
            </div>
            <div
              style={{
                backgroundColor: "orange",
                position: "absolute",
                width: "450px",
                minHeight: "230px",
                zIndex: "-2",
                top: "130px",
                left: "30px",
              }}
            >
              <p style={{ marginTop: "190px", padding: "15px", color: "blue" }}>
                <h4>Morgan Mwariri - Facebook</h4>
              </p>
            </div>
          </div>
          <div> </div>
          <div
            style={{
              minHeight: "400px",
              position: "relative",
              marginLeft: "-150px",
            }}
          >
            <div
              style={{
                border: `1px solid orange`,
                position: "absolute",
                width: "90px",
                minHeight: "90px",
                zIndex: "2",
                top: "50px",
                left: "-50px",
                backgroundColor: "white",
              }}
            >
              <Image
                src={jerusha}
                alt=""
                layout="fill"
                objectFit="cover"
                
               
              />
            </div>

            <div
              style={{
                border: `1px solid orange`,
                backgroundColor: "white",
                position: "absolute",
                width: "450px",
                minHeight: "290px",
                zIndex: "1",
                top: "30px",
              }}
            >
              <p
                style={{
                  padding: "15px",
                  textAlign: "justify",
                  marginTop: "80px",
                  paddingLeft: "45px",
                }}
              >
                “Other Hardware stores got nothing on this place. Literally 10 seconds
                 in the door, I was asked if I needed help,
                  directed to my destinations and HELPED by a professional 
                  in the paint department beyond my wildest dreams. PS. I have 
                  twenty years experience in painting and I just got the best 
                  customer service I,ve ever experienced with Njeri in the paint 
                  dept.  
                ” – Jerusha Lelei.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "orange",
                position: "absolute",
                width: "450px",
                minHeight: "230px",
                zIndex: "-2",
                top: "130px",
                left: "30px",
              }}
            >
              <p style={{ marginTop: "190px", padding: "15px", color: "blue" }}>
                <h4>Jerusha Lelei - Facebook</h4>
              </p>
            </div>
         
         
        
          </div>
        </Carousel>
      </div>

      <div id={styles.mobile} /*style={{marginTop:"30px"}}*/>
        <h3>TESTIMONIALS</h3>
        <h1>Our Clients Say</h1>
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
          <div
            style={{
              minHeight: "100px",
              position: "relative",
              marginLeft: "75px",
              marginTop:"-10px",
              marginBottom: "70px",
            }}
          >
            <div
              style={{
                border: `1px solid orange`,
                position: "absolute",
                width: "30px",
                minHeight: "40px",
                zIndex: "2",
                top: "50px",
                left: "-20px",
                backgroundColor: "white",
              }}
            >
              <Image
                src={jerusha}
                alt=""
                layout="fill"
                objectFit="contain"
                
              />
            </div>

            <div
              style={{
                border: `1px solid orange`,
                backgroundColor: "white",
                position: "absolute",
                width: "200px",
                minHeight: "100px",
                zIndex: "1",
                top: "30px",
              }}
            >
              <p
                style={{
                  padding: "5px",
                  textAlign: "justify",
                  marginTop: "0px",
                  paddingLeft: "17px",
                  fontSize: "8px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis nobis, necessitatibus consequuntur a eum et dolore
                libero minima doloremque aliquid eos eius voluptatibus, eligendi
                suscipit!
              </p>
            </div>
            <div
              style={{
                backgroundColor: "orange",
                position: "absolute",
                minWidth: "180px",
                maxHeight: "100px",
                zIndex: "-2",
                top: "50px",
                left: "30px",
              }}
            >
              <p
                style={{
                  marginTop: "70px",
                  padding: "15px",
                  color: "blue",
                  fontSize: "8px",
                }}
              >
                <h6>Morgan Mwariri - Facebook</h6>
              </p>
            </div>
          </div>








                <div style={{position: "relative",  left: "180px",}}>
          <div
              style={{
                border: `1px solid orange`,
                position: "absolute",
                width: "30px",
                minHeight: "40px",
                zIndex: "3",
                top: "40px",
                left: "-125px",
                backgroundColor: "white",
              }}
            >
              <Image
                src={morgan}
                alt=""
                layout="fill"
                objectFit="contain"
                
                
              />
            </div>

            <div
              style={{
                border: `1px solid orange`,
                backgroundColor: "white",
                position: "absolute",
                width: "200px",
                minHeight: "100px",
                zIndex: "1",
                top: "20px",
                left:"-105px",
              }}
            >
              <p
                style={{
                  padding: "5px",
                  textAlign: "justify",
                  marginTop: "0px",
                  paddingLeft: "17px",
                  fontSize: "8px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis nobis, necessitatibus consequuntur a eum et dolore
                libero minima doloremque aliquid eos eius voluptatibus, eligendi
                suscipit!
              </p>
            </div>
            <div
              style={{
                backgroundColor: "orange",
                position: "absolute",
                width: "180px",
                minHeight: "100px",
                zIndex: "-1",
                top: "40px",
                left: "-70px",
              }}
            >
              <p
                style={{
                  marginTop: "70px",
                  padding: "15px",
                  color: "blue",
                  fontSize: "8px",
                }}
              >
                <h6>Morgan Mwariri - Facebook</h6>
              </p>
            </div>
            </div>
        
         


















































         
           
          
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
