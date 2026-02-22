import HeroSection from "../components/HeroSection";
import HeroImg1 from "../assets/herosec.png";

function Mubahith1() {
  return (
    <div
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white"
      dir="rtl"
    >
      {/* HERO SECTION */}
      <HeroSection
        title="التعريف بجرائم الأموال العامة"
        background={HeroImg1} // ممكن تحط صورة لو تحب
      />

      {/* المبحث: 7 كروت */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {/* كارد 1 */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">أولاً: غسل الأموال</h3>
            <p className="text-gray-200 leading-relaxed">
              غسل الأموال هو إخفاء المصدر غير المشروع للأموال المتحصلة من أنشطة
              إجرامية وإعادة ضخها في المنظومة الاقتصادية الرسمية. يمر بثلاث
              مراحل: الإيداع والتمويه والإدماج، ويُعدّ من أشد الجرائم خطورة
              لارتباطه بتمويل الإرهاب.
            </p>
          </div>
        </div>

        {/* كارد 2 */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              ثانياً: الرشوة واستغلال النفوذ
            </h3>
            <p className="text-gray-200 leading-relaxed">
              الرشوة هي تقديم أو قبول عطايا لحمل موظف عام على الإخلال بواجبات
              وظيفته، أما استغلال النفوذ فهو توظيف الجاه والسلطة لتحقيق منافع
              شخصية. تُفضي هذه الجرائم إلى إفساد منظومة العدالة وإهدار المال
              العام.
            </p>
          </div>
        </div>

        {/* كارد 3 */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              ثالثاً: الاختلاس والإضرار بالمال العام
            </h3>
            <p className="text-gray-200 leading-relaxed">
              الاختلاس هو استيلاء الموظف على أموال أو ممتلكات عامة وُجدت في
              حيازته لحساب نفسه أو لحساب غيره. يُلحق ضرراً مزدوجاً: ماديّاً
              ومعنوياً بتقويض الثقة في الجهاز الإداري.
            </p>
          </div>
        </div>

        {/* كارد 4 */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">رابعاً: الكسب غير المشروع</h3>
            <p className="text-gray-200 leading-relaxed">
              ازدياد ثروة الموظف العام أو ذويه زيادةً لا يستطيع تبريرها من مصادر
              مشروعة. يُشكّل مؤشراً كاشفاً للفساد الإداري ويستوجب إخضاع
              المسؤولين للإفصاح المالي الدوري.
            </p>
          </div>
        </div>

        {/* كارد 5 */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">خامساً: النقد والتهريب</h3>
            <p className="text-gray-200 leading-relaxed">
              تهريب النقد والبضائع عبر المنافذ الحدودية يستهدف التحايل على
              الرقابة الجمركية وإخفاء عائدات الأنشطة الإجرامية ويهدد الاستقرار
              الاقتصادي.
            </p>
          </div>
        </div>

        {/* كارد 6 */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">سادساً: التزييف والتزوير</h3>
            <p className="text-gray-200 leading-relaxed">
              التزييف يشمل العملة الرسمية، والتزوير يشمل تحريف المستندات
              والوثائق بقصد الاستخدام الاحتيالي، يمس نزاهة المنظومة القانونية.
            </p>
          </div>
        </div>

        {/* كارد 7 */}
        <div className="flex bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-6 flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              سابعاً: الجرائم المصرفية المستحدثة
            </h3>
            <p className="text-gray-200 leading-relaxed">
              تشمل الاحتيال الإلكتروني وسرقة البيانات المصرفية واستغلال الثغرات
              التقنية في أنظمة الدفع الرقمي. تستوجب تطوير آليات رقابية وتعاون
              بين البنوك وأجهزة الأمن.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mubahith1;
