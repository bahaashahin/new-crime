import HeroSection from "../components/HeroSection";
import HeroImg1 from "../assets/herosec.png";

function Mubahith3() {
  return (
    <div
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white"
      dir="rtl"
    >
      {/* HERO SECTION */}
      <HeroSection
        title="كيفية إجراء التحريات وجمع المعلومات في قضايا الأموال العامة"
        background={HeroImg1} // ممكن تحط صورة لو تحب
      />

      {/* المبحث: مطالب المبحث الثالث */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {/* كارد 1: ماهية جرائم الأموال العامة */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              المطلب الأول: ماهية جرائم الأموال العامة
            </h3>
            <p className="text-gray-200 leading-relaxed">
              يُحدد هذا المطلب إطار الجريمة المالية تعريفاً وخصائص وصوراً ليُرسي
              الأساس المفاهيمي لعمليات التحري والضبط. الفهم الدقيق لطبيعة هذه
              الجرائم شرطٌ أساسي لصحة التوصيف الجنائي وسلامة الإجراءات
              القانونية.
            </p>
          </div>
        </div>

        {/* كارد 2: أهداف التحريات */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              المطلب الثاني: أهمية التحريات في جرائم الأموال العامة
            </h3>
            <p className="text-gray-200 leading-relaxed">
              التحريات العمود الفقري لأي ملف جنائي مالي، إذ تُوفر الأدلة
              والبيانات اللازمة لتحريك الدعوى وإثبات التهمة. تهدف إلى التثبت من
              وقوع الجريمة وتحديد هوية الجناة وتوثيق الأدلة تمهيداً لإحالة
              القضية للجهات القضائية.
            </p>
          </div>
        </div>

        {/* كارد 3: مراحل وأساليب التحريات */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              مراحل إجراء التحريات وأساليبها
            </h3>
            <p className="text-gray-200 leading-relaxed">
              تمر التحريات بمراحل متتالية: الرصد الأولي، جمع المعلومات وتحليلها،
              التحقق منها، وأخيراً توثيقها في تقارير جنائية. تشمل الأساليب
              التقليدية المراقبة الميدانية والتنصت المأذون به وتحليل الحسابات
              المصرفية وفحص العقود والاستعانة بالمخبرين، وتُكمَّل بأدوات رقمية
              وتحليل البيانات الضخمة والذكاء الاصطناعي.
            </p>
          </div>
        </div>

        {/* كارد 4: دور التكنولوجيا والذكاء الاصطناعي */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              المطلب الثالث: دور التكنولوجيا والذكاء الاصطناعي في التحري
            </h3>
            <p className="text-gray-200 leading-relaxed">
              التكنولوجيا ركيزة أساسية في التحري عن الجرائم المالية، مع القدرة
              على تحليل كميات ضخمة من البيانات بسرعة ودقة. يُستخدم الذكاء
              الاصطناعي للكشف عن الأنماط الإجرامية، ومنصات تحليل الشبكات
              المالية، وبرامج التعرف على النصوص لفحص الوثائق المحاسبية والكشف عن
              مؤشرات التزوير.
            </p>
          </div>
        </div>

        {/* كارد 5: نماذج لقضايا الأموال العامة */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">نماذج لقضايا الأموال العامة</h3>
            <p className="text-gray-200 leading-relaxed">
              كشفت قضايا موثقة عالمياً أن الذكاء الاصطناعي نجح في رصد شبكات غسيل
              أموال بلغت قيمتها مليارات الدولارات. محلياً تُطبَّق تقنيات التحليل
              الجنائي الرقمي في فحص العقود الحكومية للكشف عن مؤشرات الفساد
              والتلاعب في المناقصات.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mubahith3;
