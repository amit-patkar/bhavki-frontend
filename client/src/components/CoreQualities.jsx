import React from "react";
import { useTranslation } from "react-i18next";

export default function CoreQualities() {
  const { t } = useTranslation();
  const qualities = [t("satya"), t("swabhiman"), t("sahabhagita")];

  return (
    <section id="core-qualities" className="py-16 bg-orange-50 text-center">
      <h2 className="text-3xl font-bold text-orange-800 mb-10">
        {t("core_qualities_title")}
      </h2>

      <img
        src="/images/core-qualities.jpg"
        alt="Core Qualities"
        className="mx-auto mb-10 rounded-xl shadow-md w-2/3"
      />

      <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        {qualities.map((q, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-orange-500 transition-transform hover:-translate-y-1"
          >
            <h4 className="font-semibold text-xl text-orange-700 mb-3">
              {q.split('—')[0]}
            </h4>
            <p className="text-gray-700 leading-relaxed">{q.split('—')[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
