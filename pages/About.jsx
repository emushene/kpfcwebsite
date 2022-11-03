import Head from "next/head";
import Corousal from "../components/About/Corousal";
import AboutVideo from "../components/About/AboutVideo";
import OurPromise from "../components/About/OurPromise";
import BannerInvest from "../components/About/BannerInvest";
import Aspiration from "../components/About/Aspiration"





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
      <OurPromise />
      <BannerInvest/>
      <Aspiration />
   
    
    
    </div>
    )
}

export default About