import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/home";
import Residential from "./Residential/residential";
import Navbar from "./header/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Commercial from "./Commercial/commercial";
import Barashi from "./Barashi/barashi";
import Mamsha from "./mamsha/mamsha";
import Sharjah from "./Sharjah/sharjah";
import Hayyan from "./hayyan/hayyan";
import Edge from "./Detail_page/Edge/edge";
import Nama from "./Nama/nama";
import Darb from "./Darb/Darb";
import Arim from "./Arim/arim";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/barashi" element={<Barashi />} />
            <Route path="/mamsha" element={<Mamsha />} />
            <Route path="/Sharjah" element={<Sharjah />} />
            <Route path="/hayyan" element={<Hayyan />} />
            <Route path="/edge" element={<Edge />} />
            <Route path="/nama" element={<Nama />} />
            <Route path="/darb" element={<Darb />} />
            <Route path="/arim" element={<Arim />} />
          </Routes>
        </main>
      </section>
      <footer>
        <a href="#top" id="page_scroller" className="d-block position-fixed">
          <i className="fa-solid fa-angle-up"></i>
        </a>

        <button type="button" className="btn btn-primary d-block position-fixed" id="page_scrollers" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="fa-regular fa-comment"></i> Chat
        </button>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog  ms-0 top-50 botton-0 ">
            <div className="modal-content">
              <div className="modal-header bg-success">
                <h5 className="modal-title text-center" id="exampleModalLabel">Chat with us</h5>
                <button type="button" className="bg-transparent"  data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-minus"></i></button>
              </div>
              <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalLabel">Chat with us</h5>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer justify-content-between">
                {/* <div className="d-flex"> */}
                  <p className="p-2 text-start">zendesk</p>
                  <p><i className="fa-solid fa-share-from-square"></i><i className="fa-solid fa-ellipsis"></i></p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-primary" id="enquiry" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          ENQUIRY<i className="fa-solid fa-xmark"></i>
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog top-0 botton-50 me-0">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-header bg-dark">
                            <h5 className="text-light d-flext  justify-content-center " id="staticBackdropLabel">DROP AN ENQUIRY</h5>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder="Full Name" className="w-100 p-2 my-2" />
                            <br />
                            <div className="d-flex">
                                <div className="dropdown">
                                    <button className="btn  dropdown-toggle p-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        code:
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Code</a></li>
                                        <li><a className="dropdown-item" href="#">ARE +971</a></li>
                                        <li><a className="dropdown-item" href="#">BHR +973</a></li>
                                        <li><a className="dropdown-item" href="#">KWT +965</a></li>
                                        <li><a className="dropdown-item" href="#">OMN +968</a></li>
                                        <li><a className="dropdown-item" href="#">QAT +974</a></li>
                                        <li><a className="dropdown-item" href="#">SAU +966</a></li>
                                    </ul>
                                </div>
                                <input type="number" placeholder="Content No" />
                            </div>
                            <br />
                            <input type="email" placeholder="Email Id" className="w-100 my-2 p-2" /><br />
                            <input type="text" placeholder="Enter Captcha" className="w-100 my-2 p-2" />
                            <br />
                            <button className="bg-dark text-light w-100">submit</button>
                        </div>
                    </div>
                </div>
            </div>

      </footer>
    </>
  );
}

export default App;
