import { Children, ReactNode, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";

interface SliderProps {
  children: ReactNode;
  defaultLimit?: number; // Default number of items visible
}

const Slider: React.FC<SliderProps> = ({ children, defaultLimit = 5 }) => {
  const items = Children.toArray(children);
  const totalItems = items.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [limit, setLimit] = useState(defaultLimit);

  // Responsive `limit` based on screen width
  useEffect(() => {
    const updateLimit = () => {
      if      (window.innerWidth >= 1400) setLimit(5); // Large screens
      else if (window.innerWidth >= 1200) setLimit(4); 
      else if (window.innerWidth >= 1024) setLimit(3); 
      else if (window.innerWidth >= 640) setLimit(1);
      else if (window.innerWidth >= 860) setLimit(2);
      else setLimit(1); // Small laptops
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
    }, []);

  const canScrollLeft = activeIndex > -1;
  const canScrollRight = activeIndex < totalItems - limit;

  const handlePrev = () => {
    if (canScrollLeft) setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = useCallback(() => {
    if (canScrollRight)
      setActiveIndex((prev) => Math.min(totalItems - 1, prev + 1));
  }, [canScrollRight, totalItems]);

  useEffect(() => {
    if (totalItems > limit) {
      const timer = setInterval(() => {
        if (activeIndex + limit === totalItems) {
          setActiveIndex(0);
        } else {
          handleNext();
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, limit, totalItems, handleNext]);

  return (
    <div className="relative w-full flex items-center">
      {/* Left Arrow */}
      {totalItems > limit && (
        <button
          onClick={handlePrev}
          disabled={!canScrollLeft}
          title="Previous"
          className={clsx(
            "absolute -left-4 xl:left-4 z-10 top-1/2 -translate-y-1/2 flex items-center transition-opacity",
            canScrollLeft ? "opacity-100" : "opacity-50 cursor-not-allowed"
          )}
        >
          <Image
            src="/home/leftArrow.png"
            width= {20}
            height={23}
            alt="left arrow"
          />
        </button>
      )}

      {/* Content */}
      <div className="w-full mx-4 px-5 xl:px-10 overflow-hidden ">
        <div
          className="flex xl:justify-center transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / limit)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "flex-shrink-0 transition-all flex justify-center duration-300 xl:px-4",
                index >= activeIndex && index < activeIndex + limit
                  ? "opacity-100"
                  : "opacity-0 xl:opacity-50"
              )}
              style={{ width: `${100 / limit}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      {totalItems > limit && (
        <button
          onClick={handleNext}
          disabled={!canScrollRight}
          title="Next"
          className={clsx(
            "absolute z-10 -right-4 xl:right-4 top-1/2 -translate-y-1/2 flex items-center transition-opacity",
            canScrollRight ? "opacity-100" : "opacity-50 cursor-not-allowed"
          )}
        >
          <Image
            src="/home/rightArrow.png"
            width={20}
            height={23}
            alt="right arrow"
          />
        </button>
      )}
    </div>
  );
};

export default Slider;

