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
      <div className="container mx-auto">
        <div className="text-bold text-3xl text-white">Müşterilerimiz</div>
      </div>
      <div className="grid grid-cols-3">
        <img className="w-6" src={customer1} alt="Customer 1" />
      </div>
    </div>
  );
}

export default Gallery;
