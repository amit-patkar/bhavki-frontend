import React from "react";
import { useTranslation } from "react-i18next";

export default function JoinForm() {
  const { t } = useTranslation();

  const submit = (e) => {
    e.preventDefault();
    alert(t("join_thanks"));
    e.target.reset();
  };

  return (
    <section id="join" className="bg-orange-100 py-16 text-center">
      <h2 className="text-3xl font-bold text-orange-700 mb-4">
        {t("join_title")}
      </h2>
      <p className="max-w-2xl mx-auto mb-8">{t("join_intro")}</p>
      <form
        onSubmit={submit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <input
          name="name"
          type="text"
          placeholder={t("form_name")}
          className="w-full border p-3 mb-4 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder={t("form_email")}
          className="w-full border p-3 mb-4 rounded"
          required
        />
        <input
          name="city"
          type="text"
          placeholder={t("form_city")}
          className="w-full border p-3 mb-4 rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 w-full py-3 text-white font-semibold rounded"
        >
          {t("join_button")}
        </button>
      </form>
    </section>
  );
}
