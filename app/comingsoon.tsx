import Image from "next/image";

const Page = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.svg"
          alt="Nexorra Studio Background"
          fill
          className="object-cover transition-transform duration-1000 scale-105"
          priority
        />
      </div>
      <div className="absolute top-2 left-8 z-10">
        <Image
          src="/logo.png"
          alt="Nexorra Studio Logo"
          width={80}
          height={80}
          className="object-contain w-[150px] h-[150px] transition-transform duration-1000 scale-105"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="z-10 text-center max-w-4xl mx-auto space-y-8 animate-slide-up">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white/90 tracking-tight">
            We are creating something extraordinary
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            we will launch our website soon.
          </p>
        </div>
      </div>

      {/* Subtle branding or contact info at bottom */}
      <footer className="absolute bottom-8 left-0 right-0 text-center z-10 opacity-0 animate-fade-in [animation-delay:1s]">
        <p className="text-xs uppercase tracking-[0.5em] text-white/30 font-semibold">
          © 2026 Nexorra Studio • All Rights Reserved
        </p>
      </footer>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
    </main>
  );
};

export default Page;
