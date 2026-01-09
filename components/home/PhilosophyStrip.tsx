const PhilosophyStrip = () => {
  const philosophies = [
    "Excellence is standard",
    "Innovation drives us",
    "Your success is ours",
    "Design with purpose",
    "Build for scale",
    "Think beyond tomorrow"
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-6 overflow-hidden">
      <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...philosophies, ...philosophies, ...philosophies].map((text, i) => (
          <span key={i} className="text-white text-2xl font-bold mx-8">
            {text} •
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

export default PhilosophyStrip;