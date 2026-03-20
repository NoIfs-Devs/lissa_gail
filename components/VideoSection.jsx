import React, { useRef, useEffect, useState } from 'react';

/**
 * VideoSection component that plays a video once when it enters the viewport.
 * Supports responsive videos (different URLs for mobile and desktop).
 */
export function VideoSection({ desktopVideoUrl, mobileVideoUrl, alt = "Promotional Video" }) {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const activeVideoUrl = isMobile && mobileVideoUrl ? mobileVideoUrl : desktopVideoUrl;

  useEffect(() => {
    // Media query to detect mobile (max-width: 767px)
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    
    // Set initial state
    setIsMobile(mediaQuery.matches);

    // Listener for screen size changes
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    // Reset play state if URL changes (e.g. switching between mobile/desktop)
    setHasPlayed(false);
  }, [activeVideoUrl]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            if (videoRef.current) {
              // Set start time to 5 seconds and play
              videoRef.current.currentTime = 5;
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    console.log(`[VideoSection] Started playing: ${activeVideoUrl}`);
                    setHasPlayed(true);
                  })
                  .catch(e => console.log("[VideoSection] Play failed", e));
              }
            }
          }
        });
      },
      { threshold: 0.2 } // Slightly lower threshold for better mobile detection
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [hasPlayed, isMobile, activeVideoUrl]);

  const handleVideoEnd = () => {
    // If we wanted to stop after one play, we could pause here.
    // But usually these look better looping. Let's keep the end handler if needed.
    if (!videoRef.current?.loop) {
      videoRef.current?.pause();
    }
  };

  return (
    <section className="relative [backface-visibility:hidden] w-full h-auto md:aspect-video overflow-visible">
      <div className="w-full h-full overflow-hidden [backface-visibility:hidden]">
        <video
          key={activeVideoUrl}
          ref={videoRef}
          src={activeVideoUrl}
          muted
          playsInline
          className="w-full h-full object-cover [backface-visibility:hidden] block"
          aria-label={alt}
          onEnded={handleVideoEnd}
        />
      </div>
    </section>
  );
}

export default VideoSection;
