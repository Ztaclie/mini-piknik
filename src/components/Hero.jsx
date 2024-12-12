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
    <div className="Hero w-full min-h-screen" style={heroStyle}>
      <h1 className="text-white">Mini Piknik</h1>
    </div>
  );
}

export default Hero;
