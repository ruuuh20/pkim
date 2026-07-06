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
    description: "Built a Next.js landing page with Airtable integration that achieved a 579-supporter campaign goal. Currently redesigning the site and launching a new annual campaign for 2026.",
    url: "https://nyhangeul.org",
  },
  {
    id: 2,
    title: "EduTogether",
    period: "2023 – Present",
    type: "Freelance",
    stack: "Next.js, Sanity CMS",
    description: "Developing a bilingual site for an international educational exchange nonprofit. Provide Korean–English translations and ongoing content updates.",
    url: "https://edutogether.us",
  },
  {
    id: 3,
    title: "Peak Education Center",
    period: "2016 – 2023",
    type: "Web Developer",
    stack: "Next.js",
    description: "Developed and maintained the organization's website, including registration integration and a schedule management system to streamline parent-student-teacher communication.",
    url: "https://peakeducenter.com",
  },
  {
    id: 4,
    title: "Korean Language Foundation",
    period: "2024 – 2025",
    type: "Freelance",
    stack: "Framer",
    description: "Modernized the organizational website, improving online presence for annual gala promotion and community outreach.",
    url: "https://klfusa.org",
  },
  {
    id: 5,
    title: "Matchday",
    period: "Personal Project",
    type: "Side Project",
    stack: "Next.js, TypeScript, Tailwind CSS",
    description: "Premier League lineup visualizer with animated formation switching, kit view toggle, and real squad data for all 20 clubs. Users can swap players into any position and share their custom lineup via a unique URL.",
    url: "https://matchday-steel.vercel.app/",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="flex flex-col h-screen bg-white text-black text-[13px]">

      <header className="flex justify-between items-center px-5 py-3 border-b border-black shrink-0">
        <span>Pia Kim</span>
        <Link href="/about" className="no-underline hover:underline text-black">About</Link>
      </header>

      <div className="grid flex-1 min-h-0 overflow-hidden" style={{ gridTemplateColumns: "260px 1fr" }}>

        <nav className="border-r border-black overflow-y-auto">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
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

        <main className="overflow-y-auto px-10 py-8">
          <div className="text-[11px] uppercase tracking-[0.08em] text-[#888] mb-2">
            {selected.period}
          </div>
          <h1 className="text-[1.6rem] font-normal tracking-[-0.02em] mb-1">{selected.title}</h1>
          <p className="text-[11px] text-[#888] mb-6 tracking-[0.03em]">{selected.stack}</p>
          <p className="leading-[1.75] mb-6 max-w-130">{selected.description}</p>
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
