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
    
  
        </Head>
      <Intro />
      <ProductCategory />
      <Skills />
      <Testimonial />
      <FAQ />

      
      </div>
  )
}
