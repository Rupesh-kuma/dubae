const Banner = () => {
  return (
    <>
      <div id="top">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./image/r1.jpg" className="d-block w-100" alt="slilder" style={{height:"100vh"}} />
            </div>
            <div className="carousel-item">
              <img src="./image/r2.jpg" className="d-block w-100" alt="slider-2" style={{height:"100vh"}}/>
            </div>
            <div className="carousel-item">
              <img src="./image/r3.jpg" className="d-block w-100" alt="slider-3" style={{height:"100vh"}}/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default Banner;