import { FaPlay } from "react-icons/fa";

export default function VideoCard({ videoSrc, title, label, onPlay }) {
  return (
    <div
      onClick={onPlay}
      className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg h-64"
    >
      {/* الفيديو كـ cover */}
      <video
        src={videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="block w-full h-full max-w-full max-h-full object-contain"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition" />

      {/* زر التشغيل */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="
            w-20 h-20 rounded-full
            bg-white/10 backdrop-blur
            flex items-center justify-center
            border border-white/20
            text-white text-3xl
            shadow-[0_0_40px_rgba(255,255,255,0.35)]
            group-hover:scale-110 transition
          "
        >
          <FaPlay />
        </div>
      </div>

      {/* Label احترافي */}
      {label && (
        <div
          className="
            absolute bottom-6 left-1/2 -translate-x-1/2
            opacity-0 translate-y-3 scale-95
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
            transition-all duration-500
            z-20
          "
        >
          <div
            className="
              relative px-6 py-3 rounded-xl
              bg-gradient-to-r from-blue-600/80 via-cyan-500/70 to-blue-700/80
              backdrop-blur-xl
              text-white text-sm font-semibold tracking-wide text-right
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
              "
            />
          </div>
        </div>
      )}

      {/* العنوان تحت */}
      <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-white text-sm">
        {title}
      </div>
    </div>
  );
}
