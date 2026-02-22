import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import HeroImg1 from "../assets/herosec.png";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import Video1 from "../assets/videos/ved1.mp4";
import Video2 from "../assets/videos/ved2.mp4";
import Video3 from "../assets/videos/ved3.mp4";

function MediaPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState({ type: "", src: "" });

  const mediaItems = [
    { id: 1, type: "video", src: Video3, title: "فيديو 1" },
    { id: 2, type: "video", src: Video2, title: "فيديو 2" },
    { id: 3, type: "image", src: img2, title: "صورة 1" },
    { id: 3, type: "image", src: img1, title: "صورة 1" },
    { id: 4, type: "image", src: img3, title: "صورة 2" },
  ];

  const openModal = (media) => {
    setCurrentMedia(media);
    setModalOpen(true);
  };

  return (
    <>
      <HeroSection title="الفيديوهات والوسائط" background={HeroImg1} />

      <div className="p-10 bg-gradient-to-b from-black to-gray-800 text-white min-h-screen">
        <h1 className="text-3xl mb-6 text-center">فيديوهات وصور</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer rounded shadow-lg overflow-hidden relative h-64"
              onClick={() => openModal(item)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-gray-900 p-6 rounded shadow-lg relative max-w-[90%] w-[800px]">
              <button
                onClick={() => setModalOpen(false)}
                className="text-white absolute top-2 right-4 text-3xl"
              >
                ×
              </button>

              {currentMedia.type === "video" ? (
                <video
                  src={currentMedia.src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded"
                />
              ) : (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.title}
                  className="rounded w-auto max-w-full h-auto max-h-[80vh] mx-auto"
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
