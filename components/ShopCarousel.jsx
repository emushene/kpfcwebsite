import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from "../styles/ShopCarousel.module.css"

import Image from "next/image"

import building from "../public/Images/Building-Materials-kpfc-builders-hardware-builders.jpg"
import gardening from "../public/Images/Gardening-Tools-Equipment-kpfc-builders-hardware-builders.jpg"
import hardware from "../public/Images/Hardware-Tools-kpfc-builders-hardware-builders.jpg"
import iron from "../public/Images/Iron-Sheets-Bars-kpfc-builders-hardware-builders.jpg"
import lighting from "../public/Images/Lighting-Electricals-accessories-kpfc-builders-hardware-builders.jpg"
import locks from "../public/Images/Locks-Hinges-kpfc-builders-hardware-builders.jpg"
import mdf from "../public/Images/MDF-Boards-kpfc-builders-hardware-builders.jpg"
import plumbing from "../public/Images/Plumbing-kpfc-builders-hardware-builders.jpg"
import sanitary from "../public/Images/Sanitary-Bathroom-kpfc-builders-hardware-builders.jpg"
import tank from "../public/Images/Water-Tanks-kpfc-builders-hardware-builders.jpg"








const handleDragStart = (e) => e.preventDefault();

const items = [
  <div> <Image className={styles.circleImg} src={building} borderRadius="50px" width="90px" height="90px" marginLeft="1em" onDragStart={handleDragStart} role="presentation" /><p>Building Materials</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={gardening} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /> <p>GARDEN TOOLS</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={hardware} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /><p>HARDWARE MATERIALS</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={iron} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /><p>IRON SHEETS</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={lighting} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /><p>LIGHTING AND ELECTRICAL</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={locks} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /><p>LOCKS & HINGES</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={mdf} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /><p>MDF BOARDS</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={plumbing} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /><p>PLUMBING MATERIALS</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={sanitary} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /><p>SANITARY & BATH ROOM</p></div>,
  <div className={styles.imgDiv}> <Image className={styles.circleImg} src={tank} borderRadius="50px" width="90px" height="90px" marginLeft="1em"  onDragStart={handleDragStart} role="presentation" /><p>WATER TANKS</p></div>,
];

const Gallery = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }, };





  
  return (
    <div>
    <AliceCarousel
     mouseTracking items={items}
    esponsive={responsive}
    controlsStrategy="alternate"
    autoWidth
    autoHeight
  
     
     
     />

    </div>

  )
}
export default Gallery;
