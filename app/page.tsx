"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  X,
  Heart,
} from "lucide-react";
import { Option } from "@/app/components/tsx-collections";

const PROGRAMS = [
  {
    id: "stem-excellence",
    title: "STEM Lab & Innovation",
    level: "Secondary",
    students: 240,
    rating: 4.9,
    img: "/images/demo/brightwood/stem-lab.webp",
    category: "Science",
    description: "Project-led learning: robots, AI and experiments.",
    features: ["Makerspace", "Internships", "Competitions"],
  },
  {
    id: "arts-humanities",
    title: "Creative Arts Studio",
    level: "All Levels",
    students: 180,
    rating: 4.7,
    img: "/images/demo/brightwood/creative-art.webp",
    category: "Arts",
    description: "Studio art, performance and critical theory.",
    features: ["Studios", "Exhibitions", "Performances"],
  },
  {
    id: "sports-wellness",
    title: "Sports & Wellness",
    level: "All Levels",
    students: 320,
    rating: 4.8,
    img: "/images/demo/brightwood/sports.webp",
    category: "Athletics",
    description: "Elite coaching, fitness and team programs.",
    features: ["Gym", "Coaches", "Nutrition"],
  },
];

const enrollmentData = [
  { name: "2020", value: 450 },
  { name: "2021", value: 520 },
  { name: "2022", value: 580 },
  { name: "2023", value: 620 },
  { name: "2024", value: 680 },
  { name: "2025", value: 720 },
];

const gradeDistribution = [
  { name: "A+", value: 28 },
  { name: "A", value: 35 },
  { name: "B+", value: 22 },
  { name: "B", value: 15 },
];

