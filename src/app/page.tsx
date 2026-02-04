import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen px-5 sm:px-10 py-6 flex flex-col sm:items-center sm:justify-center">
      {/* Theme toggle - inline on mobile, fixed on desktop */}
      <div className="mb-6 sm:mb-0 sm:fixed sm:top-4 sm:left-4">
        <ThemeToggle />
      </div>
      <main className="max-w-3xl w-full mx-auto flex-1 sm:flex-none">
        <div className="mb-10">
          <h1 className="text-[9vw] leading-[1.05] min-[420px]:text-4xl sm:text-5xl font-medium tracking-tight mb-2 font-[family-name:var(--font-playfair-display)]">
            Thomas Qi
          </h1>
          <p className="text-sm min-[420px]:text-base text-foreground/60 mb-6">
            Computer Science @ UWaterloo
          </p>

          <hr className="border-t themed-border mb-6" />

          <p className="text-base min-[420px]:text-lg sm:text-xl leading-relaxed text-foreground/90">
            Hi, I&apos;m Thomas! I&apos;m in 3A CS.
          </p>

          <p className="mt-4 text-base min-[420px]:text-lg sm:text-xl leading-relaxed text-foreground/90">
            Currently, I&apos;m on an exchange semester at Nanyang Technological
            University (NTU) in Singapore.
          </p>

          <p className="mt-4 text-base min-[420px]:text-lg sm:text-xl leading-relaxed text-foreground/90">
            Previously, I&apos;ve worked on crypto trading platforms at{" "}
            <a
              href="https://www.bitgo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link">
              BitGo
            </a>
            . This summer, I&apos;ll be joining{" "}
            <a
              href="https://www.coinbase.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link">
              Coinbase
            </a>{" "}
            on the institutional product group in San Francisco.
          </p>

          <p className="mt-4 text-base min-[420px]:text-lg sm:text-xl leading-relaxed text-foreground/90">
            I&apos;ve also previously done research on the applications of LLM
            tooling under{" "}
            <a
              href="https://cs.uwaterloo.ca/~m2nagapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link">
              Dr. Mei Nagappan
            </a>
            .
          </p>

          <p className="mt-4 text-base min-[420px]:text-lg sm:text-xl leading-relaxed text-foreground/90">
            Here&apos;s my{" "}
            <a
              href="/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link">
              resume
            </a>{" "}
            if you&apos;re interested.
          </p>

          <p className="mt-6 text-base min-[420px]:text-lg sm:text-xl leading-relaxed text-foreground/90">
            Here&apos;s a photo album of my cat{" "}
            <a href="/cat" className="accent-link">
              ₍^. .^₎⟆
            </a>
          </p>
        </div>

        <section className="mt-8">
          <h2 className="sr-only">Links</h2>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/thomasqi3141"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border themed-border px-4 h-10 inline-flex items-center gap-2 themed-hover">
              {/* GitHub icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden>
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.82 1.3 3.51.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.4 1.23-3.25-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.28-1.56 3.3-1.24 3.3-1.24.65 1.65.24 2.87.12 3.17.77.85 1.23 1.93 1.23 3.25 0 4.66-2.81 5.67-5.49 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" />
              </svg>
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/thomaszhaojieqi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border themed-border px-4 h-10 inline-flex items-center gap-2 themed-hover">
              {/* LinkedIn icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden>
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6H2v11h3V9.5Zm4 0H6v11h3v-6.1c0-1.61.3-3.17 2.31-3.17 1.98 0 2.02 1.85 2.02 3.27V20.5h3v-6.66c0-3.27-.7-5.81-4.49-5.81-1.82 0-3.04.99-3.54 1.92h-.05V9.5Z" />
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer - inline on mobile, fixed on desktop */}
      <footer className="mt-10 sm:mt-0 flex items-center justify-between text-sm text-foreground/50 sm:contents">
        {/* CS Webring */}
        <div className="flex items-center gap-2 sm:fixed sm:bottom-4 sm:left-4">
          <a
            href="https://cs.uwatering.com/#thomasqi.com?nav=prev"
            className="hover:text-foreground transition-colors">
            ←
          </a>
          <a
            href="https://cs.uwatering.com/#thomasqi.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://cs.uwatering.com/icon.black.svg"
              alt="CS Webring"
              className="w-5 h-auto opacity-50 hover:opacity-80 transition-opacity themed-invert"
            />
          </a>
          <a
            href="https://cs.uwatering.com/#thomasqi.com?nav=next"
            className="hover:text-foreground transition-colors">
            →
          </a>
        </div>

        {/* Updated date */}
        <div className="sm:fixed sm:bottom-4 sm:right-4">
          Updated 2026/01/31
        </div>
      </footer>
    </div>
  );
}
