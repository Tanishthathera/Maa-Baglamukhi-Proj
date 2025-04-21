import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const AboutMaaFull = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("aboutMaaFull.pageTitle")}</title>
        <meta name="description" content={t("aboutMaaFull.metaDescription")} />
      </Helmet>

      <section className="about-maa-full">
        <h1>{t("aboutMaaFull.title")}</h1>
        <p>{t("aboutMaaFull.content")}</p>

        <h2>{t("aboutMaaFull.historyAndMiracles.heading")}</h2>

        <h3>{t("aboutMaaFull.historyAndMiracles.ancientHistory.heading")}</h3>
        <ul>
          <li>
            {t("aboutMaaFull.historyAndMiracles.ancientHistory.establishment")}
          </li>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.ancientHistory.haldiImportance"
            )}
          </li>
        </ul>

        <h3>{t("aboutMaaFull.historyAndMiracles.trishaktiForm.heading")}</h3>
        <p>{t("aboutMaaFull.historyAndMiracles.trishaktiForm.description")}</p>
        <p>{t("aboutMaaFull.historyAndMiracles.trishaktiForm.sacredTrees")}</p>

        <h3>{t("aboutMaaFull.historyAndMiracles.tantricPractices.heading")}</h3>
        <ul>
          <li>
            {t("aboutMaaFull.historyAndMiracles.tantricPractices.importance")}
          </li>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.tantricPractices.locationDetails"
            )}
          </li>
        </ul>

        <h3>{t("aboutMaaFull.historyAndMiracles.goddessForm.heading")}</h3>
        <ul>
          <li>{t("aboutMaaFull.historyAndMiracles.goddessForm.features")}</li>
          <li>
            {t(
              "aboutMaaFull.historyAndMiracles.goddessForm.scripturalReferences"
            )}
          </li>
          <li>
            {t("aboutMaaFull.historyAndMiracles.goddessForm.vidyaDetails")}
          </li>
        </ul>

        <h3>{t("aboutMaaFull.historyAndMiracles.notableVisitors.heading")}</h3>
        <ul>
          {t("aboutMaaFull.historyAndMiracles.notableVisitors.personalities", {
            returnObjects: true,
          }).map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
        <p>{t("aboutMaaFull.historyAndMiracles.notableVisitors.note")}</p>
      </section>
    </>
  );
};

export default AboutMaaFull;
