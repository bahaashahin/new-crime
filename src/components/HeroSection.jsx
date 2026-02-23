import React, { useState } from "react";
import Logo from "../assets/logo.webp";
import vedback from "../assets/videos/vedback.mp4";
export default function HeroSection({ title, video }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative w-full h-[400px] sm:h-[600px] lg:h-screen flex flex-col justify-end items-center overflow-hidden">
      {/* الفيديو كخلفية */}
      
        <video
          src={vedback} // ← الآن الفيديو ديناميك حسب props
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
    

      {/* Overlay خفيف لتوضيح النص */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* اللوجو فوق الخلفية */}
      {/* <img src={Logo} alt="Logo" className="relative w-40 h-40 z-10" /> */}

      {/* العنوان الديناميك */}
      {title && (
        <h1 className="absolute top-1/2 transform -translate-y-1/2 text-center text-4xl md:text-6xl font-bold text-white z-10 px-6 text-[clamp(1rem,2.5vw,2rem)]">
          {title}
        </h1>
      )}

      {/* زر الفيديو الديناميك */}
      {video && (
        <button
          onClick={() => setVideoOpen(true)}
          className="relative z-10 mb-12 bg-[#05568d] hover:bg-[#033b5c] text-white font-bold px-8 py-3 rounded-full text-lg transition"
        >
          شاهد الفيديو
        </button>
      )}

      {/* فيديو Modal لو ضغط الزر */}
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
              src={video} // ← نفس الفيديو الديناميك
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