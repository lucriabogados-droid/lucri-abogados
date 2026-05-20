import React from "react";
import { motion } from "framer-motion";
import {
  Scale, ShieldCheck, FileText, MessageCircle, MapPin, Phone, Mail,
  ChevronRight, Video, Newspaper, Gavel, Images, Mic2, Eye
} from "lucide-react";

function Button({ children, variant = "default", className = "", ...props }) {
  return (
    <button className={`btn ${variant === "outline" ? "btn-outline" : ""} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`card-content ${className}`}>{children}</div>;
}

export default function LucriAbogadosLandingPage() {
  const services = [
    { title: "Asesoría jurídica estratégica", description: "Orientación clara para tomar decisiones legales con seguridad, prevención y visión de negocio.", icon: ShieldCheck },
    { title: "Contratos y documentos legales", description: "Redacción, revisión y negociación de contratos con enfoque práctico y protección patrimonial.", icon: FileText },
    { title: "Defensa y representación legal", description: "Acompañamiento profesional en procedimientos, controversias y gestiones ante autoridades.", icon: Scale },
    { title: "Procedimientos y litigio", description: "Representación seria y estratégica ante juzgados, autoridades administrativas y negociaciones.", icon: Gavel },
  ];

  const blogPosts = [
    { title: "¿Qué revisar antes de firmar un contrato?", category: "Contratos", excerpt: "Puntos esenciales para proteger tus intereses antes de asumir obligaciones legales." },
    { title: "La importancia de la asesoría preventiva", category: "Prevención legal", excerpt: "Evitar un problema jurídico suele ser más económico que resolverlo en juicio." },
    { title: "Documentos básicos para proteger tu negocio", category: "Empresas", excerpt: "Contratos, avisos, poderes y acuerdos que dan mayor certeza a tus operaciones." },
  ];

  const tiktokVideos = [
    "https://vt.tiktok.com/ZSxhfmJyo/",
    "https://vt.tiktok.com/ZSxhfuGAE/",
    "https://vt.tiktok.com/ZSxhPMnHK/",
  ];

  const catalogItems = [
    { title: "Revisión documental", image: "/leyendo-documentos.png", text: "Evidencia del trabajo jurídico de análisis, preparación y revisión de expedientes." },
    { title: "Atención en oficina", image: "/sentado-oficina.png", text: "Atención profesional, directa y personalizada para cada cliente." },
    { title: "Comparecencias y juzgados", image: "/juzgado.png", text: "Presencia y acompañamiento en procedimientos ante autoridades." },
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-bg" />
        <nav className="nav">
          <div className="brand">
            <div className="logo-fallback">LA</div>
            <div>
              <p className="brand-title">Lucri Abogados</p>
              <p className="brand-subtitle">Asesoría · Estrategia · Resultados</p>
            </div>
          </div>

          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#videos">Videos</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#podcast">Podcast</a>
            <a href="#blog">Blog</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a className="btn-link" href="https://wa.me/522201336854">Agendar consulta</a>
        </nav>

        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="pill">Despacho jurídico con atención profesional y estrategia personalizada</p>
            <h1>Certeza legal para proteger tu patrimonio, tu empresa y tus decisiones.</h1>
            <p className="lead">
              En Lucri Abogados brindamos asesoría legal clara, preventiva y estratégica para personas, empresas y emprendedores que buscan soluciones serias y resultados.
            </p>
            <div className="hero-actions">
              <a className="btn-link" href="https://wa.me/522201336854">
                Solicitar asesoría <ChevronRight size={20} />
              </a>
              <a className="btn-link outline" href="#servicios">Conocer servicios</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="hero-card">
            <div className="photo-placeholder">
              <Scale size={96} />
              <h3>Lucri Abogados</h3>
              <p>Imagen principal del despacho</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="gallery">
        <div><Images /><span>Reunión jurídica en Lucri Abogados</span></div>
        <div><FileText /><span>Revisión de documentos legales</span></div>
        <div><Gavel /><span>Representación ante tribunales</span></div>
      </section>

      <section id="servicios" className="section">
        <div className="section-head">
          <p className="kicker">Servicios</p>
          <h2>Áreas de atención legal</h2>
          <p>Soluciones jurídicas diseñadas para prevenir problemas, resolver controversias y dar certeza a tus operaciones.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title}>
                <CardContent>
                  <Icon className="gold-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="nosotros" className="section band">
        <div className="two-grid">
          <div>
            <p className="kicker">Nosotros</p>
            <h2>Un despacho jurídico con presencia, confianza y trato directo.</h2>
          </div>
          <div className="copy">
            <p>Lucri Abogados ofrece servicios legales de alto nivel con trato humano, lenguaje claro y estrategias diseñadas para cada cliente.</p>
            <p>Nuestro compromiso es brindar certeza, confidencialidad y soluciones prácticas, cuidando los intereses legales y patrimoniales de quienes confían en nosotros.</p>
            <div className="mini-grid">
              <div className="mini-card"><MessageCircle /><h3>Comunicación constante</h3><p>Mantenemos informado al cliente sobre avances, etapas y decisiones importantes.</p></div>
              <div className="mini-card"><Eye /><h3>Transparencia profesional</h3><p>Explicamos riesgos, alcances y posibles escenarios con claridad.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="section">
        <div className="section-head row">
          <div>
            <p className="kicker">Contenido legal</p>
            <h2>Videos de TikTok</h2>
            <p>Una sección ideal para conectar con clientes, explicar temas jurídicos y fortalecer la autoridad del despacho.</p>
          </div>
        </div>
        <div className="three-grid">
          {tiktokVideos.map((url, index) => (
            <Card key={url} className="video-card">
              <CardContent>
                <Video className="gold-icon big" />
                <h3>Video legal #{index + 1}</h3>
                <p>Consejos jurídicos, prevención legal y explicación clara de temas importantes.</p>
                <a className="outline-link" href={url} target="_blank" rel="noreferrer">Ver video en TikTok</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="catalogo" className="section band darker">
        <div className="section-head">
          <p className="kicker">Catálogo profesional</p>
          <h2>Evidencia visual de nuestro trabajo.</h2>
          <p>Galería para mostrar fotografías de oficina, comparecencias, preparación de expedientes, eventos, entrevistas y contenido profesional del despacho.</p>
        </div>
        <div className="three-grid">
          {catalogItems.map((item) => (
            <Card key={item.title}>
              <div className="image-placeholder"><Images /><span>{item.title}</span></div>
              <CardContent>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="podcast" className="section">
        <div className="podcast-card">
          <div className="podcast-cover">
            <Mic2 />
            <h3>Los Claroscuros de la Ley</h3>
          </div>
          <div>
            <p className="kicker">Podcast</p>
            <h2>Los Claroscuros de la Ley</h2>
            <p className="lead-small">Un espacio para hablar de derecho de forma clara, crítica y cercana. Aquí podrás compartir episodios, entrevistas, análisis de casos y temas jurídicos.</p>
            <div className="notice"><Mic2 /> Próximamente: enlace a Spotify, YouTube, Apple Podcasts o la plataforma donde publiques tus episodios.</div>
            <a className="btn-link" href="#contacto">Escuchar podcast próximamente</a>
          </div>
        </div>
      </section>

      <section id="blog" className="section band darker">
        <div className="section-head">
          <p className="kicker">Blog jurídico</p>
          <h2>Artículos semanales para atraer clientes desde Google.</h2>
          <p>Publicar contenido útil ayuda a generar confianza, mejorar presencia digital y alimentar tu Perfil de Google Business con novedades.</p>
        </div>
        <div className="three-grid">
          {blogPosts.map((post) => (
            <Card key={post.title}>
              <CardContent>
                <Newspaper className="gold-icon" />
                <p className="kicker small">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="text-button">Leer artículo →</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contacto" className="section">
        <div className="contact-card">
          <div>
            <p className="kicker">Contacto</p>
            <h2>Agenda una consulta jurídica.</h2>
            <p>Cuéntanos tu situación y recibe orientación profesional para saber qué pasos seguir.</p>
          </div>
          <div className="contact-list">
            <div><Phone /> +52 220 133 6854</div>
            <div><Mail /> contacto@lucriabogados.com</div>
            <div><MapPin /> México</div>
            <a className="btn-link" href="https://wa.me/522201336854">Enviar mensaje por WhatsApp</a>
          </div>
        </div>
      </section>

      <a className="floating-wa" href="https://wa.me/522201336854">WhatsApp</a>
      <footer>© 2026 Lucri Abogados. Todos los derechos reservados.</footer>
    </main>
  );
}
