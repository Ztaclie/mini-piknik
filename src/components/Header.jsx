function Header() {
  return (
    <header className="fixed w-full z-50">
      <nav className="bg-black/50 backdrop-blur-sm w-full flex items-center justify-between h-16 px-6">
        <button
          type="button"
          className="text-2xl text-orange-400 font-bold hover:text-orange-300 transition-colors"
        >
          Mini Piknik
        </button>

        <div className="flex items-center gap-6 text-white">
          <a
            href="#home"
            className="p-2 hover:text-orange-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#gallery"
            className="p-2 hover:text-orange-400 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="p-2 hover:text-orange-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
