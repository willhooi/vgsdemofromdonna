import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import { trackDemoRequest } from "@/lib/analytics";

const formSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Invalid phone").max(20),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  hear: z.string().min(1, "Please select an option"),
  interest: z.string().min(1, "Please select an option"),
  service: z.string().min(1, "Please select an option"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const HEAR_OPTIONS = ["Kiotviet", "Haravan", "Sapo", "Google", "Facebook", "Other"];
const INTEREST_OPTIONS = ["Consult", "Cooperate", "Sponsor", "Feedback", "Demobox", "Other"];
const SERVICE_OPTIONS = [
  "SMS Brandname",
  "SMS Fixed",
  "Viber Message",
  "Zalo ZNS Template",
  "Email Marketing",
  "Email OTP",
  "Voice OTP",
  "Voice Brandname",
  "Mobile Topup",
  "OTT Multi Service",
  "Smart Warranty",
  "OTPBox",
  "PangoCDP",
  "Customized Solutions",
];

export const CTASection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    hear: "",
    interest: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = formSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    try {
      trackDemoRequest("cta_form");
      await new Promise((r) => setTimeout(r, 600));
      toast.success("Thanks! Our team will reach out within 2 hours.");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        hear: "",
        interest: "",
        service: "",
        message: "",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background p-8 shadow-[var(--shadow-card)] md:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-start">
            <div>
              <span className="eyebrow">Start the conversation</span>
              <h2 className="heading-section mt-4 text-balance">
                Send your message. We&apos;ll reply in under 2 hours.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us about your goals. A VietGuys strategist will respond with a tailored
                proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  required
                  placeholder="Your full name *"
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  maxLength={100}
                />
                <Input
                  required
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  maxLength={255}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  required
                  type="tel"
                  placeholder="Phone number *"
                  value={form.phone}
                  onChange={(e) => update("phone")(e.target.value)}
                  maxLength={20}
                />
                <Input
                  placeholder="Company"
                  value={form.company}
                  onChange={(e) => update("company")(e.target.value)}
                  maxLength={120}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Select value={form.hear} onValueChange={update("hear")}>
                  <SelectTrigger>
                    <SelectValue placeholder="How did you hear about us? *" />
                  </SelectTrigger>
                  <SelectContent>
                    {HEAR_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={form.interest} onValueChange={update("interest")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Interest *" />
                  </SelectTrigger>
                  <SelectContent>
                    {INTEREST_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Select value={form.service} onValueChange={update("service")}>
                <SelectTrigger>
                  <SelectValue placeholder="Service of interest *" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_OPTIONS.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Your message"
                rows={4}
                value={form.message}
                onChange={(e) => update("message")(e.target.value)}
                maxLength={1000}
              />
              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="vg-cta-slant w-full sm:w-auto sm:justify-self-start"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send your message"}
                <Send className="h-4 w-4" />
              </Button>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Average response · under 2 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
