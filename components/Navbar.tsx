export default function Navbar() {
  return (
    <>
      <nav className="relative z-10 flex items-center justify-between border-b-2 border-dashed border-[#2B2622]/15 px-6 py-5 md:px-12">
        <a href="/" className="font-script text-3xl">
          Muehehe
        </a>

        <ul className="flex gap-6 text-sm font-medium text-[#2B2622]/70">
          <li>
            <a href="/" className="hover:text-[#2B2622]">
              Home
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-[#2B2622]">
              Gallery
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-[#2B2622]">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-wrap gap-2">
        {["Illustrator", "UI/UX", "Frontend Dev"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#2B2622]/20 px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}