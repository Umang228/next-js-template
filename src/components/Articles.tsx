import React, { useRef, useState, useEffect } from 'react';
import { HeartIcon,ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ArticlesProps {
  title: string;
  itemCount: number;
}

const Articles: React.FC<ArticlesProps> = ({ title, itemCount }) => {
  const items: number[] = Array.from({ length: itemCount }, (_, i) => i + 1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollability = () => {
      if (scrollContainerRef.current) {
        setIsScrollable(
          scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
        );
      }
    };

    checkScrollability();
    window.addEventListener('resize', checkScrollability);

    return () => {
      window.removeEventListener('resize', checkScrollability);
    };
  }, [itemCount]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Dynamic width based on itemCount
  const getCardWidth = () => {
    if (itemCount <= 3) {
      return 'w-full md:w-[450px]';
    } else {
      return 'w-full md:w-[350px]';
    }
  };

  return (
    <div className="w-full p-4 md:p-6">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-lg md:text-2xl font-meduim">{title}</h2>
        <button className="text-sm md:text-base font-medium underline">
          VOIR TOUTE LA COLLECTION
        </button>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        {isScrollable && (
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 -ml-4 top-1/3 transform -translate-y-1/2 w-10 h-10 bg-blue-300 items-center justify-center z-10 text-white"
          >
            <ArrowLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
        )}

        {/* Articles List */}
        <div
          ref={scrollContainerRef}
          className={`w-full flex gap-4 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar ${
            itemCount <= 3 ? 'justify-around' : ''
          }`}
        >
          {items.map((item, index) => (
            <div key={index} className={`flex-shrink-0 ${getCardWidth()} p-2`}>
              <div className="relative bg-gray-200 h-64 md:h-80 w-full rounded-md flex items-center justify-center">
                <div className="absolute top-2 md:top-4 left-2 md:left-4">
                  <HeartIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-500 cursor-pointer" />
                </div>

                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-white text-xs md:text-sm px-1 md:px-2 py-0.5 md:py-1 rounded shadow-md">
                  ART DE LA TABLE
                </div>

                <img
                  src="/product/image-2.png"
                  alt="Item"
                  className="w-1/2 h-1/2 md:w-2/3 md:h-2/3 object-cover"
                />
              </div>

              <div className="p-2 md:p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-medium text-left">Title</h3>
                  <p className="text-sm md:text-base font-bold text-right">0€</p>
                </div>
                <div className="flex justify-between items-center mt-1 md:mt-2">
                  <p className="text-xs md:text-sm text-gray-500">
                    0,35€/Pièce &bull; RÉF : VABGN5
                  </p>
                  <span className="text-xs md:text-sm text-gray-500 bg-gray-200 px-1 md:px-2 py-0.5 md:py-1 rounded-full">
                    20 pièces
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {isScrollable && (
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 -mr-4 top-1/3 transform -translate-y-1/2 w-10 h-10 bg-blue-300 items-center justify-center z-10 text-white"
          >
            <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Articles;
