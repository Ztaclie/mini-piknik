function Header() {
  const headerFontStyle = {
    color: "orange",
    // marginLeft: "auto",
    // marginRight: "auto",
  };

  return (
    <div className="Header">
      <nav className="bg-transparent w-screen absolute flex items-start justify-start h-12 ">
        <div className="navbar-brand text-xl text-orange-400 font-bold p-2">
          Mini Piknik
        </div>
        <div className="grow h-full flex items-center justify-center gap-4 text-white">
          <button type="button" className="p-2 border border-2 rounded-lg">
            Home
          </button>
          <button type="button" className="p-2 border border-2 rounded-lg">
            Gallery
          </button>
          <button type="button" className="p-2 border border-2 rounded-lg">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
