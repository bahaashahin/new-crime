import React, { useState } from "react";

function HeroSection({ title, video, background }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      className="relative w-full h-[400px] sm:h-[600px] lg:h-screen bg-cover bg-center flex flex-col justify-end items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* العنوان */}
      <h1 className="absolute top-1/2 transform -translate-y-1/2 text-center text-4xl md:text-6xl font-bold text-white z-10 px-6 text-[clamp(1rem,2.5vw,2rem)] font-bold">
        {title}
      </h1>

      {/* الزر أسفل القسم */}
      {video && (
        <button
          onClick={() => setVideoOpen(true)}
          className="relative z-10 mb-12 bg-[#05568d] hover:bg-[#033b5c] text-white font-bold px-8 py-3 rounded-full text-lg transition"
        >
          شاهد الفيديو
        </button>
      )}

      {/* فيديو Modal */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl z-20"
            >
              ×
            </button>
            <video
              src={video}
              controls
              autoPlay
              className="w-full aspect-video rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
