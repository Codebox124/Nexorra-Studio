import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function FormSubmittedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      {/* Subtle glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, hsla(72, 100%, 50%, 0.06) 0%, hsla(250, 70%, 20%, 0.3) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 w-[90%] max-w-lg mx-auto flex flex-col items-center text-center gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
          <BadgeCheck className="w-8 h-8 text-primary" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
          Form{" "}
          <em className="font-display italic font-normal">Submitted</em>
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed">
          We&apos;ll get back to you within 24 hours. In the meantime, feel free
          to browse our work.
        </p>

        <Link
          href="/work"
          className="rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_40px_-10px_hsl(72_100%_50%/0.3)] flex items-center gap-2 group mt-2"
        >
          Browse Our Work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
