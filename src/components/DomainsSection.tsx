import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface InterestDomain {
  name: string;
  domain: string;
  emoji: string;
  description: string;
};

const domains: InterestDomain[] = [
  {
    name: "Sailing with Phil",
    domain: "sailing.withphil.de",
    emoji: "⛵",
    description: "Törnberichte, Crew-Ressourcen und Skipper-Dokumente",
  },
  {
    name: "Notenschluss",
    domain: "notenschluss.de",
    emoji: "🎓",
    description: "Privacy-first Notenmanager — komplett lokal",
  },
  {
    name: "Notenfreude",
    domain: "notenfreude.de",
    emoji: "📊",
    description: "Schulnoten verwalten ohne Cloud oder Tracking",
  },
  {
    name: "Holzpreisvergleich",
    domain: "holzpreisvergleich.de",
    emoji: "🪵",
    description: "Brennholz-Angebote normalisiert vergleichen",
  },
  {
    name: "dFFA-Rechner",
    domain: "dffa.withphil.de",
    emoji: "🔥",
    description: "Deutsches Feuerwehr-Fitnessabzeichen berechnen und auswerten",
  },
  {
    name: "Brandsicherheitswache",
    domain: "los.withphil.de",
    emoji: "🛡️",
    description: "Kryptographisch sichere Zufallsauslosungen mit PDF-Export",
  },
];


const DomainsSection = () => {
  return (
    <section id="domains" className="py-24 px-6 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-display font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Domains
          </h2>
          <p className="text-3xl md:text-4xl font-display font-bold text-foreground max-w-xl">
            Projekte mit eigener Adresse
          </p>
        </motion.div>
        <div className="space-y-3">
          {domains.map((d, i) => (
            <motion.a
              key={d.domain}
              href={`https://${d.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group flex items-center gap-4 p-5 rounded-xl bg-card hover:bg-muted/80 border border-border hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              <span className="text-3xl">{d.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-foreground">
                  {d.name}
                </h3>
                <p className="text-sm text-muted-foreground">{d.description}</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                <span className="font-mono">{d.domain}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
