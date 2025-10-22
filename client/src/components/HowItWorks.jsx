// src/components/HowItWorks.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      key: "step1",
      title: t("step1.title"),
      desc: t("step1.desc"),
    },
    {
      key: "step2",
      title: t("step2.title"),
      desc: t("step2.desc"),
    },
    {
      key: "step3",
      title: t("step3.title"),
      desc: t("step3.desc"),
    },
    {
      key: "step4",
      title: t("step4.title"),
      desc: t("step4.desc"),
    },
  ];

  return (
    <section id="how-it-works" className="howItWorks">
      <div className="container">
        <h2 className="section-title">{t("how_title")}</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.key} className="step-card">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Optional Seva Category Section for future dynamic expansion */}
        {t("seva_categories") && (
          <div className="sevaCategories">
            <h3 className="sevaHeading">{t("seva_heading")}</h3>
            <ul>
              {t("seva_categories", { returnObjects: true }).map(
                (cat, index) => (
                  <li key={index}>{cat}</li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
