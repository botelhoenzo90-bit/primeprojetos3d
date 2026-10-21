import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const VSLSection = () => (
  <section className="py-12 md:py-16 bg-[#EFF7FF]">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-7">
        <span className="inline-flex items-center gap-2 bg-white text-blue-800 text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-100">ASSISTA À APRESENTAÇÃO</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mb-3">Veja como a biblioteca pode facilitar <span className="text-blue-700">seus próximos projetos.</span></h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Conheça a proposta da plataforma e entenda como começar a explorar os arquivos STL.</p>
      </motion.div>
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#17324D] p-3 md:p-5 shadow-2xl">
        <div className="aspect-video rounded-2xl border-2 border-dashed border-white/40 bg-slate-900 flex flex-col items-center justify-center text-center p-6">
          <PlayCircle className="w-14 h-14 md:w-20 md:h-20 text-white/90 mb-4" />
          <p className="text-white text-lg md:text-2xl font-extrabold">Sua apresentação em vídeo entra aqui</p>
          <p className="text-slate-300 text-sm md:text-base mt-2">Espaço reservado para adicionar a VSL quando estiver pronta.</p>
        </div>
      </div>
      <div className="text-center mt-7">
        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-lg px-8 py-4 rounded-full uppercase tracking-wide">QUERO ACESSAR A BIBLIOTECA STL</motion.a>
      </div>
    </div>
  </section>
);

export default VSLSection;
