import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import VideoCard from "../components/VideoCard";
import vedmb2 from "../assets/videos/vedmb2.mp4";
import HeroImg1 from "../assets/herosec.png";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import vedmb1 from "../assets/videos/vedmb1.mp4";
import kasb from "../assets/kasb.jpeg";
import wehd from "../assets/videos/wehd.mp4";
import Video2 from "../assets/videos/ved2.mp4";
import Video3 from "../assets/videos/ved3.mp4";
import mbhsimg from "../assets/mbhsimg.jpeg";
import tahary from "../assets/videos/tahary.mp4";
import mbhsfour from "../assets/videos/mbhsfour.mp4";

function MediaPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);

  const mediaItems = [
    {
      id: 1,
      type: "video",
      src: Video2,
      title: "فيديو 1",
      label:
        "الاداره العامه لمكافحة جرائم الاموال العامة تتمكن من ضبط تشكيل عصابي بالاسكندرية",
    },
    {
      id: 2,
      type: "video",
      src: vedmb1,
      title: "فيديو 2",
      label: "غسيل الاموال",
    },
    {
      id: 3,
      type: "video",
      src: Video3,
      title: "فيديو 3",
      label: "جهود اجهزة وزراة الداخلية في مكافحة جرائم الأموال العامة",
    },
    {
      id: 4,
      type: "image",
      src: img1,
      title: "صورة 1",
    },
    {
      id: 5,
      type: "video",
      src: vedmb2,
      title: "الرشوه واستغلال النفوذ",
      label: "الرشوه واستغلال النفوذ",
    },
    {
      id: 6,
      type: "image",
      src: kasb,
      title: "الكسب الغير مشروع",
    },
    {
      id: 7,
      type: "video",
      src: wehd,
      title: "وحدة الاشتباه وغسل الاموال ومكافحة تمويل الارهاب",
      label: "وحدة الاشتباه وغسل الاموال ومكافحة تمويل الارهاب",
    },
    {
      id: 8,
      type: "video",
      src: tahary,
      title:
        "كيفية اجراء التحريات وجمع المعلومات فى قضايا الأموال العامة و استعراض نماذج لبعض القضايا و كذا أساليب التحرى و المواجهه الأمنية",
      label:
        "كيفية اجراء التحريات وجمع المعلومات فى قضايا الأموال العامة و استعراض نماذج لبعض القضايا و كذا أساليب التحرى و المواجهه الأمنية",
    },
    {
      id: 9,
      type: "image",
      src: mbhsimg,
      title: "صور جرائم الأعتداء",
    },
    {
      id: 10,
      type: "video",
      src: mbhsfour,
      title:
        "استعراض لبعض القضايا المستحدثة و الاختلاسات الماليه و المصرفية عبر شبكه الانترنت",
      label:
        " استعراض لبعض القضايا المستحدثة و الاختلاسات الماليه و المصرفية عبر شبكه الانترنت",
    },
  ];

  const openModal = (media) => {
    setCurrentMedia(media);
    setModalOpen(true);
  };

  return (
    <>
      <HeroSection />

      <div className="p-10 text-white min-h-screen">
        <h1 className="text-3xl mb-10 text-center">فيديوهات وصور</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaItems.map((item) =>
            item.type === "video" ? (
              <VideoCard
                key={item.id}
                videoSrc={item.src}
                title={item.title}
                label={item.label}
                onPlay={() => openModal(item)}
              />
            ) : (
              <div
                key={item.id}
                onClick={() => openModal(item)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg h-64"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ),
          )}
        </div>

        {/* Modal */}
        {isModalOpen && currentMedia && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center px-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-10 right-0 text-white text-3xl"
              >
                ×
              </button>

              {currentMedia.type === "video" ? (
                <video
                  src={currentMedia.src}
                  controls
                  autoPlay
                  className="w-full rounded-xl"
                />
              ) : (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.title}
                  className="rounded-xl max-h-[80vh] mx-auto"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MediaPage;
