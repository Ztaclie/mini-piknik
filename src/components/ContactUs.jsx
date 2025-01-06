const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16" id="contact">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions? We'd love to hear from you.
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg shadow-sm 
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 p-3 rounded-lg shadow-sm 
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-lg shadow-sm 
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-lg font-medium
              hover:bg-orange-600 transition-colors shadow-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
