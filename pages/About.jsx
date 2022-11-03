import Head from "next/head";
import Corousal from "../components/About/Corousal";
import AboutVideo from "../components/About/AboutVideo";
<<<<<<< HEAD
<<<<<<< HEAD
import OurPromise from "../components/About/OurPromise";
import BannerInvest from "../components/About/BannerInvest";
import Aspiration from "../components/About/Aspiration"
=======
import InvestBanner  from "../components/About/InvestBanner";
import Skills from "../components/Skills";
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a
=======
import InvestBanner  from "../components/About/InvestBanner";
import Skills from "../components/Skills";
>>>>>>> f7737119ed115b604fd670bd50395ff56d30ea9a





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