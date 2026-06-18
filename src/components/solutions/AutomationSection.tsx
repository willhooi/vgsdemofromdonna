import { useEffect, useRef } from "react";

export function AutomationSection() {
  const dashRefs = useRef<(SVGPathElement | null)[]>([]);
  const pulseRef = useRef<SVGCircleElement | null>(null);
  const satRefs = useRef<(SVGCircleElement | null)[]>([]);
  const satBaseY = useRef<number[]>([]);
  const flowRefs = useRef<(SVGPathElement | null)[]>([]);
  const radarRefs = useRef<(SVGCircleElement | null)[]>([]);
  const superRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    let raf = 0;
    // Quad1: flowing dashes
    const dashTimer = window.setInterval(() => {
      dashRefs.current.forEach((p) => {
        if (!p) return;
        const cur = parseFloat(p.getAttribute("stroke-dashoffset") || "0");
        p.setAttribute("stroke-dashoffset", String(cur - 1));
      });
    }, 40);

    // Quad3: stagger flow reveal
    const flowStart = [0, 400, 800];
    const flowT0 = performance.now();

    const tick = (t: number) => {
      // Quad1 pulse ring
      if (pulseRef.current) {
        const phase = ((t / 1400) % 1);
        const r = 36 + phase * 24;
        const op = 0.5 * (1 - phase);
        pulseRef.current.setAttribute("r", String(r));
        pulseRef.current.setAttribute("stroke-opacity", String(op));
      }
      // Quad2 satellites bob
      satRefs.current.forEach((c, i) => {
        if (!c) return;
        const base = satBaseY.current[i] ?? 0;
        const phase = t / 600 + (i / 7) * Math.PI * 2;
        c.setAttribute("cy", String(base + Math.sin(phase) * 3));
      });
      // Quad3 flow dashoffset 200->0 with stagger
      flowRefs.current.forEach((p, i) => {
        if (!p) return;
        const dur = 1500;
        const elapsed = (t - flowT0 - flowStart[i]) % (dur + 200);
        const e = Math.max(0, Math.min(dur, elapsed));
        const off = 200 - (e / dur) * 200;
        p.setAttribute("stroke-dashoffset", String(off));
      });
      // Quad4 radar
      radarRefs.current.forEach((c, i) => {
        if (!c) return;
        const phase = ((t / 2200) + i * 0.7 / (Math.PI * 2)) % 1;
        const r = 20 + phase * 65;
        const op = 0.5 - phase * 0.5;
        c.setAttribute("r", String(r));
        c.setAttribute("stroke-opacity", String(Math.max(0, op)));
      });
      if (superRef.current) {
        const y = Math.sin(t / 700) * 5;
        superRef.current.setAttribute("transform", `translate(0, ${y})`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(dashTimer);
    };
  }, []);

  // Quad2 satellite positions (cx, cy, emoji)
  const sats: [number, number, string][] = [
    [130, 28, "📱"],
    [188, 52, "📧"],
    [202, 100, "🛒"],
    [186, 148, "💳"],
    [74, 148, "📍"],
    [58, 100, "📞"],
    [72, 52, "🌐"],
  ];
  satBaseY.current = sats.map((s) => s[1]);

  return (
    <section id="automation" style={{ padding: "72px 24px", background: "#fff" }}>
      <div className="auto-card">
        <div className="auto-left">
          <p className="auto-label">AUTOMATION SYSTEM</p>
          <h2 className="auto-h2">
            One platform.
            <br />
            Every customer moment.
          </h2>
          <p className="auto-body">
            PangoCDP unifies all your customer data, builds intelligent segments,
            automates journeys across channels — and activates data to drive
            measurable revenue.
          </p>
          <ul className="auto-list">
            <li><span className="dot" />360° customer profiles from every touchpoint</li>
            <li><span className="dot" />Drag-and-drop journey automation, no code</li>
            <li><span className="dot" />Real-time segmentation with AI-driven scoring</li>
            <li><span className="dot" />Multi-channel data activation — SMS, Zalo, Email, Voice</li>
          </ul>
          <div className="auto-cta">
            <a className="auto-btn primary" href="#cta">Explore PangoCDP</a>
            <a className="auto-btn ghost" href="#cta">Request a demo</a>
          </div>
        </div>

        <div className="auto-right">
          {/* Q1 Data Collection */}
          <div className="quad" style={{ background: "#0d2e14" }}>
            <svg className="quad-svg" viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet">
              {[47, 99, 151].map((y, i) => (
                <g key={i}>
                  <rect x="24" y={y - 17} width="48" height="34" rx="8"
                    fill="rgba(255,255,255,.12)" stroke="rgba(167,240,112,.4)" strokeWidth="1" />
                  <text x="48" y={y + 3} fontSize="9" fontWeight="700" fill="#a7f070" textAnchor="middle">
                    {["CRM", "WEB", "POS"][i]}
                  </text>
                  <path
                    ref={(el) => (dashRefs.current[i] = el)}
                    d={`M72 ${y} Q 110 ${y} 114 96`}
                    stroke="#a7f070" strokeWidth="1.5" fill="none"
                    strokeDasharray="4 3" strokeDashoffset="0"
                  />
                  <text x="112" y={y < 96 ? y + 4 : y - 2} fontSize="8" fill="#a7f070">▶</text>
                </g>
              ))}
              <circle cx="150" cy="96" r="36" fill="rgba(167,240,112,.12)" stroke="rgba(167,240,112,.3)" />
              <circle cx="150" cy="96" r="24" fill="rgba(167,240,112,.18)" stroke="rgba(167,240,112,.4)" />
              <circle ref={pulseRef} cx="150" cy="96" r="36" fill="none" stroke="#a7f070" strokeWidth="1.5" />
              <text x="150" y="101" fontSize="13" fontWeight="800" fill="#a7f070" textAnchor="middle">CDP</text>
            </svg>
            <div className="quad-text">
              <h4>Data collection</h4>
              <p>Fast online data collection and offline data integration through a user-friendly interface.</p>
            </div>
          </div>

          {/* Q2 User profile */}
          <div className="quad" style={{ background: "#c95a3e" }}>
            <svg className="quad-svg" viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet">
              <circle cx="130" cy="90" r="50" fill="none" stroke="rgba(255,255,255,.18)" strokeDasharray="2 4" />
              <circle cx="130" cy="90" r="72" fill="none" stroke="rgba(255,255,255,.14)" strokeDasharray="2 4" />
              {sats.map((s, i) => (
                <line key={"l" + i} x1="130" y1="90" x2={s[0]} y2={s[1]} stroke="rgba(255,255,255,.2)" />
              ))}
              <circle cx="130" cy="90" r="26" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.5)" />
              <circle cx="130" cy="84" r="7" fill="rgba(255,255,255,.7)" />
              <path d="M114 102 Q130 92 146 102 Q146 110 130 110 Q114 110 114 102 Z" fill="rgba(255,255,255,.6)" />
              {sats.map((s, i) => (
                <g key={"s" + i}>
                  <circle
                    ref={(el) => (satRefs.current[i] = el)}
                    cx={s[0]} cy={s[1]} r="13"
                    fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.35)"
                  />
                  <text x={s[0]} y={s[1] + 4} fontSize="11" textAnchor="middle">{s[2]}</text>
                </g>
              ))}
            </svg>
            <div className="quad-text">
              <h4>User profile unification</h4>
              <p>Customer touchpoints collected and connected into a unified 360° profile.</p>
            </div>
          </div>

          {/* Q3 Segmentation & Automation */}
          <div className="quad" style={{ background: "#18191f" }}>
            <svg className="quad-svg" viewBox="0 0 260 180" preserveAspectRatio="xMidYMid meet">
              <rect x="0" y="0" width="260" height="22" fill="rgba(255,255,255,.05)" />
              {[
                { x: 8, w: 44, label: "Element", fill: "rgba(255,255,255,.1)", stroke: "rgba(255,255,255,.2)", color: "#fff" },
                { x: 56, w: 46, label: "Segment", fill: "rgba(167,240,112,.2)", stroke: "rgba(167,240,112,.5)", color: "#a7f070" },
                { x: 106, w: 52, label: "Send SMS", fill: "rgba(255,255,255,.1)", stroke: "rgba(255,255,255,.2)", color: "#fff" },
                { x: 162, w: 32, label: "Wait", fill: "rgba(255,255,255,.1)", stroke: "rgba(255,255,255,.2)", color: "#fff" },
                { x: 198, w: 38, label: "Email", fill: "rgba(255,255,255,.1)", stroke: "rgba(255,255,255,.2)", color: "#fff" },
              ].map((p, i) => (
                <g key={i}>
                  <rect x={p.x} y="5" width={p.w} height="12" rx="6" fill={p.fill} stroke={p.stroke} />
                  <text x={p.x + p.w / 2} y="14" fontSize="7.5" fontWeight="700" fill={p.color} textAnchor="middle">{p.label}</text>
                </g>
              ))}
              {[
                { d: "M30 50 C 30 90, 60 110, 70 138", stroke: "rgba(167,240,112,.6)" },
                { d: "M70 50 C 80 90, 110 110, 125 138", stroke: "rgba(255,140,80,.5)" },
                { d: "M130 50 C 140 90, 165 110, 175 138", stroke: "rgba(100,180,255,.45)" },
              ].map((f, i) => (
                <path
                  key={i}
                  ref={(el) => (flowRefs.current[i] = el)}
                  d={f.d} fill="none" stroke={f.stroke} strokeWidth="1.6"
                  strokeDasharray="200" strokeDashoffset="200"
                />
              ))}
              {[30, 70, 130].map((x, i) => (
                <circle key={i} cx={x} cy="50" r="10" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.4)" />
              ))}
              {[
                { x: 18, y: 86, w: 76, label: "Check Email", fill: "rgba(255,255,255,.08)", stroke: "rgba(255,255,255,.18)", color: "#fff" },
                { x: 96, y: 86, w: 80, label: "Send Message", fill: "rgba(255,255,255,.08)", stroke: "rgba(255,255,255,.18)", color: "#fff" },
                { x: 178, y: 86, w: 78, label: "Assign Reward", fill: "rgba(167,240,112,.12)", stroke: "rgba(167,240,112,.4)", color: "#a7f070" },
              ].map((n, i) => (
                <g key={i}>
                  <rect x={n.x} y={n.y} width={n.w} height="20" rx="6" fill={n.fill} stroke={n.stroke} />
                  <text x={n.x + n.w / 2} y={n.y + 13} fontSize="8.5" fontWeight="700" fill={n.color} textAnchor="middle">{n.label}</text>
                </g>
              ))}
            </svg>
            <div className="quad-text">
              <h4>Segmentation &amp; Automation</h4>
              <p>Build campaign-specific segments and automate journeys in just a few steps.</p>
            </div>
          </div>

          {/* Q4 Data activation */}
          <div className="quad" style={{ background: "#1b5e35" }}>
            <svg className="quad-svg" viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet">
              {[0, 1, 2].map((i) => (
                <circle
                  key={i}
                  ref={(el) => (radarRefs.current[i] = el)}
                  cx="130" cy="96" r="20" fill="none"
                  stroke={["rgba(167,240,112,.5)", "rgba(167,240,112,.35)", "rgba(167,240,112,.2)"][i]}
                  strokeWidth="1.2"
                />
              ))}
              <ellipse cx="130" cy="122" rx="50" ry="12" fill="rgba(167,240,112,.12)" stroke="rgba(167,240,112,.3)" />
              <rect x="108" y="118" width="44" height="14" rx="4" fill="rgba(167,240,112,.18)" stroke="rgba(167,240,112,.4)" />
              <text x="130" y="128" fontSize="9" fontWeight="800" fill="#a7f070" textAnchor="middle">CDP</text>
              <g ref={superRef}>
                <rect x="109" y="56" width="42" height="42" rx="9" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.4)" />
                <text x="130" y="73" fontSize="7" fill="rgba(255,255,255,.6)" textAnchor="middle" fontWeight="700">SUPER</text>
                <text x="130" y="90" fontSize="11" fill="#fff" fontWeight="800" textAnchor="middle">APP</text>
              </g>
              {[
                { cx: 40, cy: 40, label: "SMS" },
                { cx: 220, cy: 40, label: "Zalo" },
                { cx: 40, cy: 160, label: "Email" },
                { cx: 220, cy: 160, label: "Voice" },
              ].map((c, i) => (
                <g key={i}>
                  <line x1="130" y1="122" x2={c.cx} y2={c.cy} stroke="rgba(167,240,112,.25)" strokeDasharray="3 3" />
                  <circle cx={c.cx} cy={c.cy} r="13" fill="rgba(255,255,255,.1)" stroke="rgba(167,240,112,.4)" />
                  <text x={c.cx} y={c.cy + 3} fontSize="7.5" fill="#fff" fontWeight="700" textAnchor="middle">{c.label}</text>
                </g>
              ))}
            </svg>
            <div className="quad-text">
              <h4>Data activation</h4>
              <p>Diverse customer experiences across social apps, email, and Super Apps with higher conversion rates.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .auto-card{max-width:1140px;margin:0 auto;background:#111;color:#fff;border-radius:28px;display:grid;grid-template-columns:1fr 1.1fr;min-height:520px;overflow:hidden}
        .auto-left{padding:60px 56px;display:flex;flex-direction:column;justify-content:center}
        .auto-label{font-size:12px;font-weight:700;color:#a7f070;letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px}
        .auto-h2{font-size:36px;font-weight:800;line-height:1.1;letter-spacing:-.02em;color:#fff;margin-bottom:18px}
        .auto-body{font-size:14.5px;color:rgba(255,255,255,.8);line-height:1.75;max-width:400px;margin-bottom:0}
        .auto-list{list-style:none;margin:28px 0 0;padding:0;display:flex;flex-direction:column;gap:12px}
        .auto-list li{display:flex;align-items:center;gap:10px;font-size:13px;color:rgba(255,255,255,.85)}
        .auto-list .dot{width:8px;height:8px;border-radius:50%;background:#a7f070;flex-shrink:0}
        .auto-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
        .auto-btn{display:inline-block;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:700;text-decoration:none;transition:transform .2s,opacity .2s}
        .auto-btn:hover{transform:translateY(-1px)}
        .auto-btn.primary{background:#a7f070;color:#0c3b20}
        .auto-btn.ghost{border:1px solid rgba(255,255,255,.3);color:rgba(255,255,255,.8);background:transparent}
        .auto-right{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}
        .quad{position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:28px 26px;min-height:260px}
        .quad-svg{position:absolute;left:0;right:0;top:0;height:calc(100% - 80px);width:100%}
        .quad-text{position:relative;z-index:2}
        .quad-text h4{font-size:14px;font-weight:800;color:#fff;margin-bottom:5px}
        .quad-text p{font-size:11.5px;color:rgba(255,255,255,.82);line-height:1.55;max-width:220px}
        @media (max-width: 900px){
          .auto-card{grid-template-columns:1fr}
          .auto-left{padding:44px 32px}
          .auto-h2{font-size:30px}
        }
        @media (max-width: 560px){
          .auto-right{grid-template-columns:1fr}
        }
      `}</style>
    </section>
  );
}
