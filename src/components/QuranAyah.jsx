import { useEffect, useState } from "react";

export default function QuranAyah({
  text,
  speed = 45,
  repeatEvery = 300000, // 5 دقائق
  className = "",
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing Animation
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  // إعادة الأنيميشن كل 5 دقائق
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText("");
      setIndex(0);
    }, repeatEvery);

    return () => clearInterval(interval);
  }, [repeatEvery]);

  return (
    <div className={`text-center font-quran text-white ${className}`}>
      <p className="text-2xl md:text-3xl lg:text-4xl leading-loose drop-shadow-lg text-center">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
}
