import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function FinalProposal() {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);

  // Frases que cambian cada vez que intenta picarle al "No"
  const frasesNo = [
    "No",
    "¿Segura?",
    "¡Piénsalo bien!",
    "¡Glinda no aprobaría esto!",
    "Romperás mi corazón 💔",
    "¡Imposible!",
    "Error 404: 'No' not found"
  ];

  const handleNoInteraction = () => {
    // Genera una posición aleatoria limitada para que no se salga mucho de la pantalla
    const x = (Math.random() - 0.5) * 200; // Mueve entre -100px y 100px
    const y = (Math.random() - 0.5) * 300; // Mueve entre -150px y 150px
    setNoBtnPosition({ x, y });
    setNoCount((prev) => (prev + 1) % frasesNo.length);
  };

  const handleYesClick = () => {
    // 1. Lanza Confeti Explosivo
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffafcc', '#ffd700', '#fb6f92'] // Colores Glinda
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#a6c1ee', '#ffd700', '#ffffff'] // Colores Mágicos
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // 2. Redirige a WhatsApp después de 1.5 segundos para que vea el confeti
    setTimeout(() => {
      const telefono = "5212222787979"; // ¡PON TU NÚMERO AQUÍ!
      const mensaje = encodeURIComponent("¡Sí! ¡Acepto ser tu San Valentín! [Escribir algo]");
      window.location.href = `https://wa.me/${telefono}?text=${mensaje}`;
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative z-20 w-full max-w-md px-4 text-center"
    >
      {/* Panel de Cristal Mágico */}
      <div className="glass-panel rounded-[3rem] p-8 relative overflow-visible border-4 border-magic-gold/30">
        
        {/* Decoración Flotante Superior */}
        <div className="absolute -top-12 left-0 right-0 flex justify-center">
            <span className="text-6xl animate-bounce drop-shadow-lg filter">👑</span>
        </div>

        <h1 className="mt-8 text-4xl font-title text-magic-deep drop-shadow-md leading-tight">
          Ary... <br/>
          <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            ¿Quieres ser mi San Valentín?
          </span>
        </h1>

        <p className="mt-4 text-lg font-script text-gray-700 font-bold">
          "Juntos somos ilimitados"
        </p>

        {/* Zona de Botones */}
        <div className="mt-10 flex flex-col items-center gap-4 relative min-h-[200px]">
          
          {/* Botón SÍ (Gigante y Pulsante) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(255,175,204,0)", "0px 0px 30px rgba(255,175,204,0.8)", "0px 0px 0px rgba(255,175,204,0)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={handleYesClick}
            className="w-full py-4 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-black text-2xl rounded-full shadow-2xl border-4 border-white/20 z-10"
          >
            ¡CLARO QUE SÍ! 💖
          </motion.button>

          {/* Botón NO (Huidizo) */}
          <motion.button
            animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={handleNoInteraction} // Para PC
            onTouchStart={handleNoInteraction} // Para Móvil (importante)
            className="px-8 py-2 bg-gray-200 text-gray-500 font-bold rounded-full text-sm shadow-inner absolute bottom-0"
          >
            {frasesNo[noCount]}
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
}