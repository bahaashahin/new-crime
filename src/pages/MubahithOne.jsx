import HeroSection from "../components/HeroSection";
import HeroImg1 from "../assets/herosec.png";
import QuranAyah from "../components/QuranAyah";
import Video1 from "../assets/videos/ved1.mp4";
import vedmb1 from "../assets/videos/vedmb1.mp4";
import vedmb2 from "../assets/videos/vedmb2.mp4";
import VedSection from "../components/VideoSection";
import CardWithVideo from "../components/CardWithVideo";
import ScrollReveal from "../components/ScrollReveal";
import ModalVideo from "../components/ModalVideo";

function Mubahith1() {
  return (
    <div
      className=" text-white"
      dir="rtl"
    >
      {/* HERO SECTION */}
      <HeroSection />
      {/* المبحث: 7 كروت */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        <ScrollReveal direction="left" delay={0}>
          <h2 className="text-3xl md:text-4xl  text-center font-bold text-white z-10 px-6">
            التعريف بجرائم الأموال العامة{" "}
          </h2>
          <QuranAyah
            text={`بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

﴿ وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ وَتُدْلُوا بِهَا إِلَى الْحُكَّامِ لِتَأْكُلُواْ فَرِيقًا مِّنْ أَمْوَالِ النَّاسِ بِالْإِثْمِ وَأَنتُمْ تَعْلَمُونَ﴾`}
            speed={45}
            className="mt-20 max-w-5xl mx-auto px-6 whitespace-pre-line text-right"
          />

          {/* كارد 1 */}
          <CardWithVideo
            title="أولاً: غسل الأموال"
            description={
              <p>
                غسل الأموال هو إخفاء المصدر غير المشروع للأموال المتحصلة من
                أنشطة إجرامية وإعادة ضخها في المنظومة الاقتصادية الرسمية. يمر
                بثلاث مراحل: الإيداع والتمويه والإدماج، ويُعدّ من أشد الجرائم
                خطورة لارتباطه بتمويل الإرهاب.
              </p>
            }
            video={vedmb1}
            labelOne={`غسيل الأموال`}
          />

          {/* كارد 2 */}
          <CardWithVideo
            title="ثانياً: الرشوة واستغلال النفوذ"
            description={
              <p>
                الرشوة هي تقديم أو قبول عطايا لحمل موظف عام على الإخلال بواجبات
                وظيفته، أما استغلال النفوذ فهو توظيف الجاه والسلطة لتحقيق منافع
                شخصية. تُفضي هذه الجرائم إلى إفساد منظومة العدالة وإهدار المال
                العام.
              </p>
            }
            video={vedmb2}
            labelOne={`الرقابه الادارية`}
          />

          {/* كارد 3 */}
          <CardWithVideo
            title="ثالثاً: الاختلاس والإضرار بالمال العام"
            description={
              <p>
                الاختلاس هو استيلاء الموظف على أموال أو ممتلكات عامة وُجدت في
                حيازته لحساب نفسه أو لحساب غيره. يُلحق ضرراً مزدوجاً: ماديّاً
                ومعنوياً بتقويض الثقة في الجهاز الإداري.
              </p>
            }
          />

          {/* كارد 4 */}
          <CardWithVideo
            title="رابعاً: الكسب غير المشروع"
            description={
              <p>
                ازدياد ثروة الموظف العام أو ذويه زيادةً لا يستطيع تبريرها من
                مصادر مشروعة. يُشكّل مؤشراً كاشفاً للفساد الإداري ويستوجب إخضاع
                المسؤولين للإفصاح المالي الدوري.
              </p>
            }
          />

          {/* كارد 5 */}
          <CardWithVideo
            title="خامساً: النقد والتهريب"
            description={
              <p>
                تهريب النقد والبضائع عبر المنافذ الحدودية يستهدف التحايل على
                الرقابة الجمركية وإخفاء عائدات الأنشطة الإجرامية ويهدد الاستقرار
                الاقتصادي.
              </p>
            }
          />

          {/* كارد 6 */}
          <CardWithVideo
            title="سادساً: التزييف والتزوير"
            description={
              <p>
                التزييف يشمل العملة الرسمية، والتزوير يشمل تحريف المستندات
                والوثائق بقصد الاستخدام الاحتيالي، يمس نزاهة المنظومة القانونية.
              </p>
            }
          />

          {/* كارد 7 */}
          <CardWithVideo
            title="سابعاً: الجرائم المصرفية المستحدثة"
            description={
              <p>
                تشمل الاحتيال الإلكتروني وسرقة البيانات المصرفية واستغلال
                الثغرات التقنية في أنظمة الدفع الرقمي. تستوجب تطوير آليات رقابية
                وتعاون بين البنوك وأجهزة الأمن.
              </p>
            }
          />
        </ScrollReveal>
      </section>
    </div>
  );
}

export default Mubahith1;
