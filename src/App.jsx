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
  const whatsappNumber = "522221640945";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const tiktokProfile = "https://www.tiktok.com/@abogado.arturo";

  const services = [
    {
      title: "Derecho penal",
      description: "Defensa, asesorÃ­a y acompaÃ±amiento legal en asuntos penales, cuidando tus derechos en cada etapa del procedimiento.",
      icon: ShieldCheck,
    },
    {
      title: "Derecho civil",
      description: "AtenciÃ³n en contratos, obligaciones, controversias patrimoniales, responsabilidad civil y asuntos entre particulares.",
      icon: FileText,
    },
    {
      title: "Derecho familiar",
      description: "AsesorÃ­a y representaciÃ³n en asuntos familiares con trato humano, estratÃ©gico y confidencial.",
      icon: Scale,
    },
    {
      title: "Derecho agrario y amparo",
      description: "RepresentaciÃ³n en asuntos agrarios y juicios de amparo para proteger derechos frente a actos de autoridad.",
      icon: Gavel,
    },
  ];

  const blogPosts = [
    {
      title: "ArtÃ­culo jurÃ­dico prÃ³ximamente",
      category: "Blog",
      excerpt: "Espacio reservado para publicar contenido legal Ãºtil para clientes y pÃºblico general.",
    },
    {
      title: "Consejos legales prÃ³ximamente",
      category: "PrevenciÃ³n legal",
      excerpt: "AquÃ­ podrÃ¡s compartir recomendaciones, explicaciones y temas frecuentes de consulta.",
    },
    {
      title: "AnÃ¡lisis legal prÃ³ximamente",
      category: "Actualidad jurÃ­dica",
      excerpt: "SecciÃ³n editable para publicar artÃ­culos sobre temas de interÃ©s en Puebla y MÃ©xico.",
    },
  ];

  const tiktokVideos = [
    "https://vt.tiktok.com/ZSxhfmJyo/",
    "https://vt.tiktok.com/ZSxhfuGAE/",
    "https://vt.tiktok.com/ZSxhPMnHK/",
  ];

  const catalogItems = [
    {
      title: "RevisiÃ³n documental",
      image: "/leyendo-documentos.png",
      text: "Evidencia del trabajo jurÃ­dico de anÃ¡lisis, preparaciÃ³n y revisiÃ³n de expedientes.",
    },
    {
      title: "AtenciÃ³n profesional",
      image: "/sentado-oficina.png",
      text: "AtenciÃ³n directa, seria y personalizada para cada cliente.",
    },
    {
      title: "Comparecencias y juzgados",
      image: "/juzgado.png",
      text: "Presencia y acompaÃ±amiento en procedimientos ante autoridades.",
    },
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
              <p className="brand-subtitle">AsesorÃ­a Â· Estrategia Â· Resultados</p>
            </div>
          </div>

          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#videos">Videos</a>
            <a href="#catalogo">CatÃ¡logo</a>
            <a href="#podcast">Podcast</a>
            <a href="#blog">Blog</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a className="btn-link" href={whatsappLink}>Agendar consulta</a>
        </nav>

        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="pill">Despacho jurÃ­dico en Puebla con atenciÃ³n profesional y estrategia personalizada</p>
            <h1>Certeza legal para proteger tu libertad, tu patrimonio, tu familia y tus derechos.</h1>
            <p className="lead">
              En Lucri Abogados brindamos asesorÃ­a legal clara, preventiva y estratÃ©gica en derecho penal, civil, familiar, agrario y amparo.
            </p>
            <div className="hero-actions">
              <a className="btn-link" href={whatsappLink}>
                Solicitar asesorÃ­a <ChevronRight size={20} />
              </a>
              <a className="btn-link outline" href="#servicios">Conocer servicios</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="hero-card">
            <div className="photo-placeholder">
              <Scale size={96} />
              <h3>Lucri Abogados</h3>
              <p>AsesorÃ­a jurÃ­dica profesional en Puebla, Puebla</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="gallery">
        <div><Images /><span>AtenciÃ³n jurÃ­dica profesional</span></div>
        <div><FileText /><span>RevisiÃ³n de documentos legales</span></div>
        <div><Gavel /><span>RepresentaciÃ³n ante autoridades</span></div>
      </section>

      <section id="servicios" className="section">
        <div className="section-head">
          <p className="kicker">Servicios</p>
          <h2>Ãreas de atenciÃ³n legal</h2>
          <p>Soluciones jurÃ­dicas diseÃ±adas para prevenir problemas, resolver controversias y proteger tus derechos.</p>
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
            <h2>Un despacho jurÃ­dico con presencia, confianza y trato directo.</h2>
          </div>
          <div className="copy">
            <p>Lucri Abogados ofrece servicios legales con trato humano, lenguaje claro y estrategias diseÃ±adas para cada cliente.</p>
            <p>Nuestro compromiso es brindar certeza, confidencialidad y soluciones prÃ¡cticas, cuidando los intereses legales de quienes confÃ­an en nosotros.</p>
            <div className="mini-grid">
              <div className="mini-card"><MessageCircle /><h3>ComunicaciÃ³n constante</h3><p>Mantenemos informado al cliente sobre avances, etapas y decisiones importantes.</p></div>
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
            <p>Contenido jurÃ­dico para explicar temas legales, prevenciÃ³n y orientaciÃ³n clara para la ciudadanÃ­a.</p>
          </div>
          <a className="btn-link outline" href={tiktokProfile} target="_blank" rel="noreferrer">Ver perfil de TikTok</a>
        </div>
        <div className="three-grid">
          {tiktokVideos.map((url, index) => (
            <Card key={url} className="video-card">
              <CardContent>
                <Video className="gold-icon big" />
                <h3>Video legal #{index + 1}</h3>
                <p>Consejos jurÃ­dicos, prevenciÃ³n legal y explicaciÃ³n clara de temas importantes.</p>
                <a className="outline-link" href={url} target="_blank" rel="noreferrer">Ver video en TikTok</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="catalogo" className="section band darker">
        <div className="section-head">
          <p className="kicker">CatÃ¡logo profesional</p>
          <h2>Evidencia visual de nuestro trabajo.</h2>
          <p>GalerÃ­a para mostrar fotografÃ­as profesionales, preparaciÃ³n de expedientes, contenido jurÃ­dico y actividades del despacho.</p>
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
            <p className="lead-small">Un espacio para hablar de derecho de forma clara, crÃ­tica y cercana. PrÃ³ximamente podrÃ¡s encontrar episodios, entrevistas, anÃ¡lisis de casos y temas jurÃ­dicos de interÃ©s.</p>
            <div className="notice"><Mic2 /> PrÃ³ximamente: enlace a Spotify, YouTube, Apple Podcasts o la plataforma donde publiques tus episodios.</div>
            <a className="btn-link" href="#contacto">Escuchar podcast prÃ³ximamente</a>
          </div>
        </div>
      </section>

      <section id="blog" className="section band darker">
        <div className="section-head">
          <p className="kicker">Blog jurÃ­dico</p>
          <h2>ArtÃ­culos jurÃ­dicos prÃ³ximamente.</h2>
          <p>Esta secciÃ³n quedarÃ¡ lista para publicar contenido legal cuando definas los temas principales del blog.</p>
        </div>
        <div className="three-grid">
          {blogPosts.map((post) => (
            <Card key={post.title}>
              <CardContent>
                <Newspaper className="gold-icon" />
                <p className="kicker small">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="text-button">PrÃ³ximamente â†’</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contacto" className="section">
        <div className="contact-card">
          <div>
            <p className="kicker">Contacto</p>
            <h2>Agenda una consulta jurÃ­dica.</h2>
            <p>CuÃ©ntanos tu situaciÃ³n y recibe orientaciÃ³n profesional para saber quÃ© pasos seguir.</p>
          </div>
          <div className="contact-list">
            <div><Phone /> 220 133 6854</div>
            <div><Mail /> lucriabogados@gmail.com</div>
            <div><MapPin /> Puebla, Puebla</div>
            <a className="btn-link" href={whatsappLink}>Enviar mensaje por WhatsApp</a>
          </div>
        </div>
      </section>

      <a className="floating-wa" href={whatsappLink}>WhatsApp</a>
      <footer>Â© 2026 Lucri Abogados. Todos los derechos reservados.</footer>
    </main>
  );
}
