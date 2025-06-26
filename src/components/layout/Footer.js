import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#263650] text-white pt-0 px-8 lg:px-20">
      {/* Atas */}
      {/* <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-white/20">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Terima kasih sudah berkunjung ke website ini. Silakan hubungi saya
            atau ikuti media sosial untuk kolaborasi lebih lanjut.
          </p>
          <div className="flex gap-4 text-xl mt-2">
            <a href="https://instagram.com/zollahrp" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/zolla" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/zollahrp" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div> */}

      {/* Kolom 2 */}
      {/* <div className="text-center">
          <h4 className="text-lg font-semibold text-[#FBAA06] mb-3">
            Navigation
          </h4>
          <ul className="space-y-1 text-sm leading-tight">
            {[
              "Home",
              "Services",
              "About",
              "Skills",
              "Portfolio",
              "Awards",
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
        </div> */}

      {/* Kolom 3 (Contact + Newsletter) */}
      {/* <div className="space-y-4 text-right">
          <div>
            <h4 className="text-lg font-semibold text-[#FBAA06] mb-2">
              Contact
            </h4>
            <ul className="text-sm space-y-1">
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
        </div> */}

      {/* Bawah */}
      <div className="max-w-screen-xl mx-auto py-4 flex flex-col md:flex-row justify-center items-center text-xs text-white/70 gap-2">
        <p className="flex items-center gap-2 text-center">
          © {new Date().getFullYear()} Zolla Perdana Putra Harahap
          <span className="hidden md:inline-block">|</span>
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
