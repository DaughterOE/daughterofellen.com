import { reportPath } from "@/lib/events";
import { programs } from "@/lib/institutionalContent";
import { ActionLink, CalloutBand, ContentBand, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";
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

const lagosImages = [lagos1, lagos2, lagos3, lagos4, lagos5, lagos6, lagos7, lagos8];
const lagosCityImages = [lc1, lc2, lc3, lc4, lc5, lc6, lc7, lc8, lc9, lc10];

const projects = [
  {
    title: "Walk for Neurodiversity and Disability Inclusion",
    location: "Abuja and Lagos, 2026",
    reportUrl: "https://docs.google.com/document/d/1OMVbee62M1V48cR6BWKVvJiJ1G67A6-nv42OesLXVdg/view",
    description:
      "The Daughter of Ellen Foundation successfully hosted the Walk for Neurodiversity and Disability Inclusion across Abuja and Lagos, bringing together advocates, volunteers, families, professionals, and community members in a shared commitment to awareness, accessibility, and inclusion. The initiative was designed to increase public understanding of neurodiversity and disability, promote the importance of early support, and encourage more inclusive communities, workplaces, and educational environments. Through advocacy, community engagement, and public dialogue, the walks helped amplify the voices and experiences of neurodivergent individuals and persons with disabilities while fostering greater awareness of the barriers they face. This project reflects our ongoing mission to build a society where everyone has equal access to opportunities, support, dignity, and belonging.",
  },
];

const Projects = () => {
  const project = projects[0];
  return (
    <main className="pt-24">
      <PageHeading title="Our Projects" description="Building inclusion for neurodivergent individuals and persons with disabilities across Africa." />

      <ContentBand>
        <ImageTextRow slot="projects.walk" title={<><span className="mb-3 block font-body text-sm uppercase tracking-[0.2em] text-secondary-text">{project.location}</span>{project.title}</>}>
          <p>{project.description}</p>
          <div className="pt-2"><ActionLink to={reportPath("lagos-awareness-walk")}>View the Lagos Walk Report</ActionLink></div>
        </ImageTextRow>
      </ContentBand>

      <CalloutBand>This project reflects our ongoing mission to build a society where everyone has equal access to opportunities, support, dignity, and belonging.</CalloutBand>

      <ContentBand>
        <ImageTextRow slot="projects.access-fund" portrait reverse title="DOE Access Fund">
          <p>{programs[5].description}</p>
          <div className="pt-2"><ActionLink to="/projects/access-fund">Explore the Access Fund</ActionLink></div>
        </ImageTextRow>
      </ContentBand>

      <ContentBand tone="muted">
        <ImageTextRow slot="projects.workshop" title={<><span className="mb-3 block font-body text-sm uppercase tracking-[0.2em] text-secondary-text">Past Workshop</span>AI for Accessibility: Building Inclusive Solutions for the Future</>}>
          <dl className="grid gap-x-8 gap-y-2 text-base sm:grid-cols-3">
            <div><dt className="text-xs uppercase tracking-wider">Date</dt><dd className="text-foreground">Friday, August 7, 2026</dd></div>
            <div><dt className="text-xs uppercase tracking-wider">Time</dt><dd className="text-foreground">6:00 PM to 8:00 PM GMT+1</dd></div>
            <div><dt className="text-xs uppercase tracking-wider">Location</dt><dd className="text-foreground">Zoom</dd></div>
          </dl>
          <p>A hands-on intermediate workshop for students and professionals exploring how AI can improve accessibility, productivity, and innovation.</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <ActionLink to={reportPath("ai-for-accessibility")}>View the Report</ActionLink>
            <ActionLink to="/events" secondary>See All Events</ActionLink>
          </div>
        </ImageTextRow>
      </ContentBand>

      <ContentBand>
        <ImageTextRow slot="projects.webinar" reverse title={<><span className="mb-3 block font-body text-sm uppercase tracking-[0.2em] text-secondary-text">Inaugural Webinar</span>Living It: Inclusion, Accessibility, Stigma and the Search for Support</>}>
          <dl className="grid gap-x-8 gap-y-2 text-base sm:grid-cols-3">
            <div><dt className="text-xs uppercase tracking-wider">Date</dt><dd className="text-foreground">June 20th, 2026</dd></div>
            <div><dt className="text-xs uppercase tracking-wider">Time</dt><dd className="text-foreground">3:00 PM WAT</dd></div>
            <div><dt className="text-xs uppercase tracking-wider">Location</dt><dd className="text-foreground">Online Webinar</dd></div>
          </dl>
          <p>An inaugural Daughter of Ellen webinar convening voices from across Africa and the diaspora to examine the everyday realities of neurodivergent individuals and persons with disabilities, and to chart a clear path toward the support systems our communities deserve.</p>
          <div className="pt-2"><ActionLink to={reportPath("living-it-webinar")}>View the Report</ActionLink></div>
        </ImageTextRow>
      </ContentBand>

      <ContentBand tone="tint">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary-text">Abuja 2026</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">Abuja Pictures</h2>
        <GallerySlider images={lagosImages} alt="Walk for Neurodiversity and Disability Inclusion, Abuja 2026" />
      </ContentBand>

      <ContentBand tone="muted">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary-text">Lagos 2026</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">Lagos Pictures</h2>
        <GallerySlider images={lagosCityImages} alt="Walk for Neurodiversity and Disability Inclusion, Lagos 2026" />
      </ContentBand>
    </main>
  );
};

export default Projects;
