import { useState, useMemo } from "react";
import { publications } from "@/data/publications";
import { Search, ArrowLeft, ExternalLink, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Research = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return publications;
    const q = query.toLowerCase();
    return publications.filter(
      (p) =>
        p.title.includes(q) ||
        p.authors.includes(q) ||
        p.venue.includes(q) ||
        String(p.year).includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* header */}
      <header className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 font-mono-display text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            home
          </Link>
          <h1 className="font-mono-display text-sm font-bold tracking-tight">
            research
          </h1>
          <div className="ml-auto flex w-full max-w-xs items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search projects..."
              className="w-full bg-transparent font-mono-display text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* gallery */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <p className="mb-8 font-mono-display text-xs text-muted-foreground">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pub) => (
            <article
              key={pub.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {pub.image && (
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-4">
                <span className="mb-2 inline-block self-start rounded-full bg-primary/10 px-2 py-0.5 font-mono-display text-[10px] tracking-wide text-primary">
                  {pub.venue}
                </span>
                <h2 className="mb-2 font-mono-display text-sm font-semibold leading-snug text-foreground">
                  {pub.title}
                </h2>
                <p className="mb-3 font-mono-display text-[11px] leading-relaxed text-muted-foreground">
                  {pub.authors}
                </p>

                {pub.award && (
                  <div className="mb-3 flex items-start gap-1.5">
                    <Award className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                    <span className="font-mono-display text-[10px] text-accent">
                      {pub.award}
                    </span>
                  </div>
                )}

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {pub.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 font-mono-display text-[10px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {link.label}
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center font-mono-display text-sm text-muted-foreground">
            no projects match your search.
          </p>
        )}
      </main>
    </div>
  );
};

export default Research;
