import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const linkCls = ({ isActive }) =>
    [
      "px-3 py-1.5 rounded-full text-sm font-medium transition",
      isActive
        ? "bg-white text-[#0055A4] shadow"
        : "text-white/90 hover:bg-white/10",
    ].join(" ");

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="bg-[#0055A4] text-white sticky top-0 z-40 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo / Nome da empresa */}
        <Link to="/" className="text-lg font-semibold hover:opacity-90">
          Renafer Comercial
        </Link>

        {/* Botão mobile */}
        <button
          className="md:hidden p-3 rounded hover:bg-white/10"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-2">
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <NavLink to="/sobre" className={linkCls}>Sobre</NavLink>
          <NavLink to="/servicos" className={linkCls}>Serviços</NavLink>
          <NavLink to="/projetos" className={linkCls}>Projetos</NavLink>
          <NavLink to="/contato" className={linkCls}>Contato</NavLink>
        </nav>
      </div>

      {/* Menu mobile com transição */}
      <div
        ref={menuRef}
        className={`md:hidden bg-[#004a92] overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
          <NavLink to="/" className={linkCls} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/sobre" className={linkCls} onClick={() => setOpen(false)}>Sobre</NavLink>
          <NavLink to="/servicos" className={linkCls} onClick={() => setOpen(false)}>Serviços</NavLink>
          <NavLink to="/projetos" className={linkCls} onClick={() => setOpen(false)}>Projetos</NavLink>
          <NavLink to="/contato" className={linkCls} onClick={() => setOpen(false)}>Contato</NavLink>
        </div>
      </div>
    </header>
  );
}
