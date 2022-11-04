import React from "react";
import styles from "../styles/ShopCarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsData } from "./Data/Data";
import { Item } from "semantic-ui-react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

const ShopCarousel = () => {
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 1,
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
      <Slider {...settings}>
        {productsData.map((Item) => (
          <div className={styles.card} key={Item.id}>
            <div className={styles.topCard} >
              <Image
                src={Item.linkImg}
                alt={Item.title}
                layout="responsive"
                borderRadius={50}
                objectFit="cover"
              />
              <Link href={"/Shop"}>
                <h3>{Item.title}</h3>
              </Link>
            </div>
            <div className={styles.bottomCard}>
          
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopCarousel;
