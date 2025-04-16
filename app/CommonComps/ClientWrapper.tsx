'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import VideoIntro from './VideoIntro';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
 const [showContent, setShowContent] = useState(false);

 useEffect(() => {
  if (showContent) {
   gsap.fromTo(
    '#wrapped-content',
    { opacity: 0 },
    { opacity: 1, duration: 1 }
   );
  }
 }, [showContent]);

 return (
  <>
   {!showContent && <VideoIntro onEnd={() => setShowContent(true)} />}
   {showContent && <div id="wrapped-content">{children}</div>}
  </>
 );
}
