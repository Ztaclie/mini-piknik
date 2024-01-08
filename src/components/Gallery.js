import "./Gallery.css";

import img from "../img/kebab1.jpg";
import customer1 from "../img/customer1.jpg";
import customer2 from "../img/customer2.jpg";
import customer3 from "../img/customer3.jpg";
import customer4 from "../img/customer4.jpg";
import customer5 from "../img/customer5.jpg";
import customer6 from "../img/customer6.jpg";

function Gallery() {
  return (
    <div className="Gallery">
      <section className="photo-gallery py-4 py-xl-5 parallax ">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto text-white">
              <h2>Müşterilerimiz</h2>
            </div>
          </div>
          <div
            className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos"
            data-bss-baguettebox
          >
            <div className="col item">
              <a href="#">
                <img className="img-fluid rounded-2" src={customer1} />
              </a>
            </div>
            <div className="col item">
              <a href="#">
                <img className="img-fluid rounded-2" src={customer2} />
              </a>
            </div>
            <div className="col item">
              <a href="#">
                <img className="img-fluid rounded-2" src={customer3} />
              </a>
            </div>
            <div className="col item">
              <a href="#">
                <img className="img-fluid rounded-2" src={customer4} />
              </a>
            </div>
            <div className="col item">
              <a href="#">
                <img className="img-fluid rounded-2" src={customer5} />
              </a>
            </div>
            <div className="col item">
              <a href="#">
                <img className="img-fluid rounded-2" src={customer6} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
