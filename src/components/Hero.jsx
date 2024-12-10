import "./Hero.css";
import kebab1 from "../img/kebab1.jpg";

function Hero() {
  return (
    <div className="Hero relative w-96">
      <div className="absolute top-0 left-0 z-10 text-white">
        <h1>Delicious Kebabs</h1>
      </div>
      <img
        className="w-max absolute top-0 left-0 z-0"
        src={kebab1}
        alt="A delicious kebab"
      />
    </div>
  );
}

export default Hero;
