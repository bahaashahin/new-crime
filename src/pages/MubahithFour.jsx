import HeroSection from "../components/HeroSection";
import HeroImg1 from "../assets/herosec.png";

function Mubahith4() {
  return (
    <div
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white"
      dir="rtl"
    >
      {/* HERO SECTION */}
      <HeroSection
        title="استعراض القضايا المستحدثة والاختلاسات المالية والمصرفية عبر الإنترنت"
        background={HeroImg1} // ممكن تحط صورة لو تحب
      />

      {/* المبحث: مطالب المبحث الرابع */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-1 gap-6">
        {/* كارد 1: مفهوم الجرائم المالية والمصرفية الإلكترونية */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              المطلب الأول: مفهوم الجرائم المالية والمصرفية الإلكترونية
            </h3>
            <p className="text-gray-200 leading-relaxed">
              تُعرَّف بأنها كل جريمة ترتكب بواسطة شبكة الإنترنت أو الأنظمة
              الإلكترونية وتستهدف الأموال أو البيانات المالية للضحايا. تتميز
              بالعابرية للحدود وسرعة التطور وصعوبة الإسناد، مما يُشكّل تحدياً
              حقيقياً أمام أجهزة العدالة الجنائية.
            </p>
          </div>
        </div>

        {/* كارد 2: أسباب انتشار الاختلاسات المالية */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              المطلب الثاني: أسباب انتشار الاختلاسات المالية
            </h3>
            <p className="text-gray-200 leading-relaxed">
              تتعدد أسباب انتشار الاختلاسات الرقمية بين ضعف الأمن المعلوماتي،
              تراخي الرقابة الداخلية، وتطور أدوات الجريمة الإلكترونية. تشمل
              الاختلاسات عبر الهندسة الاجتماعية، الاختلاسات الرقمية المتقدمة،
              وجرائم داخل المؤسسات المالية، بالإضافة لقضايا مرتبطة بالتكنولوجيا
              الناشئة.
            </p>
          </div>
        </div>

        {/* كارد 3: الآثار القانونية ووسائل الوقاية */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              الآثار القانونية ووسائل الوقاية
            </h3>
            <p className="text-gray-200 leading-relaxed">
              الجرائم الإلكترونية تفرز تحديات إجرائية تتعلق بقبول الدليل الرقمي
              وتنازع الاختصاص القضائي. تشمل وسائل الوقاية تعزيز الأمن السيبراني،
              نشر الوعي الرقمي، تشديد العقوبات، وبناء وحدات تحقيق جنائية رقمية
              متخصصة، مع تعميق التعاون الدولي لملاحقة المجرمين.
            </p>
          </div>
        </div>

        {/* كارد 4: دور الدولة والتعاون بين الجهات الشرطية */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              المطلب الثالث: دور الدولة في الوعي والتعاون بين الجهات الشرطية
            </h3>
            <p className="text-gray-200 leading-relaxed">
              تضطلع الدولة بمسؤولية بناء الوعي المجتمعي وتطوير الكوادر الشرطية.
              يشمل الدور التشريع الفعّال، التعاون المؤسسي، ونشر ثقافة الأمن
              الرقمي. تتضمن خطوات عملية نشر الوعي للمواطنين، التعاون بين الجهات
              الشرطية محلياً ودولياً، وأهمية التنسيق مع البنك المركزي لحماية
              التدفقات المالية.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mubahith4;
