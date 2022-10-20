import styles from "../../styles/Investiment/Carousel.module.css";
import Image from "next/image";
import invImage from "../../public/Images/kpfc-investiment-opportunity-hardware-builders.webp";

const Carousel = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
      
        <div className={styles.responsiveImage}>
          <Image
            src={invImage}
            alt=""
            layout="responsive"
            height={1724}
          ></Image>

          <p>
            K. Pipes and Fitting Centre Ltd is a business, whose operations
            involve selling pipes, plumbing materials, and other hardware items
            in wholesale and retail businesses across the country, with 40
            physical branches in 20 counties. With almost a decade in the
            industry, K.P.F.C boosts of a huge clientele of over 2m building
            Kenyans within the country and in the diaspora. Kpfc provides job
            opportunities directly to its 500 employees and thrice the number
            indirectly. In an effort to enhance service delivery and to create
            more jobs and businesses, K.P.F.C has introduced tailor-made
            investment platforms that are open to the general public and
            existing K.P.F.C investors. The investment platforms are birthed
            from two existing and flourishing businesses namely K. pipes and
            fitting center LTD for plumbing materials and K.P.F.C Builders
            Hardware LTD for general building materials excluding plumbing. The
            investment categories are as listed below:
          </p>
        </div>
      </div>
      <div className={styles.textDiv}>
        <div className={styles.div1}>
          <h3>1. KPFC Builders Product investment</h3><br /><br />
          <p>
            In this category, the investor chooses a product in our product
            catalog. The product availability is on a first come first served
            basis and on the ability to raise the capital required for a
            specific product. The company will guide the investor on the
            availability of the product based on his/her budget.
            <br />
            <br />
            <br /> The investor will be provided with daily sales reports of the
            product of their interest and the sales proceeds wired to their
            mpesa or bank account. For a period of two months, the investor will
            enjoy a 100% profit share to help them meet their financial
            obligations as they settle into the business. A profit-sharing ratio
            of 50:50 will be applicable from the third month.
          </p>
        </div>
        <div className={styles.div2}>
          <h3>2. KPFC Hardware Starter Pack.</h3><br /><br />
          <p>
            This product is tailored for investors willing to start a hardware
            business from scratch and those in the hardware business willing to
            introduce the plumbing materials section. Being the hardware market
            leader for the past 5 years, we have vast experience in the industry
            and will offer free consultation on the process, requirements, and
            guidelines of starting a hardware business. <br /><br /> The hardware starter
            package is available with a stock purchase of Ksh 500,000 and above
            with the following benefits.
            <ul>
              <li> Free feasibility study</li>
              <li> Free product</li>
              <li>
                {" "}
                knowledge training for sales attendants and supervisors (max. 2
                persons){" "}
              </li>
              <li>
                {" "}
                Recommendation for bank financing for loyal customers once they
                reach a threshold of 2.5m of purchases with us.{" "}
              </li>
              <li> Free benchmarking in selected shops and warehouses.</li>
              Access to customer
              <li> support and negotiated competitive product prices.</li>
            </ul>
          </p>
        </div>
        <div className={styles.div3}>
          <h3>3. KPFC Franchisee</h3><br /><br />
          <p>
            This is a lucrative investment opportunity where the investors will
            become part of the larger k pipes community as franchisees. KPFC
            will give licenses to the investor for operations under KPFC along
            with the procurement of its products Services, branding of the shop
            and merchandise, Product training, and marketing services in
            exchange for a franchise fee of 2% (subject to discussion) of
            overall sales. The investors will enjoy the following benefits:
            <ul>
              <li> Access to a ready market. </li>
              <li>Branding and marketing support </li>
              <li>
                {" "}
                Being pioneer branches in areas where kpfc does not have a
                physical shop
              </li>
              <li>A clientele of 2000 customers and above.</li>
              <li> Comprehensive business support and guidance</li>
              <li>
                {" "}
                Free product knowledge training for sales attendants and
                supervisors{" "}
              </li>
              <li> Access to trained loss controllers. </li>
              <li> Free bookkeeping software training</li>
            </ul>
          </p>
        </div>
      </div>
      <div className={styles.contacts}>
          <p>
            For more information, you can book a slot with us on <br />
            sales@kpipes.co.ke talk to us <br />
            WhatsApp us on 0791281423
          </p>
        </div>
      
    </div>
  );
};

export default Carousel;
