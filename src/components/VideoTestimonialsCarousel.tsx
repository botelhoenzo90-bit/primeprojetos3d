import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: "4U4KDJlW2P8", isShort: true },
  { id: "SJGjKbvRmoU", isShort: true },
  { id: "xsOUNdjbcs0", isShort: false },
];

const VideoTestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + videos.length) % videos.length);
  const next = () => setIndex((i) => (i + 1) % videos.length);

  const current = videos[index];

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-title mb-2">
            Veja os <span className="text-green-highlight">depoimentos em vídeo</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-medium">
            Histórias reais de quem transformou a alimentação:
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3 md:gap-6">
          <button
            onClick={prev}
            aria-label="Vídeo anterior"
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cta hover:bg-cta-hover text-cream flex items-center justify-center shadow-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative">
            <div className="bg-gray-900 rounded-[2.5rem] p-2 md:p-3 shadow-2xl border-4 border-gray-800">
              <div className="relative bg-black rounded-[2rem] overflow-hidden w-[260px] h-[462px] md:w-[300px] md:h-[533px]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
                <iframe
                  key={current.id}
                  src={`https://www.youtube.com/embed/${current.id}?rel=0`}
                  title={`Depoimento ${index + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Próximo vídeo"
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cta hover:bg-cta-hover text-cream flex items-center justify-center shadow-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir para o vídeo ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-cta" : "w-2.5 bg-sage"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsCarousel;