const COLORS = ["#06b6d4", "#f97316", "#ef4444", "#8b5cf6"];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedProgram, setSelectedProgram] = useState<typeof PROGRAMS[0] | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", inquiry: "", message: "" });
  const [contactSuccess, setContactSuccess] = useState(false);

  const categories = useMemo(() => Array.from(new Set(PROGRAMS.map((p) => p.category))), []);

  function toggleFavorite(id: string) {
    setFavorites((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  }

  function handleContact(e: React.FormEvent) {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 2500);
    setContactForm({ name: "", email: "", phone: "", inquiry: "", message: "" });
  }

  const filteredPrograms = PROGRAMS.filter((p) => (activeCategory ? p.category === activeCategory : true));

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-[#fff6f0] via-white to-[#f0fcff]">
      {/* slim top bar */}
      <div className="fixed left-0 right-0 top-0 h-1 bg-linear-to-r from-teal-400 via-cyan-300 to-rose-300 z-50" />

      {/* hero: responsive split layout */}
      <section className="mt-4 sm:mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          <div className="col-span-1 md:col-span-1 lg:col-span-7">
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-rose-600 leading-tight">
              Learning reimagined. Bold, creative, humane.
            </motion.h1>

            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-xl">
              Brightwood blends design thinking, social-emotional learning and real-world projects so students graduate curious, confident and civic-minded.
            </motion.p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#programs" className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-rose-500 text-white font-semibold text-center text-sm sm:text-base shadow hover:brightness-105 transition">Explore Programs</a>
              <a href="#apply" className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-teal-400 text-teal-600 font-semibold text-center text-sm sm:text-base hover:bg-teal-50 transition">Apply</a>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
                <div className="text-xs sm:text-sm text-slate-500">Student Projects</div>
                <div className="mt-2 text-xl sm:text-2xl font-bold text-rose-600">120+</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
                <div className="text-xs sm:text-sm text-slate-500">Global Partners</div>
                <div className="mt-2 text-xl sm:text-2xl font-bold text-teal-500">18</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
                <div className="text-xs sm:text-sm text-slate-500">Class Size</div>
                <div className="mt-2 text-xl sm:text-2xl font-bold text-indigo-600">14</div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-5 relative">
            <div className="absolute -right-16 sm:-right-20 -top-8 sm:-top-12 w-32 sm:w-40 h-32 sm:h-40 bg-rose-100 rounded-full mix-blend-multiply opacity-60 blur-xl transform rotate-12" />
            <div className="absolute -left-12 sm:-left-16 bottom-0 w-40 sm:w-56 h-40 sm:h-56 bg-teal-100 rounded-full mix-blend-multiply opacity-60 blur-2xl" />

            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-white">
              <Image src="/images/demo/brightwood/hero.webp" alt="students" width={700} height={560} className="object-cover w-full h-auto" />
            </div>

            <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm border border-gray-100">
                <div className="text-xs text-slate-400">Next Open Day</div>
                <div className="text-sm font-bold mt-1">Sat, Dec 20</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm border border-gray-100">
                <div className="text-xs text-slate-400">Visit</div>
                <div className="text-sm font-bold mt-1">Book a tour →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* main content with responsive layout */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 md:gap-8 mt-8 sm:mt-12">
        {/* sidebar - hidden on sm, visible md+ */}
        <aside className="hidden md:block md:col-span-1 lg:col-span-3">
          <div className="sticky top-39 space-y-4">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Admissions</div>
                  <div className="font-bold text-base sm:text-lg text-rose-600">Open for 2026</div>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-400" />
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-600">Early decisions, rolling admissions and scholarships.</div>
              <a href="#apply" className="mt-4 inline-block px-4 py-2 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-sm">Apply Now</a>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-sm text-slate-600">Newsletter</div>
              <div className="mt-3">
                <input className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm" placeholder="Email address" />
                <button className="mt-3 w-full px-3 py-2 rounded-lg bg-teal-500 text-white text-sm">Subscribe</button>
              </div>
            </div>
          </div>
        </aside>

        {/* main section */}
        <section className="col-span-1 md:col-span-2 lg:col-span-9 space-y-8 sm:space-y-12">
          {/* Programs filter row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-sm font-semibold">Programs</div>
              <div className="flex gap-2 flex-wrap">
                <button onClick={() => setActiveCategory(null)} className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${activeCategory === null ? "bg-rose-600 text-white" : "bg-white border"}`}>All</button>
                {categories.map((c) => (
                  <button key={c} onClick={() => setActiveCategory((s) => (s === c ? null : c))} className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${activeCategory === c ? "bg-rose-600 text-white" : "bg-white border"}`}>{c}</button>
                ))}
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-500">Showing {filteredPrograms.length}</div>
          </div>

          {/* program cards: responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredPrograms.map((p) => (
              <motion.article key={p.id} whileHover={{ y: -4 }} className="bg-linear-to-br from-white to-[#fff7f6] rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-28 h-32 sm:h-28 rounded-lg overflow-hidden shrink-0">
                  <Image src={p.img} alt={p.title} width={160} height={160} className="object-cover w-full h-full" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-rose-600">{p.category}</div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">{p.title}</h3>
                      <div className="text-xs text-slate-500 mt-1">{p.level} • {p.students} students</div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button onClick={() => toggleFavorite(p.id)} className={`p-2 rounded-md text-xs sm:text-sm ${favorites.has(p.id) ? "bg-rose-500 text-white" : "bg-white border"}`}>
                        <Heart className="w-4 h-4" />
                      </button>
                      <div className="text-xs sm:text-sm font-bold text-rose-600">{p.rating}★</div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600">{p.description}</p>

                  <div className="mt-4 flex items-center gap-2 sm:gap-3 flex-wrap">
                    <button onClick={() => setSelectedProgram(p)} className="px-3 sm:px-4 py-2 rounded-full bg-rose-600 text-white font-semibold text-sm">Discover</button>
                    <a href="#apply" className="px-3 sm:px-4 py-2 rounded-full border text-slate-700 text-sm">Apply</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Impact / data visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs sm:text-sm text-slate-500">Enrollment</div>
                  <div className="text-base sm:text-lg font-bold text-slate-800">Growing community</div>
                </div>
                <div className="text-xs text-slate-400 hidden sm:block">Updated 2025</div>
              </div>

              <div style={{ width: "100%", height: 180 }} className="mt-4 sm:mt-6">
                <ResponsiveContainer>
                  <BarChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs sm:text-sm text-slate-500">Grade Spread</div>
                  <div className="text-base sm:text-lg font-bold text-slate-800">Recent cohort</div>
                </div>
                <div className="text-xs text-slate-400 hidden sm:block">2024–25</div>
              </div>

              <div style={{ width: "100%", height: 180 }} className="mt-4 sm:mt-6">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={gradeDistribution} dataKey="value" cx="50%" cy="50%" outerRadius={50} label={{ fontSize: 11 }}>
                      {gradeDistribution.map((entry, idx) => (
                        <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* people / staff */}
          <div id="people" className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">People</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Dr. Adekunle M.", role: "Head of Science", focus: "Physics • Research", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
                { name: "Prof. Zainab A.", role: "English", focus: "Literature • Writing", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
                { name: "Mr. Chisom E.", role: "PE Director", focus: "Sports Science", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
              ].map((p) => (
                <div key={p.name} className="bg-white rounded-lg sm:rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative mx-auto rounded-full overflow-hidden">
                    <Image src={p.img} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="mt-3 font-bold text-sm sm:text-base">{p.name}</div>
                  <div className="text-xs sm:text-sm text-slate-500">{p.role}</div>
                  <div className="mt-3 text-xs text-slate-400">{p.focus}</div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2 rounded-md bg-white border border-gray-400 text-xs sm:text-sm">Email</button>
                    <button className="flex-1 py-2 rounded-md bg-rose-50 text-rose-600 text-xs sm:text-sm">Profile</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* apply / contact form */}
          <div id="apply" className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
              <div>
                <div className="text-xs sm:text-sm text-slate-500">Ready to join?</div>
                <div className="text-lg sm:text-xl font-bold text-slate-800">Apply or request info</div>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 hidden sm:block">Fast • Friendly • Flexible</div>
            </div>

            <form onSubmit={handleContact} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} placeholder="Your name" className="p-2 sm:p-3 rounded-md border text-sm h-10" />
              <input required type="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} placeholder="Email" className="p-2 sm:p-3 rounded-md border text-sm h-10" />
              <input required value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} placeholder="Phone" className="p-2 sm:p-3 rounded-md border text-sm h-10" />
              <div className='flex flex-1 shrink-0 z-35'>
                <Option
                  title=""
                  initialValue={{ value: contactForm.inquiry === '' ? 'Choose Program' : contactForm.inquiry}}
                  options={PROGRAMS.map(p => ({ value: p.title }))}
                  sendBack={(e) => setContactForm({ ...contactForm, inquiry: e.value })}
                />
              </div>
              <textarea required value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} placeholder="Tell us more" rows={4} className="p-2 sm:p-3 rounded-md border text-sm sm:col-span-2" />
              <div className="sm:col-span-2 flex items-center gap-3">
                <button type="submit" className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-rose-600 text-white font-semibold text-sm">Send</button>
                {contactSuccess && <div className="text-xs sm:text-sm text-teal-600 font-semibold">✓ We&rsquo;ll be in touch</div>}
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* program modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95 }} className="w-full max-w-2xl bg-white rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="relative h-40 sm:h-56">
                <Image src={selectedProgram.img} alt={selectedProgram.title} fill className="object-cover" />
                <button onClick={() => setSelectedProgram(null)} className="absolute right-3 sm:right-4 top-3 sm:top-4 bg-white p-2 rounded-md shadow"><X className="w-4 h-4" /></button>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">{selectedProgram.title}</h3>
                    <div className="text-xs sm:text-sm text-slate-500">{selectedProgram.level} • {selectedProgram.category}</div>
                  </div>
                  <div className="text-rose-600 font-bold text-sm sm:text-base">{selectedProgram.rating}★</div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-600">{selectedProgram.description}</p>

                <div className="mt-4 flex gap-2 flex-wrap">
                  {selectedProgram.features.map((f) => <span key={f} className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs sm:text-sm">{f}</span>)}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#apply" onClick={() => setSelectedProgram(null)} className="px-4 py-2 rounded-full bg-rose-600 text-white text-center text-sm">Apply</a>
                  <button onClick={() => setSelectedProgram(null)} className="px-4 py-2 rounded-full border text-sm">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}