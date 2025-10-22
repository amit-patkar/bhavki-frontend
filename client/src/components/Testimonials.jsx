import React from "react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials", { returnObjects: true });

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-8">
          {t("testi_title")}
        </h2>

        <img
          src="/images/testimonials.jpg"
          alt="Community Testimonials"
          className="mx-auto mb-8 rounded-xl shadow-md w-2/3"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="p-6 bg-amber-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic">“{it.quote}”</p>
              <span className="block mt-2 font-semibold text-orange-600">
                — {it.by}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
