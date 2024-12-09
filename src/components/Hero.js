import "./Hero.css";
import kebab1 from "../img/kebab1.jpg";

function Hero() {
  return (
    <div className="Hero">
      <h1>Delicious Kebabs</h1>
      <img src={kebab1} alt="A delicious kebab" />
    </div>
  );
}

export default Hero;
