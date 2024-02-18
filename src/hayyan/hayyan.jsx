import { useState } from "react";
import Footer from "../header/Footer";

const Hayyan = () => {
    const [activePlan, setActivePlan] = useState('2bhk');

    const handleTabClick = (plan) => {
        setActivePlan(plan);
    };

    const floorPlans = [
        { id: '2bhk', label: '2 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '3bhk', label: '3 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '4bhk', label: '4 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '5bhk', label: '5 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '6bhk', label: '6 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '7 Bedroom', label: '7 Bedroom', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
    ];
    return (
        <>
            <div>
                <img src="https://www.buildersprojects.com/project_pics/Hayyan-Villas-background-image-96585.jpg" alt="hayyan" className="w-100" />
            </div>
            <div className="background_color py-5">
                <div className="container">
                    <div className="position-relative">
                        <div className="d-flex shodw position-absolute">
                            <div className="col-3 p-4 my-auto">
                                <h1 className="fs-2 text-center">Alef Group</h1>
                            </div>
                            <div className="col-4 p-5">
                                <h4 className="mb-3">Hayyan</h4>
                                <p className="mb-0"><i className="fa-solid fa-location-dot"></i> Barashi</p>
                                <p className="mb-0">2, 3 to 6, 7 Bedroom Villas and Townhouse</p>
                                <p>Project RERA Number - Coming Soon</p>
                            </div>
                            <div className="col-5 p-4 my-auto">
                                <h1 className="fs-2 text-center">Starting from AED 1,199,000</h1>
                            </div>
                        </div>
                    </div>
                    <div className="pargraph">
                        <div className="my-5">
                            <h2 className="text-center">Description</h2>
                            <p><b>Hayyan</b> is a newly launched residential development with luxury living. Developed by the well-known Alef Group, the project introduces a new standard of residential excellence with 2, 3, and 4-bedroom townhouses, as well as 5 and 7-bedroom villas. This development promises an outstanding living experience, blending contemporary design, modern amenities, and a peaceful environment.</p>
                            <p>One of the key highlights of Hayyan Villas is its strategic location in Barashi, Sharjah. Barashi is a dynamic neighborhood known for its family-friendly atmosphere and proximity to essential amenities. Residents of this development will enjoy easy access to schools, hospitals, shopping centers, and recreational facilities, making it an ideal choice for families seeking a convenient and comfortable lifestyle.</p>
                            <p><b>Alef Group,</b> the mastermind behind this development, has a standing for creating architectural masterpieces that redefine the concept of luxury living. The development showcases a harmonious blend of modern design elements and traditional aesthetics, creating a unique and visually stunning landscape. Each townhouse and villa within this project is a testament to Alef Groups commitment to excellence in architecture and design.</p>
                            <p>Hayyan Sharjah offers a diverse range of living spaces to cater to the various needs of residents. Whether youre looking for a cozy 2-bedroom townhouse or a spacious 7-bedroom villa, this project has the perfect home for you. The carefully planned layouts ensure optimal utilization of space, creating a comfortable and functional environment for residents. The interiors are characterized by high-quality finishes, elegant fixtures, and a contemporary aesthetic that exudes sophistication. The Townhouses in Hayyan are designed for modern living. With open-plan layouts, stylish kitchens, and private outdoor spaces, these townhouses offer a perfect balance of comfort and functionality. Residents can enjoy a sense of community while still maintaining their privacy. Spacious living areas, private gardens, and thoughtfully designed interiors create an opulent atmosphere that is perfect for larger families or individuals who appreciate the finer things in life.</p>
                            <p>Hayyan Villas In Sharjah goes beyond providing luxurious living spaces by offering a range of amenities and facilities that enhance the overall lifestyle of its residents. From state-of-the-art fitness centers and swimming pools to landscaped parks and childrens play areas, every aspect of the development is designed to promote well-being and a sense of community. The 24/7 security ensures the safety and peace of mind of residents, allowing them to fully enjoy the amenities and facilities provided.</p>
                            <p>Apart from being an ideal residential destination, the development also presents a promising acquisition opportunity. The strong prominence of Alef Group, coupled with the strategic location and luxurious features of the development, makes it an attractive prospect for investors. The increasing demand for premium properties in Sharjah adds to the investment potential of The Hayyan, promising both a luxurious lifestyle for residents and a lucrative return on investment for property investors.</p>
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
                            <td><i className="fa-solid fa-check text-success"></i> Luxurious Townhouses, luxury Villas</td>
                            <td><i className="fa-solid fa-check text-success"></i> Prime destination just next to the Emirates Road Dubai</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> Most Dense Green development in Sharjah with 50,000 Trees</td>
                            <td><i className="fa-solid fa-check text-success"></i> Attractive and flexible payment plan options</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> Natural Ventilation & Adaptive atmosphere</td>
                            <td><i className="fa-solid fa-check text-success"></i> Sharjahs most prominent community park</td>
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
                        <tr>
                            <td>6 Bedroom</td>
                            <td><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">view unit Size</button></td>
                            <td>Updating Soon</td>
                        </tr>
                        <tr>
                            <td>7 Bedroom</td>
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
export default Hayyan;