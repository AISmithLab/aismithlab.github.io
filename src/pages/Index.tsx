import { useRef } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
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
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-end px-8 pt-6 sm:px-16 lg:px-24">
        <div className="flex items-center gap-6 font-mono-display text-sm tracking-wide text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">home</Link>
          <Link to="/people" className="transition-colors hover:text-foreground">people</Link>
          <Link to="/research" className="transition-colors hover:text-foreground">projects</Link>
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="max-w-xl">
          <h1 className="font-mono-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            ai smith lab
          </h1>
          <p className="mt-4 font-mono-display text-lg tracking-wide text-muted-foreground sm:text-xl">
            toolsmiths for the age of agentic ai.
          </p>
          <div className="mt-3 space-y-0.5">
            <p className="font-mono-display text-xs tracking-wide text-muted-foreground/70 sm:text-sm">
              human × ai systems ×
            </p>
            <p className="font-mono-display text-xs tracking-wide text-muted-foreground/70 sm:text-sm">
              privacy × security × trust.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
