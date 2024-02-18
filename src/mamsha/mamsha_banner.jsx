const Banner=()=>{
    return(
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active d-none" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className="d-none"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active banner">
      <img src="./image/slider-1.jpg" className="d-block w-100 banner_image" alt="slider"/>
      <div className="carousel-caption d-none d-md-block bottom-50    top-50" >
        <h5 className="fs-1 text-start fw-bold">Find Your Amazing Real House</h5>
        <p className="fs-2 text-start">Find new & featured property located in your local city.</p>
      </div>
    </div>
    <div className="carousel-item  banner">
      <img src="./image/Hayyan-Sharjahs.jpg" className="d-block w-100 banner_image" alt="Sharjsh"/>
      <div className="carousel-caption d-none d-md-block bottom-50 top-50  ">
        <h5 className="fs-1 fw-bold text-end">Find Residential property </h5>
        <h5 className="fs-1 fw-bold text-end"> located in Barashi</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <div className="rounded-pill banner_color_icon"><span className="carousel-control-prev-icon" aria-hidden="true"></span></div>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <div className="rounded-pill banner_color_icon"><span className="carousel-control-next-icon" aria-hidden="true"></span></div>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Banner;