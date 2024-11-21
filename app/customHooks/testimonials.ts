import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export const useTestimonials = ({ clientData }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0); // Track the scroll offset
  let [isVisible, setIsVisible] = useState(false); // State to track visibility
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null); // Ref to the component

  // Use the custom hook for visibility tracking
  isVisible = useIntersectionObserver(testimonialsRef);

  // Lenis smooth scroll
  useEffect(() => {
    if (!scrollRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollRef.current,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle interval of timer and scroll if visible
  useEffect(() => {
    if (!isVisible) return; // Don't start the timer if not visible

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % clientData.length;

        if (window.innerWidth < 768) {
          // Mobile devices: scroll horizontally
          if (scrollRef.current) {
            const newScrollLeft = scrollRef.current.scrollLeft + 50; // Scroll 50px to the right
            scrollRef.current.scrollTo({
              left: newScrollLeft,
              behavior: "smooth",
            });
          }

          if (nextIndex === 0 && scrollRef.current) {
            scrollRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          }
        } else {
          // Non-mobile devices: scroll vertically
          setScrollOffset((prevOffset) => prevOffset + 100);

          if (nextIndex > 3 && scrollRef.current) {
            const documentHeight = scrollRef.current.scrollHeight;
            const windowHeight = scrollRef.current.clientHeight;
            const targetPosition = Math.min(
              documentHeight - windowHeight,
              scrollOffset
            );
            lenisRef.current?.scrollTo(targetPosition);
          }

          if (nextIndex === 0 && scrollRef.current) {
            lenisRef.current?.scrollTo(0);
          }
        }

        return nextIndex;
      });
    }, 10000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, scrollOffset, clientData.length]);

  // Handle card click
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  // Returns
  return {
    activeIndex,
    scrollRef,
    handleCardClick,
    testimonialsRef, // Return the ref to the component
  };
};

export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  threshold: number = 0.5
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isVisible;
};
