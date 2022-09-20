import Head from 'next/head'
import Main from 'next/document'
import Intro from '../components/Intro'
import ProductCategory from '../components/ProductCategory'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Home Page</title>
        <meta name="description" content="best cheapest quality Hardware plumbing kenya" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
    
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,400&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,600;1,700;1,900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>
      <Intro />
      <ProductCategory />
      
      </div>
  )
}
