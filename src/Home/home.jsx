import Footer from "../header/Footer";
import Alef from "./alef_group";
import Banner from "./banner";
import Choose from "./choose";
import Featured from "./featured";

const Home=()=>{
    return(
        <>
            <Banner/>
            <Alef/>
            <Featured/>
            <Choose/>
            <Footer/>
        </>
    )
}
export default Home;