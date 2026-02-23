import React, { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";

export default function VideoSection({ video, title, label }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative w-full py-20 px-6 flex flex-col items-center">
      {/* Container الفيديو */}
      <div className="relative w-full max-w-4xl cursor-pointer group">
        {/* الفيديو */}
        {playing ? (
          <video
            src={video}
            controls
            autoPlay
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ) : (
          <div className="relative w-full h-64 sm:h-96 bg-black flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
            {/* Play icon */}
            <div
              className="
    w-20 h-20
    rounded-full
    bg-white/10
    backdrop-blur-md
    flex items-center justify-center
    text-white text-3xl
    border border-white/20
    shadow-[0_0_40px_rgba(255,255,255,0.25)]
    hover:scale-110 hover:bg-white/20
    transition duration-300
  "
              onClick={() => setPlaying(true)}
            >
              <IoIosPlayCircle />
            </div>

            {/* Label يظهر عند hover */}
            {label && (
              <div
                dir="rtl"
                className="
      absolute bottom-6 left-1/2 -translate-x-1/2
      pointer-events-none
      opacity-0 translate-y-3 scale-95
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
      transition-all duration-500 ease-out
      z-20
    "
              >
                {/* جسم الليبل */}
                <div
                  dir="rtl"
                  className="
        relative px-6 py-3
        rounded-xl
        bg-gradient-to-r from-blue-600/80 via-cyan-500/70 to-blue-700/80
        backdrop-blur-xl
        text-white text-sm font-semibold tracking-wide 
        shadow-[0_0_30px_rgba(56,189,248,0.35)]
        border border-white/20
      "
                >
                  {label}

                  {/* السهم */}
                  <span
                    className="
          absolute left-1/2 -bottom-2
          w-4 h-4
          bg-gradient-to-br from-blue-600 to-cyan-400
          rotate-45
          -translate-x-1/2
          shadow-lg
        "
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* عنوان الفيديو */}
      {title && (
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-white text-center">
          {title}
        </h2>
      )}
    </section>
  );
}
