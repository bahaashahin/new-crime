import React from "react";

function MubahithPage({ content }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-white space-y-8">
      {content.map((section, i) => (
        <div key={i} className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
          {section.subsections.map((sub, j) => (
            <div key={j} className="pl-4 space-y-2">
              <h3 className="text-xl font-semibold">{sub.subtitle}</h3>
              <ul className="list-disc list-inside space-y-1">
                {sub.points.map((point, k) => (
                  <li key={k} className="text-gray-200">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MubahithPage;
