"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ─── All 277 design images ────────────────────────────────────────────────────

const IMAGES = [
  "/design/design_001.jpg","/design/design_002.jpg","/design/design_003.jpg","/design/design_004.jpg","/design/design_005.jpg",
  "/design/design_006.jpg","/design/design_007.jpg","/design/design_008.jpg","/design/design_009.jpg","/design/design_010.jpg",
  "/design/design_011.jpg","/design/design_012.jpg","/design/design_013.jpg","/design/design_014.jpg","/design/design_015.jpg",
  "/design/design_016.jpg","/design/design_017.jpg","/design/design_018.jpg","/design/design_019.jpg","/design/design_020.jpg",
  "/design/design_021.jpg","/design/design_022.jpg","/design/design_023.jpg","/design/design_024.jpg","/design/design_025.jpg",
  "/design/design_026.jpg","/design/design_027.jpg","/design/design_028.jpg","/design/design_029.jpg","/design/design_030.jpg",
  "/design/design_031.jpg","/design/design_032.jpg","/design/design_033.jpg","/design/design_034.jpg","/design/design_035.jpg",
  "/design/design_036.jpg","/design/design_037.jpg","/design/design_038.jpg","/design/design_039.jpg","/design/design_040.jpg",
  "/design/design_041.jpg","/design/design_042.jpg","/design/design_043.jpg","/design/design_044.jpg","/design/design_045.jpg",
  "/design/design_046.jpg","/design/design_047.jpg","/design/design_048.jpg","/design/design_049.jpg","/design/design_050.jpg",
  "/design/design_051.jpg","/design/design_052.jpg","/design/design_053.jpg","/design/design_054.jpg","/design/design_055.jpg",
  "/design/design_056.jpg","/design/design_057.jpg","/design/design_058.jpg","/design/design_059.jpg","/design/design_060.jpg",
  "/design/design_061.jpg","/design/design_062.jpg","/design/design_063.jpg","/design/design_064.jpg","/design/design_065.jpg",
  "/design/design_066.jpg","/design/design_067.jpg","/design/design_068.jpg","/design/design_069.jpg","/design/design_070.jpg",
  "/design/design_071.jpg","/design/design_072.jpg","/design/design_073.jpg","/design/design_074.jpg","/design/design_075.jpg",
  "/design/design_076.jpg","/design/design_077.jpg","/design/design_078.jpg","/design/design_079.jpg","/design/design_080.jpg",
  "/design/design_081.jpg","/design/design_082.jpg","/design/design_083.jpg","/design/design_084.jpg","/design/design_085.jpg",
  "/design/design_086.jpg","/design/design_087.jpg","/design/design_088.png","/design/design_089.jpg","/design/design_090.jpg",
  "/design/design_091.jpg","/design/design_092.jpg","/design/design_093.jpg","/design/design_094.jpg","/design/design_095.jpg",
  "/design/design_096.jpg","/design/design_097.jpg","/design/design_098.jpg","/design/design_099.jpg","/design/design_100.jpg",
  "/design/design_101.jpg","/design/design_102.jpg","/design/design_103.jpg","/design/design_104.jpg","/design/design_105.jpg",
  "/design/design_106.jpg","/design/design_107.jpg","/design/design_108.jpg","/design/design_109.jpg","/design/design_110.jpg",
  "/design/design_111.jpg","/design/design_112.jpg","/design/design_113.jpg","/design/design_114.jpg","/design/design_115.jpg",
  "/design/design_116.jpg","/design/design_117.jpg","/design/design_118.jpg","/design/design_119.jpg","/design/design_120.jpg",
  "/design/design_121.jpg","/design/design_122.jpg","/design/design_123.png","/design/design_124.jpg","/design/design_125.png",
  "/design/design_126.png","/design/design_127.png","/design/design_128.png","/design/design_129.jpg","/design/design_130.jpg",
  "/design/design_131.jpg","/design/design_132.jpg","/design/design_133.jpg","/design/design_134.jpg","/design/design_135.jpg",
  "/design/design_136.jpg","/design/design_137.png","/design/design_138.png","/design/design_139.png","/design/design_140.jpg",
  "/design/design_141.jpg","/design/design_142.jpg","/design/design_143.jpg","/design/design_144.jpg","/design/design_145.jpg",
  "/design/design_146.jpg","/design/design_147.jpg","/design/design_148.jpg","/design/design_149.png","/design/design_150.png",
  "/design/design_151.png","/design/design_152.png","/design/design_153.png","/design/design_154.png","/design/design_155.png",
  "/design/design_156.jpg","/design/design_157.jpg","/design/design_158.png","/design/design_159.png","/design/design_160.png",
  "/design/design_161.png","/design/design_162.png","/design/design_163.jpg","/design/design_164.jpg","/design/design_165.jpg",
  "/design/design_166.jpg","/design/design_167.jpg","/design/design_168.jpg","/design/design_169.jpg","/design/design_170.jpg",
  "/design/design_171.jpg","/design/design_172.jpg","/design/design_173.jpg","/design/design_174.jpg","/design/design_175.png",
  "/design/design_176.jpg","/design/design_177.jpg","/design/design_178.png","/design/design_179.jpg","/design/design_180.jpg",
  "/design/design_181.png","/design/design_182.png","/design/design_183.png","/design/design_184.jpg","/design/design_185.png",
  "/design/design_186.jpg","/design/design_187.png","/design/design_188.png","/design/design_189.png","/design/design_190.png",
  "/design/design_191.png","/design/design_192.png","/design/design_193.png","/design/design_194.png","/design/design_195.png",
  "/design/design_196.png","/design/design_197.png","/design/design_198.png","/design/design_199.png","/design/design_200.png",
  "/design/design_201.png","/design/design_202.png","/design/design_203.png","/design/design_204.png","/design/design_205.png",
  "/design/design_206.png","/design/design_207.png","/design/design_208.jpg","/design/design_209.jpg","/design/design_210.jpg",
  "/design/design_211.jpg","/design/design_212.jpg","/design/design_213.jpg","/design/design_214.jpg","/design/design_215.jpg",
  "/design/design_216.jpg","/design/design_217.jpg","/design/design_218.jpg","/design/design_219.jpg","/design/design_220.jpg",
  "/design/design_221.jpg","/design/design_222.jpg","/design/design_223.jpg","/design/design_224.jpg","/design/design_225.jpg",
  "/design/design_226.jpg","/design/design_227.jpg","/design/design_228.png","/design/design_229.png","/design/design_230.png",
  "/design/design_231.png","/design/design_232.jpg","/design/design_233.png","/design/design_234.png","/design/design_235.png",
  "/design/design_236.png","/design/design_237.jpg","/design/design_238.jpg","/design/design_239.jpg","/design/design_240.jpg",
  "/design/design_241.jpg","/design/design_242.jpg","/design/design_243.jpg","/design/design_244.jpg","/design/design_245.jpg",
  "/design/design_246.png","/design/design_247.png","/design/design_248.png","/design/design_249.png","/design/design_250.jpg",
  "/design/design_251.jpg","/design/design_252.jpg","/design/design_253.jpg","/design/design_254.jpg","/design/design_255.jpg",
  "/design/design_256.jpg","/design/design_257.jpg","/design/design_258.jpg","/design/design_259.jpg","/design/design_260.jpg",
  "/design/design_261.jpg","/design/design_262.jpg","/design/design_263.jpg","/design/design_264.jpg","/design/design_265.jpg",
  "/design/design_266.jpg","/design/design_267.jpg","/design/design_268.jpg","/design/design_269.jpg","/design/design_270.jpg",
  "/design/design_271.jpg","/design/design_272.jpg","/design/design_273.jpg","/design/design_274.jpg","/design/design_275.jpg",
  "/design/design_276.jpg","/design/design_277.jpg",
];

