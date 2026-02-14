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
    <div className="light-research min-h-screen bg-background text-foreground">
      {/* header */}
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-8 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Home
          </Link>
          <nav className="flex items-center gap-6">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-sm capitalize transition-colors ${
                  activeTags.has(tag)
                    ? "text-foreground font-medium underline underline-offset-4 decoration-2"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* search */}
      <div className="mx-auto max-w-[1200px] px-8 pt-2 pb-8">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
          />
        </div>
      </div>

      {/* project grid */}
      <main className="mx-auto max-w-[1200px] px-8 pb-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((pub) => (
            <article
              key={pub.id}
              className="group flex flex-col items-center text-center"
            >
              {/* thumbnail */}
              <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-sm bg-muted">
                {pub.video ? (
                  <video
                    src={pub.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : pub.image ? (
                  <img
                    src={pub.image}
                    alt={pub.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full" />
                )}
              </div>

              {/* title */}
              <h2 className="mb-1 text-sm font-semibold leading-snug text-foreground">
                {pub.title}
              </h2>

              {/* venue */}
              <p className="text-xs text-muted-foreground">
                {pub.venue} {pub.award ? "🏅" : ""}
              </p>

              {/* links row — shown on hover */}
              <div className="mt-2 flex flex-wrap justify-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {pub.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-[11px] text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                  >
                    {link.label}
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-sm text-muted-foreground">
            No projects match your search.
          </p>
        )}
      </main>
    </div>
  );
};

export default Research;
