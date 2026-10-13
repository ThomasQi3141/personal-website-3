import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen px-5 sm:px-10 py-6 flex flex-col sm:items-center sm:justify-center">
      <main className="max-w-3xl w-full mx-auto flex-1 sm:flex-none">
        <div className="mb-10">
          <h1 className="sr-only">Thomas Qi</h1>
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-[13px] sm:text-[15px] leading-normal text-foreground/70">
              Hi, I&apos;m Thomas!
            </p>
            <ThemeToggle />
          </div>

          <p className="text-[13px] sm:text-[15px] leading-normal text-foreground/70">
            I&apos;m studying computer science at the University of Waterloo.
          </p>

          <p className="mt-2.5 text-[13px] sm:text-[15px] leading-normal text-foreground/70">
            Previously, I&apos;ve:
          </p>
          <ul className="mt-1.5 space-y-1 list-disc pl-5 marker:text-foreground/40 text-[13px] sm:text-[15px] leading-normal text-foreground/70">
            <li>
              built an on-call agent at{" "}
              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link">
                Coinbase
              </a>
            </li>
            <li>
              automated trade settlement at{" "}
              <a
                href="https://www.bitgo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link">
                BitGo
              </a>
            </li>
            <li>
              built{" "}
              <a
                href="https://github.com/ThomasQi3141/repo-parsing"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link">
                tooling
              </a>{" "}
              for coding agents at{" "}
              <a
                href="https://www.swag.uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link">
                UW SWAG
              </a>
            </li>
            <li>
              went on exchange at{" "}
              <a
                href="https://www.ntu.edu.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link">
                NTU
              </a>{" "}
              in Singapore
            </li>
          </ul>

          <p className="mt-4 text-xs sm:text-[13px] leading-normal text-foreground/50">
            <a
              href="/cat"
              className="hover:text-[var(--accent)] transition-colors duration-200">
              my cat ₍^. .^₎⟆
            </a>
          </p>
        </div>

        <section className="mt-8">
          <h2 className="sr-only">Links</h2>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/thomasqi3141"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-[var(--accent)] transition-colors duration-200">
                {/* GitHub icon (Feather) */}
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/thomaszhaojieqi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-[var(--accent)] transition-colors duration-200">
                {/* LinkedIn icon (Feather) */}
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>linkedin</span>
              </a>

              <a
                href="/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-[var(--accent)] transition-colors duration-200">
                {/* Resume icon (Feather file-text) */}
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>resume</span>
              </a>
            </div>

            {/* CS Webring */}
            <div className="flex items-center gap-2 text-sm text-foreground/50">
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
          </div>
        </section>
      </main>
    </div>
  );
}
