export default function HelloBox() {
  return (
    <div className="relative inline-block px-8 py-2 text-[#263650] font-semibold">
      {/* Teks */}
      <span className="relative z-10 text-lg">Hello There!</span>

      {/* Garis Horizontal */}
      <span className="absolute inset-0 border border-[#263650] z-0"></span>

      {/* Kotak Kecil di 4 Sudut */}
      {/* Kiri Atas */}
      <div className="w-3 h-3 bg-[#FBAA06] absolute top-[-6px] left-[-6px] z-20 border border-[#263650]" />
      {/* Kanan Atas */}
      <div className="w-3 h-3 bg-[#FBAA06] absolute top-[-6px] right-[-6px] z-20 border border-[#263650]" />
      {/* Kiri Bawah */}
      <div className="w-3 h-3 bg-[#FBAA06] absolute bottom-[-6px] left-[-6px] z-20 border border-[#263650]" />
      {/* Kanan Bawah */}
      <div className="w-3 h-3 bg-[#FBAA06] absolute bottom-[-6px] right-[-6px] z-20 border border-[#263650]" />
    </div>
  );
}
