import "./Hero.css";
import kebab1 from "../img/kebab1.jpg";

function Hero() {
  const heroStyle = {
    backgroundImage: `URL(${kebab1})`,

    /* Set a specific height */
    minHeight: "100vh",

    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div className="Hero">
      <div style={heroStyle}>
        <div className="position-absolute" style={{ top: "20%", left: "3%" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span
                  className="text-primary fs-1"
                  style={{ borderColor: "#ffa500" }}
                >
                  miniPiknik Restaurant
                </span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <span className="fs-1 btn-outline-primary">Bizi Arayın</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
