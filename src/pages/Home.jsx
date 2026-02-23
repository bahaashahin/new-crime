import HeroSection from "../components/HeroSection";
import VedSection from "../components/VideoSection";
import QuranAyah from "../components/QuranAyah";
import { Link } from "react-router-dom";
import Video1 from "../assets/videos/ved1.mp4";
import HeroImg1 from "../assets/herosec.png";

function Home() {
  const mubahith = [
    {
      title: "المبحث الأول",
      desc: "التعريف بجرائم الأموال العامة",
      path: "/MubahithOne",
    },
    {
      title: "المبحث الثاني",
      desc: "أنواع جرائم الأموال العامة",
      path: "/mubahithTwo",
    },
    {
      title: "المبحث الثالث",
      desc: "أركان الجريمة والعقوبات",
      path: "/mubahith3thr",
    },
    {
      title: "المبحث الرابع",
      desc: "دور التحريات في المكافحة",
      path: "/mubahithFour",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        // viVideo1}
        background={HeroImg1}
      />
      {/* MUBAHITH CARDS */}
      <section
        dir="rtl"
        className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-blue-950 min-h-screen"
      >
        <h2 className="text-3xl sm:text-8xl md:text-4xl  text-center mb-12 font-bold text-white z-10 px-6">
          التحريات الجنائية في مكافحة الأموال العامة
        </h2>
        <QuranAyah
          text="﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ ﴾"
          speed={45}
          className="mt-20 max-w-5xl mx-auto px-6"
        />
        <VedSection video={Video1} label="اضغط لتشغيل الفيديو" />
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          مباحث جرائم الأموال العامة
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mubahith.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="group relative rounded-2xl p-[1px] 
                         bg-gradient-to-br from-[#0ea5e9] to-[#1e3a8a]
                         transition-all duration-500 hover:scale-105"
            >
              <div className="relative h-full rounded-2xl bg-[#020617] p-6 flex flex-col justify-between overflow-hidden">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500
                                bg-gradient-to-br from-sky-500 to-blue-800"
                />

                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <span
                  className="mt-6 inline-block text-sm font-semibold text-sky-400
                                 group-hover:-translate-x-2 transition"
                >
                  الدخول إلى المبحث ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;