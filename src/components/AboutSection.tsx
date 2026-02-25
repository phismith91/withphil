import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-display font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Über mich
          </h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed text-foreground mb-6">
                Seit 2020 unterstütze ich Teams dabei, agile Methoden effektiv
                einzusetzen. Als Scrum Master im Automotive-Umfeld begleite ich
                komplexe Projekte von der Idee bis zur Umsetzung.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mit meinem Hintergrund in Mechatronik und Softwareentwicklung
                kombiniere ich Technik mit Praxis: Programmierung, Arduino,
                Maker-Projekte mit 3D-Druck und ADS-B/FlightRadar.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Feuerwehr und DLRG sind mein Hobby, genauso wie Segeln auf dem
                Wasser und die Faszination fuers Fliegen. Dazu kommen
                privacy-first Web-Apps und Smart-Home-Integrationen. Wie viele
                nutze ich unterwegs viel AI - etwa GitHub Copilot und Claude.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Sphinx", "Sphinx-needs", "Restructured Text", "Markdown", "Hugo"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Smart Home
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Home Assistant", "KNX/IP"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "GitHub", "GitLab"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
