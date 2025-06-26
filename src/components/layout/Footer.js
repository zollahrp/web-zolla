import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#263650] text-white pt-20 px-8 lg:px-20">
      {/* Atas */}
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-4 gap-10 pb-10 border-b border-white/20">
        {/* Kolom 1: Title & Desc */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <p className="text-sm text-white/70">
            Terima kasih sudah berkunjung ke website ini. Silakan hubungi saya
            atau ikuti media sosial untuk kolaborasi lebih lanjut.
          </p>
          <div className="flex gap-4 text-xl mt-4">
            <a href="https://instagram.com/zollahrp" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/zolla-perdana-putra-harahap"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/zollahrp" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="text-lg font-semibold text-[#FBAA06] mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "Services",
              "About",
              "Skills",
              "Portfolio",
              "Pencapaian",
              "Blogs",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-[#FBAA06] mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:zollahrp@gmail.com">zollahrp@gmail.com</a>
            </li>
            <li>
              <a href="https://zolla-portfolio.com" target="_blank">
                zolla-portfolio.com
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-[#FBAA06] mb-4">
            Get the latest information
          </h4>
          <form className="flex items-center border border-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 text-black text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#FD853A] px-4 h-full flex items-center justify-center"
            >
              <FaArrowRight className="text-white" />
            </button>
          </form>
        </div>
      </div>

      {/* Bawah */}
      <div className="max-w-screen-xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 gap-2">
        <p>© {new Date().getFullYear()} Zolla. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            User Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
