const Banner = () => {
  return (
    <div>
      <div className="pt-10">
        <div className="flex justify-between px-[20px]">
          <div>
          <img src="image/MotionArtEffect-logo.png" alt="" />
          </div>
            <div className="bg-white border-2 border-white text-[#0D051F] text-[18px] rounded-[5px] hover:bg-transparent hover:text-white duration-200 ease-in pointer-events-auto">

              <button className="px-[35px] py-[16px] font-normal">Purchase Now</button>
            </div>
        </div>
      </div>
      <div className="w-[640px] mx-auto">
        <h1 className="text-[55px] font-medium leading-[65px]">
          Attract Your Visitors Attention With <br /> Colorful <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F87516] via-[#5E11FF] to-[#5E11FF]"> Motion Art Effect</span>
        </h1>
        <p className="text-[#EEE5FFBD] text-[18px] font-light leading-7 py-8">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
};

export default Banner;
