import { useRef, useState } from "react";
import { Apple, Send, MessageCircle } from "lucide-react";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Video Background - will show gradient fallback until video is uploaded */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/background.mp4"
        />
        {/* Gradient fallback / overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(200, 50%, 8%) 0%, hsl(210, 60%, 10%) 30%, hsl(195, 40%, 12%) 60%, hsl(30, 40%, 15%) 100%)",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex min-h-screen flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="max-w-xl">
          <h1 className="font-mono-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            ai smith lab
          </h1>

          <div className="mt-6 space-y-1">
            <p className="font-mono-display text-sm tracking-wide text-muted-foreground sm:text-base">
              toolsmiths for the age of agentic ai.
            </p>
            <p className="font-mono-display text-sm tracking-wide text-muted-foreground sm:text-base">
              human × ai systems × privacy × security × trust.
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              <Apple className="h-5 w-5" />
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              <Send className="h-5 w-5" />
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
              style={{
                background: "var(--gradient-cta)",
                boxShadow: "var(--glow-cta)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gradient-cta-hover)";
                e.currentTarget.style.boxShadow = "0 0 40px hsl(280 80% 60% / 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--gradient-cta)";
                e.currentTarget.style.boxShadow = "var(--glow-cta)";
              }}
            >
              join us ›
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