const PAGE_SIZE = 36;

export function DesignGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const open = (idx: number) => setLightboxIdx(idx);
  const close = () => setLightboxIdx(null);

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : null));
  }, []);

  const next = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i + 1) % IMAGES.length : null));
  }, []);

  // Keyboard nav
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  const visibleImages = IMAGES.slice(0, visible);

  return (
    <>
      {/* ── Masonry grid ─────────────────────────────────────────────────── */}
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {visibleImages.map((src, idx) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (idx % PAGE_SIZE) * 0.01 }}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => open(idx)}
          >
            <img
              src={src}
              alt={`Design ${idx + 1}`}
              loading="lazy"
              className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-xs font-mono text-white/80 tracking-widest">
                {String(idx + 1).padStart(3, "0")}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Load more ────────────────────────────────────────────────────── */}
      {visible < IMAGES.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, IMAGES.length))}
            className="px-8 py-3 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
          >
            Load more ({IMAGES.length - visible} remaining)
          </button>
        </div>
      )}

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            {/* Image */}
            <motion.img
              key={lightboxIdx}
              src={IMAGES[lightboxIdx]}
              alt={`Design ${lightboxIdx + 1}`}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/50 tracking-widest">
              {lightboxIdx + 1} / {IMAGES.length}
            </div>

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
