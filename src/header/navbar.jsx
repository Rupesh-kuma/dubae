import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container-fluid">
           
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/">
                  HOME
                </Link>
                <Link className="nav-link" to="/residential">
                    RESIDENTIAL
                </Link>
                <Link className="nav-link" to="/commercial">
                    COMMERCIAL
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
