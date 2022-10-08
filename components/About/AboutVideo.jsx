import styles from "../../styles/About/AboutVideo.module.css";
import React from "react";
import ReactPlayer from "react-player";
import InvestBanner from  "../About/InvestBanner"
import BannerHappy from "./BannerHappy";

const AboutVideo = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.vidDiv}>
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=MOV-fIsqCrg"
              className="react-player"
              playing
              width="100%"
              height="400px"
              controls={false}
            />
          </div>
        </div>
        <div className={styles.textDiv}>
          <h6>THE BUILDING STORY</h6>
          <h4>Karibu KPFC Builders</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            laborum nihil? Aperiam laudantium nam eos fugit ipsam iste corrupti
            asperiores, voluptatum quisquam, unde, omnis facilis maxime cumque
            voluptas impedit autem? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Distinctio assumenda ratione voluptas enim nostrum
            vitae, voluptates sint dolore architecto cupiditate numquam
            asperiores, doloremque quis, harum error quas est deleniti aliquid?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur qui deleniti doloremque repudiandae delectus temporibus
            provident laudantium odio excepturi impedit nisi dicta eum, non
            voluptatem veritatis sed repellat et blanditiis! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Molestiae explicabo fugiat
            sunt sit odio quaerat, nihil, eos dicta possimus blanditiis
            asperiores dignissimos, nemo accusantium dolorum eligendi quasi
            ipsum optio facere! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim, eum quidem necessitatibus repudiandae vero
            illum labore sequi cumque asperiores corrupti mollitia at commodi
            corporis iusto hic consectetur reprehenderit tempore sit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
            nesciunt accusantium nihil voluptate similique praesentium cumque
            ducimus amet veniam, incidunt ullam facere est cupiditate doloremque
            quia, fugit quisquam quas quod. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos sequi in, enim neque, at placeat
            quam non deserunt vitae, quibusdam nobis necessitatibus velit
            doloribus id iste consequuntur illum repellendus ratione!
          </p>
        </div>
      </div>
      <BannerHappy />
      <div className={styles.portifolio}>
        <div className={styles.experience}>
           <h6> ABOUT KPIPES & FITTING CENTER LTD</h6> 
           <h3>10 Years Experience</h3>
           <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            laborum nihil? Aperiam laudantium nam eos fugit ipsam iste corrupti
            asperiores, voluptatum quisquam, unde, omnis facilis maxime cumque
            voluptas impedit autem? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Distinctio assumenda ratione voluptas enim nostrum
            vitae, voluptates sint dolore architecto cupiditate numquam
            asperiores, doloremque quis, harum error quas est deleniti aliquid?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur qui deleniti doloremque repudiandae delectus temporibus
            provident laudantium odio excepturi impedit nisi dicta eum, non
            voluptatem veritatis sed repellat et blanditiis! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Molestiae explicabo fugiat
            sunt sit odio quaerat, nihil, eos dicta possimus blanditiis
            asperiores dignissimos, nemo accusantium dolorum eligendi quasi
            ipsum optio facere! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim, eum quidem necessitatibus repudiandae vero
            illum labore sequi cumque asperiores corrupti mollitia at commodi
            corporis iusto hic consectetur reprehenderit tempore sit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
            nesciunt accusantium nihil voluptate similique praesentium cumque
            ducimus amet veniam, incidunt ullam facere est cupiditate doloremque
            quia, fugit quisquam quas quod. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos sequi in, enim neque, at placeat
            quam non deserunt vitae, quibusdam nobis necessitatibus velit
            doloribus id iste consequuntur illum repellendus ratione!
          </p>
            
           
            
            </div>
        <div className={styles.addDiv}>
            <img src="https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />    
          
        </div>
      </div>
        <div className="investBanner">
            
        </div>
    </div>
  );
};

export default AboutVideo;
