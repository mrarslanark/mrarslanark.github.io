"use client";

import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CldImage } from "next-cloudinary";

interface ScreenshotGalleryProps {
  screenshots?: Record<string, string[]>;
}

export default function ScreenshotGallery({
  screenshots,
}: ScreenshotGalleryProps) {
  const [activeTab, setActiveTab] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Initialize active tab on mount
  useEffect(() => {
    if (screenshots && Object.keys(screenshots).length > 0) {
      setActiveTab(Object.keys(screenshots)[0]);
    }
  }, [screenshots]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      const activeImages = screenshots?.[activeTab] || [];

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft" && lightboxIndex > 0) {
        setLightboxIndex(lightboxIndex - 1);
      } else if (
        e.key === "ArrowRight" &&
        lightboxIndex < activeImages.length - 1
      ) {
        setLightboxIndex(lightboxIndex + 1);
      }
    },
    [lightboxIndex, activeTab, screenshots],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when lightbox is open
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, lightboxIndex]);

  if (!screenshots || Object.keys(screenshots).length === 0) {
    return null;
  }

  const platforms = Object.keys(screenshots);
  const activeImages = screenshots[activeTab] || [];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < activeImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <section>
      <h3 className="text-2xl font-bold font-jetbrains text-text mb-6">
        Screenshots
      </h3>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => setActiveTab(platform)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
              activeTab === platform
                ? "bg-accent/10 border-accent/30 text-accent"
                : "bg-surface border-border text-muted hover:text-text hover:border-gray-600"
            }`}
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {activeImages.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-video rounded-xl overflow-hidden border border-border cursor-pointer group bg-surface"
            onClick={() => setLightboxIndex(idx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <CldImage
              src={src}
              alt={`${activeTab} screenshot ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={256}
              height={256}
              crop={"pad"}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white bg-black/60 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-md transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                View Fullscreen
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xl z-50"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          {activeImages.length > 1 && (
            <button
              className={`absolute left-2 md:left-6 p-3 md:p-4 rounded-full backdrop-blur-xl transition-colors z-50 ${
                lightboxIndex > 0
                  ? "text-white/70 hover:text-white bg-white/5 hover:bg-white/10"
                  : "text-white/20 bg-transparent cursor-not-allowed"
              }`}
              onClick={handlePrev}
              disabled={lightboxIndex === 0}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-7xl w-full h-full flex items-center justify-center px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <CldImage
              src={activeImages[lightboxIndex]}
              alt={`${activeTab} screenshot ${lightboxIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={1024}
              height={1024}
              crop={"pad"}
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-full text-white/90 text-sm font-medium border border-white/10">
              {lightboxIndex + 1} / {activeImages.length}
            </div>
          </div>

          {/* Next Button */}
          {activeImages.length > 1 && (
            <button
              className={`absolute right-2 md:right-6 p-3 md:p-4 rounded-full backdrop-blur-xl transition-colors z-50 ${
                lightboxIndex < activeImages.length - 1
                  ? "text-white/70 hover:text-white bg-white/5 hover:bg-white/10"
                  : "text-white/20 bg-transparent cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={lightboxIndex === activeImages.length - 1}
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
