type Milestone = {
  date: string;
  title: string;
  body: string;
  highlight?: boolean;
};

const milestones: Milestone[] = [
  { date: "June 2007", title: "VietGuys is founded", body: "The first SMS gateway lit up from a modest 25m² workplace in HCMC." },
  { date: "March 2008", title: "Samsung E-warranty", body: "Selected to power Samsung's E-warranty messaging across Vietnam." },
  { date: "February 2010", title: "Investing in Digitel", body: "Invested in and partnered with Digitel Co., Ltd." },
  { date: "November 2017", title: "LG E-warranty", body: "Delivered LG's E-warranty notifications nationwide." },
  { date: "December 2018", title: "#1 SMS in E-commerce", body: "Top SMS volume provider for Vietnam's e-commerce industry." },
  { date: "November 2020", title: "OTPBox launched", body: "Multi-channel verification code platform goes live." },
  { date: "January 2021", title: "5,000+ brands", body: "Trusted by 5,000+ domestic and international brands across 15 solutions." },
  { date: "March 2022", title: "Joins Accrete Inc.", body: "Merged with Japan's leading international SMS gateway provider, listed on Tokyo Stock Exchange." },
  { date: "May 2022", title: "PangoCDP", body: "Partnered with ByteTech to bring PangoCDP to enterprises." },
  { date: "Today", title: "5M+ Messages Daily", body: "76 enterprise clients, every province in Vietnam, one steady signal.", highlight: true },
];

export const AboutTimeline = () => (
  <section className="py-24 md:py-32 px-6 bg-background border-y border-border">
    <div className="container-tight">
      <h2 className="font-['Instrument_Serif'] italic text-4xl md:text-5xl mb-20 text-center text-foreground text-balance">
        Nineteen years, one signal.
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-16 md:space-y-20">
          {milestones.map((m, i) => (
            <div
              key={`${m.date}-${m.title}`}
              className="relative pl-14 md:pl-20 animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div
                className={`absolute left-4 -translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full ring-4 ring-background ${
                  m.highlight ? "bg-accent animate-signal" : "bg-primary"
                }`}
              />
              <div
                className={`font-bold text-[10px] tracking-widest uppercase mb-2 ${
                  m.highlight ? "text-accent" : "text-primary"
                }`}
              >
                {m.date}
              </div>
              <h4 className="font-['Instrument_Serif'] text-2xl mb-2 text-foreground">{m.title}</h4>
              <p className="text-muted-foreground font-light">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
