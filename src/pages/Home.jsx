import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import QuranAyah from "../components/QuranAyah";
import Video1 from "../assets/videos/ved11.mp4";
import VedSection from "../components/VideoSection";
import HeroImg1 from "../assets/herosec.png";
import ScrollReveal from "../components/ScrollReveal";
import ModalVideo from "../components/ModalVideo";
import mbhsfour from "../assets/videos/mbhsfour.mp4";
import Buttton from "../components/Buttton";
import Ahdaa from "../components/Ahdaa";


function Home() {
  const mubahith = [
    {
      title: "المبحث الأول",
      desc: "التعريف بجرائم الأموال العامة",
      path: "/MubahithOne",
    },
    {
      title: "المبحث الثاني",
      desc: "دور الإدارة العامة لمباحث الأموال العامة في التصدي لجريمة الأموال العامة",
      path: "/mubahithTwo",
    },
    {
      title: "المبحث الثالث",
      desc: " كيفية إجراء التحريات وجمع المعلومات في قضايا الأموال العامة",
      path: "/mubahith3thr",
    },
    {
      title: "المبحث الرابع",
      desc: "استعراض القضايا المستحدثة والاختلاسات المالية والمصرفية عبر الإنترنت",
      path: "/mubahithFour",
    },
  ];

  return (
    <>
      <div className="min-h-screen text-white" dir="rtl">
        {/* HERO SECTION */}
        <HeroSection background={HeroImg1} />
        {/* MUBAHITH CARDS */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <h2 className="text-3xl md:text-4xl  text-center mb-12 font-bold text-white z-10 px-6">
            التحريات الجنائية في مكافحة الأموال العامة
          </h2>
          <QuranAyah
            text={`بسم الله الرحمن الرحيم

            ﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ ﴾`}
            speed={45}
            className="mt-20 mb-20 max-w-5xl mx-auto px-6"
          />
          <Ahdaa />
          <h2 className="text-3xl font-bold text-center mb-6 text-white-900">
            شكر وتقدير
          </h2>

          <p className="text-lg mb-6 text-justify">
            يتقدم الباحثون بخالص الشكر والتقدير إلى السادة القائمين على مناقشة
            وتقييم هذا البحث، عرفانًا بجهودهم العلمية المخلصة ووقتهم الثمين الذي
            بذلوه في قراءة العمل وتحليله وإبداء ملاحظاتهم القيّمة. لقد كان
            لتوجيهاتهم السديدة وآرائهم الموضوعية أثرٌ بالغ في إثراء هذا البحث
            وتعزيز جوانبه العلمية والمنهجية، مما أسهم في إخراجه بصورة أكثر دقةً
            وعمقًا. فلكم منا جزيل الشكر وعظيم الامتنان.
          </p>

          <p className="text-lg mb-4 text-justify">
            كما تتقدم مجموعة البحث بخالص الشكر والتقدير إلى أسرة معهد علوم
            المباحث والأدلة الجنائية وعلى رأسها:
          </p>

          <div className="space-y-3 mb-6 text-lg">
            <p>
              <span className="font-bold underline">
                السيد اللواء / محمود أبو عمرة
              </span>
              – مساعد الوزير لقطاع الأمن العام ورئيس المجلس الأعلى للشرطة
            </p>

            <p>
              <span className="font-bold underline">
                السيد اللواء الدكتور / بدر الديب
              </span>
              – مساعد رئيس قطاع الأمن العام للعمليات
            </p>

            <p>
              <span className="font-bold underline">
                السيد اللواء / محمد الزغبي
              </span>
              – مدير معهد علوم المباحث والأدلة الجنائية
            </p>
          </div>

          <p className="text-lg text-justify">
            ونخص بالشكر
            <span className="font-bold underline">
              السيد اللواء الدكتور / وليد شوقي
            </span>
            مدير إدارة العمليات بالأمن العام، وذلك لما شمل به من رعاية وتوجيه
            وإرشاد طيلة إعداد هذا البحث، فكان سندًا ومشجعًا ومعينًا، فجزاه الله
            عنا خير الجزاء. ونسأل الله أن يحفظه ويرعاه وأن يطيل في عمره ليظل
            نبراسًا وسندًا للباحثين وطلاب العلم.
          </p>
          <ModalVideo src={Video1} label="تشغيل الفيديو" />
          <Buttton />

          {/* <ScrollReveal direction="right" delay={0.2}> */}
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
          {/* </ScrollReveal> */}
        </section>
      </div>
    </>
  );
}

export default Home;
