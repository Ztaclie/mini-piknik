function Header() {
  const headerFontStyle = {
    color: "orange",
    // marginLeft: "auto",
    // marginRight: "auto",
  };

  return (
    <div className="Header">
      <nav className="navbar fixed-top navbar-expand-md py-3">
        <div className="container-fluid">
          <div className="w-100 d-flex align-items-center justify-content-center me-lg-5 me-sm-0 ms-lg-0 ms-sm-3">
            <ul className="navbar-nav p-1  me-5">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="#contact"
                >
                  İletişim
                </a>
              </li>
            </ul>

            <a
              className="navbar-brand p-2 tracking-in-expand"
              href="#Home"
              style={headerFontStyle}
            >
              <span>mini Piknik</span>
            </a>
            <ul className="navbar-nav p-1  ms-3">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="#Location"
                >
                  Konum
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
