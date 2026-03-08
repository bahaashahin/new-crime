import { useState } from "react";

export default function DedicationSection() {
  const [open, setOpen] = useState(false);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto mt-12 relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        {open ? "إخفاء الإهداء" : "عرض الإهداء"}
      </button>

      {open && (
        <div className="relative mt-6 bg-white shadow-xl rounded-2xl p-10 overflow-hidden">
          {/* Decorative Shape */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-900 rounded-full opacity-10"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-800 rounded-full opacity-10"></div>

          {/* Content */}
          <div className="relative z-10 text-gray-800 leading-loose space-y-6">
            <h2 className="text-2xl font-bold text-center">إهداء</h2>

            <p className="text-lg text-justify">
              إلى الشرطة الكريمة... حُرّاس الأمن والسلام، إلى كل من أفنى عمره في
              سبيل حماية المال العام وصون كرامة الوطن، إلى القائمين على الحق
              والساهرين على صونه، يُهدى هذا الجهد المتواضع.
            </p>

            <p className="text-lg text-justify">
              أنتم الذين تقفون في وجه الفوضى بثبات، وتزرعون الطمأنينة في قلوب
              الناس بحضوركم اليقظ، وتجعلون من النظام درعًا يحمي المجتمع من كل
              عابث أو معتدٍ. بجهودكم المتواصلة تتعزز الثقة، ويترسخ الشعور
              بالأمان في كل شارع وبيت ومؤسسة.
            </p>

            <p className="text-lg text-justify">
              وإن ما تبذلونه من تضحيات، وما تتحملونه من مسؤوليات جسام، هو شاهد
              حيّ على نُبل رسالتكم وسموّ مهنتكم. فأنتم عنوان الانضباط، ورمز
              العدالة، وركيزة الاستقرار الذي تقوم عليه نهضة الأوطان وازدهارها.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
