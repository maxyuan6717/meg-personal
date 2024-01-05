import React, { useEffect, useRef } from 'react';

export const PlayWhenVisibleVideo = ({ width, src, marginTop }) => {
  const vidRef = useRef(null);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && vidRef.current && vidRef.current.paused)
        vidRef.current.play();
    });
  };

  useEffect(() => {
    const node = vidRef.current;
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [vidRef]);

  return (
    <video
      width={width}
      height="auto"
      loop
      muted
      ref={vidRef}
      {...(marginTop
        ? {
            style: {
              marginTop
            }
          }
        : {})}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
