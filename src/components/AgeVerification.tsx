import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AgeVerification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem("age_verified");
    if (!verified) setShow(true);
  }, []);

  const confirm = () => {
    sessionStorage.setItem("age_verified", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card border border-border rounded-xl p-8 md:p-12 max-w-md w-full text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-display text-3xl text-primary">18+</span>
            </div>
            <h2 className="font-display text-3xl mb-3">Age Verification</h2>
            <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed">
              This website contains age-restricted content. By entering, you confirm that you are at least 18 years old.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={confirm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold py-3 rounded-md transition-colors text-sm"
              >
                I am 18+ — Enter
              </button>
              <a
                href="https://www.google.com"
                className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
              >
                I am under 18 — Leave
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeVerification;
