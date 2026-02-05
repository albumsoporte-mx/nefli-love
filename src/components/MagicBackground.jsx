import { motion } from 'framer-motion';

export default function MagicBackground() {
  // Generamos 30 elementos flotantes aleatorios
  const particles = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-purple-200 to-indigo-300 opacity-80" />
      
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: Math.random() * 1000, 
            x: Math.random() * window.innerWidth,
            opacity: 0 
          }}
          animate={{ 
            y: [null, -100], 
            opacity: [0, 0.8, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute text-2xl"
          style={{ fontSize: Math.random() * 30 + 10 }}
        >
          {['✨', '💖', '🌸', '🦋'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}
      
      {/* Luz ambiental */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)]" />
    </div>
  );
}