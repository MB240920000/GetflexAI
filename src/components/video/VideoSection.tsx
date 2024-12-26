import React from 'react';

export default function VideoSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative pb-[56.25%] h-0">
          <iframe 
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DNuE5zBzPbo?si=vndBwbYDmRXPA5XX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}