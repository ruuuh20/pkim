"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "NY Hangeul Museum Initiative",
    period: "2026",
    type: "Freelance",
    stack: "Next.js, Airtable",
    description: "Campaign site built to support the effort to establish New York's first Korean alphabet museum. I designed and built it in Next.js, with Airtable handling supporter signups so the organizers could manage the list without touching code. I also built an anonymous public message board — visitors could leave short notes of encouragement in Korean or English, which gave the campaign a visible sense of momentum. The site collected all 579 signups that brought the campaign to its goal.",
    url: "https://nyhangeul.org",
  },
  {
    id: 2,
    title: "EduTogether",
    period: "2026",
    type: "Freelance",
    stack: "Next.js, Sanity CMS",
    description: "EduTogether connects U.S. and global schools through cultural exchange and language programs, currently working with 15+ partner institutions. I've been with the organization since 2018 — first as a program coordinator on exchange trips to Korea — and grew into the web developer role as my technical skills developed. I led a full redesign in Next.js and Sanity CMS, choosing Sanity so non-technical staff could update content without developer help. The site displays both English and Korean together rather than separate localized versions, which matched how the organization actually communicates.",
    url: "https://edutogether.us",
  },
  {
    id: 3,
    title: "Peak Education Center",
    period: "2025",
    type: "Web Developer",
    stack: "Next.js",
    description: "Peak Education Center is a K-12 academic planning and tutoring center. I built and maintained their site in Next.js, including a registration flow and a schedule management system for parent-student-teacher communication. I later led a full site restructure — redesigning the site and rewriting its positioning to reflect the center's broader focus on academic planning, consulting, and college prep alongside tutoring.",
    url: "https://peakeducenter.com",
  },
  {
    id: 4,
    title: "Korean Language Foundation",
    period: "2025",
    type: "Freelance",
    stack: "Framer",
    description: "Korean Language Foundation advocates for Korean language education in U.S. schools. I redesigned their site in Framer — choosing the platform so non-technical staff could manage updates without a developer. The centerpiece was a custom animated U.S. map I built with custom code, visualizing school by school where Korean language programs currently exist. The goal was to make the org's advocacy mission tangible for visitors at a glance, rather than just stating it in text.",
  },
  {
    id: 5,
    title: "Matchday",
    period: "Personal Project, 2026",
    type: "Side Project",
    stack: "Next.js, TypeScript, Tailwind CSS",
    description: "Most football apps show you confirmed lineups after the fact — Matchday lets you build your own. Select any of the 20 Premier League clubs, choose a formation, and arrange real squad players across an interactive SVG pitch. Swap players into any position, toggle between a clean dot view and a kit view that renders each club's jersey in their actual colors, then share your custom lineup via a unique URL — no account or backend required. Squad data sourced from football-data.org.",
    url: "https://matchday-steel.vercel.app/",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(projects[0]);
  const [showAbout, setShowAbout] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [funMode, setFunMode] = useState(false);

  function selectProject(p) {
    setSelected(p);
    setShowAbout(false);
    setShowDetail(true);
  }

  function selectAbout() {
    setShowAbout(true);
    setShowDetail(true);
  }

  return (
    <div className={`flex flex-col h-dvh text-white text-[13px] animate-fadein ${funMode ? "bg-transparent" : "bg-[#111]"}`}>

      {funMode && (
        <div className="gradient-wash fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <header className="flex justify-between items-center px-5 py-3 border-b border-[#333] shrink-0">
        <div className="flex items-baseline gap-3">
          <span>Pia Kim</span>
          <span className="text-[11px] text-[#555] tracking-[0.05em]">Web Developer</span>
        </div>
        <button
          onClick={() => setFunMode(!funMode)}
          className="group relative text-[#666] hover:text-[#aaa] transition-colors duration-150"
        >
          <span className="animate-starspin text-[22px]">✦</span>
          <span className="absolute right-0 top-full mt-1 text-[11px] text-[#999] opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none">
            surprise
          </span>
        </button>
      </header>

      <div className="flex-1 min-h-0 overflow-hidden md:grid md:grid-cols-[260px_1fr]">

        <nav className={`border-r border-[#333] overflow-y-auto flex flex-col [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${showDetail ? "hidden md:flex" : "flex"}`}>
          <div className="flex-1">
            {projects.map((p) => {
              const isSelected = !showAbout && selected.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => selectProject(p)}
                  className="w-full text-left px-5 py-[0.65rem] border-b border-[#1f1f1f] text-[13px] block font-(family-name:--font-geist) truncate text-white hover:text-[#888] transition-colors duration-100"
                  style={{
                    backgroundImage: "linear-gradient(to right, white, white)",
                    backgroundSize: isSelected ? "100% 100%" : "0% 100%",
                    backgroundRepeat: "no-repeat",
                    transition: "background-size 0.25s ease-out, color 0.1s ease",
                    color: isSelected ? "black" : undefined,
                  }}
                >
                  {p.title}
                </button>
              );
            })}
          </div>
          <div className="border-t border-[#333]">
            <button
              onClick={selectAbout}
              className="w-full text-left px-5 py-[0.65rem] text-[13px] block font-(family-name:--font-geist) text-white hover:text-[#888] transition-colors duration-100"
              style={{
                backgroundImage: "linear-gradient(to right, white, white)",
                backgroundSize: showAbout ? "100% 100%" : "0% 100%",
                backgroundRepeat: "no-repeat",
                transition: "background-size 0.25s ease-out, color 0.1s ease",
                color: showAbout ? "black" : undefined,
              }}
            >
              About
            </button>
          </div>
        </nav>

        <main className={`overflow-y-auto px-5 py-6 md:px-10 md:py-8 ${showDetail ? "block" : "hidden md:block"}`}>
          <button
            onClick={() => setShowDetail(false)}
            className="md:hidden text-[12px] uppercase tracking-[0.08em] text-[#999] mb-6"
          >
            ← Back
          </button>

          {showAbout ? (
            <div className="max-w-130">
              <h1 className="text-[2.2rem] font-normal tracking-[-0.02em] leading-[1.15] mb-8">Info</h1>
              <p className="leading-[1.75] mb-8">
                I&apos;m a front-end developer whose work has mostly been with mission-driven organizations. My background is in education, where I worked as a program coordinator and teacher before moving into building the sites and tools that help organizations reach the people they serve. I care about building things that are thoughtful, accessible, and genuinely useful.
              </p>
              <div className="flex flex-col gap-3">
                <a href="mailto:pkim2320@gmail.com" className="w-fit border-b border-white pb-px no-underline text-white hover:text-[#666] hover:border-[#666] transition-colors duration-150">
                  Email
                </a>
                <a href="https://github.com/ruuuh20" target="_blank" rel="noreferrer" className="w-fit border-b border-white pb-px no-underline text-white hover:text-[#666] hover:border-[#666] transition-colors duration-150">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/pia-kim/" target="_blank" rel="noreferrer" className="w-fit border-b border-white pb-px no-underline text-white hover:text-[#666] hover:border-[#666] transition-colors duration-150">
                  LinkedIn
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="text-[11px] uppercase tracking-[0.08em] text-[#555] mb-2">
                {selected.period}
              </div>
              <h1 className="text-[2.2rem] font-normal tracking-[-0.02em] leading-[1.15] mb-2">{selected.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.stack.split(", ").map((tech, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-[0.06em] border border-[#333] text-[#666] px-2 py-px">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mb-6 max-w-130">
                {selected.description.split("\n\n").map((para, i) => (
                  <p key={i} className="leading-[1.75] mb-4 last:mb-0">{para}</p>
                ))}
              </div>
              {selected.url && (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.08em] no-underline text-white border-b border-white pb-px hover:text-[#666] hover:border-[#666] transition-colors duration-150"
                >
                  View Site <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              )}
            </>
          )}
        </main>

      </div>
    </div>
  );
}
