import { motion } from 'framer-motion';

export default function FantasyCard({ data, onNext }) {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0, rotateX: 90 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      exit={{ scale: 1.2, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.4 }}
      className="relative z-10 w-full max-w-md px-4 perspective-1000"
    >
      {/* Contenedor Principal Ornamentado */}
      <div className="glass-panel rounded-[3rem] p-1 relative shadow-2xl overflow-hidden group">
        
        {/* Bordes Dorados Animados */}
        <div className="absolute inset-0 border-4 border-magic-gold/50 rounded-[3rem] z-20 pointer-events-none" />
        <div className="absolute inset-2 border-2 border-white/50 rounded-[2.5rem] z-20 pointer-events-none border-dashed" />

        {/* Imagen con Marco */}
        <div className="relative h-72 w-full overflow-hidden rounded-t-[2.8rem] rounded-b-[4rem]">
          <motion.img 
            src={data.img} 
            alt="Nosotros" 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-magic-deep/60 to-transparent" />
          <h2 className="absolute bottom-4 left-0 right-0 text-center text-4xl text-white font-title text-glow">
            {data.titulo}
          </h2>
        </div>

        {/* Contenido de Texto */}
        <div className="p-6 pb-10 bg-white/80 backdrop-blur-sm relative">
           {/* Decoración de esquina */}
           <span className="absolute top-2 left-4 text-4xl text-magic-gold opacity-50">❝</span>

          <div className="max-h-[200px] overflow-y-auto pr-2 scrollbar-hide space-y-4">
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              {data.texto_largo}
            </p>
            <p className="text-magic-deep font-script text-2xl text-right mt-4">
              {data.dedicatoria}
            </p>
          </div>

          {/* Botón Mágico Interactivo */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="mt-6 w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-full text-xl shadow-[0_0_20px_rgba(236,72,153,0.6)] relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              SIGUIENTE CAPÍTULO <span className="text-2xl">✨</span>
            </span>
            {/* Brillo que pasa */}
            <div className="absolute inset-0 bg-white/30 animate-[shine_2s_infinite]" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}