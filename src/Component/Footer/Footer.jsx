

const Footer = () => {
    return (
        <div className="py-[25px] px-[10px] flex justify-between items-center bg-gradient-to-r from-[#F87516] to-[#5E11FF]">
            <div>
                <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
            </div>
            <div className="flex gap-7 pointer-events-auto">
                <a href="">Documentation</a>
                <a href="">Support</a>
            </div>
        </div>
    );
};

export default Footer;