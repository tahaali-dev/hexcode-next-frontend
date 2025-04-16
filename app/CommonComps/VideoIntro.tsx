'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface VideoIntroProps {
 onEnd: () => void;
}

const VideoIntro = ({ onEnd }: VideoIntroProps) => {
 const videoRef = useRef<HTMLVideoElement>(null);
 const wrapperRef = useRef<HTMLDivElement>(null);
 const [shouldRender, setShouldRender] = useState(false);

 useEffect(() => {
  // Only show video on desktop screens
  if (window.innerWidth > 768) {
   setShouldRender(true);
  } else {
   onEnd(); // Directly show content on mobile
  }
 }, [onEnd]);

 useEffect(() => {
  if (!shouldRender) return;

  const video = videoRef.current;

  if (video) {
   video.play();
   video.addEventListener('ended', handleEnd);
  }

  function handleEnd() {
   // Slide the entire wrapper up
   gsap.to(wrapperRef.current, {
    y: '-100%',
    duration: 1.2,
    ease: 'power3.inOut',
    onComplete: onEnd,
   });
  }

  return () => {
   if (video) video.removeEventListener('ended', handleEnd);
  };
 }, [shouldRender, onEnd]);

 if (!shouldRender) return null;

 return (
  <div
   ref={wrapperRef}
   style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#000',
    zIndex: 9999,
    transform: 'translateY(0)',
    willChange: 'transform',
   }}
  >
   <video
    ref={videoRef}
    src="https://screenrepo-production-bucket.s3.ap-south-1.amazonaws.com/videos/intro.mp4"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    autoPlay
    muted
    playsInline
   />
  </div>
 );
};

export default VideoIntro;
