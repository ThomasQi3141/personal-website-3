import Link from "next/link";
import CatGallery, { type CatPhoto } from "./CatGallery";

const catPhotos: CatPhoto[] = [
  { src: "/cat/2018-06-20.JPG", date: "June 20, 2018", caption: "Face to face" },
  { src: "/cat/2019-06-02.JPG", date: "June 2, 2019", caption: "Bro tried to escape" },
  { src: "/cat/2019-08-23.JPG", date: "August 23, 2019", caption: "Zzz..." },
  { src: "/cat/2023-08-03.JPG", date: "August 3, 2023", caption: "Stairs" },
  { src: "/cat/2023-08-24.jpg", date: "August 24, 2023", caption: "His fav box" },
  { src: "/cat/2025-12-06.JPG", date: "December 6, 2025", caption: "Just woke up" },
];

export default function CatAlbum() {
  return (
    <div className="min-h-screen px-5 sm:px-10 py-6 sm:py-16">
      <main className="max-w-3xl w-full mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 mb-6 text-sm text-foreground/70 hover:text-[var(--accent)] transition-colors duration-200">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>back</span>
        </Link>

        <h1 className="sr-only">Cat Album</h1>
        <p className="mb-6 text-[13px] sm:text-[15px] leading-normal text-foreground/70">
          this is winston
        </p>

        <CatGallery photos={catPhotos} />

        <p className="mt-8 text-xs text-foreground/40">
          more photos coming soon
        </p>
      </main>
    </div>
  );
}
