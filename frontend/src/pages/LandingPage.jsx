import { useState } from "react";

// ── Warna brand dari Figma ──────────────────────────────────────
// Primary red  : #A20303
// Dark red     : #7A0202
// Light pink bg: #F9E8E8
// Text dark    : #1A1A1A
// ────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Rekomendasi Pekerjaan Pintar",
    desc: "Dapatkan lowongan kerja yang sesuai dengan skill dan minatmu.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="8" width="28" height="32" rx="3" fill="#A20303" opacity=".15"/>
        <rect x="10" y="12" width="20" height="3" rx="1.5" fill="#A20303"/>
        <rect x="10" y="18" width="16" height="3" rx="1.5" fill="#A20303" opacity=".6"/>
        <rect x="10" y="24" width="12" height="3" rx="1.5" fill="#A20303" opacity=".4"/>
        <circle cx="36" cy="36" r="8" fill="#A20303"/>
        <path d="M33 36l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "AI CV Review",
    desc: "Perbaiki CV kamu dengan saran otomatis agar lebih menarik bagi recruiter.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="6" width="32" height="36" rx="4" fill="#A20303" opacity=".12"/>
        <rect x="14" y="13" width="20" height="2.5" rx="1.25" fill="#A20303"/>
        <rect x="14" y="19" width="15" height="2.5" rx="1.25" fill="#A20303" opacity=".5"/>
        <rect x="14" y="25" width="18" height="2.5" rx="1.25" fill="#A20303" opacity=".35"/>
        <circle cx="34" cy="34" r="7" fill="#A20303"/>
        <path d="M31.5 34l1.5 1.5L36 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Khusus Entry-Level",
    desc: "Dirancang khusus untuk fresh graduate tanpa pengalaman kerja.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="18" r="8" fill="#A20303" opacity=".15"/>
        <circle cx="24" cy="18" r="5" fill="#A20303" opacity=".5"/>
        <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#A20303" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 42l2-4 2 4" fill="#A20303"/>
      </svg>
    ),
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Unggah CV",
    desc: "Unggah CV kamu dalam format PDF dengan mudah.",
  },
  {
    step: "02",
    title: "Analisis AI",
    desc: "Sistem akan membaca dan menganalisis skill serta pengalamanmu.",
  },
  {
    step: "03",
    title: "Temukan Kerja",
    desc: "Temukan pekerjaan yang sesuai dengan profilmu secara otomatis.",
  },
];

const jobPlaceholders = Array(6).fill(null);

