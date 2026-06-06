import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#030303] text-white p-6 md:p-12 font-space text-xs md:text-sm border-t border-neutral-900 mt-auto flex flex-col justify-between" style={{ minHeight: "30vh" }}>
      <div className="flex flex-col gap-2">
        <p className="text-neutral-500">SquarDox Studio</p>
        <p className="text-neutral-500">Creating since 2025</p>
        <br/>
        <div className="flex items-center text-sd-lime font-bold text-lg md:text-2xl mt-4">
          Ready to build something?
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-8 border-t border-neutral-900 text-neutral-400">
        <div className="flex flex-col gap-2">
           <span className="text-white uppercase mb-2 font-space">Sitemap</span>
           <Link to="/" className="hover:text-sd-lime transition-colors">Manifesto</Link>
           <Link to="/experiments" className="hover:text-sd-lime transition-colors">Experiments</Link>
           <Link to="/capabilities" className="hover:text-sd-lime transition-colors">Capabilities</Link>
           <Link to="/collective" className="hover:text-sd-lime transition-colors">Collective</Link>
           <Link to="/archive" className="hover:text-sd-lime transition-colors">Archive</Link>
           <Link to="/contact" className="hover:text-sd-lime transition-colors">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
           <span className="text-white uppercase mb-2 font-space">Socials</span>
           <a href="#" className="hover:text-sd-lime transition-colors">Instagram</a>
           <a href="#" className="hover:text-sd-lime transition-colors">Twitter (X)</a>
           <a href="#" className="hover:text-sd-lime transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-sd-lime transition-colors">Read.cv</a>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
           <span className="text-white uppercase mb-2 font-space">Headquarters</span>
           <p>Digital native.</p>
           <p>Operating worldwide.</p>
           <br/>
           <p className="text-neutral-600 mt-auto uppercase text-[10px]">© {new Date().getFullYear()} SquarDox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
