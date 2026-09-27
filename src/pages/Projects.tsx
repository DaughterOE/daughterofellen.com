import ScrollReveal from "@/components/ScrollReveal";
import GallerySlider from "@/components/GallerySlider";
import lagos1 from "@/assets/lagos/lagos-1.jpeg";
import lagos2 from "@/assets/lagos/lagos-2.jpeg";
import lagos3 from "@/assets/lagos/lagos-3.jpeg";
import lagos4 from "@/assets/lagos/lagos-4.jpeg";
import lagos5 from "@/assets/lagos/lagos-5.jpeg";
import lagos6 from "@/assets/lagos/lagos-6.jpeg";
import lagos7 from "@/assets/lagos/lagos-7.jpeg";
import lagos8 from "@/assets/lagos/lagos-8.jpeg";
import lc1 from "@/assets/lagos-city/IMG_5900.jpg";
import lc2 from "@/assets/lagos-city/IMG_5909.jpg";
import lc3 from "@/assets/lagos-city/IMG_5920.jpg";
import lc4 from "@/assets/lagos-city/IMG_5942.jpg";
import lc5 from "@/assets/lagos-city/IMG_5943.jpg";
import lc6 from "@/assets/lagos-city/IMG_5953.jpg";
import lc7 from "@/assets/lagos-city/IMG_5982.jpg";
import lc8 from "@/assets/lagos-city/IMG_6082.jpg";
import lc9 from "@/assets/lagos-city/IMG_6103.jpg";
import lc10 from "@/assets/lagos-city/IMG_6105.jpg";

const lagosImages = [lagos1, lagos2, lagos3, lagos4, lagos5, lagos6, lagos7, lagos8].map((url) => ({ url }));
const lagosCityImages = [lc1, lc2, lc3, lc4, lc5, lc6, lc7, lc8, lc9, lc10].map((url) => ({ url }));

const projects = [
  {
    title: "Walk for Neurodiversity and Disability Inclusion",
    location: "Abuja and Lagos, 2026",
    image: lagos3,
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
