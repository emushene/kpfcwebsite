// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import styles from "../../styles/About/Carousal.module.css"

// new Glide(".glide", {
//     peek: 50,
//     perView: 2,
//     type: "carousel"
//   }).mount({ Controls, Breakpoints });




const corousal = () => {
    return (
        <div>
         <div className={styles.glide}>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            Prev
          </button>
        </div>
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">0 Slider Goes in here</li>
            <li class="glide__slide">1</li>
            <li class="glide__slide">2</li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            Next
          </button>
        </div>
      </div>
        </div>
    );
}

export default corousal;