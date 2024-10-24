import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const useHighlightText = (texts: string[]) => {
  const highlightRef = useRef<HTMLSpanElement>(null);
  const [currentText, setCurrentText] = useState<string>(texts[0]);

  useEffect(() => {
    let textIndex = 0;
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Function to update the text and reset it in sequence
    const updateText = () => {
      textIndex = (textIndex + 1) % texts.length;
      setCurrentText(texts[textIndex]);
    };

    // GSAP animation to fade out, change text, and fade in
    timeline
      .to(highlightRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: updateText, // Update the text once it's faded out
      })
      .to(highlightRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out", // Elastic easing for bounce effect
      });

    return () => {
      timeline.kill(); // Clean up timeline on component unmount
    };
  }, [texts]);

  return { highlightRef, currentText };
};

export default useHighlightText;
