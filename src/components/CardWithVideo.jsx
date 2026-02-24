import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import VedSection from "./VideoSection";
import QuranAyah from "./QuranAyah";
import ModalVideo from "./ModalVideo";

const CardWithVideo = ({ title, description, video, ayahText, labelOne}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* الكارد */}
      <motion.div
        layout
        className="flex bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full mb-4"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.03 }}
      >
        <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
        <div className="p-6 flex-1 space-y-2 relative">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-gray-200 leading-relaxed">{description}</div>
        </div>
      </motion.div>

      {/* Overlay مع الكارد والفيديو والآية */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
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
                {/* الكارد */}
                <motion.div
                  layout
                  className="flex bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full pb-6 mb-4"
                >
                  <div className="w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500" />
                  <div className="p-6 flex-1 space-y-2">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <div className="text-gray-200 leading-relaxed">
                      {description}
                    </div>
                  </div>
                </motion.div>

                {/* الآية */}
                {ayahText && (
                  <div className="w-full mb-4">
                    <QuranAyah
                      text={ayahText}
                      speed={45}
                      className="text-right text-gray-300 whitespace-pre-line"
                    />
                  </div>
                )}

                {/* الفيديو (الحل النهائي) */}
                <motion.div
                  className="bg-gray-900 rounded-xl shadow-2xl p-4 w-full max-w-3xl mx-auto"
                  initial={{ y: 30, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 30, opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full max-w-3xl max-h-[70vh] overflow-hidden rounded-xl flex items-center justify-center bg-black">
                    {" "}
                    {video && <ModalVideo src={video} label={labelOne} />}{" "}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardWithVideo;
