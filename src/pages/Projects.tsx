import ScrollReveal from "@/components/ScrollReveal";
import GallerySlider from "@/components/GallerySlider";
import lagos1 from "@/assets/lagos/lagos-1.webp";
import lagos2 from "@/assets/lagos/lagos-2.webp";
import lagos3 from "@/assets/lagos/lagos-3.webp";
import lagos4 from "@/assets/lagos/lagos-4.webp";
import lagos5 from "@/assets/lagos/lagos-5.webp";
import lagos6 from "@/assets/lagos/lagos-6.webp";
import lagos7 from "@/assets/lagos/lagos-7.webp";
import lagos8 from "@/assets/lagos/lagos-8.webp";
import lc1 from "@/assets/lagos-city/IMG_5900.webp";
import lc2 from "@/assets/lagos-city/IMG_5909.webp";
import lc3 from "@/assets/lagos-city/IMG_5920.webp";
import lc4 from "@/assets/lagos-city/IMG_5942.webp";
import lc5 from "@/assets/lagos-city/IMG_5943.webp";
import lc6 from "@/assets/lagos-city/IMG_5953.webp";
import lc7 from "@/assets/lagos-city/IMG_5982.webp";
import lc8 from "@/assets/lagos-city/IMG_6082.webp";
import lc9 from "@/assets/lagos-city/IMG_6103.webp";
import lc10 from "@/assets/lagos-city/IMG_6105.webp";
import accessFundFlyer from "@/assets/access-fund-flyer.webp";

const lagosImages = [lagos1, lagos2, lagos3, lagos4, lagos5, lagos6, lagos7, lagos8].map((url) => ({ url }));
const lagosCityImages = [lc1, lc2, lc3, lc4, lc5, lc6, lc7, lc8, lc9, lc10].map((url) => ({ url }));

type Project = {
  title: string;
  location: string;
  image: string;
  /** "cover" (default) crops to a 3:2 frame; "contain" shows the whole image, for portrait flyers. */
  fit?: "cover" | "contain";
  description: string[];
  /** Optional non-interactive status pill, e.g. an application window that has closed. */
  status?: string;
};

const projects: Project[] = [
  {
    title: "Walk for Neurodiversity and Disability Inclusion",
    location: "Abuja and Lagos, 2026",
    image: lagos3,
    description: [
      "The Daughter of Ellen Foundation successfully hosted the Walk for Neurodiversity and Disability Inclusion across Abuja and Lagos, bringing together advocates, volunteers, families, professionals, and community members in a shared commitment to awareness, accessibility, and inclusion. The initiative was designed to increase public understanding of neurodiversity and disability, promote the importance of early support, and encourage more inclusive communities, workplaces, and educational environments. Through advocacy, community engagement, and public dialogue, the walks helped amplify the voices and experiences of neurodivergent individuals and persons with disabilities while fostering greater awareness of the barriers they face. This project reflects our ongoing mission to build a society where everyone has equal access to opportunities, support, dignity, and belonging.",
    ],
  },
  {
    title: "Daughter of Ellen Access Fund",
    location: "June 20th \u2013 August 20th, 2026",
    image: accessFundFlyer,
    fit: "contain",
    description: [
      "The Daughter of Ellen Access Fund is a needs-based initiative designed to support individuals and families who face significant barriers to accessing disability and neurodiversity related services. You can apply if you are a neurodivergent individual, a person living with a disability, a parent or caregiver applying on behalf of a child or dependent, an individual awaiting assessment or diagnosis, or someone requiring access to therapy, assessments, assistive technology, educational support, specialist consultations, or other accessibility related services.",
      "All applications go through a review process and are assessed based on level of need and urgency, financial circumstances, the potential impact of the requested support, completeness of the application and supporting documentation, and availability of funding.",
      "Please note that meeting the eligibility requirements does not guarantee funding. Support is awarded only to applicants who successfully meet the selection criteria and are approved during the review process. Funding decisions are based on priority need, available resources, and the objectives of each funding cycle.",
      "This fund was built for the people who need it most.",
    ],
    status: "Application Closed",
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
                {project.fit === "contain" ? (
                  <div className="flex w-full items-center justify-center bg-primary p-4 md:p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="mx-auto max-h-[640px] w-auto rounded-lg object-contain"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8 md:p-10">
                  <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
                    {project.location}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
                    {project.title}
                  </h2>
                  <div className="mt-3 h-1 w-16 rounded-full bg-secondary" />
                  {project.description.map((para, j) => (
                    <p key={j} className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {para}
                    </p>
                  ))}
                  {project.status && (
                    <div className="mt-8">
                      <span
                        aria-disabled="true"
                        className="inline-block cursor-not-allowed rounded-full border-2 border-border px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {project.status}
                      </span>
                    </div>
                  )}
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
