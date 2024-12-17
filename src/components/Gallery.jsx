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
    <div className="Gallery w-full py-4">
      <div className="flex justify-center items-center my-5">
        <div className="text-bold text-3xl text-white">Müşterilerimiz</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-4">
        <img
          className="w-50 border border-2 rounded hover:border-orange-400 cursor-pointer hover:scale-110 hover:translate-x-8 hover:translate-y-8 hover:transition-all hover:ease-in hover:duration-300 transition-all ease-out duration-300"
          src={customer1}
          alt="Customer 1"
        />
        <img
          className="w-50 border border-2 rounded hover:border-orange-400 cursor-pointer hover:scale-110 hover:translate-y-8 hover:transition-all hover:ease-in hover:duration-300 transition-all ease-out duration-300"
          src={customer2}
          alt="Customer 2"
        />
        <img
          className="w-50 border border-2 rounded hover:border-orange-400 cursor-pointer hover:scale-110 hover:-translate-x-8 hover:translate-y-8 hover:transition-all hover:ease-in hover:duration-300 transition-all ease-out duration-300"
          src={customer3}
          alt="Customer 3"
        />
        <img
          className="w-50 border border-2 rounded hover:border-orange-400 cursor-pointer hover:scale-110 hover:translate-x-8 hover:-translate-y-8 hover:transition-all hover:ease-in hover:duration-300 transition-all ease-out duration-300"
          src={customer4}
          alt="Customer 4"
        />
        <img
          className="w-50 border border-2 rounded hover:border-orange-400 cursor-pointer hover:scale-110 hover:-translate-y-8 hover:transition-all hover:ease-in hover:duration-300 transition-all ease-out duration-300"
          src={customer5}
          alt="Customer 5"
        />
        <img
          className="w-50 border border-2 rounded hover:border-orange-400 cursor-pointer hover:scale-110 hover:-translate-x-8 hover:-translate-y-8 hover:transition-all hover:ease-in hover:duration-300 transition-all ease-out duration-300"
          src={customer6}
          alt="Customer 6"
        />
      </div>
    </div>
  );
}

export default Gallery;
