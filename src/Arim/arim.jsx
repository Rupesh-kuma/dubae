import { useState } from "react";
import Footer from "../header/Footer";

const Arim = () => {
    const [activePlan, setActivePlan] = useState('2bhk');

    const handleTabClick = (plan) => {
        setActivePlan(plan);
    };

    const floorPlans = [
        { id: '2bhk', label: '2 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '3bhk', label: '3 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '4bhk', label: '4 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '5bhk', label: '5 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
    ];
    return (
        <>
            <div>
                <img src="https://www.buildersprojects.com/project_pics/Arim3-background-image-71176.jpg" alt="hayyan" className="w-100" />
            </div>
            <div className="background_color py-5">
                <div className="container">
                    <div className="position-relative">
                        <div className="d-flex shodw position-absolute">
                            <div className="col-3 p-4 my-auto">
                                <h1 className="fs-2 text-center">Alef Group</h1>
                            </div>
                            <div className="col-4 p-5">
                                <h4 className="mb-3">Arim 3 by Alef Group</h4>
                                <p className="mb-0"><i className="fa-solid fa-location-dot"></i> Sharjah</p>
                                <p className="mb-0">2 to 5 Bedroom Villas and Townhouses</p>
                                <p>Project RERA Number - Coming Soon</p>
                            </div>
                            <div className="col-5 p-4 my-auto">
                                <h1 className="fs-2 text-center">Starting from AED 1.19 M</h1>
                            </div>
                        </div>
                    </div>
                    <div className="pargraph">
                        <div className="my-5">
                            <h2 className="text-center">Description</h2>
                            <p><b>Arim 3</b>  is a newly launched residential development by Alef Group in Sharjah, which offers 2 to 5-bedroom villas and Townhouses. The project offers a comfortable entrance to Sharjah Mosque, Sharjah International Airport, Sharjah National Park, Sharjah Museum of Islamic Civilization, and Dubai International Airport. It is known for its high-quality residential properties and is a famous area for families and experts looking for a peaceful and exclusive living environment.</p>
                            <p>It offers an option to buy a property that is not only affordable but also easy to carry, as well as being a good investment opportunity. Arim 3 Sharjah has become one of the most sought-after locations for expats because it offers so multiple additional amenities within its borders. There are a bunch of restaurants doing international cuisines as well as other services such as banks, shopping malls, gyms, and actual cinemas.</p>
                            <p><b>Arim 3 at Sharjah </b> is known for its spacious and modern design and often comes with a range of amenities such as private gardens, rooftop terraces, and shared society facilities. Living in a townhouse in this development delivers a combination of the privacy and freedom of a single-family home with the comfort and security of a shared neighborhood. Alef Group is a prominent real estate developer based in Dubai, playing a pivotal role in shaping the citys skyline with its creative and luxurious projects. Established with a dream to redefine urban living, the developer has always demonstrated a commitment to excellence and a passion for creating distinctive residential and commercial spaces.</p>
                            <p>One of Alef Groups outstanding achievements is the iconic Al Mamsha project, a sprawling mixed-use development that epitomizes modern living. Located in the heart of Sharjah, Al Mamsha seamlessly integrates residential, retail, and leisure spaces, providing a vibrant community experience. The development reflects Alef Groups dedication to creating environments that foster a sense of community and well-being.</p>
                            <p>Alef Group is known for its meticulous attention to detail and adherence to the highest quality standards. Each project is a testament to the companys commitment to delivering excellence in design, construction, and overall customer satisfaction. The Groups portfolio encompasses a diverse range of properties, including residential apartments, commercial spaces, and leisure facilities, catering to the diverse needs of residents and investors alike. In addition to its focus on creating exceptional spaces, Alef Group is also committed to sustainability and environmental responsibility.</p>
                            <p>The incorporation of eco-friendly practices in their developments underscores their dedication to building a sustainable future for the communities they serve. The success of Arim 3 by Alef Group can be attributed to its visionary leadership and a team of experienced professionals who bring expertise and creativity to every project. By staying ahead of market trends and embracing innovation, the Group has positioned itself as a leader in the competitive real estate landscape of Dubai.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <h5 className="text-center mb-4">Features</h5>
                <p className="text-center bg-dark text-light py-3 fs-5 mb-0">Project Advantages:-</p>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> Premium Villas and Luxurious apartments</td>
                            <td><i className="fa-solid fa-check text-success"></i> Apartments and lofts with high-quality finishes.</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> Panoramic views from double-height curtain walls.</td>
                            <td><i className="fa-solid fa-check text-success"></i> Foldable partitions for multifunctional living spaces.</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> NOutdoor plaza with amphitheater and artistic inspiration.</td>
                            <td><i className="fa-solid fa-check text-success"></i> Largest swimming water lagoon in Sharjah</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="background_color py-5">

            <div className="container pb-4">
      <div className="row">
        <h3 className="heading-2">Floor Plans</h3>

        <div id="parentHorizontalTab" className="d-block w-100 m-0">
          <ul className="resp-tabs-list hor_1">
            {floorPlans.map((plan) => (
              <li
                key={plan.id}
                className={`resp-tab-item hor_1 ${activePlan === plan.id ? 'resp-tab-active' : ''}`}
                onClick={() => handleTabClick(plan.id)}
                role="tab"
              >
                {plan.label}
              </li>
            ))}
          </ul>
          <div className="resp-tabs-container hor_1 text-center">
            {floorPlans.map((plan) => (
              <div
                key={plan.id}
                className={`resp-tab-content hor_1 ${activePlan === plan.id ? 'resp-tab-content-active' : ''}`}
                role="tabpanel"
              >
                <img alt={`Floor Plan ${plan.label}`} src={plan.imageUrl} className="img-fluid rounded floorplanimg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog end-0 top-50">
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 container">

                <h4 className="text-center my-4">Price</h4>
                <table className="table table-bordered text-center">
                    <tbody>
                        <tr className="bg-dark">
                            <td className="bg-dark text-light">Type***</td>
                            <td className="bg-dark text-light">Area in Sq.ft.***</td>
                            <td className="bg-dark text-light">Price ***</td>
                        </tr>
                        <tr>
                            <td>2 BHK</td>
                            <td><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">view unit Size</button></td>
                            <td>Updating Soon</td>
                        </tr>
                        <tr>
                            <td>3 BHK</td>
                            <td><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">view unit Size</button></td>
                            <td>Updating Soon</td>
                        </tr>
                        <tr>
                            <td>4 BHK</td>
                            <td><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">view unit Size</button></td>
                            <td>Updating Soon</td>
                        </tr>
                        <tr>
                            <td>5 Bedroom</td>
                            <td><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">view unit Size</button></td>
                            <td>Updating Soon</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <div className="background_color py-5">
                <div className="container">
                    <h2 className="text-center my-5">Amenities</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-hospital icon-font text-center text-primary"></i>
                                <p className="text-center">Hospital</p>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-plane-up icon-font text-center text-primary"></i>
                                <p className="text-center">Airport</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-cart-shopping icon-font text-center text-primary"></i>
                                <p className="text-center">Shopping Center</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-utensils icon-font text-center text-primary"></i>
                                <p className="text-center">Resturent</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-car icon-font text-center text-primary"></i>
                                <p className="text-center">Parking</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-person icon-font text-center text-primary"></i>
                                <p className="text-center">Security Guard</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-video icon-font text-center text-primary"></i>
                                <p className="text-center">CCTV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Arim;