export default function ServiceCard({ title, desc, items = [], ctaHref, icon: Icon, img }) {
  return (
    <article className="group rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      {img && (
        <div className="overflow-hidden">
          <img
            src={img}
            alt={title}
            className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-7 h-7 text-[#0055A4]" />}
          <h3 className="text-lg font-bold text-[#0055A4]">{title}</h3>
        </div>

        <p className="text-gray-700 mt-2">{desc}</p>

        {items.length > 0 && (
          <ul className="mt-3 grid gap-1.5 text-sm text-gray-700">
            {items.map((item, i) => <li key={i}>✔️ {item}</li>)}
          </ul>
        )}

        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block px-4 py-2 rounded-md bg-[#0055A4] text-white font-medium hover:opacity-90"
        >
          Pedir orçamento
        </a>
      </div>
    </article>
  );
}
