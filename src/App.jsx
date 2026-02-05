import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagicBackground from './components/MagicBackground';
import FantasyCard from './components/FantasyCard';
import FinalProposal from './components/FinalProposal';
import { storyData } from './data/story';

function App() {
  // Estado: -1 es la Portada, 0 en adelante es la Historia
  const [step, setStep] = useState(-1);

  // Función para avanzar
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-900">
      
      {/* 1. FONDO MÁGICO (Siempre visible detrás de todo) */}
      <MagicBackground />

      {/* 2. CONTENEDOR DE CONTENIDO (Gestiona las transiciones) */}
      <AnimatePresence mode="wait">
        
        {/* --- ESCENA 1: PORTADA / INTRO --- */}
        {step === -1 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 1.5 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <div className="glass-panel p-10 rounded-[3rem] border-4 border-magic-gold/30 shadow-[0_0_50px_rgba(255,215,0,0.3)]">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl mb-4 filter drop-shadow-lg"
              >
                🪄
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-title text-white mb-2 text-glow">
                Una Historia <br />
                <span className="text-magic-gold">Mágica</span>
              </h1>
              
              <p className="font-script text-2xl text-pink-100 mb-8">
                Para mi princesa favorita...
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-xl shadow-2xl border-2 border-white/50 animate-pulse"
              >
                ABRIR EL LIBRO ✨
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* --- ESCENA 2: EL CUENTO (Itera sobre storyData) --- */}
        {step >= 0 && step < storyData.length && (
          <FantasyCard 
            key={step} // La key es vital para que Framer sepa que cambió la página
            data={storyData[step]} 
            onNext={handleNext} 
          />
        )}

        {/* --- ESCENA 3: LA GRAN PREGUNTA --- */}
        {step === storyData.length && (
          <FinalProposal key="final" />
        )}

      </AnimatePresence>

      {/* Footer discreto (Opcional) */}
      <div className="absolute bottom-4 text-white/30 text-xs font-mono z-0 pointer-events-none">
        Hecho con magia y React ✨
      </div>
    </main>
  );
}

export default App;