import React from "react";
import { useTranslation } from "react-i18next";
import CoreQualities from "./CoreQualities";

export default function Values() {
  const { t } = useTranslation();
  const pillars = [t("seva"), t("samman"), t("sanskar")];

  return (
    <>
      <section id="values" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-10">
          {t("values_title")}
        </h2>

        <img
          src="/images/dharma-pillars.jpg"
          alt="Dharma Pillars"
          className="mx-auto mb-10 rounded-xl shadow-md w-2/3"
        />

        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-orange-50 rounded-2xl shadow-sm p-6 border-l-4 border-orange-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-xl text-orange-700 mb-2">
                {p.split('—')[0]}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {p.split('—')[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CoreQualities />
    </>
  );
}
