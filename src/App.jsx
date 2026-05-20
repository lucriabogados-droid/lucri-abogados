import React from "react";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, FileText, MessageCircle, MapPin, Phone, Mail, ChevronRight, Video, Newspaper, Gavel, Images, Mic2, Eye, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LucriAbogadosLandingPage() {
  const services = [
    {
      title: "Asesoría jurídica estratégica",
      description: "Orientación clara para tomar decisiones legales con seguridad, prevención y visión de negocio.",
      icon: ShieldCheck,
    },
    {
      title: "Contratos y documentos legales",
      description: "Redacción, revisión y negociación de contratos con enfoque práctico y protección patrimonial.",
      icon: FileText,
    },
    {
      title: "Defensa y representación legal",
      description: "Acompañamiento profesional en procedimientos, controversias y gestiones ante autoridades.",
      icon: Scale,
    },
    {
      title: "Procedimientos y litigio",
      description: "Representación seria y estratégica ante juzgados, autoridades administrativas y negociaciones.",
      icon: Gavel,
    },
  ];

  const blogPosts = [
    {
      title: "¿Qué revisar antes de firmar un contrato?",
      category: "Contratos",
      excerpt: "Puntos esenciales para proteger tus intereses antes de asumir obligaciones legales.",
    },
    {
      title: "La importancia de la asesoría preventiva",
      category: "Prevención legal",
      excerpt: "Evitar un problema jurídico suele ser más económico que resolverlo en juicio.",
    },
    {
      title: "Documentos básicos para proteger tu negocio",
      category: "Empresas",
      excerpt: "Contratos, avisos, poderes y acuerdos que dan mayor certeza a tus operaciones.",
    },
  ];

  const tiktokVideos = [
    "https://vt.tiktok.com/ZSxhfmJyo/",
    "https://vt.tiktok.com/ZSxhfuGAE/",
    "https://vt.tiktok.com/ZSxhPMnHK/",
  ];

  const catalogItems = [
    {
      title: "Revisión documental",
      image: "/leyendo-documentos.png",
      text: "Evidencia del trabajo jurídico de análisis, preparación y revisión de expedientes.",
    },
    {
      title: "Atención en oficina",
      image: "/sentado-oficina.png",
      text: "Atención profesional, directa y personalizada para cada cliente.",
    },
    {
      title: "Comparecencias y juzgados",
      image: "/juzgado.png",
      text: "Presencia y acompañamiento en procedimientos ante autoridades.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#071225] text-slate-100" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25),transparent_35%),linear-gradient(135deg,rgba(7,18,37,1),rgba(2,8,20,1))]" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4">
            <img src="/logo-lucri.png" alt="Logo Lucri Abogados" className="h-16 w-16 rounded-full object-cover ring-1 ring-[#d4af37]/50" />
            <div>
              <p className="text-2xl font-semibold tracking-wide text-white">Lucri Abogados</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Asesoría · Estrategia · Resultados</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#servicios" className="hover:text-[#d4af37]">Servicios</a>
            <a href="#nosotros" className="hover:text-[#d4af37]">Nosotros</a>
            <a href="#videos" className="hover:text-[#d4af37]">Videos</a>
            <a href="#catalogo" className="hover:text-[#d4af37]">Catálogo</a>
            <a href="#podcast" className="hover:text-[#d4af37]">Podcast</a>
            <a href="#blog" className="hover:text-[#d4af37]">Blog</a>
            <a href="#contacto" className="hover:text-[#d4af37]">Contacto</a>
          </div>
          <a href="#contacto"><Button className="rounded-2xl bg-[#d4af37] text-[#071225] hover:bg-[#f1d06a]">Agendar consulta</Button></a>
        </nav>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-2 md:pb-32 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f1d06a]">
              Despacho jurídico con atención profesional y estrategia personalizada
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Certeza legal para proteger tu patrimonio, tu empresa y tus decisiones.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              En Lucri Abogados brindamos asesoría legal clara, preventiva y estratégica para personas, empresas y emprendedores que buscan soluciones serias y resultados.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contacto"><Button className="rounded-2xl bg-[#d4af37] px-7 py-6 text-base text-[#071225] hover:bg-[#f1d06a]">Solicitar asesoría <ChevronRight className="ml-2 h-5 w-5" /></Button></a>
              <a href="#servicios"><Button variant="outline" className="rounded-2xl border-[#d4af37]/40 bg-transparent px-7 py-6 text-base text-[#f1d06a] hover:bg-[#d4af37]/10 hover:text-[#f1d06a]">Conocer servicios</Button></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#d4af37]/10 blur-2xl" />
            <img src="/sentado-oficina.png" alt="Lic. Luis Arturo García Castillo en oficina" className="relative h-[560px] w-full rounded-[2rem] border border-[#d4af37]/25 object-cover shadow-2xl shadow-black/40" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-3">
        <img src="/reunion-lucri.png" alt="Reunión jurídica en Lucri Abogados" className="h-72 w-full rounded-[1.75rem] border border-[#d4af37]/20 object-cover" />
        <img src="/leyendo-documentos.png" alt="Revisión de documentos legales" className="h-72 w-full rounded-[1.75rem] border border-[#d4af37]/20 object-cover" />
        <img src="/juzgado.png" alt="Representación ante tribunales" className="h-72 w-full rounded-[1.75rem] border border-[#d4af37]/20 object-cover" />
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Servicios</p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Áreas de atención legal</h2>
          <p className="mt-5 text-slate-300">Soluciones jurídicas diseñadas para prevenir problemas, resolver controversias y dar certeza a tus operaciones.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="rounded-[1.75rem] border-[#d4af37]/15 bg-[#0b1a33] transition hover:border-[#d4af37]/50">
                <CardContent className="p-7">
                  <Icon className="mb-6 h-10 w-10 text-[#d4af37]" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="nosotros" className="border-y border-[#d4af37]/10 bg-[#0b1a33]/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Nosotros</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Un despacho jurídico con presencia, confianza y trato directo.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Lucri Abogados ofrece servicios legales de alto nivel con trato humano, lenguaje claro y estrategias diseñadas para cada cliente.
            </p>
            <p>
              Nuestro compromiso es brindar certeza, confidencialidad y soluciones prácticas, cuidando los intereses legales y patrimoniales de quienes confían en nosotros.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#d4af37]/20 bg-[#071225] p-5">
                <MessageCircle className="mb-3 h-7 w-7 text-[#d4af37]" />
                <h3 className="text-xl font-semibold text-white">Comunicación constante</h3>
                <p className="mt-2 text-base leading-7 text-slate-300">Mantenemos informado al cliente sobre avances, etapas y decisiones importantes de su asunto.</p>
              </div>
              <div className="rounded-2xl border border-[#d4af37]/20 bg-[#071225] p-5">
                <Eye className="mb-3 h-7 w-7 text-[#d4af37]" />
                <h3 className="text-xl font-semibold text-white">Transparencia profesional</h3>
                <p className="mt-2 text-base leading-7 text-slate-300">Explicamos riesgos, alcances y posibles escenarios con claridad, sin promesas falsas ni lenguaje confuso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Contenido legal</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Videos de TikTok</h2>
            <p className="mt-5 max-w-2xl text-slate-300">Una sección ideal para conectar con clientes, explicar temas jurídicos y fortalecer la autoridad del despacho.</p>
          </div>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl border-[#d4af37]/40 bg-transparent text-[#f1d06a] hover:bg-[#d4af37]/10">Ver TikTok</Button></a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiktokVideos.map((url, index) => (
            <Card key={url} className="rounded-[1.75rem] border-[#d4af37]/15 bg-[#0b1a33]">
              <CardContent className="flex h-[440px] flex-col items-center justify-center p-8 text-center">
                <Video className="mb-5 h-12 w-12 text-[#d4af37]" />
                <h3 className="text-xl font-semibold text-white">Video legal #{index + 1}</h3>
                <p className="mt-3 text-slate-300">Consejos jurídicos, prevención legal y explicación clara de temas importantes.</p>
                <a href={url} target="_blank" rel="noreferrer" className="mt-6 rounded-2xl border border-[#d4af37]/40 px-5 py-3 text-[#f1d06a] transition hover:bg-[#d4af37]/10">
                  Ver video en TikTok
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="catalogo" className="border-y border-[#d4af37]/10 bg-[#061020]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Catálogo profesional</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Evidencia visual de nuestro trabajo.</h2>
            <p className="mt-5 text-slate-300">Este apartado puede funcionar como una galería para mostrar fotografías de oficina, comparecencias, preparación de expedientes, eventos, entrevistas y contenido profesional del despacho.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {catalogItems.map((item) => (
              <Card key={item.title} className="overflow-hidden rounded-[1.75rem] border-[#d4af37]/15 bg-[#0b1a33]">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                <CardContent className="p-7">
                  <Images className="mb-4 h-8 w-8 text-[#d4af37]" />
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="podcast" className="mx-auto max-w-7xl px-6 py-24">
        <Card className="overflow-hidden rounded-[2rem] border-[#d4af37]/20 bg-gradient-to-br from-[#0b1a33] to-[#061020]">
          <CardContent className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
            <div className="flex items-center justify-center">
              <img src="/los-claroscuros-de-la-ley.png" alt="Podcast Los Claroscuros de la Ley" className="max-h-[460px] rounded-[1.75rem] border border-[#d4af37]/25 object-cover shadow-2xl shadow-black/40" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Podcast</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Los Claroscuros de la Ley</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Un espacio para hablar de derecho de forma clara, crítica y cercana. Aquí podrás compartir episodios, entrevistas, análisis de casos y temas jurídicos de interés para clientes y público general.</p>
              <div className="mt-7 rounded-2xl border border-[#d4af37]/20 bg-[#071225] p-5">
                <Mic2 className="mb-3 h-8 w-8 text-[#d4af37]" />
                <p className="text-slate-300">Próximamente: enlace a Spotify, YouTube, Apple Podcasts o la plataforma donde publiques tus episodios.</p>
              </div>
              <Button className="mt-7 w-full rounded-2xl bg-[#d4af37] py-6 text-[#071225] hover:bg-[#f1d06a] md:w-auto">
                Escuchar podcast próximamente
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="blog" className="border-y border-[#d4af37]/10 bg-[#061020]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
  Blog jurídico
</p>

<h2 className="mt-4 text-4xl font-semibold text-white">
  Blog Jurídico
</h2>

<p className="mt-5 text-slate-300">
  Publicaciones legales, análisis y contenido jurídico relevante para clientes, empresas y emprendedores.
</p>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.title} className="rounded-[1.75rem] border-[#d4af37]/15 bg-[#0b1a33] transition hover:border-[#d4af37]/50">
                <CardContent className="p-7">
                  <Newspaper className="mb-6 h-10 w-10 text-[#d4af37]" />
                  <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">{post.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{post.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{post.excerpt}</p>
                  <button className="mt-6 text-[#f1d06a]">Leer artículo →</button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-24">
        <Card className="rounded-[2rem] border-[#d4af37]/20 bg-gradient-to-br from-[#0b1a33] to-[#061020]">
          <CardContent className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Contacto</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Agenda una consulta jurídica.</h2>
              <p className="mt-5 leading-8 text-slate-300">Cuéntanos tu situación y recibe orientación profesional para saber qué pasos seguir.</p>
            </div>
            <div className="space-y-5 text-slate-300">
              <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-[#d4af37]" /> +52 222 164 0945</div>
              <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-[#d4af37]" /> lucriabogados@gmail.com</div>
              <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-[#d4af37]" /> Puebla, México</div>
              <a href="https://wa.me/522221640945" target="_blank" rel="noreferrer"><Button className="mt-4 w-full rounded-2xl bg-[#d4af37] py-6 text-[#071225] hover:bg-[#f1d06a] md:w-auto">Enviar mensaje por WhatsApp</Button></a>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-[#d4af37]/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Lucri Abogados. Todos los derechos reservados.
      </footer>
    </main>
  );
}
