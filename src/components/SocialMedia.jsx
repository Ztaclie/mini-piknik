const SocialMedia = () => {
  return (
    <div className="bg-white py-6">
      <h2 className="text-center text-2xl font-bold mb-4">Follow Us</h2>
      <div className="flex justify-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-blue-600 text-3xl"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          className="text-pink-600 text-3xl"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="text-blue-400 text-3xl"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
