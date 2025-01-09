import "./Hero.css";
import kebab1 from "../img/kebab1.jpg";

function Hero() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={kebab1}
          alt="Lezzetli kebap"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="z-10 text-center space-y-4">
        <h1 className="text-6xl text-orange-400 font-bold drop-shadow-lg">
          Mini Piknik
        </h1>
        <p className="text-2xl text-white font-medium">
          Mini bir Kebap Deneyimi
        </p>
      </div>
    </div>
  );
}

export default Hero;
