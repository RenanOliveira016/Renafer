import { Link } from "react-router-dom";
import ServicesPreview from "../components/ServicePreview";

export default function Home() {
  return (
    <div className="grid gap-12">
      {/* HERO */}
      <section className="grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#0055A4]">
            Estruturas Metálicas de Alta Performance
          </h2>
          <p className="text-gray-700 md:text-lg">
            Fabricamos e montamos barracões, mezaninos e soluções sob medida
            com qualidade, segurança e prazo.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://wa.me/5541996718526?text=..." // Seu link atual
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-md bg-[#0055A4] text-white font-medium hover:opacity-90"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'clique_whatsapp', {
                    'event_category': 'contato',
                    'event_label': 'home_hero' // Mude para 'servicos' se for no outro botão
                  });
                }
              }}
            >
              Pedir Orçamento
            </a>
            <Link
              to="/projetos"
              className="px-5 py-3 rounded-md border font-medium hover:bg-gray-50"
            >
              Ver Projetos
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-gray-600">
            <li>✔️ Engenharia própria</li>
            <li>✔️ Aço com certificação</li>
            <li>✔️ Equipe de montagem</li>
            <li>✔️ Prazo e segurança</li>
          </ul>
        </div>

        {/* Imagem responsiva */}
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden bg-gray-200">
          <img
            src="/servicos/barracao2.jpg" // caminho real da imagem
            alt="Estrutura metálica Renafer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <ServicesPreview />
    </div>
  );
}
