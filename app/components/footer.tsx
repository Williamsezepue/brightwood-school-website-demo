import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 sm:mt-16 bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div>
          <div className="text-xl sm:text-2xl font-bold text-rose-400">Brightwood</div>
          <div className="text-xs sm:text-sm text-slate-400 mt-2">Curiosity-first learning. Real projects. Community.</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <div className="font-semibold">Contact</div>
            <div className="text-sm text-slate-400 mt-2">+234 (0) 123 456 7890</div>
            <div className="text-sm text-slate-400">hello@brightwood.school</div>
          </div>

          <div>
            <div className="font-semibold">Visit</div>
            <div className="text-sm text-slate-400 mt-2">123 Learning St, Lagos</div>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <div className="text-sm sm:text-base font-semibold">Follow</div>
          <div className="flex gap-2 mt-3 sm:justify-end">
            <a aria-label="facebook" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700"><SiFacebook className="w-4 h-4" /></a>
            <a aria-label="instagram" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-linear-to-br hover:from-[#f58529] hover:via-[#dd2a7b] to-[#8134af]"><SiInstagram className="w-4 h-4" /></a>
            <a aria-label="twitter" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black"><SiX className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 sm:py-6 text-center text-xs sm:text-sm text-slate-500 px-4">© 2025 Brightwood — Designed by Blue Circle</div>
    </footer>
  );
}