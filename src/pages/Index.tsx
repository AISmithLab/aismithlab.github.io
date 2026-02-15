import { useRef } from "react";
import NavBar from "@/components/NavBar";

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
      <div className="relative z-10 flex justify-end px-8 pt-6 sm:px-16 lg:px-24">
        <NavBar variant="dark" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="max-w-xl">
          <h1 className="font-mono-display text-6xl font-bold tracking-tight text-foreground sm:text-7xl drop-shadow-lg">
            ai smith lab
          </h1>
          <p className="mt-5 font-mono-display text-xl font-medium tracking-wide text-foreground/80 sm:text-2xl drop-shadow-md">
            toolsmiths for the age of agentic ai.
          </p>
          <div className="mt-3 space-y-0.5">
            <p className="font-mono-display text-sm tracking-wide text-foreground/50 sm:text-base">
              human × ai systems ×
            </p>
            <p className="font-mono-display text-sm tracking-wide text-foreground/50 sm:text-base">
              privacy × security × trust.
            </p>
          </div>

          {/* Active Tools */}
          <div className="mt-10">
            <h2 className="font-mono-display text-sm font-medium tracking-widest text-foreground/50 drop-shadow-sm">
              active tools
            </h2>
            <ul className="mt-3 space-y-1.5">
              {[
                { name: "AICodingGym", url: "https://aicodinggym.com/" },
                // { name: "PrivacyDev Guides", url: "#" },
              ].map((tool) => (
                <li
                  key={tool.name}
                  className="font-mono-display text-base tracking-wide text-foreground/70 drop-shadow-sm"
                >
                  →{" "}
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
