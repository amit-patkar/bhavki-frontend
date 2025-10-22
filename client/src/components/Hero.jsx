import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const notifyUser = () => alert(t("notify_thanks"));

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="hero-overlay py-24 text-center bg-black/40">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent drop-shadow-md">
          {t("hero_title")}
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-amber-200 drop-shadow-lg">
          {t("where_seva_becomes_samman")}
        </h2>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Bhavki is not just an app. It is a Sanatani Seva Movement. It is a
        resurgence of Bharat’s ancient system of trusted, local and respectful
        service. It is a movement to bring dignity back to Karma and trust back
        into the act of Seva. Bhavki means Brotherhood, Fraternity, Community,
        which is close-knit and reflects the unspoken understanding between people,
        a sense of duty and care with a sacred emotional bond.
      </p>

        <p className="text-lg md:text-2xl mt-4 italic">{t("hero_sub")}</p>
        <p className="mt-6 text-lg max-w-2xl mx-auto">{t("hero_desc")}</p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={notifyUser}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            {t("notify")}
          </button>
          <a
            href="#about"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black"
          >
            {t("know_more")}
          </a>
        </div>
      </div>
    </section>



  );
}
