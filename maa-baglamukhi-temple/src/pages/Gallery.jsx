import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("All");
  const [mediaContent, setMediaContent] = useState({
    All: [],
    Photos: [],
    Videos: [],
  });
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const images = import.meta.glob(
      "/public/assets/gallery/photos/*.{jpg,png,jpeg}", {
      eager: true,
      as: "url",
    });
    const videos = import.meta.glob(
    "/public/assets/gallery/videos/*.mp4", {
      eager: true,
      as: "url",
    });

    const photoList = Object.values(images).map((src) => ({
      type: "photo",
      src,
    }));
    const videoList = Object.values(videos).map((src) => ({
      type: "video",
      src,
    }));

    setMediaContent({
      All: [...photoList, ...videoList],
      Photos: photoList,
      Videos: videoList,
    });
  }, []);

  const translatedTabs = [
    { key: "All", label: t("gallery.all") },
    { key: "Photos", label: t("gallery.photos") },
    { key: "Videos", label: t("gallery.videos") },
  ];

  return (
    <section className="gallery-page">
      <div className="gallery-hero">
        <h2 className="section-title"> {t("gallery.heading")}</h2>
      </div>

      <div className="tabs">
        {translatedTabs.map((tab) => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? "active" : ""}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="media-grid">
        {mediaContent[activeTab].map((item, index) =>
          item.type === "photo" ? (
            <img
              key={`media-${index}`}
              src={item.src}
              alt={t("gallery.alt")}
              loading="lazy"
              className="fade-in-media"
              style={{ animationDelay: `${Math.min(index * 100, 2000)}ms` }}
              onClick={() => setSelectedMedia(item)}
            />
          ) : (
            <video
              key={`media-${index}`}
              controls
              preload="none"
              className="fade-in-media"
              style={{ animationDelay: `${Math.min(index * 100, 2000)}ms` }}
              onClick={() => setSelectedMedia(item)}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          )
        )}
      </div>

      {selectedMedia && (
        <div className="lightbox" onClick={() => setSelectedMedia(null)}>
          <span className="close">&times;</span>
          {selectedMedia.type === "photo" ? (
            <img src={selectedMedia.src} alt="Full" />
          ) : (
            <video controls autoPlay>
              <source src={selectedMedia.src} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;
