import { useEffect, useState } from "react";

const IMGS = [
  { src: "/projetos/proj-01.jpg", titulo: "Painel Lateral.", cidade: "São José dos Pinhais/PR" },
  { src: "/projetos/proj-02.jpg", titulo: "Painel Lateral com MultiDobra.", cidade: "Curitiba/PR" },
  { src: "/projetos/proj-03.jpg", titulo: "Cobertura metálica.", cidade: "Ortigueira/PR" },
  { src: "/projetos/proj-04.jpg", titulo: "Corrimão sob medida.", cidade: "Colombo/PR" },
  { src: "/projetos/proj-05.jpg", titulo: "Galpão logístico com portão de correr.", cidade: "São José dos Pinhais/PR" },
  { src: "/projetos/proj-06.jpg", titulo: "Mezanino sob medida.", cidade: "Araucária/PR" },
];

export default function Projetos() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const abrir = (i) => { setIdx(i); setOpen(true); };
  const fechar = () => setOpen(false);
  const prev = (e) => { e?.stopPropagation?.(); setIdx((i) => (i - 1 + IMGS.length) % IMGS.length); };
  const next = (e) => { e?.stopPropagation?.(); setIdx((i) => (i + 1) % IMGS.length); };

  // atalhos do teclado
  useEffect(() => {
    if (!open) return;
    const onKey = (ev) => {
      if (ev.key === "Escape") fechar();
      if (ev.key === "ArrowLeft") prev();
      if (ev.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="grid gap-6">
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0055A4]">Projetos Renafer</h2>
        <p className="text-gray-700 mt-1">Alguns trabalhos recentes em estruturas metálicas.</p>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {IMGS.map((img, i) => (
          <button
            key={img.src}
            onClick={() => abrir(i)}
            className="group relative rounded-lg overflow-hidden border"
            title={img.titulo}
          >
            <img
              src={img.src}
              alt={img.titulo}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            {/* Texto sempre visível no mobile, só aparece no hover no desktop */}
            <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-xs bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
              <div className="font-medium">{img.titulo}</div>
              <div className="opacity-90">{img.cidade}</div>
            </div>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-2">
        <a
          href="https://wa.me/5541997160986?text=Ol%C3%A1%2C%20vi%20os%20projetos%20da%20Renafer%20e%20quero%20um%20or%C3%A7amento."
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 rounded-md bg-[#0055A4] text-white font-medium hover:opacity-90"
        >
          Pedir orçamento
        </a>
      </div>

      {/* MODAL / LIGHTBOX */}
      {open && (
        <div
          onClick={fechar}
          className="fixed inset-0 z-50 bg-black/80 grid place-items-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={IMGS[idx].src}
              alt={IMGS[idx].titulo}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* topo com título */}
            <div className="absolute left-0 right-0 top-0 p-3 text-white text-sm bg-gradient-to-b from-black/60 to-transparent">
              <div className="font-medium">{IMGS[idx].titulo}</div>
              <div className="opacity-90">{IMGS[idx].cidade}</div>
            </div>

            {/* controles */}
            <button
              onClick={fechar}
              className="absolute top-3 right-3 px-4 py-3 rounded-md bg-white/90 hover:bg-white text-sm"
            >
              Fechar (Esc)
            </button>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 px-4 py-3 rounded-md bg-white/90 hover:bg-white"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-3 rounded-md bg-white/90 hover:bg-white"
              aria-label="Próxima"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
