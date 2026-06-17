import { useState } from "react";
import { Send } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
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

export const AboutCTAFinal = () => {
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
      trackDemoRequest("about_cta_final");
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
    <section id="contact" className="px-6 pb-24 pt-4 md:pb-28">
      <div className="container-tight">
        <Reveal variant="scale-soft">
          <div
            className="grid overflow-hidden rounded-[28px] text-white md:grid-cols-[0.9fr_1.1fr]"
            style={{
              background:
                "linear-gradient(120deg, #0c3b20 0%, hsl(var(--primary-deep)) 100%)",
            }}
          >
            <div className="px-8 py-14 md:px-14 md:py-[70px]">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "#a7f070" }}
              >
                Start the conversation
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] md:text-[44px]">
                Let&apos;s discuss the details.
              </h2>
              <p className="mt-4 max-w-md text-white/80 md:text-[15.5px]">
                Tell us about your goals. A VietGuys strategist will reply within
                2 hours — in Vietnamese, English or Japanese.
              </p>
            </div>

            <div className="bg-white/5 px-8 py-10 backdrop-blur-sm md:px-12 md:py-12">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    required
                    placeholder="Your full name *"
                    value={form.name}
                    onChange={(e) => update("name")(e.target.value)}
                    maxLength={100}
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/40"
                  />
                  <Input
                    required
                    type="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={(e) => update("email")(e.target.value)}
                    maxLength={255}
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/40"
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
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/40"
                  />
                  <Input
                    placeholder="Company"
                    value={form.company}
                    onChange={(e) => update("company")(e.target.value)}
                    maxLength={120}
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/40"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Select value={form.hear} onValueChange={update("hear")}>
                    <SelectTrigger className="border-white/20 bg-white/10 text-white data-[placeholder]:text-white/60">
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
                    <SelectTrigger className="border-white/20 bg-white/10 text-white data-[placeholder]:text-white/60">
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
                  <SelectTrigger className="border-white/20 bg-white/10 text-white data-[placeholder]:text-white/60">
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
                  rows={3}
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  maxLength={1000}
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/40"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white font-bold hover:bg-white/90 hover:-translate-y-0.5 sm:w-auto sm:justify-self-start"
                  style={{ color: "hsl(var(--primary-deep))" }}
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send your message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
