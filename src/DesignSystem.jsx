import { useState } from "react";
import { Lock, Zap, CreditCard, ClipboardList, FileText, Landmark, IdCard, Home, MessageSquare, Check, Sparkles, Bell, BarChart3, Star, CheckCircle, LayoutGrid, List, CircleUser, Shield, ArrowLeft, Eye, Droplets, Type, Box, Layers, Move, Palette } from "lucide-react";

export default function DesignSystem({ C, themes }) {
  const [activeBtn, setActiveBtn] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [toggleVal, setToggleVal] = useState("אפשרות א");
  const [checkVal, setCheckVal] = useState(false);

  const glass = {
    background: C.glass, backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)",
    border: `1px solid ${C.glassBorder}`, boxShadow: C.shadowResting,
  };
  const glassStrong = {
    background: C.glassStrong, backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)",
    border: `1px solid ${C.glassBorder}`, boxShadow: C.shadowResting,
  };

  const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} style={{ marginBottom: 56 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: C.accentSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={18} color={C.accent} strokeWidth={1.5} />
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", margin: 0 }}>{title}</h2>
      </div>
      {children}
    </section>
  );

  const Label = ({ children }) => (
    <div style={{ fontSize: 9, fontWeight: 600, color: C.t3, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 10 }}>{children}</div>
  );

  const Card = ({ children, style: s = {} }) => (
    <div style={{ ...glass, borderRadius: C.cardRadius, padding: 20, ...s }}>{children}</div>
  );

  const Swatch = ({ color, label, hex, dark }) => (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 64, height: 64, borderRadius: C.cardRadius - 4, background: color, border: `1px solid ${dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.06)"}`, marginBottom: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }} />
      <div style={{ fontSize: 10, fontWeight: 600, color: C.t1, marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 9, color: C.t3, fontFamily: "monospace" }}>{hex}</div>
    </div>
  );

  const TokenRow = ({ label, value, preview }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {preview}
        <span style={{ fontSize: 12, fontWeight: 500, color: C.t2 }}>{label}</span>
      </div>
      <code style={{ fontSize: 10, color: C.t3, background: "rgba(0,0,0,0.03)", padding: "3px 8px", borderRadius: 4, fontFamily: "monospace" }}>{value}</code>
    </div>
  );

  const accentColors = [
    { color: C.accent, label: "Accent", hex: C.accent },
    { color: C.accentHover, label: "Hover", hex: C.accentHover },
    { color: C.accentSoft, label: "Soft", hex: "8% opacity" },
    { color: C.accentGlow, label: "Glow", hex: "14% opacity" },
  ];
  const textColors = [
    { color: C.t1, label: "Text 1", hex: C.t1 },
    { color: C.t2, label: "Text 2", hex: C.t2 },
    { color: C.t3, label: "Text 3", hex: C.t3 },
    { color: C.t4, label: "Text 4", hex: C.t4 },
  ];
  const semanticColors = [
    { color: C.green, label: "Success", hex: C.green },
    { color: C.red, label: "Error", hex: C.red },
    { color: C.amber, label: "Warning", hex: C.amber },
  ];

  const typeScale = [
    { name: "Display", size: 34, weight: 700, spacing: "-0.03em", sample: "כסף כשצריך, מהיר ופשוט" },
    { name: "Page Title", size: 24, weight: 700, spacing: "-0.03em", sample: "יצירת חשבון" },
    { name: "Section Title", size: 20, weight: 700, spacing: "-0.02em", sample: "פרטי תעסוקה" },
    { name: "Large Value", size: 32, weight: 700, spacing: "-0.04em", sample: "₪33,786" },
    { name: "Body", size: 14, weight: 400, spacing: "normal", sample: "הלוואות עד ₪100,000 עם אישור תוך 24 שעות" },
    { name: "Body Strong", size: 13, weight: 600, spacing: "normal", sample: "הנתונים ישפיעו על חישוב הסכום" },
    { name: "Small", size: 12, weight: 400, spacing: "0.02em", sample: "ריבית שנתית של 14.9% APR" },
    { name: "Micro Label", size: 9, weight: 600, spacing: "0.10em", sample: "שם מלא", transform: "uppercase" },
    { name: "Tiny", size: 9, weight: 600, spacing: "0.06em", sample: "שלב 3 מתוך 5", transform: "uppercase" },
  ];

  const icons = [
    { Icon: Lock, name: "Lock" }, { Icon: Zap, name: "Zap" }, { Icon: CreditCard, name: "CreditCard" },
    { Icon: ClipboardList, name: "ClipboardList" }, { Icon: FileText, name: "FileText" }, { Icon: Landmark, name: "Landmark" },
    { Icon: IdCard, name: "IdCard" }, { Icon: Home, name: "Home" }, { Icon: MessageSquare, name: "MessageSquare" },
    { Icon: Check, name: "Check" }, { Icon: Sparkles, name: "Sparkles" }, { Icon: Bell, name: "Bell" },
    { Icon: BarChart3, name: "BarChart3" }, { Icon: Star, name: "Star" }, { Icon: CheckCircle, name: "CheckCircle" },
    { Icon: LayoutGrid, name: "LayoutGrid" }, { Icon: List, name: "List" }, { Icon: CircleUser, name: "CircleUser" },
    { Icon: Shield, name: "Shield" }, { Icon: ArrowLeft, name: "ArrowLeft" },
  ];

  const spacingTokens = [
    { label: "space-1", value: "2–3px", px: 3 }, { label: "space-2", value: "4–6px", px: 6 },
    { label: "space-3", value: "7–8px", px: 8 }, { label: "space-4", value: "10–12px", px: 12 },
    { label: "space-5", value: "14–16px", px: 16 }, { label: "space-6", value: "18–20px", px: 20 },
    { label: "space-7", value: "24px", px: 24 }, { label: "space-8", value: "28–32px", px: 32 },
    { label: "space-9", value: "36–48px", px: 48 },
  ];

  const shadows = [
    { label: "Resting", shadow: "0 4px 24px rgba(0,0,0,0.045), 0 1px 3px rgba(0,0,0,0.02)" },
    { label: "Hover", shadow: "0 8px 32px rgba(0,0,0,0.07)" },
    { label: "Accent Glow", shadow: `0 2px 10px ${C.accentShadow}` },
    { label: "Elevated", shadow: "0 12px 48px rgba(0,0,0,0.12)" },
    { label: "Modal", shadow: "0 24px 64px rgba(0,0,0,0.12)" },
  ];

  const navItems = [
    { id: "colors", label: "Colors", Icon: Palette },
    { id: "typography", label: "Type", Icon: Type },
    { id: "spacing", label: "Space", Icon: Move },
    { id: "surfaces", label: "Surfaces", Icon: Layers },
    { id: "components", label: "Components", Icon: Box },
    { id: "icons", label: "Icons", Icon: Eye },
  ];

  return (
    <div style={{ width: "100%", maxWidth: 920, margin: "0 auto", direction: "ltr" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48, paddingTop: 8 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#FFF", fontWeight: 700, boxShadow: `0 8px 32px ${C.accentShadow}` }}>₪</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em" }}>קרדיט-IL</div>
            <div style={{ fontSize: 11, color: C.t3, fontWeight: 500, letterSpacing: "0.04em" }}>VISUAL DESIGN SYSTEM</div>
          </div>
        </div>
        <p style={{ fontSize: 14, color: C.t4, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
          Complete visual reference for the {C.name === "minimal" ? "Minimal" : "Fintech"} theme.
          All colors, typography, spacing, effects, and components rendered live.
        </p>
      </div>

      {/* Quick nav */}
      <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
        {navItems.map(n => (
          <button key={n.id} onClick={() => document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth", block: "start" })} style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 999, ...glass, fontSize: 11, fontWeight: 500, color: C.t2, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s ease" }}>
            <n.Icon size={13} strokeWidth={1.5} /> {n.label}
          </button>
        ))}
      </div>

      {/* ─── COLORS ─────────────────────────────────────────── */}
      <Section title="Color Palette" icon={Palette} id="colors">
        <Card>
          <Label>Accent Colors</Label>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
            {accentColors.map(c => <Swatch key={c.label} {...c} />)}
          </div>

          <Label>Text Hierarchy</Label>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
            {textColors.map(c => <Swatch key={c.label} {...c} />)}
          </div>

          <Label>Semantic</Label>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
            {semanticColors.map(c => <Swatch key={c.label} {...c} />)}
          </div>

          <Label>Surface Gradients</Label>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ height: 80, borderRadius: C.cardRadius - 4, background: C.pageBg, border: `1px solid ${C.border}`, marginBottom: 6 }} />
              <div style={{ fontSize: 10, color: C.t3, textAlign: "center" }}>Page Background</div>
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ height: 80, borderRadius: C.cardRadius - 4, background: C.darkBg, border: `1px solid rgba(255,255,255,0.1)`, marginBottom: 6 }} />
              <div style={{ fontSize: 10, color: C.t3, textAlign: "center" }}>Dark Background</div>
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ height: 80, borderRadius: C.cardRadius - 4, background: C.darkBg2, border: `1px solid rgba(255,255,255,0.1)`, marginBottom: 6 }} />
              <div style={{ fontSize: 10, color: C.t3, textAlign: "center" }}>Dark Background Alt</div>
            </div>
          </div>
        </Card>

        {/* Dark surface tokens */}
        <div style={{ marginTop: 16 }}>
          <Card style={{ background: C.darkBg, border: `1px solid ${C.darkCardBorder}` }}>
            <Label><span style={{ color: "rgba(255,255,255,0.4)" }}>Dark Surface Tokens</span></Label>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { bg: C.darkCard, border: C.darkCardBorder, label: "Dark Card" },
                { bg: "transparent", border: C.darkCardBorder, label: "Dark Border" },
              ].map(item => (
                <div key={item.label} style={{ width: 80, height: 56, borderRadius: C.cardRadius - 6, background: item.bg, border: `1px solid ${item.border}`, display: "flex", alignItems: "flex-end", justifyContent: "center", padding: 6 }}>
                  <span style={{ fontSize: 8, color: C.darkText, fontWeight: 500 }}>{item.label}</span>
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 4, flex: 1, minWidth: 150 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#FFF" }}>White Text on Dark</span>
                <span style={{ fontSize: 12, color: C.darkText }}>Dark Text — {C.darkText}</span>
                <span style={{ fontSize: 12, color: C.darkTextDim }}>Dark Dim — {C.darkTextDim}</span>
                <span style={{ fontSize: 12, color: C.darkTextLabel }}>Dark Label — {C.darkTextLabel}</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* ─── TYPOGRAPHY ─────────────────────────────────────── */}
      <Section title="Typography" icon={Type} id="typography">
        <Card>
          <Label>Font Stack</Label>
          <code style={{ fontSize: 11, color: C.t2, background: "rgba(0,0,0,0.03)", padding: "8px 12px", borderRadius: 6, display: "block", marginBottom: 24, lineHeight: 1.6, fontFamily: "monospace" }}>
            'Noto Sans Hebrew', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', system-ui, sans-serif
          </code>

          <Label>Type Scale</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {typeScale.map(t => (
              <div key={t.name} style={{ display: "flex", alignItems: "center", padding: "14px 0", borderBottom: `1px solid ${C.border}`, gap: 16 }}>
                <div style={{ width: 120, flexShrink: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.t1 }}>{t.name}</div>
                  <div style={{ fontSize: 9, color: C.t3, fontFamily: "monospace", marginTop: 2 }}>{t.size}px / {t.weight}</div>
                </div>
                <div style={{ flex: 1, fontSize: t.size, fontWeight: t.weight, color: C.t1, letterSpacing: t.spacing, textTransform: t.transform || "none", lineHeight: 1.3, direction: "rtl", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ marginTop: 16 }}>
          <Card>
            <Label>Typography Rules</Label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                ["Max weight: 700", "Never use 800 or 900"],
                ["Headlines: −0.02em to −0.04em", "Tight, premium feel"],
                ["Micro labels: +0.06 to +0.12em", "Always uppercase"],
                ["Line heights", "Headlines 1.2 · Body 1.6 · Labels 1.4"],
                ["Darkest text color", C.t1],
                ["Tabular figures", "For financial amounts"],
              ].map(([rule, detail], i) => (
                <div key={i} style={{ padding: 12, background: "rgba(0,0,0,0.02)", borderRadius: C.inputRadius, border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.t1, marginBottom: 2 }}>{rule}</div>
                  <div style={{ fontSize: 10, color: C.t3 }}>{detail}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* ─── SPACING ────────────────────────────────────────── */}
      <Section title="Spacing & Radius" icon={Move} id="spacing">
        <Card>
          <Label>Spacing Scale (base 4px)</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {spacingTokens.map(s => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <code style={{ width: 60, fontSize: 10, color: C.t3, fontFamily: "monospace", flexShrink: 0 }}>{s.label}</code>
                <div style={{ width: s.px * 2, height: 16, borderRadius: 3, background: C.accent, opacity: 0.6, transition: "width 0.3s ease" }} />
                <span style={{ fontSize: 10, color: C.t4, fontWeight: 500 }}>{s.value}</span>
              </div>
            ))}
          </div>

          <Label>Border Radius</Label>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
            {[
              { val: C.inputRadius, label: "Input", size: 48 },
              { val: C.btnRadius, label: "Button", size: 52 },
              { val: C.cardRadius, label: "Card", size: 64 },
              { val: 48, label: "Phone", size: 72 },
              { val: 999, label: "Pill", size: 40 },
            ].map(r => (
              <div key={r.label} style={{ textAlign: "center" }}>
                <div style={{ width: r.size, height: r.size, borderRadius: r.val, background: C.accentSoft, border: `2px solid ${C.accent}`, marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: C.accent }}>{r.val}</span>
                </div>
                <div style={{ fontSize: 10, fontWeight: 600, color: C.t2 }}>{r.label}</div>
                <div style={{ fontSize: 9, color: C.t3 }}>{r.val}px</div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* ─── SURFACES ───────────────────────────────────────── */}
      <Section title="Surfaces & Shadows" icon={Layers} id="surfaces">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <Label>Glass Surface</Label>
            <div style={{ ...glass, borderRadius: C.cardRadius, padding: 24, minHeight: 100, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.t1 }}>Standard Glass</span>
              <div style={{ marginTop: 12 }}>
                <div style={{ fontSize: 9, color: C.t3, fontFamily: "monospace", lineHeight: 1.8 }}>
                  background: {C.glass}<br />
                  blur: 24px saturate(180%)<br />
                  border: {C.glassBorder}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Label>Glass Strong</Label>
            <div style={{ ...glassStrong, borderRadius: C.cardRadius, padding: 24, minHeight: 100, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.t1 }}>Strong Glass</span>
              <div style={{ marginTop: 12 }}>
                <div style={{ fontSize: 9, color: C.t3, fontFamily: "monospace", lineHeight: 1.8 }}>
                  background: {C.glassStrong}<br />
                  blur: 24px saturate(180%)<br />
                  border: {C.glassBorder}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <Label>Shadow Hierarchy</Label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 16 }}>
            {shadows.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", height: 64, borderRadius: C.cardRadius - 4, background: "#fff", boxShadow: s.shadow, marginBottom: 8, border: `1px solid ${C.border}` }} />
                <div style={{ fontSize: 11, fontWeight: 600, color: C.t1 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ marginTop: 16 }}>
          <Card>
            <Label>Decorative Elements</Label>
            <div style={{ position: "relative", height: 200, borderRadius: C.cardRadius - 4, background: C.darkBg, overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", border: `1px solid ${C.splashCircle1}` }} />
              <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, borderRadius: "50%", border: `1px solid ${C.splashCircle2}` }} />
              <div style={{ position: "absolute", bottom: -60, left: -30, width: 180, height: 180, borderRadius: "50%", border: `1px solid ${C.splashCircle3}` }} />
              <div style={{ position: "absolute", bottom: 40, right: 60, width: 80, height: 80, borderRadius: "50%", background: `radial-gradient(circle, ${C.splashGlow} 0%, transparent 70%)` }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#FFF" }}>Orbital Circles & Glow</span>
                <span style={{ fontSize: 10, color: C.darkText }}>Decorative background for dark hero surfaces</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* ─── COMPONENTS ─────────────────────────────────────── */}
      <Section title="Components" icon={Box} id="components">
        {/* Buttons */}
        <Card style={{ marginBottom: 16 }}>
          <Label>Buttons</Label>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20, alignItems: "center" }}>
            <button onMouseEnter={() => setActiveBtn("p")} onMouseLeave={() => setActiveBtn(null)} style={{
              height: 48, padding: "0 32px", background: activeBtn === "p" ? C.accentHover : C.accent, color: "#FFF", border: "none", borderRadius: C.btnRadius,
              fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
              transform: activeBtn === "p" ? "translateY(-1px)" : "none", boxShadow: activeBtn === "p" ? `0 8px 24px ${C.accentShadow}` : `0 2px 10px ${C.accentShadow}`,
            }}>Primary Button</button>
            <button onMouseEnter={() => setActiveBtn("g")} onMouseLeave={() => setActiveBtn(null)} style={{
              height: 44, padding: "0 28px", background: activeBtn === "g" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.50)",
              color: C.t2, border: `1px solid ${C.controlBorder}`, borderRadius: C.btnRadius, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s ease",
            }}>Ghost Button</button>
            <button style={{ height: 48, padding: "0 32px", background: "rgba(0,0,0,0.06)", color: C.t3, border: "none", borderRadius: C.btnRadius, fontSize: 13, fontWeight: 600, cursor: "not-allowed", fontFamily: "inherit" }}>Disabled</button>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "Rest", bg: C.accent, shadow: `0 2px 10px ${C.accentShadow}` },
              { label: "Hover", bg: C.accentHover, shadow: `0 8px 24px ${C.accentShadow}`, transform: "translateY(-1px)" },
              { label: "Disabled", bg: "rgba(0,0,0,0.06)", shadow: "none", color: C.t3 },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ height: 40, padding: "0 24px", borderRadius: C.btnRadius, background: s.bg, color: s.color || "#FFF", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: s.shadow, transform: s.transform, marginBottom: 6 }}>Label</div>
                <span style={{ fontSize: 9, color: C.t3, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Inputs */}
        <Card style={{ marginBottom: 16 }}>
          <Label>Input Fields</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 9, fontWeight: 600, color: C.t3, marginBottom: 5, letterSpacing: "0.10em", textTransform: "uppercase" }}>Default State</label>
              <input type="text" placeholder="Placeholder text" readOnly style={{
                width: "100%", height: 44, padding: "0 14px", border: `1px solid ${C.controlBorder}`, borderRadius: C.inputRadius,
                background: "rgba(255,255,255,0.60)", fontSize: 13, color: C.t1, fontFamily: "inherit", outline: "none", boxSizing: "border-box",
              }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 9, fontWeight: 600, color: C.t3, marginBottom: 5, letterSpacing: "0.10em", textTransform: "uppercase" }}>Focus State</label>
              <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="Type here..."
                onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)}
                style={{
                  width: "100%", height: 44, padding: "0 14px", border: `1px solid ${inputFocused ? C.accent : C.controlBorder}`, borderRadius: C.inputRadius,
                  background: inputFocused ? C.controlHover : "rgba(255,255,255,0.60)", fontSize: 13, color: C.t1, fontFamily: "inherit", outline: "none",
                  boxShadow: inputFocused ? `0 0 0 3px ${C.accentGlow}` : "none", transition: "all 0.25s ease", boxSizing: "border-box",
                }} />
            </div>
          </div>
        </Card>

        {/* Toggle */}
        <Card style={{ marginBottom: 16 }}>
          <Label>Segmented Toggle</Label>
          <div style={{ maxWidth: 320 }}>
            <div style={{ display: "flex", background: "rgba(0,0,0,0.04)", borderRadius: C.inputRadius + 2, padding: 3 }}>
              {["אפשרות א", "אפשרות ב", "אפשרות ג"].map(o => (
                <button key={o} onClick={() => setToggleVal(o)} style={{
                  flex: 1, height: 38, borderRadius: C.inputRadius, border: "none", cursor: "pointer", fontFamily: "inherit",
                  background: toggleVal === o ? "#fff" : "transparent", color: toggleVal === o ? C.t1 : C.t3,
                  fontSize: 12, fontWeight: toggleVal === o ? 600 : 400, boxShadow: toggleVal === o ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
                }}>{o}</button>
              ))}
            </div>
          </div>
        </Card>

        {/* Checkbox */}
        <Card style={{ marginBottom: 16 }}>
          <Label>Checkbox / Agreement</Label>
          <button onClick={() => setCheckVal(!checkVal)} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: 0 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${checkVal ? C.accent : "rgba(0,0,0,0.12)"}`, background: checkVal ? C.accent : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease" }}>
              {checkVal && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>}
            </div>
            <span style={{ fontSize: 13, color: C.t2 }}>I agree to the <span style={{ color: C.accent, fontWeight: 600 }}>terms and conditions</span></span>
          </button>
        </Card>

        {/* Progress bar */}
        <Card style={{ marginBottom: 16 }}>
          <Label>Progress Bar</Label>
          <div style={{ maxWidth: 400 }}>
            <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i < 3 ? C.accent : "rgba(0,0,0,0.06)", transition: "background 0.4s ease" }} />
              ))}
            </div>
            <span style={{ fontSize: 9, color: C.t3, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Step 3 of 5</span>
          </div>
        </Card>

        {/* Cards showcase */}
        <Card style={{ marginBottom: 16 }}>
          <Label>Card Variants</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ ...glass, borderRadius: C.cardRadius - 2, padding: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.t1, marginBottom: 4 }}>Glass Card</div>
              <div style={{ fontSize: 11, color: C.t4, lineHeight: 1.6 }}>Standard surface for content panels, info boxes, and stat cards.</div>
            </div>
            <div style={{ background: C.darkBg2, borderRadius: C.cardRadius - 2, padding: 16, border: `1px solid ${C.darkCardBorder}` }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#FFF", marginBottom: 4 }}>Dark Card</div>
              <div style={{ fontSize: 11, color: C.darkText, lineHeight: 1.6 }}>Used for hero sections, financial summaries, and feature highlights.</div>
            </div>
            <div style={{ background: C.accentSoft, borderRadius: C.cardRadius - 2, padding: 16, border: `1.5px solid ${C.accent}` }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.t1, marginBottom: 4 }}>Active / Selected</div>
              <div style={{ fontSize: 11, color: C.t4, lineHeight: 1.6 }}>Used when a card represents a selected state (uploaded doc, active option).</div>
            </div>
            <div style={{ background: "rgba(22,163,74,0.06)", borderRadius: C.cardRadius - 2, padding: 16, border: "1px solid rgba(22,163,74,0.12)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#166534", marginBottom: 4 }}>Success Card</div>
              <div style={{ fontSize: 11, color: "#166534", lineHeight: 1.6, opacity: 0.7 }}>Used for confirmation messages and positive status indicators.</div>
            </div>
          </div>
        </Card>

        {/* Stat grid */}
        <Card style={{ marginBottom: 16 }}>
          <Label>Dashboard Stat Grid</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, maxWidth: 520 }}>
            {[
              { label: "APR Rate", val: "14.9%", Icon: BarChart3 },
              { label: "Credit Score", val: "B+", Icon: Star },
              { label: "Payments", val: "3/36", Icon: CheckCircle },
              { label: "Early Fee", val: "1%", Icon: CreditCard },
            ].map(item => (
              <div key={item.label} style={{ ...glass, borderRadius: C.cardRadius - 2, padding: "13px 14px" }}>
                <div style={{ marginBottom: 5 }}><item.Icon size={16} color={C.accent} strokeWidth={1.5} /></div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.t1, marginBottom: 2, letterSpacing: "-0.02em" }}>{item.val}</div>
                <div style={{ fontSize: 9, color: C.t3, fontWeight: 500 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Bottom nav */}
        <Card>
          <Label>Bottom Tab Bar</Label>
          <div style={{ maxWidth: 400, ...glassStrong, borderRadius: C.cardRadius, padding: "8px 16px 12px", display: "flex", justifyContent: "space-around" }}>
            {[
              { id: "home", Icon: LayoutGrid, label: "Home", active: true },
              { id: "pay", Icon: List, label: "Payments", active: false },
              { id: "docs", Icon: FileText, label: "Documents", active: false },
              { id: "profile", Icon: CircleUser, label: "Profile", active: false },
            ].map(tab => (
              <div key={tab.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "6px 12px" }}>
                <div style={{ opacity: tab.active ? 1 : 0.3, transition: "opacity 0.2s ease" }}><tab.Icon size={18} strokeWidth={tab.active ? 2 : 1.5} color={tab.active ? C.accent : C.t3} /></div>
                <div style={{ fontSize: 9, fontWeight: tab.active ? 700 : 400, color: tab.active ? C.accent : C.t3 }}>{tab.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* ─── ICONS ──────────────────────────────────────────── */}
      <Section title="Iconography" icon={Eye} id="icons">
        <Card style={{ marginBottom: 16 }}>
          <Label>Lucide Icon Inventory (20 icons)</Label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(84px, 1fr))", gap: 8 }}>
            {icons.map(({ Icon, name }) => (
              <div key={name} style={{ textAlign: "center", padding: "14px 6px", borderRadius: C.inputRadius + 2, background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, transition: "all 0.2s ease" }}>
                <Icon size={20} color={C.t2} strokeWidth={1.5} style={{ marginBottom: 6 }} />
                <div style={{ fontSize: 8, color: C.t3, fontFamily: "monospace", wordBreak: "break-all" }}>{name}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Label>Icon Sizing Reference</Label>
          <div style={{ display: "flex", gap: 24, alignItems: "flex-end", flexWrap: "wrap" }}>
            {[
              { size: 12, sw: 1.5, label: "Inline (12px)" },
              { size: 16, sw: 1.5, label: "Card (16px)" },
              { size: 18, sw: 1.5, label: "Feature (18px)" },
              { size: 28, sw: 1.2, label: "Hero (28px)" },
              { size: 40, sw: 1.2, label: "Success (40px)" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ width: s.size + 24, height: s.size + 24, borderRadius: C.inputRadius, background: C.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>
                  <Star size={s.size} color={C.accent} strokeWidth={s.sw} />
                </div>
                <div style={{ fontSize: 9, color: C.t3, fontWeight: 500 }}>{s.label}</div>
                <div style={{ fontSize: 8, color: C.t3, fontFamily: "monospace" }}>sw: {s.sw}</div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* ─── ANIMATION ──────────────────────────────────────── */}
      <Section title="Animation & Motion" icon={Droplets} id="animation">
        <Card>
          <Label>Easing Curves</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[
              { name: "Ease Out", curve: "cubic-bezier(0.22,1,0.36,1)", desc: "Default for UI transitions" },
              { name: "Spring", curve: "cubic-bezier(0.34,1.56,0.64,1)", desc: "Celebrations, entrances" },
              { name: "Linear", curve: "linear", desc: "Spinners only" },
            ].map(e => (
              <div key={e.name} style={{ padding: 14, background: "rgba(0,0,0,0.02)", borderRadius: C.inputRadius, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.t1, marginBottom: 2 }}>{e.name}</div>
                <code style={{ fontSize: 9, color: C.t3, fontFamily: "monospace", display: "block", marginBottom: 4, wordBreak: "break-all" }}>{e.curve}</code>
                <div style={{ fontSize: 10, color: C.t4 }}>{e.desc}</div>
              </div>
            ))}
          </div>

          <Label>Duration Scale</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { label: "Color / Opacity", dur: "200–250ms", width: 25 },
              { label: "Screen transition", dur: "300ms", width: 30 },
              { label: "Transform", dur: "300–500ms", width: 50 },
              { label: "Celebration entrance", dur: "500–600ms", width: 60 },
              { label: "Progress bar fill", dur: "700ms", width: 70 },
              { label: "Spinner revolution", dur: "800ms", width: 80 },
            ].map(d => (
              <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 150, fontSize: 11, color: C.t2, fontWeight: 500, flexShrink: 0 }}>{d.label}</span>
                <div style={{ flex: 1, height: 6, background: "rgba(0,0,0,0.04)", borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ width: `${d.width}%`, height: "100%", background: C.accent, borderRadius: 999, opacity: 0.5 }} />
                </div>
                <code style={{ fontSize: 10, color: C.t3, fontFamily: "monospace", flexShrink: 0, width: 80, textAlign: "right" }}>{d.dur}</code>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* ─── THEME COMPARISON ───────────────────────────────── */}
      <Section title="Theme Comparison" icon={Droplets} id="themes">
        <Card>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {Object.entries(themes).map(([key, T]) => (
              <div key={key}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 12, textTransform: "capitalize" }}>{key}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: T.accent, boxShadow: `0 2px 8px ${T.accentShadow}` }} />
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: T.accentHover }} />
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: T.accentSoft, border: `1px solid ${T.controlBorder}` }} />
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: T.t1 }} />
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: T.t2 }} />
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: T.t3 }} />
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: T.t4 }} />
                  </div>
                  <div style={{ height: 48, borderRadius: T.cardRadius, background: T.pageBg, border: `1px solid rgba(0,0,0,0.06)`, marginTop: 4 }} />
                  <div style={{ height: 48, borderRadius: T.cardRadius, background: T.darkBg, border: `1px solid rgba(255,255,255,0.08)` }} />
                  <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                    <code style={{ fontSize: 9, color: C.t3 }}>card: {T.cardRadius}px</code>
                    <code style={{ fontSize: 9, color: C.t3 }}>btn: {T.btnRadius}px</code>
                    <code style={{ fontSize: 9, color: C.t3 }}>input: {T.inputRadius}px</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "32px 0 16px", borderTop: `1px solid ${C.border}`, marginTop: 24 }}>
        <div style={{ fontSize: 11, color: C.t3, fontWeight: 500 }}>קרדיט-IL Design System v1.0 — March 2026</div>
        <div style={{ fontSize: 10, color: C.t3, marginTop: 4, opacity: 0.6 }}>All tokens render live from the active {C.name} theme</div>
      </div>
    </div>
  );
}
