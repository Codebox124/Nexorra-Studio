"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "nexorra-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash immediately on first paint
    const t = setTimeout(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-xl"
        >
          <div className="relative bg-card border border-border rounded-2xl px-6 py-5 shadow-[0_8px_40px_hsl(220_20%_2%_/_0.6)] backdrop-blur-xl">
            {/* Dismiss × */}
            <button
              onClick={decline}
              aria-label="Close"
              className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-4 pr-6">
              {/* Icon */}
              <div className="mt-0.5 w-9 h-9 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                <Cookie className="w-4 h-4 text-primary" />
              </div>

              {/* Copy */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground mb-1">
                  We use cookies
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, analyse
                  site traffic, and personalise content. By clicking{" "}
                  <span className="text-foreground/70">Accept</span>, you
                  consent to our use of cookies.{" "}
                  <a
                    href="#"
                    className="text-primary underline underline-offset-2 hover:brightness-125 transition-all"
                  >
                    Learn more
                  </a>
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={accept}
                    className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-xs font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_-8px_hsl(72_100%_50%/0.4)]"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={decline}
                    className="rounded-full border border-border px-5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
