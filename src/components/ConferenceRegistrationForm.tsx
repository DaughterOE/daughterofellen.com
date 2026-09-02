import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/ScrollReveal";

const CATEGORIES = [
  "Educator",
  "Parent / Caregiver",
  "Healthcare or Support Professional",
  "Neurodivergent Individual",
  "Person with a Disability",
  "Advocate / Ally",
];

const AWARENESS_OPTIONS = [
  "Social Media",
  "Friend / Referral",
  "Organization / School",
  "Event",
  "Other",
];

const ConferenceRegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    sameAsPhone: false,
    categories: [] as string[],
    otherCategory: "",
    requiresSupport: null as boolean | null,
    accessibilityDetails: "",
    awareness: "",
    awarenessOther: "",
    confirmsAttendance: false,
    agreesToUpdates: false,
    consentsToContact: false,
  });

  const toggleCategory = (cat: string) => {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.confirmsAttendance) {
      toast({ title: "Please confirm physical attendance", variant: "destructive" });
      return;
    }
    if (form.categories.length === 0) {
      toast({ title: "Please select at least one participation category", variant: "destructive" });
      return;
    }

    setLoading(true);
    const whatsapp = form.sameAsPhone ? form.phone : form.whatsapp;
    const categories = form.categories.includes("Other") && form.otherCategory
      ? [...form.categories.filter(c => c !== "Other"), form.otherCategory]
      : form.categories;

    const { error } = await supabase.from("conference_registrations").insert({
      full_name: form.fullName,
      email: form.email,
      phone: form.phone,
      whatsapp: whatsapp,
      participation_categories: categories,
      other_category: form.otherCategory || null,
      requires_accessibility_support: form.requiresSupport ?? false,
      accessibility_details: form.accessibilityDetails || null,
      awareness_source: form.awareness || null,
      awareness_other: form.awarenessOther || null,
      confirms_physical_attendance: form.confirmsAttendance,
      agrees_to_updates: form.agreesToUpdates,
      consents_to_contact: form.consentsToContact,
    });

    setLoading(false);

    if (error) {
      toast({ title: "Registration failed", description: "Please try again later.", variant: "destructive" });
      return;
    }

    // Trigger confirmation + admin notification emails
    const { submitForm } = await import("@/lib/submitForm");
    void submitForm({
      formSource: "conference-registration",
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      message: `Categories: ${categories.join(", ")}`,
      extra: {
        whatsapp,
        requiresAccessibilitySupport: form.requiresSupport ?? false,
        accessibilityDetails: form.accessibilityDetails || undefined,
        awarenessSource: form.awareness || undefined,
        awarenessOther: form.awarenessOther || undefined,
      },
    });

    toast({ title: "Registration Successful", description: "Thank you! A confirmation email has been sent." });
    setForm({
      fullName: "", email: "", phone: "", whatsapp: "", sameAsPhone: false,
      categories: [], otherCategory: "", requiresSupport: null, accessibilityDetails: "",
      awareness: "", awarenessOther: "", confirmsAttendance: false, agreesToUpdates: false, consentsToContact: false,
    });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-10 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Webinar Registration
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-8">
            {/* BASIC INFORMATION */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold text-foreground">Basic Information</h3>
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number — Call Line *</Label>
                <Input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="sameAsPhone"
                  checked={form.sameAsPhone}
                  onCheckedChange={(checked) => setForm({ ...form, sameAsPhone: checked === true })}
                />
                <Label htmlFor="sameAsPhone" className="text-sm">Same as phone number</Label>
              </div>
              {!form.sameAsPhone && (
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                  <Input id="whatsapp" type="tel" required={!form.sameAsPhone} value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className="mt-1" />
                </div>
              )}
            </div>

            {/* PARTICIPATION CATEGORY */}
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-foreground">Participation Category</h3>
              <p className="text-sm text-muted-foreground">Select all that apply</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {CATEGORIES.map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <Checkbox
                      id={`cat-${cat}`}
                      checked={form.categories.includes(cat)}
                      onCheckedChange={() => toggleCategory(cat)}
                    />
                    <Label htmlFor={`cat-${cat}`} className="text-sm">{cat}</Label>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="cat-other"
                    checked={form.categories.includes("Other")}
                    onCheckedChange={() => toggleCategory("Other")}
                  />
                  <Label htmlFor="cat-other" className="text-sm">Other</Label>
                </div>
              </div>
              {form.categories.includes("Other") && (
                <Input placeholder="Please specify" value={form.otherCategory} onChange={(e) => setForm({ ...form, otherCategory: e.target.value })} className="mt-2" />
              )}
            </div>

            {/* ACCESSIBILITY */}
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-foreground">Accessibility</h3>
              <p className="text-sm text-muted-foreground">Do you require support?</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <input type="radio" id="support-yes" name="support" className="accent-secondary" checked={form.requiresSupport === true} onChange={() => setForm({ ...form, requiresSupport: true })} />
                  <Label htmlFor="support-yes" className="text-sm">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" id="support-no" name="support" className="accent-secondary" checked={form.requiresSupport === false} onChange={() => setForm({ ...form, requiresSupport: false })} />
                  <Label htmlFor="support-no" className="text-sm">No</Label>
                </div>
              </div>
              {form.requiresSupport && (
                <Input placeholder="Please describe your support needs" value={form.accessibilityDetails} onChange={(e) => setForm({ ...form, accessibilityDetails: e.target.value })} className="mt-2" />
              )}
            </div>

            {/* AWARENESS */}
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-foreground">How did you hear about us?</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {AWARENESS_OPTIONS.map((opt) => (
                  <div key={opt} className="flex items-center gap-2">
                    <input type="radio" id={`aware-${opt}`} name="awareness" className="accent-secondary" checked={form.awareness === opt} onChange={() => setForm({ ...form, awareness: opt })} />
                    <Label htmlFor={`aware-${opt}`} className="text-sm">{opt}</Label>
                  </div>
                ))}
              </div>
              {form.awareness === "Other" && (
                <Input placeholder="Please specify" value={form.awarenessOther} onChange={(e) => setForm({ ...form, awarenessOther: e.target.value })} className="mt-2" />
              )}
            </div>

            {/* ATTENDANCE CONFIRMATION */}
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-foreground">Attendance Confirmation</h3>
              <div className="flex items-start gap-2">
                <Checkbox
                  id="confirmsAttendance"
                  checked={form.confirmsAttendance}
                  onCheckedChange={(checked) => setForm({ ...form, confirmsAttendance: checked === true })}
                  className="mt-0.5"
                />
                <Label htmlFor="confirmsAttendance" className="text-sm">
                  I confirm that I will attend this webinar online on June 20th, 2026 at 3:00 PM WAT *
                </Label>
              </div>
            </div>

            {/* CONSENT */}
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-foreground">Consent</h3>
              <div className="flex items-start gap-2">
                <Checkbox
                  id="agreesToUpdates"
                  checked={form.agreesToUpdates}
                  onCheckedChange={(checked) => setForm({ ...form, agreesToUpdates: checked === true })}
                  className="mt-0.5"
                />
                <Label htmlFor="agreesToUpdates" className="text-sm">I agree to receive updates</Label>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox
                  id="consentsToContact"
                  checked={form.consentsToContact}
                  onCheckedChange={(checked) => setForm({ ...form, consentsToContact: checked === true })}
                  className="mt-0.5"
                />
                <Label htmlFor="consentsToContact" className="text-sm">I consent to being contacted</Label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Register Now"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConferenceRegistrationForm;
