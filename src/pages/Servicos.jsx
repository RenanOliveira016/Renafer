import ServiceCard from "../components/ServicesCard";
import { IconBarracao, IconMezanino, IconMateriais } from "../components/Icons";

const WPP = "https://wa.me/5541996718526?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento.";

export default function Servicos() {
  const cards = [
    {
      title: "Barracões Metálicos",
      desc: "Estruturas robustas para indústrias, comércios e agronegócio.",
      items: ["Projeto estrutural", "Cobertura/fechamento", "Calhas e rufos", "Montagem em obra"],
      ctaHref: WPP,
      icon: IconBarracao,
      img: "/servicos/barracao.jpg",
    },
    {
      title: "Mezaninos",
      desc: "Aproveitamento de espaço com segurança e versatilidade.",
      items: ["Dimensionamento de cargas", "Guarda-corpo/escadas", "Piso metálico/chapas", "Execução rápida"],
      ctaHref: WPP,
      icon: IconMezanino,
      img: "/servicos/mezanino.jpg",
    },
    {
      title: "Materiais e Ferramentas",
      desc: "Fornecimento de perfis, chapas, telhas e ferramentas profissionais.",
      items: ["Perfis e chapas", "Telhas e fixadores", "EPIs e ferramentas"],
      ctaHref: WPP,
      icon: IconMateriais,
      img: "/servicos/materiais.jpg",
    },
  ];

  return (
    <section className="grid gap-10">
      {/* Cabeçalho com imagem ao lado */}
      <header className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0055A4]">
            Soluções completas em estruturas metálicas
          </h2>
          <p className="mt-2 text-gray-700">
            Do projeto à montagem, entregamos qualidade, prazo e segurança.
          </p>
          <a
            href={WPP}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block px-4 py-2 rounded-md bg-[#0055A4] text-white font-medium hover:opacity-90"
          >
            Falar com Especialista
          </a>
        </div>

        <div className="rounded-xl overflow-hidden h-64 md:h-96">
          <img
            src="/servicos/estrutura.jpg"
            alt="Equipe Renafer montando estrutura metálica"
            className="w-full h-full object-cover"
          />
        </div>

      </header>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => <ServiceCard key={c.title} {...c} />)}
      </div>
    </section>
  );
}
