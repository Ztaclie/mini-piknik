import "./Hero.css";
import kebab1 from "../img/kebab1.jpg";

const heroStyle = {
  backgroundImage: `URL(${kebab1})`,

  /* Create the parallax scrolling effect */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function Hero() {
  return (
    <div
      className="Hero w-full min-h-screen flex items-start justify-center"
      style={heroStyle}
    >
      <div className="text-orange-400 text-5xl mt-20 font-bold">
        Mini Piknik
      </div>
    </div>
  );
}

export default Hero;
