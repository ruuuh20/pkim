import Link from "next/link";

export const metadata = {
  title: "About — Pia Kim",
};

export default function About() {
  return (
    <div className="flex flex-col h-screen bg-white text-black text-[13px]">

      <header className="flex justify-between items-center px-5 py-3 border-b border-black shrink-0">
        <Link href="/" className="no-underline hover:underline text-black">Pia Kim</Link>
        <span>About</span>
      </header>

      <div className="px-5 py-8 max-w-130">
        <p className="leading-[1.75] mb-8">
          I&apos;m a front-end developer based in New York. I&apos;ve spent the past several
          years building websites for nonprofits and small organizations doing work
          that matters. I care about attention to detail, usability, and building
          something thoughtful for the people using it.
        </p>
        <div className="flex flex-col gap-3 text-[13px]">
          <a href="mailto:" className="w-fit border-b border-black pb-[1px] no-underline text-black hover:text-[#888] hover:border-[#888] transition-colors duration-150">
            Email
          </a>
          <a href="" target="_blank" rel="noreferrer" className="w-fit border-b border-black pb-[1px] no-underline text-black hover:text-[#888] hover:border-[#888] transition-colors duration-150">
            GitHub
          </a>
          <a href="" target="_blank" rel="noreferrer" className="w-fit border-b border-black pb-[1px] no-underline text-black hover:text-[#888] hover:border-[#888] transition-colors duration-150">
            LinkedIn
          </a>
        </div>
      </div>

    </div>
  );
}
