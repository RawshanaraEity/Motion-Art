import Apply from "../../Component/Apply/Apply";
import Banner from "../../Component/Banner/Banner";
import Browser from "../../Component/Browser/Browser";
import Featured from "../../Component/Featured/Featured";
import Footer from "../../Component/Footer/Footer";
import Hero from "../../Component/Hero/Hero";
import MouseEffect from "../../Component/MouseEffect/MouseEffect";
import Reviews from "../../Component/Reviews/Reviews";


const Home = () => {
    return (
            
        <div className=" relative bg-[#0D051F] text-[#EEE5FF]">
    
            <MouseEffect/>
    
        <div className="container mx-auto relative z-10 pointer-events-none">
           <Banner/>
           <Reviews/>
           <Hero/>
           <Apply/>
           <Browser/>
           <Featured/>
           <Footer/>
           </div>
        </div>
         
    );
};

export default Home;