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
    const container = containerRef.current;

    if (window.innerWidth > 768 && video && container) {
      gsap.to(video, {
        width: "98.5vw",
        height: "100vh",
        borderRadius: 0,
        scrollTrigger: {
          trigger: video,
          start: "top 50%",
          end: "bottom 80%",
          scrub: true,
          onLeave: () => ScrollTrigger.refresh(), // Refresh on leave
        },
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.muted = false;
            } else {
              video.muted = true;
            }
          });
        },
        { threshold: 1.0 }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  // Update mouse position on mouse move with GSAP animation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if it's a desktop screen
    if (window.innerWidth > 768) {
      const cursor = cursorRef.current;
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)",
        });
      }
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
        onMouseEnter={() => window.innerWidth > 768 && setIsHovered(true)}
        onMouseLeave={() => window.innerWidth > 768 && setIsHovered(false)}
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
        {isHovered && window.innerWidth > 768 && (
          <CustomCursor ref={cursorRef}>
            {isPlaying ? (
              <CursorText>Pause</CursorText> // Pause icon
            ) : (
              <CursorText>Play</CursorText> // Play icon
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
      object-fit: initial;
      height: 292px;
    }
  }
`;

const CustomCursor = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: var(--white-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CursorText = styled.span`
  font-size: 20px;
`;
