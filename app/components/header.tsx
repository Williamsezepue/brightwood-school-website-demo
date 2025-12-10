"use client";

import { useState } from "react";
import { Globe, GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky z-40 top-0 px-4 sm:px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-md flex items-center justify-center border border-gray-100">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-extrabold text-rose-600">Brightwood</div>
            <div className="text-xs text-slate-500 hidden sm:block">A different kind of school</div>
          </div>
        </div>

        <nav className="hidden mdlg:flex items-center gap-4 mdlg:gap-6 text-sm text-slate-700">
          <a href="#programs" className="hover:text-rose-500 transition">Programs</a>
          <a href="#impact" className="hover:text-rose-500 transition">Impact</a>
          <a href="#people" className="hover:text-rose-500 transition">People</a>
          <a href="#apply" className="hover:text-rose-500 transition">Apply</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden mdlg:inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-sm">
            <Globe className="w-4 h-4 text-teal-500" /> Tour
          </button>

          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="p-2 rounded-lg bg-white shadow-sm mdlg:hidden"
            aria-label="toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mdlg:hidden max-w-6xl mx-auto bg-white rounded-xl mt-2 p-3 sm:p-4 shadow-lg border border-gray-100 mb-2">
            <div className="flex flex-col gap-1 sm:gap-2">
              <a href="#programs" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 text-sm">Programs</a>
              <a href="#impact" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 text-sm">Impact</a>
              <a href="#people" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 text-sm">People</a>
              <a href="#apply" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 text-sm">Apply</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function NavLink({ href, closeMenu, children }: { href: string; closeMenu?: ()=> void; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group w-fit" onClick={closeMenu}>
      <span className="font-medium">{children}</span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme5 transition-all group-hover:w-full" />
    </Link>
  );
}
