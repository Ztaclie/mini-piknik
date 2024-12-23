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

  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setVisibleTestimonials((prev) => {
        // Add the next testimonial at the end of the array
        const nextIndex = prev.length % testimonials.length;
        return [...prev, testimonials[nextIndex]];
      });
    }, 2000); // Add a new testimonial every 2 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="w-full h-96">
      <h2
        id="reviews-title"
        classname="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
      >
        Everyone is changing their life with Pocket.
      </h2>
      <p className="mt-2 text-lg text-gray-600 sm:text-center">
        Thousands of people have doubled their net-worth in the last 30 days.
      </p>
      <div className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-8 py-4">
          <div className="p-4 bg-white rounded-3xl min-w-96 mx-4">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              voluptas dignissimos quia eos quo nemo? Molestias porro libero
              reiciendis qui quod deleniti maxime harum asperiores quia
              assumenda, natus doloribus. Dolore!
            </p>
            <div className="text-1xl">-User</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
