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
                einzusetzen und komplexe Projekte erfolgreich umzusetzen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mit meinem Hintergrund in Mechatronik und Softwareentwicklung
                bringe ich technisches Verständnis und methodisches Know-how
                zusammen. Neben meiner Arbeit entwickle ich in meiner Freizeit
                Web-Anwendungen und Smart-Home-Integrationen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meine Projekte reichen von privacy-first Web-Apps über
                KNX-Home-Assistant-Integrationen bis hin zu Tools für die
                Feuerwehr. Alle sind Open Source.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "HTML/CSS", "Hugo"].map((t) => (
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
                  {["Python", "Node.js"].map((t) => (
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
                  {["Git", "Docker", "GitHub Actions"].map((t) => (
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
