import { motion } from "framer-motion";
import "./Gallery.css";

import customer1 from "../img/customer1.jpg";
import customer2 from "../img/customer2.jpg";
import customer3 from "../img/customer3.jpg";
import customer4 from "../img/customer4.jpg";
import customer5 from "../img/customer5.jpg";
import customer6 from "../img/customer6.jpg";

function Gallery() {
  const images = [
    { src: customer1, alt: "Kebap keyfi" },
    { src: customer2, alt: "Taze ızgara kebap" },
    { src: customer3, alt: "Restoran atmosferi" },
    { src: customer4, alt: "Geleneksel Türk yemeği" },
    { src: customer5, alt: "Kebap hazırlığı" },
    { src: customer6, alt: "Mutlu müşteriler" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-gray-50 py-16" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerimiz</h2>
          <p className="text-gray-600 text-lg">
            Otantik Türk mutfağının tadını çıkarın
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white text-lg font-medium px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Gallery;
