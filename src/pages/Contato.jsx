import { useEffect, useMemo, useState } from "react";
import FormField from "../components/FormField";

const WPP_NUMBER = 5541996718526;
const MAPS_IFRAME_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.841844525005!2d-49.33526552562367!3d-25.576928038719387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfdcfb6baf4ad%3A0x7d592b7e0ad40d17!2sTravessa%20Walter%20Sprengel%2C%20189%20-%20Tatuquara%2C%20Curitiba%20-%20PR%2C%2081470-317!5e0!3m2!1spt-BR!2sbr!4v1754690129554!5m2!1spt-BR!2sbr";


// ---- helpers ----
const soDigitos = (v) => v.replace(/\D/g, "");
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const nomeOk = (v) => v.trim().length >= 3;
const msgOk = (v) => v.trim().length >= 10;

// máscara dinâmica BR: (XX) XXXXX-XXXX (ou XXXX-XXXX quando menor)
function maskTelefone(v) {
  const d = soDigitos(v).slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
}
const telOk = (v) => {
  const d = soDigitos(v);
  // aceita 10 ou 11 dígitos (fixo ou celular)
  return d.length === 10 || d.length === 11;
};

export default function Contato() {
  const [data, setData] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [touched, setTouched] = useState({});

  // validação em tempo real
  const errors = useMemo(() => {
    const e = {};
    if (touched.nome && !nomeOk(data.nome)) e.nome = "Informe seu nome (mín. 3 letras)";
    if (touched.email && !emailOk(data.email)) e.email = "E-mail inválido";
    if (touched.telefone && !telOk(data.telefone)) e.telefone = "Telefone inválido";
    if (touched.mensagem && !msgOk(data.mensagem)) e.mensagem = "Mínimo de 10 caracteres";
    return e;
  }, [data, touched]);

  const formValido =
    nomeOk(data.nome) && emailOk(data.email) && telOk(data.telefone) && msgOk(data.mensagem);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "telefone") {
      setData((d) => ({ ...d, telefone: maskTelefone(value) }));
    } else {
      setData((d) => ({ ...d, [name]: value }));
    }
  };

  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const submit = (e) => {
    e.preventDefault();
    // marca tudo como tocado pra exibir erros, se houver
    setTouched({ nome: true, email: true, telefone: true, mensagem: true });
    if (!formValido) return;

    const texto = encodeURIComponent(
      `Olá, sou ${data.nome}.
Email: ${data.email}
Telefone: ${data.telefone}

Mensagem:
${data.mensagem}`
    );
    window.open(`https://wa.me/${WPP_NUMBER}?text=${texto}`, "_blank");
  };

  return (
    <section className="grid gap-10">
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0055A4]">Fale com a Renafer</h2>
        <p className="text-gray-700 mt-1">Tire dúvidas, solicite orçamento e agende uma visita técnica.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* FORM */}
        <form onSubmit={submit} className="grid gap-4">
          <FormField
            label="Nome"
            id="nome"
            name="nome"
            value={data.nome}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Seu nome completo"
            error={errors.nome}
          />

          <FormField
            label="E-mail"
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="voce@exemplo.com"
            error={errors.email}
            inputMode="email"
            autoComplete="email"
          />

          <FormField
            label="Telefone (WhatsApp)"
            id="telefone"
            name="telefone"
            value={data.telefone}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="(41) 99999-9999"
            error={errors.telefone}
            inputMode="tel"
            maxLength={16} // (99) 99999-9999
          />

          <FormField
            label="Mensagem"
            id="mensagem"
            name="mensagem"
            as="textarea"
            rows={5}
            value={data.mensagem}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Descreva sua necessidade (medidas, local, prazo...)"
            error={errors.mensagem}
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={!formValido}
              className={[
                "px-5 py-2 rounded-md font-medium",
                formValido
                  ? "bg-[#0055A4] text-white hover:opacity-90"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed",
              ].join(" ")}
            >
              Enviar pelo WhatsApp
            </button>

            <a
              href={`https://wa.me/${WPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-md border font-medium hover:bg-gray-50"
            >
              Abrir WhatsApp
            </a>
          </div>
        </form>

        {/* MAPA + contatos */}
        <aside className="grid gap-4">
          <div className="rounded-xl overflow-hidden border">
            <iframe
              src={MAPS_IFRAME_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-72"
              style={{ border: 0 }}
              allowFullScreen=""
              title="Localização Renafer"
            />
          </div>

          <div className="rounded-xl border p-4 text-sm text-gray-700">
            <p><strong>Telefone:</strong> (41) 9 9671-8526</p>
            <p><strong>E-mail:</strong> renafercomercial07@gmail.com</p>
            <p><strong>Endereço:</strong> Rua Romário Adalberto, 300 — Curitiba/PR</p>
            <p className="mt-2">
              <a
                className="underline"
                href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent("Olá, gostaria de um orçamento.")}`}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
