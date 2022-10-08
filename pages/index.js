import Head from 'next/head'
import Main from 'next/document'
import Intro from '../components/Intro'
import ProductCategory from '../components/ProductCategory'
import Skills from '../components/Skills'
import FAQ from '../components/FAQ'
import Testimonial from '../components/Testimonial'



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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <link href="http://fonts.cdnfonts.com/css/whitney-2" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,400&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,600;1,700;1,900&family=Varela+Round&display=swap" rel="stylesheet"></link>
      </Head>
      <Intro />
      <ProductCategory />
      <Skills />
      <Testimonial />
      <FAQ />

      
      </div>
  )
}
