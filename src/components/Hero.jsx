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
          alt="Delicious kebab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="z-10 text-center space-y-4">
        <h1 className="text-6xl text-orange-400 font-bold drop-shadow-lg">
          Mini Piknik
        </h1>
        <p className="text-2xl text-white font-medium">
          Authentic Turkish Kebab Experience
        </p>
        <button
          className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-full 
          hover:bg-orange-600 transition-colors font-medium"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
