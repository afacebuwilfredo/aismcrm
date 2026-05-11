const phaseOneFeatures = [
  "Authentication & user management",
  "Social account integration (OAuth, token refresh)",
  "AI caption generator (tones, hashtags, CTA)",
  "Media upload & content drafts",
  "Scheduling & multi-platform publishing",
  "Auto comment / link posting",
  "Analytics dashboard",
] as const;

const supportedPlatforms = [
  "TikTok",
  "Facebook Pages",
  "Instagram",
  "YouTube",
] as const;

const HomePage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <p className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            AI Social CRM
          </p>
          <nav aria-label="Product areas">
            <ul className="flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              {supportedPlatforms.map((platform) => (
                <li key={platform}>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-1 dark:bg-zinc-900">
                    {platform}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-16"
      >
        <section aria-labelledby="hero-heading" className="space-y-6">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          >
            AI-powered content CRM for multi-platform social teams
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Central place to create content, run AI for captions and media,
            schedule posts, publish to official APIs, attach tracked links and
            comments, and monitor performance—aligned with your PRD roadmap.
          </p>
        </section>

        <section aria-labelledby="mvp-heading" className="space-y-4">
          <h2
            id="mvp-heading"
            className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Recommended MVP — Phase 1
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {phaseOneFeatures.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="next-steps-heading"
          className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50 p-6 dark:border-zinc-700 dark:bg-zinc-900/30"
        >
          <h2
            id="next-steps-heading"
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Next implementation steps
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Wire Firebase Auth (or your chosen provider), persist{" "}
            <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-zinc-800">
              users
            </code>{" "}
            and{" "}
            <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-zinc-800">
              social_accounts
            </code>{" "}
            in PostgreSQL, add encrypted token storage, then build API routes
            for contents, posts, scheduling (BullMQ + Redis), and platform
            publishers with rate limits and audit logs.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
