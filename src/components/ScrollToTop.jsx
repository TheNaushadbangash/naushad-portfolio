import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={goToTop}
          className="
            fixed
            bottom-24 right-4
            sm:bottom-24 sm:right-8
            w-14 h-14
            sm:w-16 sm:h-16
            flex items-center justify-center
            bg-gradient-to-r from-cyan-500 to-blue-600
            text-white
            rounded-full
            shadow-lg
            hover:scale-110
            transition-all duration-300
            z-50
          "
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
