import Image from "next/image";
import HeroImage from "../assets/HeroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza from "../assets/Pizza.jpg";
import css from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={css.container}>
      {/* left side */}

      <div className={css.left}>
        <div className={css.div}>
          <span>More than Faster</span>
        </div>

        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeYellow)" }}>Pizza</span>
          </span>
        </div>

        <span className={css.miniText}>
          Our Mission is to filling your tummy with delicios food and with fast
          and free delivery
        </span>

        <button className="btn" style={{ padding: "1rem 2.5rem" }}>
          Get Started
        </button>
      </div>

      {/* right side */}

      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>
        <div className={css.circle}></div>
        <div className={css.contactUs}>
          <span>Contact us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.pizza}>
          <div>
            <Image src={Pizza} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeYellow)" }}>$</span> 7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
