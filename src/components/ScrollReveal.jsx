import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ScrollReveal = ({ children, direction = "left", delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // 20% من العنصر يظهر قبل تشغيل الحركة

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay },
      });
    } else {
      controls.start({
        opacity: 0,
        x: direction === "left" ? -50 : 50, // يرجع العنصر للخارج
      });
    }
  }, [controls, inView, direction, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
