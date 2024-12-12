function Header() {
  const headerFontStyle = {
    color: "orange",
    // marginLeft: "auto",
    // marginRight: "auto",
  };

  return (
    <div className="Header">
      <nav className="bg-transparent w-screen fixed flex items-start justify-start h-12 mt-4">
        <button
          type="button"
          className="navbar-brand text-xl text-orange-400 font-bold p-2 ml-4"
        >
          Mini Piknik
        </button>
        <div className="grow flex items-center justify-end gap-4 text-white mr-10">
          <button
            type="button"
            className="p-2 underline hover:decoration-orange-400 hover:text-orange-400 underline-offset-4 rounded-lg"
          >
            Home
          </button>
          <button
            type="button"
            className="p-2 underline hover:decoration-orange-400 hover:text-orange-400 underline-offset-4  rounded-lg"
          >
            Gallery
          </button>
          <button
            type="button"
            className="p-2 underline hover:decoration-orange-400 hover:text-orange-400 underline-offset-4  rounded-lg"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
