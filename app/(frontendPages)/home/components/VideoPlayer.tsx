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
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (window.innerWidth > 768 && video && container) {
      gsap.to(video, {
        width: "98.2vw",
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

      // Handle custom cursor ---
      let posX = 0,
        posY = 0;

      let mouseX = 0,
        mouseY = 0;

      gsap.to(cursorRef.current, {
        duration: 0.01, // Reduces delay, smoother transition
        ease: "power3.out", // Adds smooth easing
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 10; // Adjust easing strength
          posY += (mouseY - posY) / 10;

          gsap.set(cursorRef.current, {
            css: {
              left: posX - 1,
              top: posY - 2,
            },
          });
        },
      });

      document
        .querySelector(".video-container")
        ?.addEventListener("mousemove", (e: any) => {
          console.log("event", e);

          mouseX = e.clientX;
          mouseY = e.clientY;
        });

      return () => {
        observer.disconnect();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

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
        className={`p-xs d-flex ${isHovered ? "hovered" : ""} video-container`}
        ref={containerRef}
        onMouseEnter={() => window.innerWidth > 768 && setIsHovered(true)}
        onMouseLeave={() => window.innerWidth > 768 && setIsHovered(false)}
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

        <div className="overlay"></div>
      </VideoPlayerWrapper>

      {isHovered && window.innerWidth > 768 && (
        <CustomCursor ref={cursorRef}>
          {isPlaying ? (
            <CursorText>Pause</CursorText> // Pause icon
          ) : (
            <CursorText>Play</CursorText> // Play icon
          )}
        </CustomCursor>
      )}
    </DashedContainer>
  );
};

export default VideoPlayer;

const VideoPlayerWrapper = styled.div`
  position: relative;
  video {
    border-radius: 16px;
    transform-origin: center;
    object-fit: initial;
  }

  &.hovered {
    cursor: none;
  }

  .overlay {
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  @media (max-width: 768px) {
    video {
      object-fit: initial;
      height: 292px;
    }
  }
`;

const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: var(--white-color);
  z-index: 9;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CursorText = styled.span`
  font-size: 20px;
`;
