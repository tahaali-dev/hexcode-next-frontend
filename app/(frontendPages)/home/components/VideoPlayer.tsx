"use client";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { DashedContainer } from "@/app/styledComps/containers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 20%",
      end: "bottom 60%",
      onEnter: () =>
        gsap.to(video, {
          scale: 1.34,
          zIndex: 5,
          duration: 0.7,
          ease: "power2.out",
        }),
      onLeave: () =>
        gsap.to(video, {
          scale: 1,
          zIndex: 3,
          duration: 0.7,
          ease: "power2.out",
        }),
      onEnterBack: () =>
        gsap.to(video, {
          scale: 1.5,
          zIndex: 5,
          duration: 0.7,
          ease: "power2.out",
        }),
      onLeaveBack: () =>
        gsap.to(video, {
          scale: 1,
          zIndex: 3,
          duration: 0.7,
          ease: "power2.out",
        }),
      // markers: true, // Enable markers for debugging
    });

    // Set up IntersectionObserver to manage video mute/unmute
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the video is fully visible, unmute
            if (video) video.muted = false;
          } else {
            // If the video is not fully visible, mute
            if (video) video.muted = true;
          }
        });
      },
      { threshold: 1.0 } // Trigger when the video is fully in view
    );

    // Start observing the video element
    if (video) {
      observer.observe(video);
    }

    // Clean up the ScrollTrigger and IntersectionObserver on unmount
    return () => {
      scrollTrigger.kill();
      observer.disconnect();
    };
  }, []);

  // Update mouse position on mouse move with GSAP animation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cursor = cursorRef.current;
    if (cursor) {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1, // Speed of the cursor movement
        ease: "power2.out",
      });
    }
  };

  // Toggle video play/pause
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <VideoPlayerWrapper
        className={`p-xs d-flex ${isHovered ? "hovered" : ""}`}
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={togglePlayPause} // Toggle play/pause on click
      >
        <video
          ref={videoRef}
          src="https://screenrepo-production-bucket.s3.ap-south-1.amazonaws.com/videos/fristfoldvid.mp4"
          width={"100%"}
          height={"100%"}
          autoPlay
          loop
          muted
          playsInline
        />
        {isHovered && (
          <CustomCursor ref={cursorRef}>
            {isPlaying ? (
              <IconPause>⏸️</IconPause> // Pause icon
            ) : (
              <IconPlay>▶️</IconPlay> // Play icon
            )}
          </CustomCursor>
        )}
      </VideoPlayerWrapper>
    </DashedContainer>
  );
};

export default VideoPlayer;

const VideoPlayerWrapper = styled.div`
  position: relative; /* To position the custom cursor */

  video {
    border-radius: 16px;
    transform-origin: center; /* Ensure scaling happens from the center */
    z-index: 3;
  }

  /* Custom cursor styles */
  &.hovered {
    cursor: none; /* Hide default cursor */
  }

  @media (max-width: 768px) {
    video {
      z-index: 3;
    }
  }
`;

const CustomCursor = styled.div`
  position: absolute;
  width: 40px; /* Set your desired width */
  height: 40px; /* Set your desired height */
  background-color: rgba(0, 0, 0, 0.7); /* Custom color */
  border-radius: 50%; /* Make it rounded */
  pointer-events: none; /* Make sure it doesn't block mouse events */
  transform: translate(-50%, -50%); /* Center it based on mouse position */
  z-index: 100; /* Ensure it is on top */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Icon color */
  font-size: 20px; /* Icon size */
`;

const IconPlay = styled.span`
  font-size: 20px; /* Adjust as needed */
`;

const IconPause = styled.span`
  font-size: 20px; /* Adjust as needed */
`;
