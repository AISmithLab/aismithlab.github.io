import { useState, useMemo } from "react";
import { publications, type Tag } from "@/data/publications";
import { Search, ArrowLeft, ExternalLink, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ALL_TAGS: Tag[] = ["human", "ai systems", "privacy", "security", "trust"];

const Research = () => {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<Tag>>(new Set());

  const toggleTag = (tag: Tag) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let result = publications;
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.includes(q) ||
          p.authors.includes(q) ||
          p.venue.includes(q) ||
          String(p.year).includes(q)
      );
    }
    if (activeTags.size > 0) {
      result = result.filter(
        (p) => p.tags && p.tags.some((t) => activeTags.has(t))
      );
    }
    return result;
  }, [query, activeTags]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* header */}
      <header className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 space-y-3">
          <div className="flex items-center gap-4">
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
          </div>
          <div className="flex w-full items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search projects..."
              className="w-full bg-transparent font-mono-display text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-3 py-1 font-mono-display text-[11px] transition-colors ${
                  activeTags.has(tag)
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
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
              {pub.video ? (
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <video
                    src={pub.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : pub.image ? (
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : null}
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
