import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Callout, ContentBand, TextCards, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";
import { submitForm } from "@/lib/submitForm";
import { volunteerUrl } from "@/lib/institutionalContent";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitForm({
      formSource: "contact",
      fullName: form.name,
      email: form.email,
      subject: form.subject || null,
      message: form.message,
    });
    setLoading(false);
    if (!res.ok) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Thank you for your message. We will respond shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="pt-24">
      <PageHeading title="Contact" description="We want to hear from you." />

      <ContentBand>
        <ImageTextRow slot="contact.body1">
          <Callout>Whether you are a prospective partner, a parent looking for support, a journalist covering the story, or someone who simply wants to know more about what we are building, please reach out.</Callout>
        </ImageTextRow>
      </ContentBand>

      <ContentBand tone="tint">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Contact Details</h2>
                
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-4">
                    <span className="font-semibold text-foreground w-28 shrink-0">Organisation</span>
                    <span>Daughter of Ellen Support and Empowerment Initiative</span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-4">
                    <span className="font-semibold text-foreground w-28 shrink-0">Founder</span>
                    <span>Eyvonne Eleko</span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-4">
                    <span className="font-semibold text-foreground w-28 shrink-0">Email</span>
                    <a href="mailto:info@daughterofellen.org" className="underline-sweep text-secondary-text transition-colors hover:text-foreground">info@daughterofellen.org</a>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-4">
                    <span className="font-semibold text-foreground w-28 shrink-0">Website</span>
                    <span>
                      <a href="https://www.daughterofellen.org" target="_blank" rel="noreferrer" className="underline-sweep text-secondary-text transition-colors hover:text-foreground">www.daughterofellen.org</a>

                    </span>
                  </div>
                    <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-4">
                     <span className="font-semibold text-foreground w-28 shrink-0">Location</span>
                     <span>Abuja, Federal Capital Territory, Nigeria | Dallas, Texas</span>
                   </div>
                    <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-4">
                      <span className="font-semibold text-foreground w-28 shrink-0">Social</span>
                      <div className="flex flex-wrap gap-3">
                        <a href="https://www.instagram.com/_daughterofellen" target="_blank" rel="noreferrer" className="underline-sweep text-secondary-text transition-colors hover:text-foreground">Instagram</a>
                        <a href="https://www.youtube.com/channel/UCIh1_524EWN_IfS-M5yO0Vw" target="_blank" rel="noreferrer" className="underline-sweep text-secondary-text transition-colors hover:text-foreground">YouTube</a>
                        <a href="https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW" target="_blank" rel="noreferrer" className="underline-sweep text-secondary-text transition-colors hover:text-foreground">WhatsApp</a>
                      </div>
                    </div>
                </div>
          </div>
          <div>
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    required
                    id="contact-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    required
                    id="contact-email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="mb-1 block text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    rows={5}
                    required
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-secondary px-8 py-3 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Get in Touch"}
                </Button>
              </form>
          </div>
        </div>
      </ContentBand>

      <ContentBand title="Enquiry Types" tone="muted">
        <TextCards items={[
      { title: "Partnerships and Sponsorship", description: <>To discuss partnerships or sponsorship opportunities, email <a href="mailto:partnership@daughterofellen.org" className="text-secondary-text underline underline-offset-4">partnership@daughterofellen.org</a> with the subject line: Partnership Enquiry.</> },
      { title: "Speaker Nominations", description: <>To nominate a speaker or panelist for the inaugural conference, email <a href="mailto:info@daughterofellen.org" className="text-secondary-text underline underline-offset-4">info@daughterofellen.org</a> with the subject line: Speaker Nomination. Include the nominee's name, area of expertise or lived experience, and your reason for the nomination.</> },
      { title: "Media and Press", description: <>For media accreditation, press briefings, or interview requests, email <a href="mailto:program@daughterofellen.org" className="text-secondary-text underline underline-offset-4">program@daughterofellen.org</a> with the subject line: Media Request.</> },
      { title: "Volunteer Applications", description: <>To apply for a volunteer role, email <a href="mailto:info@daughterofellen.org" className="text-secondary-text underline underline-offset-4">info@daughterofellen.org</a> with the subject line: Volunteer Application, along with a brief description of your skills and area of interest. You can also <a href={volunteerUrl} target="_blank" rel="noopener noreferrer" className="text-secondary-text underline underline-offset-4">sign up to volunteer online</a>.</> },
      { title: "General Enquiries", description: <>For all other enquiries, use the contact form on this page or email <a href="mailto:info@daughterofellen.org" className="text-secondary-text underline underline-offset-4">info@daughterofellen.org</a>.</> }
        ]} />
      </ContentBand>
    </main>
  );
};

export default Contact;
