import React from "react";
import { useTranslation } from "react-i18next";

export default function Vision() {
  const { t } = useTranslation();

  return (
    <section className="bg-orange-50 py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-700 mb-2">
          {t("vision_title")}
        </h2>

        <h3 className="text-xl md:text-2xl text-orange-500 mb-4 font-semibold">
          {t("bhavki_2040_vision")}
        </h3>

        <p className="text-lg max-w-2xl mx-auto">{t("vision_text")}</p>
        <img
          src="/images/bharat-map.jpg"
          alt="Bhavki Bharat Map"
          className="mx-auto mt-8 rounded-xl shadow-lg w-1/2"
        />
      </div>
    </section>
  );
}
