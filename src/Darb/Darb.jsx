import { useState } from "react";
import Footer from "../header/Footer";

const Darb = () => {
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
                <img src="https://www.buildersprojects.com/project_pics/Darb%205%20project-82778.jpg" alt="hayyan" className="w-100" />
            </div>
            <div className="background_color py-5">
                <div className="container">
                    <div className="position-relative">
                        <div className="d-flex shodw position-absolute">
                            <div className="col-3 p-4 my-auto">
                                <h1 className="fs-2 text-center">Alef Group</h1>
                            </div>
                            <div className="col-4 p-5">
                                <h4 className="mb-3">Darb 5 At Al Mamsha</h4>
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
                            <p>Darb 5, located in Al Mamsha Raseel, Sharjah, stands as the inaugural walkable residential development in the area, featuring opulent and generously spaced 1, 2 & 3 bedroom apartments crafted by Alef Group. Enveloped by lush landscapes and expansive gardens, this extensive project embodies an elegant, contemporary architectural design, seamlessly integrating smart technology with comfortable natural surroundings. Positioned as a premier destination, this development preserves a family-centric atmosphere, offering a multitude of leisure amenities and essential facilities.</p>
                            <p>Spanning an impressive 3 million square feet, the minimalist and functional design of this architectural marvel incorporates integrated green surroundings. Meticulously designed homes adhere to high standards, featuring living rooms with 3.2-meter-high ceilings that enhance spaciousness and natural light. Each unit boasts well-proportioned windows and generous balconies, providing scenic views of verdant parks and streets.</p>
                            <p>The bedrooms, characterized by contemporary and comfortable design, include fitted wardrobes and finely crafted furnishings to elevate the overall refreshing and relaxing experience. Integrated kitchens and dining areas showcase state-of-the-art features, contributing to an elegant aesthetic. Innovative and functional bathroom designs feature walk-in showers and Italian-designed toilets.</p>
                            <p>Situated in the rapidly growing Al Mamsha Raseel district, Darb 5 by Alef Group enjoys proximity to the major Al Dhaid Road highway, facilitating convenient and swift transportation for residents to various districts and popular attractions in Dubai. Local amenities, including a mosque, a national park, 06 Mall, and the communitys international airport, are accessible within a fifteen-minute drive.</p>
                            
                            <p><b>Masterplan:</b></p>
                            <p>Darb 5 At Al Mamsha, a master-planned residential development by Alef Group, distinguishes itself as the districts first walkable project. Covering nearly 3 million square feet, the development is surrounded by lush greenery, and balconies offer panoramic views of the park and streets. Exceptional amenities, such as a play area, kid’s water park, swimming pools, water features, and retail outlets, contribute to an elevated and balanced lifestyle.</p>
                            <p><b>Location:</b></p>
                            <p>Situated in the thriving Al Mamsha Raseel district, Alef Darb 5 Apartments is a well-established residential development in Sharjah. Adorned with abundant greenery, the locale strategically borders Emirates Road and Al Dhaid Road, ensuring seamless access to various areas in Dubai and Sharjah, including international airports. The community also features numerous local attractions, such as mosques, Al Majaz, and 06 Mall, providing convenience for its residents.</p>
                           
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
                            <td><i className="fa-solid fa-check text-success"></i> Explore a variety of apartments featuring 1, 2, and 3 bedrooms</td>
                            <td><i className="fa-solid fa-check text-success"></i> Immerse yourself in Sharjahs leading pedestrian-friendly residential community</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> Developed By Alef Group</td>
                            <td><i className="fa-solid fa-check text-success"></i> Enjoy numerous water amenities, including pools and a delightful childrens splash area</td>
                        </tr>
                        <tr>
                            <td><i className="fa-solid fa-check text-success"></i> Experience seamless connectivity to Sharjahs primary road networks</td>
                            <td><i className="fa-solid fa-check text-success"></i> Take advantage of flexible and easily accessible payment plans</td>
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
export default Darb;