import { useEffect, useRef } from "react";

export function AutomationSection() {
  const dashRefs = useRef<(SVGPathElement | null)[]>([]);
  const pulseRef = useRef<SVGCircleElement | null>(null);
  const satRefs = useRef<(SVGCircleElement | null)[]>([]);
  const satBaseY = useRef<number[]>([]);
  const flowRefs = useRef<(SVGPathElement | null)[]>([]);
  const flowPhases = useRef<number[]>([]);
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
      // Quad3 ribbon flow — continuous left-to-right
      flowRefs.current.forEach((p, i) => {
        if (!p) return;
        let off = (flowPhases.current[i] ?? 0) - 1.8;
        if (off < -250) off = 420;
        flowPhases.current[i] = off;
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

  // ─── Quad 3 ribbon data ───
  const leftAvatars = [82, 116, 150, 184];
  const rightAvatars = [88, 124, 162];
  const node1 = { x: 188, y: 148 };
  const node2 = { x: 320, y: 148 };
  const segB_spreads = [45, 68, 92, 115, 148, 181, 204, 228, 252];

  type Strand = { d: string; stroke: string; sw: number; opacity: number };
  const strands: Strand[] = [];
  // Segment A: left avatars → node1 (3 ribbons each, ±4 y-offset)
  leftAvatars.forEach((cy) => {
    [-4, 0, 4].forEach((dy, idx) => {
      strands.push({
        d: `M 60,${cy + dy} C 118,${cy + dy} 175,${node1.y + dy * 0.5} ${node1.x},${node1.y}`,
        stroke: idx === 1 ? "rgba(255,220,170,0.85)" : "rgba(255,255,255,0.8)",
        sw: 1.4,
        opacity: 0.85,
      });
    });
  });
  // Segment B: node1 → node2 hourglass
  segB_spreads.forEach((sy) => {
    const dist = Math.abs(sy - 148);
    const opacity = Math.max(0.5, 0.92 - dist / 220);
    const sw = Math.max(0.7, 1.8 - dist / 160);
    strands.push({
      d: `M ${node1.x},${node1.y} C 238,${sy} 270,${sy} ${node2.x},${node2.y}`,
      stroke: dist < 30 ? "rgba(255,235,200,0.92)" : "rgba(255,255,255,0.82)",
      sw,
      opacity,
    });
  });
  // Segment C: node2 → right avatars
  rightAvatars.forEach((cy) => {
    [-4, 0, 4].forEach((dy, idx) => {
      strands.push({
        d: `M ${node2.x},${node2.y} C 345,${node2.y + dy * 0.5} 402,${cy + dy} 420,${cy + dy}`,
        stroke: idx === 1 ? "rgba(255,220,170,0.85)" : "rgba(255,255,255,0.8)",
        sw: 1.4,
        opacity: 0.85,
      });
    });
  });
  // Seed phases (staggered)
  if (flowPhases.current.length !== strands.length) {
    flowPhases.current = strands.map((_, i) => 420 - (i * 18) % 670);
  }

  // City skyline bars
  const skyline: { x: number; w: number; h: number }[] = [];
  for (let i = 0; i < 30; i++) {
    const w = 10 + (i % 3) * 2;
    const x = 8 + i * 15.5;
    const h = 10 + ((i * 37) % 26);
    skyline.push({ x, w, h });
  }

  const toolbarTags = ["· User Event", "· CDP Segment", "· Update Tag", "· Wait Until", "· Send Email"];

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
            <li><span className="dot" />Multi-channel data activation:  SMS, Zalo, Email, Voice...</li>
          </ul>
          <div className="auto-cta">
            <a className="auto-btn primary" href="#cta">Request a demo</a>
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

          {/* Q3 Segmentation & Automation — coral Sankey */}
          <div className="quad q3" style={{ background: "linear-gradient(180deg,#f29278 0%,#d76042 100%)" }}>
            <svg className="quad-svg q3-svg" viewBox="0 0 480 290" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="q3glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" />
                </filter>
              </defs>

              {/* Top toolbar */}
              <rect x="6" y="8" width="468" height="22" rx="11" fill="rgba(255,255,255,.85)" />
              <text x="18" y="23" fontSize="9" fontWeight="800" fill="#1c0802">Element</text>
              <circle cx="64" cy="19" r="6" fill="#1a6e38" />
              <text x="64" y="22" fontSize="9" fontWeight="800" fill="#fff" textAnchor="middle">+</text>
              {toolbarTags.map((tag, i) => {
                const x = 80 + i * 76;
                return (
                  <g key={i}>
                    <rect x={x} y="12" width="72" height="14" rx="7" fill="#1a6e38" />
                    <text x={x + 36} y="22" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">{tag}</text>
                  </g>
                );
              })}

              {/* City skyline */}
              {skyline.map((b, i) => (
                <rect key={i} x={b.x} y={270 - b.h} width={b.w} height={b.h} fill="rgba(175,55,30,.42)" />
              ))}

              {/* Left avatars */}
              {leftAvatars.map((cy, i) => (
                <g key={"la" + i}>
                  <circle cx="44" cy={cy} r="15" fill="#d96849" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="44" cy={cy - 4} r="4" fill="#fff" />
                  <path d={`M 36 ${cy + 6} Q 44 ${cy + 1} 52 ${cy + 6} Q 52 ${cy + 10} 44 ${cy + 10} Q 36 ${cy + 10} 36 ${cy + 6} Z`} fill="#fff" />
                </g>
              ))}
              {/* Right avatars */}
              {rightAvatars.map((cy, i) => (
                <g key={"ra" + i}>
                  <circle cx="436" cy={cy} r="15" fill="#d96849" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="436" cy={cy - 4} r="4" fill="#fff" />
                  <path d={`M 428 ${cy + 6} Q 436 ${cy + 1} 444 ${cy + 6} Q 444 ${cy + 10} 436 ${cy + 10} Q 428 ${cy + 10} 428 ${cy + 6} Z`} fill="#fff" />
                </g>
              ))}

              {/* Flow strands */}
              {strands.map((s, i) => (
                <path
                  key={i}
                  ref={(el) => (flowRefs.current[i] = el)}
                  d={s.d}
                  fill="none"
                  stroke={s.stroke}
                  strokeWidth={s.sw}
                  strokeOpacity={s.opacity}
                  strokeLinecap="round"
                  strokeDasharray="420"
                  strokeDashoffset={flowPhases.current[i] ?? 420}
                />
              ))}

              {/* Convergence nodes */}
              <circle cx={node1.x} cy={node1.y} r="16" fill="#fff" opacity="0.4" filter="url(#q3glow)" />
              <circle cx={node1.x} cy={node1.y} r="9" fill="#fff" />
              <circle cx={node2.x} cy={node2.y} r="16" fill="#fff" opacity="0.4" filter="url(#q3glow)" />
              <circle cx={node2.x} cy={node2.y} r="9" fill="#fff" />

              {/* Action pills */}
              {[
                { x: 232, y: 50, w: 72, label: "Check Email" },
                { x: 56, y: 204, w: 66, label: "Wait 5 days" },
                { x: 212, y: 204, w: 78, label: "Send Message" },
                { x: 346, y: 50, w: 92, label: "Check purchase only" },
              ].map((p, i) => (
                <g key={"p" + i}>
                  <rect x={p.x} y={p.y} width={p.w} height="18" rx="9" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.8)" />
                  <text x={p.x + p.w / 2} y={p.y + 12} fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">{p.label}</text>
                </g>
              ))}
              {/* Two-line pill */}
              <g>
                <rect x="350" y="196" width="106" height="28" rx="10" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.8)" />
                <text x="403" y="207" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">Assign Tag:</text>
                <text x="403" y="219" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">Send Request Form</text>
              </g>

              {/* Dashed connector from Check Email → node1 */}
              <path d={`M 268 68 C 250 100 220 130 ${node1.x} ${node1.y - 12}`}
                fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
            <div className="quad-text q3-text">
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
        .q3-text h4{color:#1c0802}
        .q3-text p{color:rgba(28,8,2,.75)}
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
