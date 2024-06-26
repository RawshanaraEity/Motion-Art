

const Reviews = () => {
    return (
        <div className="pt-10 pb-20">
            <h2 className="text-center text-[18px] md:text-[22px] font-Outfit font-normal">
            Trusted by thousands of users around the world
            </h2>
           <div className="flex justify-between flex-col md:flex-row">
            {/* item 1 */}
           <div className="flex items-center gap-3 px-5 pt-[50px]">
                <div>
                    <img src="image/motionarteffect-img2.png" alt="" />
                </div>
                <div>
                    <img src="image/motionarteffect-img4.png" alt="" />
                    <p className="pt-5 font-Sora font-normal">4.5 Score, 9 Reviews</p>
                </div>
            </div>
            {/*item 2 */}
           <div className="flex items-center gap-3 px-5 pt-[50px]">
                <div>
                    <img src="image/motionarteffect-img1.png" alt="" />
                </div>
                <div>
                    <img src="image/motionarteffect-img4.png" alt="" />
                    <p className="pt-5 font-Sora font-normal">4.5 Score, 9 Reviews</p>
                </div>
            </div>
            {/* item 3 */}
           <div className="flex items-center gap-3 px-5 pt-[50px]">
                <div>
                    <img src="image/motionarteffect-img3.png" alt="" />
                </div>
                <div>
                    <img src="image/motionarteffect-img4.png" alt="" />
                    <p className="pt-5 font-Sora font-normal">4.5 Score, 9 Reviews</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Reviews;