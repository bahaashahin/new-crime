import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import QuranAyah from "./QuranAyah";
import ModalVideo from "./ModalVideo";

const MatalbCard = ({ title, sections, video, ayahText, labelOne }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSectionIdx, setCurrentSectionIdx] = useState(null); // لتحديد أي Section مفتوح
  const [currentMedia, setCurrentMedia] = useState(null); // لتخزين الفيديو/الصورة

  return (
    <>
      {/* الكارد الأساسي */}
      <motion.div
        layout
        className="flex bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full mb-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.03 }}
      >
        <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
        <div className="p-6 flex-1 space-y-2 relative">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </motion.div>

      {/* Overlay عند الفتح */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
              setCurrentMedia(null);
              setCurrentSectionIdx(null);
            }}
          >
            <div className="flex justify-center items-start w-full py-12">
              <motion.div
                className="flex flex-col items-center w-full max-w-3xl px-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* نسخة الكارد فوق */}
                <motion.div
                  layout
                  className="flex bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full pb-6 mb-4 relative"
                >
                  <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
                  <div className="p-6 flex-1 space-y-2 relative">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                      <FaChevronDown className="text-purple-400 text-2xl" />
                    </div>
                  </div>
                </motion.div>

                {/* الآية */}
                {ayahText && (
                  <div className="w-full mb-4 mt-10">
                    <QuranAyah
                      text={ayahText}
                      speed={45}
                      className="text-right text-gray-300 whitespace-pre-line"
                    />
                  </div>
                )}

                {/* الأقسام الصغيرة مع الميديا أسفل كل Section */}
                {sections.map((sec, idx) => (
                  <div key={idx} className="w-full">
                    <motion.div
                      layout
                      className="flex bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full mb-2 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        if (sec.video || sec.image) {
                          setCurrentSectionIdx(idx);
                          setCurrentMedia({
                            src: sec.video || sec.image,
                            type: sec.video ? "video" : "image",
                            label: sec.label || "",
                          });
                        } else {
                          setCurrentSectionIdx(null);
                          setCurrentMedia(null);
                        }
                      }}
                    >
                      <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
                      <div className="p-6 flex-1 space-y-2 relative">
                        <h4 className="font-bold">{sec.title}</h4>
                        <p className="text-gray-200 leading-relaxed">
                          {sec.content}
                        </p>
                      </div>
                    </motion.div>

                    {/* الميديا مباشرة أسفل Section */}
                    {currentSectionIdx === idx && currentMedia && (
                      <motion.div
                        className="bg-gray-900 rounded-xl shadow-2xl w-full my-2 p-4"
                        initial={{ y: 20, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                      >
                        {currentMedia.type === "video" ? (
                          <ModalVideo
                            src={currentMedia.src}
                            label={currentMedia.label}
                          />
                        ) : (
                          <img
                            src={currentMedia.src}
                            alt={currentMedia.label || "media"}
                            className="w-full max-h-[400px] mx-auto rounded-lg object-contain"
                          />
                        )}
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* الفيديو الرئيسي في آخر الكارد */}
                {video && !currentMedia && (
                  <motion.div
                    className="bg-gray-900 rounded-xl shadow-2xl p-4 w-full my-4"
                    initial={{ y: 30, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 30, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ModalVideo src={video} label={labelOne} />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MatalbCard;
