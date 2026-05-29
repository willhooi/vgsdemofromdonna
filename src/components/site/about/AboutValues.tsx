const values = [
  { title: "People First", body: "We respect and value our team for who they are. Every voice is heard, every input counts." },
  { title: "Quality", body: "Always standardized in execution. We never compromise on the technical integrity of our work." },
  { title: "Integrity", body: "100% committed to doing what's right for our customers — long-term partnerships, mutual benefit." },
  { title: "Honesty", body: "Authentic in what we say and do. Respectful with colleagues, customers and stakeholders." },
  { title: "Accountability", body: "Fully accountable for our actions. We understand how each decision reaches our customers." },
  { title: "Creativity & Innovation", body: "We never rest on our laurels. Always striving to stay ahead of the curve in a fast-moving industry." },
];

export const AboutValues = () => (
  <section className="py-24 md:py-32 bg-[#fcfaf7]">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
        <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl text-foreground text-balance">
          Six values. <br className="hidden md:block" />
          One way of working.
        </h2>
        <p className="text-muted-foreground font-light max-w-xs md:text-right">
          Quality sits at the front of everything we do — never compromised in cost control.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-12">
        {values.map((v, i) => (
          <div key={v.title} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <h4 className="font-semibold text-sm mb-4 tracking-tight text-foreground border-l-2 border-primary pl-4">
              {v.title}
            </h4>
            <p className="text-muted-foreground font-light leading-relaxed pl-4">{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
