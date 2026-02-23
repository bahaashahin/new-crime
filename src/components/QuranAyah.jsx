import { useEffect, useState } from "react";

export default function QuranAyah({ text, speed = 50, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div
      className={`text-center font-quran text-white leading-loose ${className}`}
    >
      <p className="text-2xl md:text-3xl lg:text-4xl drop-shadow-lg">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
}
