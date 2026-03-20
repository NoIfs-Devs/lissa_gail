import React, { useRef, useEffect } from 'react';
import Component_5_1_1 from './Component_5_1_1';

/**
 * Hero background video section.
 * Starts the video at 5-second mark as requested.
 */
function Component_5_1() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5;
    }
  }, []);

  return (
    <div
      className="bg-black w-full h-full relative z-[1] flex overflow-hidden flex-col items-center [backface-visibility:hidden] pointer-events-none"
      data-component-id="Component_5_1"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none touch-action-none"
        src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1fe2db83-d7f9-47c6-bdfa-befc9b7308d2/1773864750682-aa4c3fe0/Lisa_hero_compressed_v2.mp4"
      />
      <div className="relative z-10 w-full h-full">
        <Component_5_1_1 />
      </div>
    </div>
  );
}

export default Component_5_1;
