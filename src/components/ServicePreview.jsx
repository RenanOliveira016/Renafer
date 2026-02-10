import { Link } from "react-router-dom";
import ServiceCard from "./ServicesCard";

const WPP = "https://wa.me/5541996718526?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

export default function ServicesPreview() {
  return (
    <section className="mt-16">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0055A4]">Nossos Serviços</h2>
        <p className="text-gray-700 mt-1">Projeto, fabricação e montagem com equipe própria.</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          title="Barracões Metálicos"
          desc="Estruturas robustas para indústrias, comércios e agronegócio."
          items={["Projeto estrutural", "Cobertura e fechamento", "Calhas e rufos", "Montagem em obra"]}
          ctaHref={WPP}
        />
        <ServiceCard
          title="Mezaninos"
          desc="Aproveitamento de espaço com segurança e versatilidade."
          items={["Dimensionamento de cargas", "Guarda-corpo e escadas", "Piso metálico/chapas", "Execução rápida"]}
          ctaHref={WPP}
        />
        <ServiceCard
          title="Soluções Sob Medida"
          desc="Estruturas personalizadas conforme a necessidade da sua obra."
          items={["Projetos especiais", "Cortes e dobras", "Solda certificada", "Pintura/galvanização"]}
          ctaHref={WPP}
        />
      </div>

      <div className="mt-6">
        <Link to="/Servicos" className="inline-block px-4 py-2 rounded-md border font-medium hover:bg-gray-50">
          Ver detalhes dos Serviços
        </Link>
      </div>
    </section>
  );
}