// ── NAVBAR ───────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#A20303] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" fill="white" opacity=".3"/>
              <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-[#1A1A1A] tracking-wide text-sm">WORKAHOLIC</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#" className="font-medium text-[#A20303]">Beranda</a>
          <a href="#jobs" className="hover:text-[#A20303] transition-colors">Cari Loker</a>
          <a href="#" className="hover:text-[#A20303] transition-colors">Analisis CV</a>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#A20303] transition-colors">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-500">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="px-4 py-1.5 bg-[#A20303] text-white text-sm font-medium rounded-full hover:bg-[#7A0202] transition-colors">
            Masuk
          </button>
          <button className="px-4 py-1.5 border border-[#A20303] text-[#A20303] text-sm font-medium rounded-full hover:bg-[#A20303] hover:text-white transition-colors">
            Daftar
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-500">
            ID
            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="pt-16 bg-gradient-to-br from-[#F9E8E8] via-[#FDF3F3] to-white min-h-[520px] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 flex items-center justify-between gap-12">
        {/* Text */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4">
            Mulai Karier Pertamamu<br />
            dengan Lebih Pasti
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
            Upload CV kamu dan biarkan AI menganalisis serta membantu menemukan
            pekerjaan entry-level yang paling cocok dengan skill dan potensimu.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="px-6 py-3 bg-[#A20303] text-white font-semibold rounded-lg hover:bg-[#7A0202] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm">
              Upload CV Sekarang
            </button>
            <button className="px-6 py-3 bg-[#F9E8E8] text-[#A20303] font-semibold rounded-lg hover:bg-[#f0d0d0] transition-all text-sm border border-[#e8c0c0]">
              Lihat Lowongan
            </button>
          </div>
        </div>

        {/* Ilustrasi */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="w-80 h-72 bg-gradient-to-br from-[#F0D0D0] to-[#F9E8E8] rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#A20303] opacity-10"></div>
            <div className="absolute bottom-8 left-6 w-10 h-10 rounded-full bg-[#A20303] opacity-15"></div>
            <svg viewBox="0 0 200 180" fill="none" className="w-64 h-56">
              <rect x="30" y="130" width="140" height="8" rx="4" fill="#A20303" opacity=".2"/>
              <rect x="50" y="138" width="8" height="30" rx="4" fill="#A20303" opacity=".15"/>
              <rect x="142" y="138" width="8" height="30" rx="4" fill="#A20303" opacity=".15"/>
              <rect x="55" y="75" width="90" height="58" rx="6" fill="#A20303" opacity=".15"/>
              <rect x="60" y="80" width="80" height="48" rx="4" fill="#A20303" opacity=".25"/>
              <rect x="65" y="85" width="70" height="38" rx="3" fill="white" opacity=".6"/>
              <rect x="70" y="90" width="30" height="4" rx="2" fill="#A20303" opacity=".4"/>
              <rect x="70" y="97" width="50" height="3" rx="1.5" fill="#A20303" opacity=".2"/>
              <rect x="70" y="103" width="40" height="3" rx="1.5" fill="#A20303" opacity=".2"/>
              <rect x="95" y="133" width="10" height="12" rx="2" fill="#A20303" opacity=".2"/>
              <rect x="80" y="144" width="40" height="5" rx="2.5" fill="#A20303" opacity=".15"/>
              <circle cx="148" cy="68" r="16" fill="#A20303" opacity=".2"/>
              <circle cx="148" cy="62" r="9" fill="#A20303" opacity=".4"/>
              <path d="M134 95c0-7.732 6.268-14 14-14h1c7.732 0 14 6.268 14 14v35h-29V95z" fill="#A20303" opacity=".25"/>
              <ellipse cx="148" cy="130" rx="18" ry="6" fill="#A20303" opacity=".15"/>
            </svg>
            {/* Badge notif */}
            <div className="absolute top-3 left-3 bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-700">CV Dianalisis!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FITUR ────────────────────────────────────────────────────────
function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A1A1A] mb-12">
          Fitur Unggulan untuk Kariemu
        </h2>
        <div className="bg-gradient-to-br from-[#F9E8E8] to-[#FDF3F3] rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-50"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#A20303] text-base mb-3 leading-tight">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ─────────────────────────────────────────────────
function HowItWorksSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
          Bagaimana Workaholic Membantumu?
        </h2>

        {/* Card */}
        <div className="bg-[#A20303] rounded-3xl p-10 md:p-14 text-white min-h-[200px] flex flex-col items-center justify-center shadow-lg transition-all duration-300">
          <div className="text-6xl font-black opacity-20 mb-2 leading-none">
            {howItWorks[active].step}
          </div>
          <h3 className="text-xl font-bold mb-3">{howItWorks[active].title}</h3>
          <p className="text-white/80 text-base max-w-xs leading-relaxed">
            {howItWorks[active].desc}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {howItWorks.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-[#A20303] w-8" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() =>
              setActive((p) => (p === 0 ? howItWorks.length - 1 : p - 1))
            }
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#A20303] hover:text-[#A20303] transition-colors text-gray-400"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() =>
              setActive((p) => (p === howItWorks.length - 1 ? 0 : p + 1))
            }
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#A20303] hover:text-[#A20303] transition-colors text-gray-400"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ── JOB LISTING PREVIEW ──────────────────────────────────────────
function JobListingSection() {
  return (
    <section id="jobs" className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Filter */}
        <div className="flex justify-end gap-3 mb-6">
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white focus:outline-none focus:border-[#A20303] cursor-pointer">
            <option>Tipe Kerja</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white focus:outline-none focus:border-[#A20303] cursor-pointer">
            <option>Semua Pendidikan</option>
            <option>SMA/SMK</option>
            <option>D3</option>
            <option>S1</option>
          </select>
        </div>

        {/* Grid card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {jobPlaceholders.map((_, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#A20303]/30 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-200 mb-4 group-hover:bg-[#F9E8E8] transition-colors"></div>
              <div className="h-3.5 bg-gray-200 rounded-full mb-2 w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded-full mb-1 w-1/2"></div>
              <div className="h-3 bg-gray-100 rounded-full w-2/3 mb-4"></div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-gray-100 rounded-full"></div>
                <div className="h-6 w-14 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-sm text-[#A20303] font-medium hover:underline">
            Lihat lebih banyak →
          </button>
        </div>
      </div>
    </section>
  );
}

// ── CTA SECTION ──────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#A20303] to-[#7A0202]">
      <div className="max-w-3xl mx-auto px-6 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Siap Memulai Kariermu?
        </h2>
        <p className="text-white/80 text-base mb-8">
          Upload CV sekarang dan temukan pekerjaan yang tepat untukmu.
        </p>
        <button className="px-8 py-3 bg-white text-[#A20303] font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
          Upload CV Sekarang
        </button>
      </div>
    </section>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1A0000] text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#A20303] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold tracking-wide text-sm">WORKAHOLIC</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Lowongan</a>
            <a href="#" className="hover:text-white transition-colors">Upload CV</a>
            <a href="#" className="hover:text-white transition-colors">Analisis</a>
            <a href="#" className="hover:text-white transition-colors">Wishlist</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © 2026 Workaholic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ── MAIN EXPORT ──────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <JobListingSection />
      <CTASection />
      <Footer />
    </div>
  );
}