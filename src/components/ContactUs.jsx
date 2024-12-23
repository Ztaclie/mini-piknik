const ContactUs = () => {
  return (
    <div className="bg-white py-12" id="contact">
      <h2 className="text-center text-3xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border-gray-300 p-3 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border-gray-300 p-3 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border-gray-300 p-3 rounded-md"
          rows="4"
        ></textarea>
        <button className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
