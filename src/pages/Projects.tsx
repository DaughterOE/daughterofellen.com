import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import GallerySlider from "@/components/GallerySlider";
import { Calendar, Clock, Globe, MapPin } from "lucide-react";
import lagos1 from "@/assets/lagos/lagos-1.jpeg.asset.json";
import lagos2 from "@/assets/lagos/lagos-2.jpeg.asset.json";
import lagos3 from "@/assets/lagos/lagos-3.jpeg.asset.json";
import lagos4 from "@/assets/lagos/lagos-4.jpeg.asset.json";
import lagos5 from "@/assets/lagos/lagos-5.jpeg.asset.json";
import lagos6 from "@/assets/lagos/lagos-6.jpeg.asset.json";
import lagos7 from "@/assets/lagos/lagos-7.jpeg.asset.json";
import lagos8 from "@/assets/lagos/lagos-8.jpeg.asset.json";
import lc1 from "@/assets/lagos-city/IMG_5900.jpg.asset.json";
import lc2 from "@/assets/lagos-city/IMG_5909.jpg.asset.json";
import lc3 from "@/assets/lagos-city/IMG_5920.jpg.asset.json";
import lc4 from "@/assets/lagos-city/IMG_5942.jpg.asset.json";
import lc5 from "@/assets/lagos-city/IMG_5943.jpg.asset.json";
import lc6 from "@/assets/lagos-city/IMG_5953.jpg.asset.json";
import lc7 from "@/assets/lagos-city/IMG_5982.jpg.asset.json";
import lc8 from "@/assets/lagos-city/IMG_6082.jpg.asset.json";
import lc9 from "@/assets/lagos-city/IMG_6103.jpg.asset.json";
import lc10 from "@/assets/lagos-city/IMG_6105.jpg.asset.json";

const lagosImages = [lagos1, lagos2, lagos3, lagos4, lagos5, lagos6, lagos7, lagos8];
const lagosCityImages = [lc1, lc2, lc3, lc4, lc5, lc6, lc7, lc8, lc9, lc10];

const projects = [
  {
    title: "Walk for Neurodiversity and Disability Inclusion",
    location: "Abuja and Lagos, 2026",
    image: lagos3.url,
    description:
      "The Daughter of Ellen Foundation successfully hosted the Walk for Neurodiversity and Disability Inclusion across Abuja and Lagos, bringing together advocates, volunteers, families, professionals, and community members in a shared commitment to awareness, accessibility, and inclusion. The initiative was designed to increase public understanding of neurodiversity and disability, promote the importance of early support, and encourage more inclusive communities, workplaces, and educational environments. Through advocacy, community engagement, and public dialogue, the walks helped amplify the voices and experiences of neurodivergent individuals and persons with disabilities while fostering greater awareness of the barriers they face. This project reflects our ongoing mission to build a society where everyone has equal access to opportunities, support, dignity, and belonging.",
  },
];

const Projects = () => {
  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden bg-primary">
        <div className="noise-overlay absolute inset-0" />
        <div className="deco-orb left-1/4 top-0 h-96 w-96 bg-secondary" />
        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-6xl">
              Our Projects
            </h1>
            <div className="gold-divider mx-auto mt-6 mb-4 max-w-xs" />
            <p className="text-base text-primary-foreground/80 md:text-lg">
              Building inclusion for neurodivergent individuals and persons with disabilities across Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="relative mx-auto max-w-5xl space-y-16">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <article className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-secondary">
                <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
                    {project.location}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
                    {project.title}
                  </h2>
                  <div className="mt-3 h-1 w-16 rounded-full bg-secondary" />
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* UPCOMING WORKSHOP */}
      <section className="section-padding relative overflow-hidden bg-primary">
        <div className="noise-overlay absolute inset-0" />
        <div className="deco-orb left-1/4 top-0 h-96 w-96 bg-secondary" />
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
              Upcoming Workshop
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
              AI for Accessibility: Building Inclusive Solutions for the Future
            </h2>
            <div className="gold-divider mx-auto mt-8 mb-6 max-w-xs" />
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-primary-foreground/80">
              <span className="inline-flex items-center gap-2">
                <Calendar size={18} className="text-secondary" />
                Friday, August 7
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={18} className="text-secondary" />
                6:00 PM - 8:00 PM GMT+1
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} className="text-secondary" />
                Zoom
              </span>
            </div>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
              A hands-on intermediate workshop for students and professionals exploring how AI can improve accessibility, productivity, and innovation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://luma.com/33g5cl44"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
              >
                Register
              </a>
              <Link
                to="/events"
                className="inline-block rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                See All Events
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WEBINAR */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="deco-orb -right-16 top-20 h-56 w-56 bg-secondary" />
        <div className="relative mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
              Inaugural Webinar
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Living It: Inclusion, Accessibility, Stigma and the Search for Support
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-secondary" />
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar size={18} className="text-secondary" />
                June 20th, 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={18} className="text-secondary" />
                3:00 PM WAT
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe size={18} className="text-secondary" />
                Online Webinar
              </span>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              An inaugural Daughter of Ellen webinar convening voices from across Africa and the diaspora to examine the everyday realities of neurodivergent individuals and persons with disabilities, and to chart a clear path toward the support systems our communities deserve.
            </p>
            <div className="mt-8">
              <a
                href="https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-secondary px-8 py-3.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
              >
                Register for the Webinar
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABUJA GALLERY */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
              Abuja 2026
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Abuja Pictures
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-secondary" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <GallerySlider
              images={lagosImages}
              alt="Walk for Neurodiversity and Disability Inclusion, Abuja 2026"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* LAGOS GALLERY */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
              Lagos 2026
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Lagos Pictures
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-secondary" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <GallerySlider
              images={lagosCityImages}
              alt="Walk for Neurodiversity and Disability Inclusion, Lagos 2026"
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Projects;
