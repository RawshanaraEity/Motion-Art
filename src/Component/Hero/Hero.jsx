import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <div>
            <div className="flex items-start my-6">
                <div className="w-[730px] px-[10px] mt-0">
                    <h2 className="text-[35px] font-medium leading-[55px]">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
                    <p className="text-[18px] text-[#EEE5FFBD] font-light leading-[30px] mt-[30px] ">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                    <div className=" mt-[35px] pointer-events-auto">
                        <button className="text-[20px] px-[35px] py-[20px] rounded-[20px] flex items-center bg-gradient-to-r from-[#5E11FF] to-[#F87516]">Purchase From Envato <span className="text-[20px] pt-1 font-normal ml-[20px]"><FaArrowRightLong /></span></button>
                    </div>
                </div>
                <div className="w-[505px] flex justify-end pt-3">
                    <img src="image/motionarteffect-img5.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;