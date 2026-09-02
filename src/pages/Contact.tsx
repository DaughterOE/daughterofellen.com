import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { submitForm } from "@/lib/submitForm";
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
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="deco-orb -right-24 top-10 h-72 w-72 bg-secondary" />
        <div className="deco-orb -left-16 bottom-10 h-48 w-48 bg-forest-light" />

        <div className="relative mx-auto max-w-4xl">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Contact</h1>
            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We want to hear from you. Whether you are a prospective partner, a parent looking for support, a journalist covering the story, or someone who simply wants to know more about what we are building, please reach out.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-16 md:grid-cols-2">
            {/* Contact Details */}
            <div>
              <ScrollReveal delay={200}>
                <h2 className="font-heading text-2xl font-bold text-foreground">Contact Details</h2>
                <div className="gold-divider mt-4 mb-8" />
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground w-28 shrink-0">Organisation</span>
                    <span>Daughter of Ellen, an initiative of the Evon Anthony Brand</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground w-28 shrink-0">Founder</span>
                    <span>Eyvonne Eleko</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground w-28 shrink-0">Email</span>
                    <a href="mailto:info@daughterofellen.org" className="underline-sweep text-secondary transition-colors hover:text-foreground">info@daughterofellen.org</a>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground w-28 shrink-0">Website</span>
                    <span>
                      <a href="https://www.daughterofellen.org" target="_blank" rel="noreferrer" className="underline-sweep text-secondary transition-colors hover:text-foreground">www.daughterofellen.org</a>
                      {" | "}
                      <a href="https://www.evonanthony.com" target="_blank" rel="noreferrer" className="underline-sweep text-secondary transition-colors hover:text-foreground">www.evonanthony.com</a>
                    </span>
                  </div>
                    <div className="flex gap-4">
                     <span className="font-semibold text-foreground w-28 shrink-0">Location</span>
                     <span>Abuja, Federal Capital Territory, Nigeria | Dallas, Texas</span>
                   </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-foreground w-28 shrink-0">Social</span>
                      <div className="flex gap-3">
                        <a href="https://www.instagram.com/_daughterofellen" target="_blank" rel="noreferrer" className="underline-sweep text-secondary transition-colors hover:text-foreground">Instagram</a>
                        <a href="https://www.youtube.com/channel/UCIh1_524EWN_IfS-M5yO0Vw" target="_blank" rel="noreferrer" className="underline-sweep text-secondary transition-colors hover:text-foreground">YouTube</a>
                        <a href="https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW" target="_blank" rel="noreferrer" className="underline-sweep text-secondary transition-colors hover:text-foreground">WhatsApp</a>
                      </div>
                    </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <h3 className="mt-12 font-heading text-xl font-bold text-foreground">Enquiry Types</h3>
                <div className="gold-divider mt-4 mb-8" />
                <div className="space-y-6 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground">Partnership and Sponsorship</h4>
                    <p>To discuss partnership or sponsorship opportunities, email <a href="mailto:partnership@daughterofellen.org" className="text-secondary">partnership@daughterofellen.org</a> with the subject line: Partnership Enquiry.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Speaker Nominations</h4>
                    <p>To nominate a speaker or panelist for the inaugural conference, email <a href="mailto:info@daughterofellen.org" className="text-secondary">info@daughterofellen.org</a> with the subject line: Speaker Nomination. Include the nominee's name, area of expertise or lived experience, and your reason for the nomination.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Media and Press</h4>
                    <p>For media accreditation, press briefings, or interview requests, email <a href="mailto:program@daughterofellen.org" className="text-secondary">program@daughterofellen.org</a> with the subject line: Media Request.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Volunteer Applications</h4>
                    <p>To apply for a volunteer role, email <a href="mailto:info@daughterofellen.org" className="text-secondary">info@daughterofellen.org</a> with the subject line: Volunteer Application, along with a brief description of your skills and area of interest.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">General Enquiries</h4>
                    <p>For all other enquiries, use the contact form on this page or email <a href="mailto:info@daughterofellen.org" className="text-secondary">info@daughterofellen.org</a>.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div>
              <ScrollReveal delay={250}>
                <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
                <div className="gold-divider mt-4 mb-8" />
              </ScrollReveal>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-secondary px-8 py-3 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Get in Touch"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;