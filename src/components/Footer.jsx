import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0055A4] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-3 text-center md:text-left">
        
        {/* Coluna 1 - Sobre */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Renafer Comercial</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Estruturas metálicas de qualidade, fabricação e montagem de barracões, 
            além da venda de materiais e ferramentas para construção.
          </p>
        </div>

        {/* Coluna 2 - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/sobre", label: "Sobre" },
              { to: "/servicos", label: "Serviços" },
              { to: "/projetos", label: "Projetos" },
              { to: "/contato", label: "Contato" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:opacity-80 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <ul className="text-sm text-white/80 space-y-2">
            <li>📍 Travessa Walter Sprengel, 189 — Curitiba/PR</li>
            <li>📞 (41) 9 99716-0986</li>
            <li>✉️ renafercomercial07@gmail.com</li>
            <li>
              <a 
                href="https://wa.me/5541997160986" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:opacity-80 transition underline"
              >
                💬 Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="bg-[#004a92] text-center py-3 text-sm text-white/70">
        © {new Date().getFullYear()} Renafer Comercial — Todos os direitos reservados.
      </div>
    </footer>
  );
}
