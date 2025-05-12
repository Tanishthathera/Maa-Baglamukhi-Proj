import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import AboutMaa from "../components/AboutMaa";
import HistoryMiracles from "../components/HistoryMiracles";
import Mantras from "../components/Mantras";
import LocationMap from "../components/LocationMap";
import PanditServices from "../components/PanditServices";
import OurAssurance from "../components/OurAssurance";
import Milestones from "../components/Milestones";
import HowItWorks from "../components/HowItWorks";
import PanditReference from "../components/PanditReference";
import Testimonials from "../components/Testimonials";
import Questions from "../components/Questions";
import ContactInfo from "../components/ContactInfo";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("home.title")}</title>
        <meta name="description" content={t("home.description")} />
      </Helmet>

      <HeroSection />
      <AboutMaa />
      <HistoryMiracles />
      <Mantras />
      <LocationMap />
      <PanditServices />
      <OurAssurance />
      <Milestones />
      <HowItWorks />
      <PanditReference />
      <Testimonials />
      <Questions />
      <ContactInfo />
    </>
  );
};

export default Home;
