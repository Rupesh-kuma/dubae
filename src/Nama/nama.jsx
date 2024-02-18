import { useState } from "react";
import Footer from "../header/Footer";

const Nama = () => {
    const [activePlan, setActivePlan] = useState('1bhk');

    const handleTabClick = (plan) => {
        setActivePlan(plan);
    };

    const floorPlans = [
        { id: '1bhk', label: '1 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '2bhk', label: '2 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
        { id: '3bhk', label: '3 BHK', imageUrl: 'https://www.buildersprojects.com/floorplan/map.jpg' },
    ];
    return (
        <>
            <div>
                <img src="https://www.buildersprojects.com/project_pics/alef%20group%20project-87795.jpg" alt="hayyan" className="w-100" />
            </div>
            <div className="background_color py-5">
                <div className="container">
                    <div className="position-relative">
                        <div className="d-flex shodw position-absolute">
                            <div className="col-3 p-4 my-auto">
                                <h1 className="fs-2 text-center">Alef Group</h1>
                            </div>
                            <div className="col-4 p-5">
                                <h4 className="mb-3">Nama 1 at Al Mamsha Raseel</h4>
                                <p className="mb-0"><i className="fa-solid fa-location-dot"></i> Al Mamsha Raseel</p>
                                <p className="mb-0">Apartment</p>
                                <p>Project RERA Number - Coming Soon</p>
                            </div>
                            <div className="col-5 p-4 my-auto">
                                <h1 className="fs-2 text-center">Starting from Call Us</h1>
                            </div>
                        </div>
                    </div>
                    <div className="pargraph">
                        <div className="my-5">
                            <h2 className="text-center">Description</h2>
                            <p>Explore the epitome of contemporary urban living at Nama 1 in Al Mamsha Raseel, the inaugural structure in the final cluster by Alef Group, offering opulent 1 to 3-bedroom apartments. The exteriors redefine the notion of upscale living, emphasizing aesthetics, functionality, and an array of world-class amenities. This development stands as an exemplification of meticulous planning, ensuring that residents indulge in a tranquil oasis in the heart of Sharjah.</p>
                            <p>Situated in the prime location of Al Mamsha within Sharjah, the property enjoys strategic placement for convenience and accessibility. Its proximity to the bustling Sharjah Industrial Area ensures a stress-free daily commute for those working nearby. For avid shoppers, the 06 Mall is just a 5-minute drive away.</p>
                            <p>Incorporating a fusion of traditional building methods with a modern flair, Nama 1 Apartments utilizes columns and slabs along with insulated blockwork facades and a robust roofing system. This construction approach not only prioritizes safety against fires and natural disasters but also exudes a sense of timeless quality. The development introduces an Aqua Living Experience that is truly extraordinary. The exteriors showcase traditional building methods for superior resilience to fires and natural disasters.</p>
                            <p>Internally, the facades feature cutting-edge ventilation and air-conditioning systems, optimizing air quality while reducing energy consumption and electricity bills. Each residential unit boasts 3.2-meter-high ceilings, adding an elegant touch and fostering a spacious ambiance. Premium tile flooring, well-proportioned windows with park views, and expansive outdoor living balcony areas enhance the overall sense of luxury.</p>
                            <p>At the core of the Nama 1 Al Mamsha Raseel, multiple expansive swimming pools and a Kids Waterpark offer boundless entertainment for families. The developments elevators adhere to international safety standards, ensuring residents peace of mind.</p>
                            <p><b>Master Plan:</b></p>
                            <p>Nama 1 by Alef Group revolves around enhancing the quality of life for Sharjah residents. The community layout is meticulously designed to be both aesthetically pleasing and highly functional.</p>
                            <p><b>Location:</b></p>
                            <p>Al Mamsha Raseel, located in the vibrant city of Sharjah, stands as a testament to modern urban living with a touch of elegance. This dynamic community is designed to redefine the way residents experience life, offering a perfect blend of comfort, convenience, and luxury.</p>
                            <p>Comprising a mix of residential and commercial spaces, this community is a thoughtfully planned development that caters to the diverse needs of its residents. The residential units boast contemporary architecture and cutting-edge design, providing a stylish and functional living space. From cozy apartments to spacious townhouses, the community offers a range of housing options to suit different preferences.</p>
                            <p>Beyond its residential allure, Al Mamsha Raseel also features a vibrant commercial district, hosting a plethora of retail outlets, dining options, and entertainment venues. Residents can indulge in a shopping spree, savor diverse cuisines, or simply unwind in the recreational areas within the community. The strategic location of this community enhances its appeal, providing easy access to key amenities, schools, and healthcare facilities. The developments commitment to sustainability and community well-being further elevates its status as a premier destination in Sharjah, offering a harmonious blend of modern living and urban convenience.</p>
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
                            <td><i className="fa-solid fa-check text-success"></i> Immerse yourself in the luxurious ambiance of our apartment selection, designed to provide a tranquil living environment</td>
                            <td><i className="fa-solid fa-check text-success"></i> Situated at Al Mamsha Raseel , Sharjah</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> Developed By Alef Group</td>
                            <td><i className="fa-solid fa-check text-success"></i> Strategically situated, the project offers convenient access to landmarks such as Sharjah Mosque, Dubai International Airport, and Dubai National Park</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> Elevate your living experience with the soothing presence of water features, enhancing the overall tranquility for residents</td>
                            <td><i className="fa-solid fa-check text-success"></i> Catering to all age groups, a diverse array of amenities, from a fully-equipped gymnasium to wellness centers and play areas, are at your disposal</td>
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
                            <td>1 BHK</td>
                            <td>Sq.ft.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2 BHK</td>
                            <td>Sq.ft.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3 BHK</td>
                            <td>Sq.ft.</td>
                            <td></td>
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
                                <i className="fa-solid fa-volleyball icon-font text-center text-primary"></i>
                                <p className="text-center">Out Door Games</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-house-signal icon-font text-center text-primary"></i>
                                <p className="text-center">Club House</p>
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
                                <i className="fa-solid fa-wifi icon-font text-center text-primary"></i>
                                <p className="text-center">wifi</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-transparent">
                                <i className="fa-solid fa-motorcycle icon-font text-center text-primary"></i>
                                <p className="text-center">GYM</p>
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
export default Nama;