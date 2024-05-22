const Featured = () => {
  return (
    <div>
      <div className="mb-[120px]">
        <div className="w-[600px] mx-auto text-center">
          <h2 className="text-[30px] leading-[55px] font-medium">
            An All-Round Plugin With Powerful Features
          </h2>
          <p className="text-[18px] font-light py-[30px] text-[#EEE5FFBD] ">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
        <div className="mt-[30px] grid grid-cols-3 gap-[20px] px-[20px]">
          <div className="text-start border-2 rounded-[20px] border-[#FFFFFF10] bg-gradient-to-b from-[#0D061F] to-[#251E35]">
            <div className="p-0">
              <img src="image/motionarteffect-img9.png" alt="" />
            </div>
            <div className="p-[30px]">
              <h3 className="text-[23px] font-medium">Light Weight</h3>
              <p className="pt-[30px] text-[18px] font-normal leading[30px] text-[#EEE5FFBD] ">
                Motion Art for Elementor is designed to be lightweight.
              </p>
            </div>
          </div>
          <div className="text-start border-2 rounded-[20px] border-[#FFFFFF10] bg-gradient-to-b from-[#0D061F] to-[#251E35]">
            <div className="p-0">
              <img src="image/motionarteffect-img6.png" alt="" />
            </div>
            <div className="p-[30px]">
              <h3 className="text-[23px] font-medium">100% Responsive</h3>
              <p className="pt-[30px] text-[18px] font-normal leading[30px] text-[#EEE5FFBD] ">
              Create a consistent visual experience across all devices.
              </p>
            </div>
          </div>
          <div className="text-start border-2 rounded-[20px] border-[#FFFFFF10] bg-gradient-to-b from-[#0D061F] to-[#251E35]">
            <div className="p-0">
              <img src="image/motionarteffect-img7.png" alt="" />
            </div>
            <div className="p-[30px]">
              <h3 className="text-[23px] font-medium">User Friendly Interface</h3>
              <p className="pt-[30px] text-[18px] font-normal leading[30px] text-[#EEE5FFBD] ">
              Ensure a smooth experience for both applicants and administrators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
