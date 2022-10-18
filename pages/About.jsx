import Head from "next/head";
import Corousal from "../components/About/corousal";
import AboutVideo from "../components/About/AboutVideo";
import InvestBanner  from "../components/About/InvestBanner";
import Skills from "../components/Skills";





const About = () => {
 
    return (

        <div>
            <Head>
        <title>About Page</title>
        <meta name="description" content="About best cheapest quality Hardware plumbing kenya" />
        {/* <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"></link> */}
  
     
      </Head>
        
      <Corousal />
      <AboutVideo />
      <InvestBanner />
      <Skills />
    
    </div>
    )
}

export default About