import { useState } from "react";

function Navbar() {
  let navMenu = ["Dashboards", "Products", "Contacts", "About"];

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navMenu.map((nav, index) => (
                <li key={nav} className="nav-item">
                  <a
                    className={
                      selectedIndex === index ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    href="#"
                    onClick={() => {
                      console.log(nav);
                      setSelectedIndex(index);
                    }}
                  >
                    {nav}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
