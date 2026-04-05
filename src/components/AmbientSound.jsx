import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX, CloudRain, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AmbientSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState("music"); // "music" (local) or "rain" (external)
  const audioRef = useRef(null);

  const tracks = {
    rain: "https://www.soundjay.com/nature/sounds/rain-07.mp3",
    music: "/music.mp3",
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      if (isPlaying) {
        audioRef.current.play();
        // Fade in
        let vol = 0;
        const fadeIn = setInterval(() => {
          if (vol < 0.4) {
            vol += 0.05;
            audioRef.current.volume = vol;
          } else {
            clearInterval(fadeIn);
          }
        }, 100);
      } else {
        // Fade out
        let vol = audioRef.current.volume;
        const fadeOut = setInterval(() => {
          if (vol > 0.05) {
            vol -= 0.05;
            audioRef.current.volume = vol;
          } else {
            audioRef.current.pause();
            clearInterval(fadeOut);
          }
        }, 100);
      }
    }
  }, [isPlaying, track]);

  const toggleTrack = () => {
    setTrack((prev) => (prev === "rain" ? "music" : "rain"));
  };

  return (
    <div className="fixed bottom-32 right-8 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={toggleTrack}
            className="w-12 h-12 bg-luxury/80 backdrop-blur-md border border-secondary/30 rounded-full flex items-center justify-center text-secondary shadow-2xl hover:bg-secondary hover:text-primary transition-all"
            title="Switch Ambience"
          >
            {track === "rain" ? <CloudRain size={20} /> : <Music size={20} />}
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border-2 ${
          isPlaying 
            ? "bg-secondary border-secondary text-primary animate-pulse" 
            : "bg-primary/50 backdrop-blur-md border-secondary/40 text-secondary hover:border-secondary"
        }`}
        title={isPlaying ? "Mute Ambience" : "Play Spa Ambience"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        
        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={tracks[track]}
          loop
          preload="auto"
        />
      </motion.button>
    </div>
  );
};

export default AmbientSound;
