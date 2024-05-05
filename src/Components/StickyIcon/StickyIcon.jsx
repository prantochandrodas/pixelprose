import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
// import '../../Styles/StickyIcon.css'

const StickyIcon = () => {
    const [showButton, setShowButton] = useState(false);
console.log(showButton);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust this value as needed
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });
    };
    return (
        <div className="sticky-social-icon-container">
            <button
                onClick={handleScrollToTop}
                className={`social-icon1 rounded-full bg-[#59BFBE] text-white p-4 ${showButton ? 'fixed bottom-[20px] right-[20px]' : 'hidden'}`}
            >
                <div  className={`text-[40px] `}>
                    <BsArrowUpCircle></BsArrowUpCircle>
                </div>
            </button>
        </div>
    );
};

export default StickyIcon;