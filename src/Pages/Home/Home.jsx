import Apply from "../../Component/Apply/Apply";
import Banner from "../../Component/Banner/Banner";
import Hero from "../../Component/Hero/Hero";
import Reviews from "../../Component/Reviews/Reviews";


const Home = () => {
    return (
        <div className="bg-[#0D051F] text-[#EEE5FF]">
           <Banner/>
           <Reviews/>
           <Hero/>
           <Apply/>
        </div>
    );
};

export default Home;