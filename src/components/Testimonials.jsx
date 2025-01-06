import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ali Veli",
      review: "Best kebabs in town! Highly recommend.",
      rating: 5,
    },
    {
      id: 2,
      name: "Fatma Yılmaz",
      review: "Amazing service and delicious food!",
      rating: 5,
    },
    {
      id: 3,
      name: "Ahmet Demir",
      review: "A must-visit for all kebab lovers!",
      rating: 5,
    },
    {
      id: 4,
      name: "Merve Kaya",
      review: "The atmosphere is amazing, and the food is divine.",
      rating: 5,
    },
    {
      id: 5,
      name: "Caner Çelik",
      review: "I've never tasted kebabs like this before. Incredible!",
      rating: 5,
    },
    {
      id: 6,
      name: "Zeynep Aksoy",
      review: "The flavors are authentic and the service is excellent.",
      rating: 5,
    },
    {
      id: 7,
      name: "Mehmet Yıldız",
      review: "Best Turkish restaurant in the area. Love their iskender!",
      rating: 5,
    },
    {
      id: 8,
      name: "Ayşe Kara",
      review: "The meat is always perfectly cooked. Fantastic place!",
      rating: 5,
    },
    {
      id: 9,
      name: "Emre Şahin",
      review: "The adana kebab here is out of this world!",
      rating: 5,
    },
    {
      id: 10,
      name: "Selin Yıldırım",
      review: "Great portions and even better taste. Love it!",
      rating: 5,
    },
    {
      id: 11,
      name: "Burak Özdemir",
      review: "Their pide is as authentic as it gets. Amazing!",
      rating: 5,
    },
    {
      id: 12,
      name: "Deniz Aydın",
      review: "Best lahmacun I've had outside of Turkey.",
      rating: 5,
    },
    {
      id: 13,
      name: "Gül Doğan",
      review: "The mixed grill platter is perfect for sharing!",
      rating: 5,
    },
    {
      id: 14,
      name: "Kemal Arslan",
      review: "Fresh ingredients and perfect seasoning every time.",
      rating: 5,
    },
    {
      id: 15,
      name: "Elif Yalçın",
      review: "Their künefe dessert is absolutely heavenly!",
      rating: 5,
    },
    {
      id: 16,
      name: "Ozan Koç",
      review: "Great value for money. Portions are generous!",
      rating: 5,
    },
  ];

  const TestimonialCard = ({ testimonial, delay, duration }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [200, 0, -200, -400],
        }}
        transition={{
          duration: duration,
          times: [0, 0.1, 0.9, 1],
          repeat: Infinity,
          delay: delay,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: "100%",
          top: "50%",
          zIndex: Math.random(),
        }}
        className="bg-white p-6 rounded-xl shadow-lg transform -translate-y-1/2"
      >
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-600 font-medium">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div className="ml-4">
            <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
            <div className="flex text-orange-400">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600">{testimonial.review}</p>
      </motion.div>
    );
  };

  const TestimonialColumn = ({ reviews, columnDelay = 0, speed = 1 }) => {
    const baseDuration = 6;
    const duration = baseDuration / speed;

    return (
      <div className="relative h-[400px] overflow-hidden">
        {reviews.map((review, index) => (
          <TestimonialCard
            key={review.id}
            testimonial={review}
            delay={columnDelay + index * (duration / 2)}
            duration={duration}
          />
        ))}
      </div>
    );
  };

  const column1 = testimonials.slice(0, 4);
  const column2 = testimonials.slice(4, 8);
  const column3 = testimonials.slice(8, 12);
  const column4 = testimonials.slice(12, 16);

  return (
    <div className="w-full py-16 bg-gray-50">
      <h2 className="text-3xl font-medium tracking-tight text-gray-900 text-center">
        What Our Customers Say
      </h2>
      <p className="mt-2 text-lg text-gray-600 text-center">
        Join thousands of satisfied customers who love our kebabs
      </p>

      <div className="max-w-7xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TestimonialColumn reviews={column1} columnDelay={0} speed={0.8} />
        <TestimonialColumn reviews={column2} columnDelay={1.5} speed={1.2} />
        <TestimonialColumn reviews={column3} columnDelay={0.5} speed={1} />
        <TestimonialColumn reviews={column4} columnDelay={2} speed={1.4} />
      </div>
    </div>
  );
};

export default Testimonials;
