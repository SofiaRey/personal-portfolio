import React from 'react';

function VideoSection() {
  return (
    <div className="w-full md:pt-8 md:pb-16 px-16 md:px-40">
      <div className="max-w-6xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 mx-auto">
          <iframe
            src="https://www.youtube.com/embed/zuNlezGkbvo"
            title="YouTube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoSection; 