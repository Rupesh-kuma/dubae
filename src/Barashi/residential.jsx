import { useState } from "react";
import { Link } from "react-router-dom";
const Residential = () => {
  const [product,setProduct]=useState("Hayyan");
  console.log(product);
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
                    to="/hayyan"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <img
                      src="./image/Hayyan.jpg"
                      className="card-img-top w-100"
                      alt="Hayyan"
                    />
                  </Link>
                </div>
                
              </div>
              <div className="card-body py-5 px-4">
                  <h5 className="card-title pb-2">Hayyan</h5>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot"></i>Barashi
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
