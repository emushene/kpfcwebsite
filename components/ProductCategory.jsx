import styles from "../styles/ProductCategory.module.css";
import * as React from "react";
import Invest from "./Invest";
import BlogSubSection from "./BlogSubSection";
import ShopCarousel from "./../components/ShopCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { prodItems } from "./Data/Data";
import bannerImg from "../public/Images/quality.webp"
import Link from "next/link";

const ProductCategory = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "orange" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "orange" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.prodDiv}>
        <div className={styles.prodHeader}>
          <h2> PRODUCTS BY CATEGORY</h2>
      </div>
        <div className={styles.carousel}>
          <ShopCarousel />
        </div>
      </div>
      <div className={styles.shopDiv}>
        <div className={styles.topic}>

          <div className={styles.prodTop}><h2>MOST POPULAR PRODUCTS</h2></div>
        </div>
       
        <div className={styles.products}>
        <Slider {...settings}>
          {prodItems.map((Items) => (
          <div className={styles.productsDiv} key={Items.id}>
            <div className={styles.topCard} >
              <Image 
              src={Items.name}
              alt={Items.desc}
              layout="responsive"
              objectFit="contain"
             />

            </div>
            <div className={styles.bottomCard}>
              <h3>{Items.title}</h3>
              <h4>{Items.price}</h4>
              <p>{Items.fulldescription}</p>
              <button href="/Shop">Add to Cart</button>
            </div>
            </div>
        ))}
        </Slider>
          </div>
    
        <div className={styles.banner}>
          <div className={styles.bannerCard}>
            <Image 
            src={bannerImg}
            alt="buy-quality-plumbing-materials"
            layout="responsive"
            objectFit="cover"
            />
            <h1>GET QUALITY PLUMBING MATERIALS</h1>
            <Link href="/Shop"><button><p>SHOP NOW</p></button></Link>
          </div>
        </div>
      </div>
            <div className={styles.ourService}>
              <div className={styles.serviceText}>
                <p>
                  Building a personal relationship with all our
                   customers to ensure their needs are
                    satisfied and feel part of our family.
                </p>
              </div>
              <div className={styles.btnDiv}>
                <Link href="/Services">
                  <button><h3>OUR SERVICES</h3>
                  </button>
                  </Link>
              </div>
            </div>
      <div className={styles.investDiv}>
        <Invest />
      </div>
      <div className={styles.blogSecDiv}>
        <BlogSubSection />
      </div>
    </div>
  );
};

export default ProductCategory;
