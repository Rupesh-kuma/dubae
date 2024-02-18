import React from "react";
import { Link } from "react-router-dom";
import hayyan from '../../public/image/Hayyan-Sharjah.jpg'
import mamsha from '../../public/image/al-mamsha.jpg'
import city from '../../public/image/city.jpg'

const City = () => {
  const data = [
    { img: hayyan, title: "Sharjah State", name: "Barashi", path: '/barashi' },
    { img: mamsha, title: "Sharjah State", name: "Al Mamsha", path: '/mamsha' },
    { img: city, title: "Sharjah State", name: "Sharjah", path: '/Sharjah' },
  ]
 


  return (
    <>
      <div className="container city">
        <div className="text-center mb-3 p-5 lh-sm">
          <p className="mb-0">Find Your City</p>
          <h1 className="mt-0">Most Popular Places</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {data?.map((item, index) => (
            <div className="col" key={index}>
              <div className="position-relative rounded city_image">
                <Link to={item.path} className="nav-link active" aria-current="page">
                  <img src={item?.img} className="card-img-top rounded w-100" alt="Hayyan" />
                  <div className="card-body position-absolute bottom-0 start-0 text-light p-4">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
export default City;