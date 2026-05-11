import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { groupPhotos } from "@/data/groupPhotos";

const GroupPhotoGallery = () => {
  const [index, setIndex] = useState(0);
  if (groupPhotos.length === 0) return null;

  const photo = groupPhotos[index];
  const prev = () =>
    setIndex((i) => (i - 1 + groupPhotos.length) % groupPhotos.length);
  const next = () => setIndex((i) => (i + 1) % groupPhotos.length);

  return (
    <section className="pt-8 pb-12">
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-sm bg-muted">
          <img
            src={photo.src}
            alt={photo.caption}
            className="h-full w-full object-cover"
          />
        </div>

        {groupPhotos.length > 1 && (
          <>
            <button
              type="button"
              aria-label="previous photo"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm backdrop-blur-sm transition hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="next photo"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm backdrop-blur-sm transition hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{photo.caption}</p>
        {groupPhotos.length > 1 && (
          <div className="flex items-center gap-2">
            {groupPhotos.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`go to photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  i === index ? "bg-foreground" : "bg-foreground/25"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GroupPhotoGallery;
