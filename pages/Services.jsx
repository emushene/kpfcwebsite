import Head from "next/head";
import Carousel from "../components/Services/Carousel";
import Servicebanner from "../components/Services/Servicebanner";
import SplitBanner from "../components/Services/SplitBanner";
import TopServices from "../components/Services/TopServices";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import Testimonial from "../components/Testimonial";

const Services = () => {
  return (
    <div>
      <Head>
        <title>Services Page</title>
        <meta
          name="description"
          content="Services best cheapest quality Hardware plumbing Kenya"
        />
      </Head>

      <Carousel />
      <Servicebanner />
      <TopServices />
      <WhyChooseUs />
      <SplitBanner />
      <Testimonial />
    </div>
  );
};

export default Services;
