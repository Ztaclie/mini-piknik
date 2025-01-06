import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ali Veli",
      review: "Best kebabs in town! Highly recommend.",
    },
    {
      id: 2,
      name: "Fatma Yılmaz",
      review: "Amazing service and delicious food!",
    },
    {
      id: 3,
      name: "Ahmet Demir",
      review: "A must-visit for all kebab lovers!",
    },
    {
      id: 4,
      name: "Merve Kaya",
      review: "The atmosphere is amazing, and the food is divine.",
    },
    {
      id: 5,
      name: "Caner Çelik",
      review: "I’ve never tasted kebabs like this before. Incredible!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Increased duration to 4 seconds for better readability

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full py-12 bg-gray-50">
      <h2
        id="reviews-title"
        className="text-3xl font-medium tracking-tight text-gray-900 text-center"
      >
        What Our Customers Say
      </h2>
      <p className="mt-2 text-lg text-gray-600 text-center">
        Join thousands of satisfied customers who love our kebabs
      </p>
      <div className="max-w-4xl mx-auto mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-3xl shadow-lg"
          >
            <p className="text-xl text-gray-700 italic">
              "{testimonials[currentIndex].review}"
            </p>
            <div className="mt-4 text-lg font-medium text-gray-900">
              - {testimonials[currentIndex].name}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;
