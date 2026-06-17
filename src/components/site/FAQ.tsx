import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What mobile marketing solutions does VietGuys provide?",
    a: "VietGuys offers a multi-channel ecosystem including SMS Brandname, SMS Fixed, SMS Short Code, Viber Messages, Zalo ZNS, Email Marketing & OTP, Voice Brandname & OTP, Mobile Topup, Smart Warranty, OTPBox, and customized enterprise solutions.",
  },
  {
    q: "Does VietGuys' system ensure security and speed?",
    a: "Yes. VietGuys is one of the few advertising companies holding the ISO 27001:2022 certification for information security, certified by VNCERT/CC under the Ministry of Information and Communications, and operates multiple backup servers to ensure stable service and message delivery speed measured in seconds.",
  },
  {
    q: "What is the scale of VietGuys' operations?",
    a: "More than 19 years of experience, serving over 5,000 brands and sending approximately 5,000,000 SMS & Email messages per day. Our expert team supports customers 24/7.",
  },
  {
    q: "What are the benefits after VietGuys' M&A with Accrete Inc. (Japan)?",
    a: "Following the M&A with Accrete Inc., VietGuys has strengthened its AI/CDP technology capabilities, expanded Account Intelligence solutions, and adopted Japanese operational standards, helping enterprise customers access next-generation marketing solutions.",
  },
  {
    q: "Can VietGuys integrate with our existing CRM system?",
    a: "Yes. The VietGuys platform is designed to be flexible, compatible, and API-connectable with many domestic and international CRM, ERP, and eCommerce systems. Our technical team will tailor the integration to each customer's needs.",
  },
  {
    q: "How can I get advice and a quote from VietGuys?",
    a: "You can contact us directly via the hotline 028-7300-8027, use the AI Chat on the website, or click 'Talk to Expert' to have a VietGuys expert recommend the right solution within 24 hours.",
  },
];

export const FAQ = () => (
  <section id="faq" className="py-14 md:py-20">
    <div className="container-tight grid gap-12 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <span className="eyebrow">FAQ</span>
        <h2 className="heading-section mt-3">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Everything you need to know about VietGuys services, security, and deployment.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-5">
          <p className="text-sm font-semibold text-foreground">Need a more specific answer?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Our experts are available to advise you 24/7.
          </p>
          <a
            href="tel:02873008027"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-deep"
          >
            📞 028-7300-8027
          </a>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-b border-border first:border-t"
          >
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
