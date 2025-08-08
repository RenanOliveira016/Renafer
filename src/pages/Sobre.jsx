export default function Sobre() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      
      {/* Texto */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0055A4]">
          Sobre a Renafer Comercial
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Somos especialistas em estruturas metálicas, atuando na fabricação e montagem
          de barracões, mezaninos e soluções personalizadas para atender diferentes setores
          como indústria, comércio e agronegócio.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Nosso compromisso é entregar obras seguras, dentro do prazo e com qualidade
          certificada, utilizando materiais de primeira linha e mão de obra qualificada.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Engenharia própria</li>
          <li>Atendimento em todo o Paraná e região</li>
          <li>Mais de 10 anos de experiência</li>
        </ul>
      </div>

      {/* Imagem */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img
          src="/servicos/barracao3.jpg"
          alt="Equipe Renafer em obra"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
