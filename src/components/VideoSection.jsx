import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";

export default function ModalVideo({ src, label }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto group mb-10">
      {playing ? (
        /* الفيديو بعد التشغيل */
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
        />
      ) : (
        /* الشكل قبل التشغيل (نفس القديم) */
        <div className="relative w-full aspect-video bg-black flex items-center justify-center rounded-xl overflow-hidden shadow-2xl">
          {/* Preview video */}
          <video
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Play icon */}
          <div
            onClick={() => setPlaying(true)}
            className="
              relative z-10
              w-20 h-20
              rounded-full
              bg-white/10
              backdrop-blur-md
              flex items-center justify-center
              text-white text-4xl
              border border-white/20
              shadow-[0_0_40px_rgba(255,255,255,0.25)]
              hover:scale-110 hover:bg-white/20
              transition duration-300
              cursor-pointer
            "
          >
            <IoIosPlayCircle />
          </div>

          {/* Label (نفس الكود بتاعك بالظبط) */}
          {label && (
            <div
              dir="rtl"
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                pointer-events-none
                opacity-0 translate-y-3 scale-95
                group-hover:opacity-100
                group-hover:translate-y-0
                group-hover:scale-100
                transition-all duration-500 ease-out
                z-20
              "
            >
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
  );
}
