import "./Hero.css";
import kebab1 from "../img/kebab1.jpg";

function Hero() {
  return (
    <div className="Hero w-full">
      <img className="w-auto h-auto" src={kebab1} alt="A delicious kebab" />
    </div>
  );
}

export default Hero;
