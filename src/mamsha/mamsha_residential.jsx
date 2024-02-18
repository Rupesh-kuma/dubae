import { Link } from "react-router-dom";

const Residential = () => {
  return (
    <>
      <div className="container">
        <div className="residential">
          <h1 className="text-center residential_padding">Residential Properties in Barashi</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="residential_shedow">
              <div className="card rounded p-0">
                <div className="city_image">
                  <Link
                    to="/edge"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <img
                      src="./image/Edge2.jpg"
                      className="card-img-top w-100"
                      alt="Edge2"
                    />
                  </Link>
                </div>
                
              </div>
              <div className="card-body py-5 px-4">
                  <h5 className="card-title pb-2">Edge 2 by Alef Group</h5>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot"></i>Al Mamsha
                  </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="residential_shedow">
              <div className="card rounded p-0">
                <div className="city_image">
                  <Link
                    to="/nama"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <img
                      src="./image/nama1.jpg"
                      className="card-img-top w-100"
                      alt="Hayyan"
                    />
                  </Link>
                </div>
                
              </div>
              <div className="card-body py-5 px-4">
                  <h5 className="card-title pb-2">Nama 1 at Al Mamsha Raseel</h5>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot"></i>Al Mamsha Raseel
                  </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="residential_shedow">
              <div className="card rounded p-0">
                <div className="city_image">
                  <Link
                    to="/darb"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <img
                      src="./image/Darb5 .jpg"
                      className="card-img-top w-100"
                      alt="Hayyan"
                    />
                  </Link>
                </div>
                
              </div>
              <div className="card-body py-5 px-4">
                  <h5 className="card-title pb-2">Darb 5 At Al Mamsha</h5>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot"></i>Al Mamsha
                  </p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Residential;
