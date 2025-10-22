import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white py-10 text-center">
      <p>
        📞 {t("phone")}: <strong>9136013646</strong>
      </p>
      <p>📧 support@bhavki.com</p>
      <p className="mt-4 italic">{t("footer_quote")}</p>
      <p className="text-sm mt-4">
        © 2025 Bhavki – {t("footer_rights")}
      </p>
    </footer>
  );
}
