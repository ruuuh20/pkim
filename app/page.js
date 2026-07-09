"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "NY Hangeul Museum Initiative",
    period: "2025 – Present",
    type: "Freelance",
    stack: "Next.js, Airtable",
    description: "The NY Hangeul Museum Initiative is a community-driven campaign to establish the first Korean language and culture museum in New York — and the site is its primary public face.\n\nBuilt a Next.js landing page integrated with Airtable to capture and manage supporter registrations, helping the campaign reach 579 supporters. Currently redesigning the site for the 2026 campaign with updated branding and exhibition-style content pages.",
    url: "https://nyhangeul.org",
  },
  {
    id: 2,
    title: "EduTogether",
    period: "2023 – Present",
    type: "Freelance",
    stack: "Next.js, Sanity CMS",
    description: "EduTogether bridges educational communities across cultures through school partnerships, student and educator exchanges, and cultural programs — connecting schools and institutions worldwide with Korea.\n\nDeveloping a bilingual English-Korean site in Next.js and Sanity CMS to communicate the organization's programs and drive inquiries from prospective partners. Features include student sign-ups for exchange trips and brochure downloads. Also support the organization beyond development — coordinating programs and handling Korean-English translation.",
    url: "https://edutogether.us",
  },
  {
    id: 3,
    title: "Peak Education Center",
    period: "2016 – 2023",
    type: "Web Developer",
    stack: "Next.js",
    description: "Peak Education Center is a learning center offering tutoring, test prep, small group classes, and educational consulting for students in grades 5–9.\n\nDeveloped and maintained the site in Next.js over several years as the center evolved — including a class registration system and schedule management that streamlined communication between parents, students, and teachers. Also worked as an instructor during this time, teaching literature-based reading and essay writing.",
    url: "https://peakeducenter.com",
  },
  {
    id: 4,
    title: "Korean Language Foundation",
    period: "2024 – 2025",
    type: "Freelance",
    stack: "Framer",
    description: "The Korean Language Foundation is a nonprofit dedicated to promoting Korean language and culture, with a long organizational history and a calendar of annual events anchored by their flagship gala.\n\nRebuilt an outdated website in Framer, bringing the organization's online presence back after years of inactivity. The site covers the organization's history, board members, programs, and events — with a focus on gala promotion and fundraising outreach. Updated seasonally around key annual events rather than on a continuous basis.",
    url: "https://klfusa.org",
  },
  {
    id: 5,
    title: "Matchday",
    period: "Personal Project",
    type: "Side Project",
    stack: "Next.js, TypeScript, Tailwind CSS",
    description: "Matchday is a Premier League lineup visualizer built out of a genuine love for football. The idea was simple: most football apps show you confirmed lineups after the fact — Matchday lets you build your own.\n\nSelect any of the 20 Premier League clubs, choose a formation, and arrange real squad players across an interactive SVG pitch. Swap players into any position, toggle between a clean dot view and a kit view that renders each club's jersey in their actual colors, then share your custom lineup via a unique URL — no account or backend required.",
    url: "https://matchday-steel.vercel.app/",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(projects[0]);
  const [showDetail, setShowDetail] = useState(false);

  function selectProject(p) {
    setSelected(p);
    setShowDetail(true);
  }

  return (
    <div className="flex flex-col h-dvh bg-white text-black text-[13px]">

      <header className="flex justify-between items-center px-5 py-3 border-b border-black shrink-0">
        <span>Pia Kim</span>
        <Link href="/about" className="no-underline hover:underline text-black">About</Link>
      </header>

      <div className="flex-1 min-h-0 overflow-hidden md:grid md:grid-cols-[260px_1fr]">

        <nav className={`border-r border-black overflow-y-auto ${showDetail ? "hidden md:block" : "block"}`}>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => selectProject(p)}
              className={[
                "w-full text-left px-5 py-[0.65rem] border-b border-[#e8e8e8] text-[13px] cursor-pointer transition-colors duration-100 block font-(family-name:--font-geist) overflow-hidden text-ellipsis whitespace-nowrap",
                selected.id === p.id
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:bg-[#f5f5f5]",
              ].join(" ")}
            >
              {p.title}
            </button>
          ))}
        </nav>

        <main className={`overflow-y-auto px-5 py-6 md:px-10 md:py-8 ${showDetail ? "block" : "hidden md:block"}`}>
          <button
            onClick={() => setShowDetail(false)}
            className="md:hidden text-[11px] uppercase tracking-[0.08em] text-[#888] mb-6 cursor-pointer"
          >
            ← Back
          </button>
          <div className="text-[11px] uppercase tracking-[0.08em] text-[#888] mb-2">
            {selected.period}
          </div>
          <h1 className="text-[1.6rem] font-normal tracking-[-0.02em] mb-1">{selected.title}</h1>
          <p className="text-[11px] text-[#888] mb-6 tracking-[0.03em]">{selected.stack}</p>
          <div className="mb-6 max-w-130">
            {selected.description.split("\n\n").map((para, i) => (
              <p key={i} className="leading-[1.75] mb-4 last:mb-0">{para}</p>
            ))}
          </div>
          <a
            href={selected.url}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.08em] no-underline text-black border-b border-black pb-[1px] hover:text-[#888] hover:border-[#888] transition-colors duration-150"
          >
            View Site →
          </a>
        </main>

      </div>
    </div>
  );
}
