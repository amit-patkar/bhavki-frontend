import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">
          {t("about_title")}
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
          {t("about_para")}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-orange-600">
              {t("purpose_title")}
            </h3>
            <p className="mt-4">{t("purpose_text")}</p>

            <h3 className="text-2xl font-semibold text-orange-600 mt-8">
              {t("approach_title")}
            </h3>
            <p className="mt-4">{t("approach_text")}</p>
          </div>

          <img
            src="/images/karma-yogi.jpg"
            alt="KarmaYogi"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
