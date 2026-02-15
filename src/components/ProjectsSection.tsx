import { motion } from "framer-motion";
import { ExternalLink, Github, Anchor, Flame, Shield, GraduationCap, Home } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  icon: React.ReactNode;
  accentClass: string;
}

const projects: Project[] = [
  {
    title: "Sailing with Phil",
    description: "Persönliche Segel-Plattform",
    longDescription:
      "Törnberichte aus Dalmatien und Mallorca, Crew-Ressourcen wie Packlisten und Checklisten, sowie Skipper-Dokumente wie Logbuch-Vorlagen.",
    tech: ["Hugo", "Hextra Theme", "GitHub Pages"],
    liveUrl: "https://sailing.withphil.de",
    githubUrl: "https://github.com/phismith91/sailing.withphil.de",
    icon: <Anchor className="w-6 h-6" />,
    accentClass: "gradient-ocean",
  },
  {
    title: "LUXORliving",
    description: "Home Assistant KNX-Integration",
    longDescription:
      "Custom Component zur Integration von Theben LUXORliving KNX-Gateways in Home Assistant. Automatische Entity-Discovery, Config Flow UI, HACS-kompatibel.",
    tech: ["Python", "Home Assistant", "KNX/IP", "Async I/O"],
    githubUrl: "https://github.com/phismith91/luxorliving",
    icon: <Home className="w-6 h-6" />,
    accentClass: "gradient-ocean",
  },
  {
    title: "Notenschluss",
    description: "Privacy-first Notenmanager",
    longDescription:
      "100% lokal, ohne Cloud, Account oder Tracking. Flexible Kategorien, gewichtete Durchschnitte und Excel-Export. Alle Daten bleiben auf deinem Gerät.",
    tech: ["React", "LocalStorage", "SheetJS", "Vitest"],
    liveUrl: "https://notenschluss.de",
    githubUrl: "https://github.com/phismith91/notenschluss",
    icon: <GraduationCap className="w-6 h-6" />,
    accentClass: "gradient-warm",
  },
  {
    title: "dFFA-Rechner",
    description: "Feuerwehr-Fitnessabzeichen Tool",
    longDescription:
      "Berechnung und Auswertung des Deutschen Feuerwehr-Fitnessabzeichens. Einzel- und Gruppenabnahme, CSV-Export, offizielle Leistungstabellen integriert.",
    tech: ["Vanilla JS", "SheetJS", "Offline-fähig"],
    liveUrl: "https://dffa.withphil.de",
    githubUrl: "https://github.com/phismith91/dffa-rechner",
    icon: <Flame className="w-6 h-6" />,
    accentClass: "gradient-warm",
  },
  {
    title: "Brandsicherheitswache",
    description: "Faire Zufallsziehungen",
    longDescription:
      "Kryptographisch sichere Auslosungen mit dem Fisher-Yates-Algorithmus. PDF- und CSV-Export der Protokolle. Komplett client-side.",
    tech: ["Vanilla JS", "CSPRNG", "Offline-fähig"],
    liveUrl: "https://los.withphil.de",
    githubUrl: "https://github.com/phismith91/brandsicherheitswache",
    icon: <Shield className="w-6 h-6" />,
    accentClass: "gradient-warm",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-display font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Projekte
          </h2>
          <p className="text-3xl md:text-4xl font-display font-bold text-foreground max-w-xl">
            Open Source Tools die ich gebaut habe
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group relative bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg ${project.accentClass} flex items-center justify-center text-primary-foreground mb-4`}
              >
                {project.icon}
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {project.description}
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4 flex-1">
                {project.longDescription}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
