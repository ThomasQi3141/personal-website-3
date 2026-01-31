import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

const catPhotos = [
  { src: "/cat/2018-06-20.JPG", date: "June 20, 2018", caption: "Face to face" },
  { src: "/cat/2019-06-02.JPG", date: "June 2, 2019", caption: "Bro tried to escape" },
  { src: "/cat/2019-08-23.JPG", date: "August 23, 2019", caption: "Zzz..." },
  { src: "/cat/2023-08-03.JPG", date: "August 3, 2023", caption: "Stairs" },
  { src: "/cat/2023-08-24.jpg", date: "August 24, 2023", caption: "His fav box" },
  { src: "/cat/2025-12-06.JPG", date: "December 6, 2025", caption: "Just woke up" },
];

export default function CatAlbum() {
  return (
    <div className="min-h-screen px-5 sm:px-10 py-6">
      {/* Fixed top-left theme toggle */}
      <div className="fixed top-4 left-4 z-10">
        <ThemeToggle />
      </div>

      <main className="max-w-4xl w-full mx-auto pt-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
            Cat Album ₍^. .^₎⟆
          </h1>
          <p className="text-lg text-foreground/70">
            My cat Winston, in chronological order
          </p>
        </div>

        <hr className="border-t themed-border mb-8" />

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {catPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden border themed-border bg-foreground/5">
              <Image
                src={photo.src}
                alt={`Winston - ${photo.date}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover overlay with caption and date */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
                <p className="text-white/70 text-xs mt-0.5">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-foreground/50 mt-10 mb-6 text-sm">
          More photos coming soon...
        </p>
      </main>
    </div>
  );
}
