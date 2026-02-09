"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start opening the card after a short delay
    const openTimer = setTimeout(() => setIsOpen(true), 800);
    // Show text after card opens
    const textTimer = setTimeout(() => setShowText(true), 2200);
    
    return () => {
      clearTimeout(openTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      {/* 3D Card Container */}
      <div 
        className="relative"
        style={{ 
          perspective: "2000px",
          perspectiveOrigin: "center center"
        }}
      >
        {/* Card Base (Inside - visible when open) */}
        <div 
          className="relative w-[340px] h-[440px] md:w-[420px] md:h-[540px] rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.5), inset 0 2px 10px rgba(255,255,255,0.5)",
          }}
        >
          {/* Decorative pattern inside */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-4 border-4 border-amber-700 rounded-xl" />
            <div className="absolute inset-8 border-2 border-amber-700 rounded-lg" />
          </div>

          {/* Hearts decoration */}
 

          {/* Main text inside card */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <h1
              className={`text-center transition-all duration-1000 ease-out ${
                showText
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-50 translate-y-8"
              }`}
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                background: "linear-gradient(135deg, #92400e 0%, #b45309 30%, #d97706 50%, #b45309 70%, #92400e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "2px 2px 4px rgba(146, 64, 14, 0.2)",
                lineHeight: 1.2,
              }}
            >
              Кеттік
              <br />
              далаға
            </h1>
            
            <div
              className={`mt-6 transition-all duration-700 ${
                showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-amber-800 text-lg tracking-[0.3em] uppercase font-light">
               Артына
              </p>
            </div>

            {/* Animated sparkles */}
            {showText && (
              <>
                <div className="absolute top-1/4 left-1/4 text-2xl animate-ping" style={{ animationDuration: '1.5s' }}>✨</div>
                <div className="absolute top-1/3 right-1/4 text-xl animate-ping" style={{ animationDuration: '2s', animationDelay: '0.3s' }}>✨</div>
                <div className="absolute bottom-1/3 left-1/3 text-2xl animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.6s' }}>✨</div>
                <div className="absolute bottom-1/4 right-1/3 text-xl animate-ping" style={{ animationDuration: '2.2s', animationDelay: '0.2s' }}>✨</div>
              </>
            )}
          </div>
        </div>

        {/* Card Cover (Front - folds open) */}
        <div
          className="absolute inset-0 w-[340px] h-[440px] md:w-[420px] md:h-[540px] rounded-2xl overflow-hidden transition-transform duration-[1500ms] ease-out"
          style={{
            transformOrigin: "left center",
            transform: isOpen ? "rotateY(-160deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Front of cover */}
          <div
            className="absolute inset-0 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, #dc2626 0%, #b91c1c 30%, #991b1b 60%, #7f1d1d 100%)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 2px 20px rgba(255,255,255,0.15)",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Decorative gold border */}
            <div 
              className="absolute inset-3 rounded-xl border-2"
              style={{ borderColor: "rgba(253, 224, 71, 0.6)" }}
            />
            <div 
              className="absolute inset-6 rounded-lg border"
              style={{ borderColor: "rgba(253, 224, 71, 0.4)" }}
            />

            {/* Cover content */}
            <div className="text-center">
              <div className="text-6xl mb-4">💌</div>
              <p 
                className="text-2xl md:text-3xl font-light tracking-widest"
                style={{ 
                  color: "#fde68a",
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)"
                }}
              >
                Open Me
              </p>
              <div className="mt-4 text-yellow-300/60 text-sm tracking-[0.2em] uppercase">
                ✦ ✦ ✦
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 text-2xl opacity-70">🌟</div>
            <div className="absolute top-4 right-4 text-2xl opacity-70">🌟</div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-70">🌟</div>
            <div className="absolute bottom-4 right-4 text-2xl opacity-70">🌟</div>
          </div>

          {/* Back of cover (visible when open) */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(145deg, #fef3c7 0%, #fde68a 100%)",
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Pattern on back */}
            <div className="absolute inset-0 opacity-20">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    #b45309 0px,
                    #b45309 1px,
                    transparent 1px,
                    transparent 20px
                  )`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Instruction text */}
      <div 
        className={`absolute bottom-8 text-white/50 text-sm tracking-wider transition-opacity duration-500 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      >
        ✨ Watch the magic happen ✨
      </div>
    </div>
  );
}
