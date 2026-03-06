import { useState, useEffect, useRef, createContext, useContext } from "react";
import { Lock, Zap, CreditCard, ClipboardList, FileText, Landmark, IdCard, Home, MessageSquare, Check, Sparkles, Bell, BarChart3, Star, CheckCircle, LayoutGrid, List, CircleUser, Shield, ArrowLeft, Settings, Palette, Search } from "lucide-react";
import DesignSystem from "./DesignSystem";

// ── Theme Definitions ────────────────────────────────────────────────────────
const themes = {
  minimal: {
    name: "minimal",
    accent: "#3b82f6",
    accentSoft: "rgba(59,130,246,0.08)",
    accentGlow: "rgba(59,130,246,0.14)",
    accentShadow: "rgba(59,130,246,0.30)",
    accentHover: "#2563eb",
    t1: "#0f172a", t2: "#334155", t3: "#94a3b8", t4: "#64748b",
    pageBg: "linear-gradient(145deg, #eef2f7 0%, #e8edf5 50%, #f0f3f8 100%)",
    glass: "rgba(255,255,255,0.52)",
    glassStrong: "rgba(255,255,255,0.70)",
    glassBorder: "rgba(255,255,255,0.48)",
    border: "rgba(0,0,0,0.05)",
    controlBorder: "rgba(0,0,0,0.07)",
    controlHover: "rgba(255,255,255,0.85)",
    green: "#16a34a", red: "#dc2626", amber: "#f59e0b",
    darkBg: "linear-gradient(145deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
    darkBg2: "linear-gradient(145deg, #0f172a 0%, #1e293b 100%)",
    darkCard: "rgba(255,255,255,0.06)",
    darkCardBorder: "rgba(255,255,255,0.08)",
    darkText: "rgba(255,255,255,0.45)",
    darkTextDim: "rgba(255,255,255,0.35)",
    darkTextLabel: "rgba(255,255,255,0.4)",
    heroText: "#FFFFFF",
    heroGhostText: "rgba(255,255,255,0.7)",
    heroGhostBorder: "rgba(255,255,255,0.15)",
    heroDivider: "rgba(255,255,255,0.06)",
    phoneBg: "#f1f5f9",
    outerBg: "linear-gradient(145deg, #eef2f7 0%, #e8edf5 50%, #f0f3f8 100%)",
    splashCircle1: "rgba(59,130,246,0.08)",
    splashCircle2: "rgba(59,130,246,0.12)",
    splashCircle3: "rgba(59,130,246,0.06)",
    splashGlow: "rgba(59,130,246,0.08)",
    logoBoxBg: "rgba(59,130,246,0.15)",
    logoBoxBorder: "rgba(59,130,246,0.25)",
    cardRadius: 16,
    btnRadius: 10,
    inputRadius: 8,
    shadowResting: "0 4px 24px rgba(0,0,0,0.045), 0 1px 3px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.55)",
    themeColor: "#0f172a",
    blurAmount: "24px",
  },
  fintech: {
    name: "fintech",
    accent: "#6366f1",
    accentSoft: "rgba(99,102,241,0.08)",
    accentGlow: "rgba(99,102,241,0.14)",
    accentShadow: "rgba(99,102,241,0.25)",
    accentHover: "#4f46e5",
    t1: "#1e1b4b", t2: "#3730a3", t3: "#a5b4fc", t4: "#6366f1",
    pageBg: "linear-gradient(145deg, #eef2ff 0%, #e0e7ff 50%, #eff0ff 100%)",
    glass: "rgba(255,255,255,0.68)",
    glassStrong: "rgba(255,255,255,0.82)",
    glassBorder: "rgba(255,255,255,0.55)",
    border: "rgba(99,102,241,0.06)",
    controlBorder: "rgba(99,102,241,0.10)",
    controlHover: "rgba(255,255,255,0.90)",
    green: "#10b981", red: "#ef4444", amber: "#f59e0b",
    darkBg: "linear-gradient(135deg, #312e81 0%, #4338ca 40%, #6366f1 100%)",
    darkBg2: "linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)",
    darkCard: "rgba(255,255,255,0.10)",
    darkCardBorder: "rgba(255,255,255,0.15)",
    darkText: "rgba(255,255,255,0.55)",
    darkTextDim: "rgba(255,255,255,0.40)",
    darkTextLabel: "rgba(255,255,255,0.50)",
    heroText: "#FFFFFF",
    heroGhostText: "rgba(255,255,255,0.7)",
    heroGhostBorder: "rgba(255,255,255,0.15)",
    heroDivider: "rgba(255,255,255,0.06)",
    phoneBg: "#f5f3ff",
    outerBg: "linear-gradient(145deg, #eef2ff 0%, #e0e7ff 50%, #f5f3ff 100%)",
    splashCircle1: "rgba(129,140,248,0.12)",
    splashCircle2: "rgba(129,140,248,0.18)",
    splashCircle3: "rgba(129,140,248,0.08)",
    splashGlow: "rgba(129,140,248,0.12)",
    logoBoxBg: "rgba(129,140,248,0.20)",
    logoBoxBorder: "rgba(129,140,248,0.35)",
    cardRadius: 20,
    btnRadius: 14,
    inputRadius: 12,
    shadowResting: "0 8px 32px rgba(99,102,241,0.06), 0 2px 8px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.65)",
    themeColor: "#312e81",
    blurAmount: "24px",
  },
  apple: {
    name: "apple",
    accent: "#8B5CF6",
    accentSoft: "rgba(139,92,246,0.06)",
    accentGlow: "rgba(139,92,246,0.10)",
    accentShadow: "rgba(139,92,246,0.16)",
    accentHover: "#7C3AED",
    t1: "#1D1D1F",
    t2: "#48484A",
    t3: "#AEAEB2",
    t4: "#8E8E93",
    pageBg: "#F5F5F7",
    glass: "rgba(255,255,255,0.75)",
    glassStrong: "rgba(255,255,255,0.92)",
    glassBorder: "rgba(0,0,0,0.04)",
    border: "rgba(0,0,0,0.04)",
    controlBorder: "rgba(0,0,0,0.06)",
    controlHover: "#FFFFFF",
    green: "#34C759",
    red: "#FF3B30",
    amber: "#FF9500",
    darkBg: "linear-gradient(165deg, #D6E0F0 0%, #C8D5EB 20%, #C4BDE2 50%, #D4C4E9 75%, #E8DDF0 100%)",
    darkBg2: "linear-gradient(165deg, #CEDAED 0%, #C4BDE2 50%, #DFD2EE 100%)",
    darkCard: "rgba(255,255,255,0.45)",
    darkCardBorder: "rgba(255,255,255,0.55)",
    darkText: "rgba(29,29,31,0.50)",
    darkTextDim: "rgba(29,29,31,0.35)",
    darkTextLabel: "rgba(29,29,31,0.42)",
    heroText: "#1D1D1F",
    heroGhostText: "rgba(29,29,31,0.55)",
    heroGhostBorder: "rgba(0,0,0,0.08)",
    heroDivider: "rgba(0,0,0,0.04)",
    phoneBg: "#FFFFFF",
    outerBg: "#F5F5F7",
    splashCircle1: "rgba(139,92,246,0.06)",
    splashCircle2: "rgba(139,92,246,0.10)",
    splashCircle3: "rgba(139,92,246,0.05)",
    splashGlow: "rgba(139,92,246,0.07)",
    logoBoxBg: "rgba(139,92,246,0.10)",
    logoBoxBorder: "rgba(139,92,246,0.18)",
    cardRadius: 22,
    btnRadius: 14,
    inputRadius: 12,
    shadowResting: "0 2px 16px rgba(0,0,0,0.03), 0 0 1px rgba(0,0,0,0.04)",
    themeColor: "#F5F5F7",
    blurAmount: "40px",
  },
};

export { themes };
const ThemeContext = createContext(themes.minimal);
const useTheme = () => useContext(ThemeContext);

const getGlass = (C) => ({
  background: C.glass,
  backdropFilter: `blur(${C.blurAmount}) saturate(180%)`,
  WebkitBackdropFilter: `blur(${C.blurAmount}) saturate(180%)`,
  border: `1px solid ${C.glassBorder}`,
  boxShadow: C.shadowResting,
});
const getGlassStrong = (C) => ({
  background: C.glassStrong,
  backdropFilter: `blur(${C.blurAmount}) saturate(180%)`,
  WebkitBackdropFilter: `blur(${C.blurAmount}) saturate(180%)`,
  border: `1px solid ${C.glassBorder}`,
  boxShadow: C.shadowResting,
});

const SAT = "max(env(safe-area-inset-top, 0px), 12px)";
const SAB = "max(env(safe-area-inset-bottom, 0px), 16px)";

// ── Shared Micro-Components ──────────────────────────────────────────────────
const SafeTop = ({ dark }) => {
  const C = useTheme();
  return <div style={{ height: SAT, background: dark ? C.darkBg : "transparent", flexShrink: 0 }} />;
};

const BackBtn = ({ onPress, light }) => {
  const C = useTheme();
  const color = light ? C.heroGhostText : C.t4;
  return (
    <button onClick={onPress} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 0", color, fontSize: 11, fontWeight: 500, display: "flex", alignItems: "center", gap: 4, letterSpacing: "0.02em" }}>
      <ArrowLeft size={14} strokeWidth={2} />
      חזרה
    </button>
  );
};

const ProgressBar = ({ step, total }) => {
  const C = useTheme();
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i < step ? C.accent : "rgba(0,0,0,0.06)", transition: "background 0.4s cubic-bezier(0.22,1,0.36,1)" }} />
        ))}
      </div>
      <span style={{ fontSize: 9, color: C.t3, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>שלב {step} מתוך {total}</span>
    </div>
  );
};

const Input = ({ label, value, onChange, type = "text", placeholder = "" }) => {
  const C = useTheme();
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 9, fontWeight: 600, color: C.t3, marginBottom: 5, letterSpacing: "0.10em", textTransform: "uppercase" }}>{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: "100%", height: 48, padding: "0 16px",
          border: `1px solid ${focused ? C.accent : C.controlBorder}`,
          borderRadius: C.inputRadius, background: focused ? C.controlHover : C.name === "apple" ? "#FFFFFF" : "rgba(255,255,255,0.60)",
          fontSize: 15, color: C.t1, fontFamily: "inherit", fontWeight: 400,
          transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)", outline: "none", direction: "rtl",
          boxShadow: focused ? `0 0 0 3px ${C.accentGlow}` : C.name === "apple" ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
        }}
      />
    </div>
  );
};

const Select = ({ label, value, onChange, options }) => {
  const C = useTheme();
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 9, fontWeight: 600, color: C.t3, marginBottom: 5, letterSpacing: "0.10em", textTransform: "uppercase" }}>{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{
          width: "100%", height: 48, padding: "0 16px",
          border: `1px solid ${C.controlBorder}`, borderRadius: C.inputRadius,
          background: C.name === "apple" ? "#FFFFFF" : "rgba(255,255,255,0.60)", fontSize: 15, color: C.t1,
          fontFamily: "inherit", outline: "none", direction: "rtl", appearance: "none",
          boxShadow: C.name === "apple" ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat", backgroundPosition: "left 14px center",
        }}
      >
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
};

const PrimaryBtn = ({ label, onPress, disabled, full = true }) => {
  const C = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <button onClick={disabled ? undefined : onPress} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: full ? "100%" : "auto", height: 52,
        background: disabled ? "rgba(0,0,0,0.06)" : hov ? C.accentHover : C.accent,
        color: disabled ? C.t3 : "#FFF", border: "none", borderRadius: C.btnRadius,
        fontSize: 15, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "inherit",
        transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
        transform: hov && !disabled ? "translateY(-1px)" : "none",
        boxShadow: disabled ? "none" : hov ? `0 8px 24px ${C.accentShadow}` : `0 2px 10px ${C.accentShadow}`,
      }}
    >{label}</button>
  );
};

const GhostBtn = ({ label, onPress }) => {
  const C = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onPress} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: "100%", height: 48,
        background: hov ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.50)",
        color: C.t2, border: `1px solid ${C.controlBorder}`, borderRadius: C.btnRadius,
        fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
        transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
        boxShadow: hov ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
      }}
    >{label}</button>
  );
};

const Toggle = ({ options, value, onChange }) => {
  const C = useTheme();
  return (
    <div style={{ display: "flex", background: C.name === "apple" ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.04)", borderRadius: C.inputRadius + 2, padding: 3, marginBottom: 18 }}>
      {options.map(o => (
        <button key={o} onClick={() => onChange(o)} style={{
          flex: 1, height: 42, borderRadius: C.inputRadius, border: "none", cursor: "pointer", fontFamily: "inherit",
          background: value === o ? "#fff" : "transparent", color: value === o ? C.t1 : C.t3,
          fontSize: 14, fontWeight: value === o ? 600 : 400,
          boxShadow: value === o ? (C.name === "apple" ? "0 1px 4px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.04)" : "0 2px 8px rgba(0,0,0,0.06)") : "none",
          transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
        }}>{o}</button>
      ))}
    </div>
  );
};

const BottomArea = ({ children, border = true }) => {
  const C = useTheme();
  return (
    <div style={{ padding: `14px 24px calc(${SAB})`, borderTop: border ? `1px solid ${C.border}` : "none" }}>
      {children}
    </div>
  );
};

// ── Screens ──────────────────────────────────────────────────────────────────

function SplashScreen({ nav }) {
  const C = useTheme();
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.darkBg, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, left: -80, width: 320, height: 320, borderRadius: "50%", border: `1px solid ${C.splashCircle1}`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: -40, left: -40, width: 220, height: 220, borderRadius: "50%", border: `1px solid ${C.splashCircle2}`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -100, right: -60, width: 280, height: 280, borderRadius: "50%", border: `1px solid ${C.splashCircle3}`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 160, right: 20, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle, ${C.splashGlow} 0%, transparent 70%)`, pointerEvents: "none" }} />
      {C.name === "fintech" && <>
        <div style={{ position: "absolute", top: 80, right: -100, width: 300, height: 300, borderRadius: "50%", border: "2px solid rgba(165,180,252,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 120, right: -60, width: 220, height: 220, borderRadius: "50%", border: "2px solid rgba(165,180,252,0.10)", pointerEvents: "none" }} />
      </>}
      {C.name === "apple" && <>
        <div style={{ position: "absolute", top: -60, right: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      </>}
      <SafeTop dark />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: `0 28px calc(${SAB})` }}>
        <div style={{ paddingTop: 32, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 6, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: C.heroText, letterSpacing: "-0.02em" }}>קרדיט-IL</div>
              <div style={{ fontSize: 12, color: C.darkText, fontWeight: 400, letterSpacing: "0.02em" }}>הלוואות חוץ-בנקאיות</div>
            </div>
          </div>
          <div style={{ marginTop: 0 }}>
            <div style={{ fontSize: 38, fontWeight: 700, color: C.heroText, lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: 16, textAlign: "right" }}>כסף כשצריך,<br />מהיר ופשוט.</div>
            <div style={{ fontSize: 19, color: C.darkText, fontWeight: 400, lineHeight: 1.2, width: 320, verticalAlign: "middle" }}>הלוואות עד ₪100,000 עם אישור תוך 24 שעות, ללא ביורוקרטיה בנקאית.</div>
          </div>
        </div>
        <div style={{ opacity: visible ? 1 : 0, transition: "all 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button onClick={() => nav("register")} style={{ height: 54, borderRadius: C.btnRadius + 2, background: C.accent, border: "none", color: "#FFF", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", boxShadow: `0 4px 20px ${C.accentShadow}`, transition: "all 0.25s ease" }}>התחל בקשה</button>
            <button onClick={() => nav("dashboard")} style={{ height: 48, borderRadius: C.btnRadius + 2, background: "transparent", border: `1px solid ${C.heroGhostBorder}`, color: C.heroGhostText, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s ease" }}>כניסה למשתמש קיים</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterScreen({ nav, back }) {
  const C = useTheme(); const gs = getGlass(C);
  const [name, setName] = useState(""); const [phone, setPhone] = useState(""); const [id, setId] = useState(""); const [agreed, setAgreed] = useState(false);
  const valid = name.length > 1 && phone.length === 10 && id.length === 9 && agreed;
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 32px", WebkitOverflowScrolling: "touch" }}>
        <BackBtn onPress={() => back("splash")} />
        <div style={{ marginBottom: 24 }}><div style={{ fontSize: 26, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", marginBottom: 6 }}>יצירת חשבון</div><div style={{ fontSize: 14, color: C.t4, fontWeight: 400 }}>מלא את הפרטים הבאים כדי להתחיל</div></div>
        <Input label="שם מלא" value={name} onChange={setName} placeholder="ישראל ישראלי" />
        <Input label="מספר טלפון" value={phone} onChange={setPhone} type="tel" placeholder="05X-XXXXXXX" />
        <Input label="תעודת זהות" value={id} onChange={setId} type="number" placeholder="XXXXXXXXX" />
        <div style={{ margin: "18px 0", padding: 16, ...gs, borderRadius: C.cardRadius - 2 }}>
          <button onClick={() => setAgreed(!agreed)} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "right", padding: 0 }}>
            <div style={{ width: 22, height: 22, borderRadius: 7, border: `2px solid ${agreed ? C.accent : "rgba(0,0,0,0.12)"}`, background: agreed ? C.accent : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease" }}>
              {agreed && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>}
            </div>
            <span style={{ fontSize: 13, color: C.t2, lineHeight: 1.6, fontWeight: 400 }}>אני מסכים ל<span style={{ color: C.accent, fontWeight: 600 }}>תנאי השימוש</span> ומאשר בדיקת נתוני אשראי על שמי</span>
          </button>
        </div>
      </div>
      <BottomArea><PrimaryBtn label="שלח קוד אימות" onPress={() => nav("otp")} disabled={!valid} /></BottomArea>
    </div>
  );
}

function OTPScreen({ nav, back }) {
  const C = useTheme();
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const handleDigit = (i, val) => { if (!/^\d?$/.test(val)) return; const next = [...digits]; next[i] = val; setDigits(next); if (val && i < 5) refs[i + 1].current?.focus(); };
  const valid = digits.every(d => d !== "");
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, padding: "0 24px" }}>
        <BackBtn onPress={() => back("register")} />
        <div style={{ marginTop: 12, marginBottom: 36 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", marginBottom: 8 }}>אימות מספר טלפון</div>
          <div style={{ fontSize: 14, color: C.t4 }}>שלחנו קוד בן 6 ספרות ל-<span style={{ color: C.t1, fontWeight: 600 }}>05X-XXXXXX</span></div>
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 28, direction: "ltr" }}>
          {digits.map((d, i) => (
            <input key={i} ref={refs[i]} maxLength={1} inputMode="numeric" value={d} onChange={e => handleDigit(i, e.target.value)}
              onKeyDown={e => { if (e.key === "Backspace" && !d && i > 0) refs[i - 1].current?.focus(); }}
              style={{ width: 48, height: 58, textAlign: "center", fontSize: 24, fontWeight: 600, border: `1.5px solid ${d ? C.accent : "rgba(0,0,0,0.08)"}`, borderRadius: C.inputRadius + 2, background: d ? C.accentSoft : (C.name === "apple" ? "#FFF" : "rgba(255,255,255,0.60)"), color: C.t1, fontFamily: "inherit", outline: "none", transition: "all 0.2s ease", boxShadow: d ? `0 0 0 3px ${C.accentGlow}` : (C.name === "apple" ? "0 1px 3px rgba(0,0,0,0.04)" : "none") }}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <span style={{ fontSize: 13, color: C.t3 }}>לא קיבלת? </span>
          <button style={{ fontSize: 13, color: C.accent, fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>שלח שוב</button>
        </div>
        <PrimaryBtn label="אמת קוד" onPress={() => nav("personal")} disabled={!valid} />
      </div>
    </div>
  );
}

function PersonalScreen({ nav, back }) {
  const C = useTheme(); const gs = getGlass(C);
  const [status, setStatus] = useState("נשוי/אה"); const [deps, setDeps] = useState("0"); const [addr, setAddr] = useState("");
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 16px", WebkitOverflowScrolling: "touch" }}>
        <BackBtn onPress={() => back("otp")} /><ProgressBar step={1} total={5} />
        <div style={{ marginBottom: 20 }}><div style={{ fontSize: 24, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", marginBottom: 5 }}>פרטים אישיים</div><div style={{ fontSize: 13, color: C.t4 }}>נשתמש בנתונים אלו לחישוב ההלוואה המתאימה לך</div></div>
        <Select label="מצב משפחתי" value={status} onChange={setStatus} options={["רווק/ה", "נשוי/אה", "גרוש/ה", "אלמן/ה"]} />
        <Select label="מספר תלויים" value={deps} onChange={setDeps} options={["0", "1", "2", "3", "4+"]} />
        <Input label="כתובת מגורים" value={addr} onChange={setAddr} placeholder="רחוב, עיר" />
        <div style={{ ...gs, borderRadius: C.cardRadius - 2, padding: 14 }}>
          <div style={{ fontSize: 9, color: C.t3, fontWeight: 600, marginBottom: 6, letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 4 }}><ClipboardList size={12} strokeWidth={1.5} /> מידע חשוב</div>
          <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.65 }}>הנתונים שתספק ישפיעו על חישוב סכום ההלוואה וגובה הריבית.</div>
        </div>
      </div>
      <BottomArea><PrimaryBtn label="המשך" onPress={() => nav("employment")} disabled={!addr} /></BottomArea>
    </div>
  );
}

function EmploymentScreen({ nav, back }) {
  const C = useTheme();
  const [type, setType] = useState("שכיר"); const [employer, setEmployer] = useState(""); const [seniority, setSeniority] = useState("3"); const [income, setIncome] = useState("");
  const valid = employer.length > 0 && income.length > 0;
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 16px", WebkitOverflowScrolling: "touch" }}>
        <BackBtn onPress={() => back("personal")} /><ProgressBar step={2} total={5} />
        <div style={{ marginBottom: 20 }}><div style={{ fontSize: 24, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", marginBottom: 5 }}>פרטי תעסוקה</div><div style={{ fontSize: 13, color: C.t4 }}>הכנסה ויציבות תעסוקתית משפיעים על אישור ההלוואה</div></div>
        <Toggle options={["שכיר", "עצמאי"]} value={type} onChange={setType} />
        <Input label={type === "שכיר" ? "שם מעסיק" : "שם העסק"} value={employer} onChange={setEmployer} placeholder={type === "שכיר" ? 'חברה בע"מ' : "העסק שלי"} />
        <Select label="ותק בעבודה" value={seniority} onChange={setSeniority} options={["פחות משנה", "1-2 שנים", "3 שנים", "4-5 שנים", "מעל 5 שנים"]} />
        <Input label="הכנסה חודשית נטו (₪)" value={income} onChange={setIncome} type="number" placeholder="8,000" />
      </div>
      <BottomArea><PrimaryBtn label="המשך" onPress={() => nav("expenses")} disabled={!valid} /></BottomArea>
    </div>
  );
}

function ExpensesScreen({ nav, back }) {
  const C = useTheme(); const gs = getGlass(C);
  const [rent, setRent] = useState(""); const [loans, setLoans] = useState("0"); const [other, setOther] = useState("");
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 16px", WebkitOverflowScrolling: "touch" }}>
        <BackBtn onPress={() => back("employment")} /><ProgressBar step={3} total={5} />
        <div style={{ marginBottom: 20 }}><div style={{ fontSize: 24, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", marginBottom: 5 }}>הוצאות חודשיות</div><div style={{ fontSize: 13, color: C.t4 }}>נחשב את יחס ההחזר המתאים לך</div></div>
        <Input label="שכירות / משכנתא חודשית (₪)" value={rent} onChange={setRent} type="number" placeholder="4,500" />
        <Select label="תשלומי הלוואות קיימות" value={loans} onChange={setLoans} options={["אין הלוואות", "עד ₪500", "₪500-1,500", "₪1,500-3,000", "מעל ₪3,000"]} />
        <Input label="הוצאות קבועות אחרות (₪)" value={other} onChange={setOther} type="number" placeholder="1,200" />
        <div style={{ ...gs, borderRadius: C.cardRadius - 2, padding: 14, marginTop: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontSize: 12, color: C.t4, fontWeight: 500 }}>יחס החזר מוערך</span><span style={{ fontSize: 14, fontWeight: 700, color: C.green }}>~28%</span></div>
          <div style={{ height: 5, background: "rgba(0,0,0,0.05)", borderRadius: 999, overflow: "hidden" }}><div style={{ width: "28%", height: "100%", background: C.green, borderRadius: 999 }} /></div>
          <div style={{ fontSize: 11, color: C.t3, marginTop: 6, fontWeight: 500 }}>יחס מתחת ל-40% — מצוין לאישור הלוואה</div>
        </div>
      </div>
      <BottomArea><PrimaryBtn label="בדוק אשראי" onPress={() => nav("credit_check")} disabled={!rent} /></BottomArea>
    </div>
  );
}

function CreditCheckScreen({ nav }) {
  const C = useTheme();
  const [progress, setProgress] = useState(0); const [step, setStep] = useState(0);
  const steps = ["מתחבר ל-BDI Israel...", "בודק היסטוריית תשלומים...", "מנתח יחס חוב/הכנסה...", "מחשב ציון אשראי...", "מכין הצעה אישית..."];
  useEffect(() => {
    const t = setInterval(() => { setProgress(p => { if (p >= 100) { clearInterval(t); setTimeout(() => nav("credit_result"), 400); return 100; } setStep(Math.min(4, Math.floor((p + 5) / 20))); return p + 2; }); }, 60);
    return () => clearInterval(t);
  }, [nav]);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: C.darkBg, padding: 40 }}>
      <div style={{ width: 80, height: 80, borderRadius: "50%", border: `3px solid ${C.splashCircle1}`, borderTopColor: C.accent, animation: "spin 0.8s linear infinite", marginBottom: 36 }} />
      <div style={{ fontSize: 22, fontWeight: 700, color: C.heroText, marginBottom: 10, textAlign: "center", letterSpacing: "-0.02em" }}>בודק את נתוני האשראי שלך</div>
      <div style={{ fontSize: 13, color: C.darkText, textAlign: "center", marginBottom: 36, minHeight: 18 }}>{steps[step]}</div>
      <div style={{ width: "100%", height: 4, background: C.name === "apple" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)", borderRadius: 999, overflow: "hidden" }}><div style={{ width: `${progress}%`, height: "100%", background: C.accent, borderRadius: 999, transition: "width 0.1s ease" }} /></div>
      <div style={{ fontSize: 12, color: C.darkTextDim, marginTop: 10 }}>{progress}%</div>
    </div>
  );
}

function CreditResultScreen({ nav, back }) {
  const C = useTheme(); const gs = getGlass(C);
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  const bars = [{ label: "ציון BDI", val: 82, color: C.green }, { label: "היסטוריית תשלומים", val: 91, color: C.green }, { label: "יחס חוב/הכנסה", val: 68, color: C.amber }, { label: "ותק אשראי", val: 74, color: C.green }, { label: "פיזור אשראי", val: 58, color: C.t3 }];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 16px", WebkitOverflowScrolling: "touch" }}>
        <BackBtn onPress={() => back("expenses")} />
        <div style={{ textAlign: "center", padding: "20px 0 28px" }}>
          <div style={{ width: 88, height: 88, borderRadius: "50%", background: C.accent, color: "#FFF", fontSize: 30, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", boxShadow: `0 8px 32px ${C.accentShadow}`, opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.5)", transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>B+</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: C.t1, marginBottom: 4 }}>דירוג אשראי: טוב</div>
          <div style={{ fontSize: 13, color: C.t4 }}>ציון 724 מתוך 850</div>
        </div>
        <div style={{ ...gs, borderRadius: C.cardRadius, padding: 18, marginBottom: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 14 }}>פירוט ניקוד</div>
          {bars.map((b, i) => (
            <div key={b.label} style={{ marginBottom: 12, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(20px)", transition: `all 0.4s ease ${i * 0.08}s` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 12, color: C.t4, fontWeight: 500 }}>{b.label}</span><span style={{ fontSize: 12, fontWeight: 700, color: b.color }}>{b.val}</span></div>
              <div style={{ height: 5, background: "rgba(0,0,0,0.04)", borderRadius: 999, overflow: "hidden" }}><div style={{ width: visible ? `${b.val}%` : "0%", height: "100%", background: b.color, borderRadius: 999, transition: `width 0.7s ease ${0.2 + i * 0.1}s` }} /></div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {[["עיקולים", "אין", C.green, true], ["חובות פתוחים", "אין", C.green, true], ["כרטיסי אשראי", "3", C.t1, false]].map(([label, val, color, hasCheck]) => (
            <div key={label} style={{ flex: 1, ...gs, borderRadius: C.cardRadius - 4, padding: "14px 10px", textAlign: "center" }}>
              <div style={{ fontSize: 9, color: C.t3, marginBottom: 3, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>{val}{hasCheck && <Check size={13} strokeWidth={2.5} />}</div>
            </div>
          ))}
        </div>
      </div>
      <BottomArea><PrimaryBtn label="צפה בהצעה שלי →" onPress={() => nav("offer")} /></BottomArea>
    </div>
  );
}

function OfferScreen({ nav, back }) {
  const C = useTheme(); const gs = getGlass(C);
  const [amount, setAmount] = useState(35000); const [months, setMonths] = useState(36);
  const rate = 0.149 / 12; const monthly = Math.round((amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1));
  const totalCost = monthly * months; const totalInterest = totalCost - amount;
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
        <div style={{ background: C.darkBg2, padding: `0 24px 40px`, paddingTop: SAT }}>
          <BackBtn onPress={() => back("credit_result")} light />
          <div style={{ marginTop: 6 }}>
            <div style={{ fontSize: 13, color: C.darkText, marginBottom: 4, fontWeight: 500 }}>ההצעה שלנו עבורך</div>
            <div style={{ fontSize: 44, fontWeight: 700, color: C.heroText, letterSpacing: "-0.04em", lineHeight: 1 }}>₪{amount.toLocaleString()}</div>
            <div style={{ fontSize: 13, color: C.darkTextDim, marginTop: 6 }}>ריבית שנתית: 14.9% APR</div>
          </div>
        </div>
        <div style={{ background: C.pageBg, borderRadius: `${C.cardRadius + 4}px ${C.cardRadius + 4}px 0 0`, marginTop: -18, padding: 24, position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}><span style={{ fontSize: 13, color: C.t4, fontWeight: 500 }}>סכום ההלוואה</span><span style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>₪{amount.toLocaleString()}</span></div>
            <input type="range" min={5000} max={100000} step={1000} value={amount} onChange={e => setAmount(+e.target.value)} style={{ width: "100%", accentColor: C.accent, cursor: "pointer" }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}><span style={{ fontSize: 11, color: C.t3 }}>₪100,000</span><span style={{ fontSize: 11, color: C.t3 }}>₪5,000</span></div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, color: C.t4, fontWeight: 500, marginBottom: 10 }}>תקופת החזר</div>
            <div style={{ display: "flex", gap: 6 }}>
              {[12, 24, 36, 48, 60].map(m => (
                <button key={m} onClick={() => setMonths(m)} style={{ flex: 1, height: 44, borderRadius: C.inputRadius, border: `1.5px solid ${months === m ? C.accent : C.controlBorder}`, background: months === m ? C.accent : (C.name === "apple" ? "#FFF" : "rgba(255,255,255,0.60)"), color: months === m ? "#FFF" : C.t2, fontSize: 13, fontWeight: months === m ? 600 : 400, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s ease", boxShadow: months === m ? `0 2px 10px ${C.accentShadow}` : "none" }}>{m}</button>
              ))}
            </div>
            <div style={{ fontSize: 11, color: C.t3, marginTop: 5, textAlign: "center" }}>חודשים</div>
          </div>
          <div style={{ background: C.darkBg2, borderRadius: C.cardRadius, padding: "18px 20px", marginBottom: 16, color: C.heroText }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}><span style={{ fontSize: 12, color: C.darkText }}>תשלום חודשי</span><div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em" }}>₪{monthly.toLocaleString()}</div></div>
            <div style={{ height: 1, background: C.name === "apple" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)", marginBottom: 10 }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {[["סה\"כ לתשלום", `₪${totalCost.toLocaleString()}`], ["עלות מימון", `₪${totalInterest.toLocaleString()}`], ["ריבית חודשית", "1.24%"]].map(([label, val]) => (
                <div key={label} style={{ textAlign: "center" }}><div style={{ fontSize: 9, color: C.darkTextDim, marginBottom: 2, fontWeight: 500 }}>{label}</div><div style={{ fontSize: 13, fontWeight: 600 }}>{val}</div></div>
              ))}
            </div>
          </div>
          <div style={{ ...gs, borderRadius: C.cardRadius - 4, padding: "12px 14px" }}><div style={{ fontSize: 11, color: C.t4, lineHeight: 1.65 }}>* ריבית שנתית של 14.9% APR. הסכום הסופי כפוף לאישור חיתום. ניתן לפירעון מוקדם בכפוף לתנאים.</div></div>
        </div>
      </div>
      <BottomArea><PrimaryBtn label={`אני רוצה ₪${amount.toLocaleString()} ב-${months} חודשים`} onPress={() => nav("docs")} /></BottomArea>
    </div>
  );
}

function DocsScreen({ nav, back }) {
  const C = useTheme(); const gs = getGlass(C);
  const [uploaded, setUploaded] = useState({});
  const docs = [{ id: "pay1", label: "3 תלושי שכר אחרונים", Icon: FileText, required: true }, { id: "bank", label: 'תדפיס עו"ש 3 חודשים', Icon: Landmark, required: true }, { id: "id", label: "תעודת זהות (2 צדדים)", Icon: IdCard, required: true }, { id: "rent", label: "חוזה שכירות", Icon: Home, required: false }];
  const toggle = id => setUploaded(u => ({ ...u, [id]: !u[id] }));
  const requiredDone = docs.filter(d => d.required).every(d => uploaded[d.id]);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 16px", WebkitOverflowScrolling: "touch" }}>
        <BackBtn onPress={() => back("offer")} /><ProgressBar step={4} total={5} />
        <div style={{ marginBottom: 20 }}><div style={{ fontSize: 24, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", marginBottom: 5 }}>מסמכים נדרשים</div><div style={{ fontSize: 13, color: C.t4 }}>אנחנו צריכים כמה מסמכים להשלמת הבקשה</div></div>
        {docs.map(doc => (
          <button key={doc.id} onClick={() => toggle(doc.id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: 16, borderRadius: C.cardRadius - 2, border: `1.5px solid ${uploaded[doc.id] ? C.accent : C.border}`, background: uploaded[doc.id] ? C.accentSoft : (C.name === "apple" ? "#FFF" : "rgba(255,255,255,0.55)"), marginBottom: 10, cursor: "pointer", fontFamily: "inherit", textAlign: "right", transition: "all 0.25s ease", backdropFilter: `blur(${C.blurAmount})`, boxShadow: uploaded[doc.id] ? `0 2px 12px ${C.accentGlow}` : C.shadowResting }}>
            <div style={{ width: 44, height: 44, borderRadius: C.inputRadius + 2, background: uploaded[doc.id] ? C.accent : "rgba(0,0,0,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.25s ease", boxShadow: uploaded[doc.id] ? `0 2px 10px ${C.accentShadow}` : "none" }}>
              {uploaded[doc.id] ? <Check size={20} color="#FFF" strokeWidth={2.5} /> : <doc.Icon size={20} color={C.t3} strokeWidth={1.5} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.t1, marginBottom: 2 }}>{doc.label}</div>
              <div style={{ fontSize: 11, color: uploaded[doc.id] ? C.green : doc.required ? C.amber : C.t3, fontWeight: 500 }}>
                {uploaded[doc.id] ? <span style={{ display: "flex", alignItems: "center", gap: 2 }}>הועלה בהצלחה <Check size={10} strokeWidth={2.5} /></span> : doc.required ? "נדרש" : "אופציונלי"}
              </div>
            </div>
            <div style={{ fontSize: 11, color: uploaded[doc.id] ? C.accent : C.t3, fontWeight: 600 }}>{uploaded[doc.id] ? <Check size={16} strokeWidth={2.5} /> : "העלה"}</div>
          </button>
        ))}
        <div style={{ ...gs, borderRadius: C.cardRadius - 4, padding: "12px 14px", marginTop: 6 }}>
          <div style={{ fontSize: 11, color: C.t4, lineHeight: 1.65, display: "flex", alignItems: "flex-start", gap: 5 }}><Shield size={13} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 1 }} /> הקבצים מוצפנים ומאוחסנים בצורה מאובטחת. לא נשתף אותם עם גורם שלישי ללא אישורך.</div>
        </div>
      </div>
      <BottomArea><PrimaryBtn label="שלח לחיתום" onPress={() => nav("underwriting")} disabled={!requiredDone} /></BottomArea>
    </div>
  );
}

function UnderwritingScreen({ nav }) {
  const C = useTheme(); const gs = getGlass(C);
  const [activeStep, setActiveStep] = useState(2);
  useEffect(() => { const t1 = setTimeout(() => setActiveStep(3), 2000); const t2 = setTimeout(() => setActiveStep(4), 4000); const t3 = setTimeout(() => nav("approved"), 5500); return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); }; }, [nav]);
  const steps = [{ label: "מסמכים התקבלו", done: true }, { label: "בדיקת אשראי הושלמה", done: true }, { label: "חיתום בתהליך", done: activeStep > 2, active: activeStep === 2 }, { label: "בדיקת מסמכים סופית", done: activeStep > 3, active: activeStep === 3 }, { label: "החלטה סופית", done: activeStep > 4, active: activeStep === 4 }];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 36 }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", ...gs, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}><ClipboardList size={32} color={C.t4} strokeWidth={1.5} /></div>
        <div style={{ fontSize: 24, fontWeight: 700, color: C.t1, textAlign: "center", marginBottom: 6 }}>הבקשה בטיפול</div>
        <div style={{ fontSize: 13, color: C.t4, textAlign: "center", marginBottom: 36 }}>החיתומאים שלנו בודקים את הבקשה שלך כרגע</div>
        <div style={{ width: "100%", maxWidth: 300 }}>
          {steps.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: s.done ? C.accent : s.active ? C.accentGlow : "rgba(0,0,0,0.04)", border: s.active ? `2px solid ${C.accent}` : "none", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.4s ease", animation: s.active ? "pulse 1.5s ease infinite" : undefined }}>
                  {s.done ? <svg width="12" height="12" viewBox="0 0 14 14"><path d="M3 7l3 3 5-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" fill="none" /></svg> : s.active ? <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent }} /> : <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(0,0,0,0.1)" }} />}
                </div>
                {i < steps.length - 1 && <div style={{ width: 2, height: 28, background: s.done ? C.accent : "rgba(0,0,0,0.06)", transition: "background 0.4s ease", borderRadius: 1 }} />}
              </div>
              <div style={{ paddingBottom: i < steps.length - 1 ? 28 : 0 }}>
                <div style={{ fontSize: 13, fontWeight: s.active || s.done ? 600 : 400, color: s.active || s.done ? C.t1 : C.t3, transition: "all 0.3s ease" }}>{s.label}</div>
                {s.active && <div style={{ fontSize: 11, color: C.accent, marginTop: 2, fontWeight: 500 }}>בתהליך...</div>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, padding: "14px 18px", ...gs, borderRadius: C.cardRadius - 4, width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: 12, color: C.t4, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><MessageSquare size={13} strokeWidth={1.5} /> נשלח לך SMS עם עדכון סטטוס</div>
        </div>
      </div>
    </div>
  );
}

function ApprovedScreen({ nav }) {
  const C = useTheme(); const gs = getGlass(C);
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "36px 24px" }}>
        <div style={{ width: 96, height: 96, borderRadius: "50%", background: C.green, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.4)", transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)", boxShadow: `0 12px 40px ${C.green}4D` }}><Check size={44} strokeWidth={2.5} /></div>
        <div style={{ fontSize: 30, fontWeight: 700, color: C.t1, textAlign: "center", marginBottom: 6, letterSpacing: "-0.03em", opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.2s" }}>ההלוואה אושרה!</div>
        <div style={{ fontSize: 14, color: C.t4, textAlign: "center", marginBottom: 32, opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.3s" }}>מזל טוב! אושרת להלוואה בתנאים הבאים</div>
        <div style={{ width: "100%", ...gs, borderRadius: C.cardRadius, padding: "18px 20px", marginBottom: 20, opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.4s" }}>
          {[{ label: "סכום הלוואה", val: "₪ 35,000" }, { label: "ריבית שנתית", val: "14.9% APR" }, { label: "תקופה", val: "36 חודשים" }, { label: "תשלום חודשי", val: "₪ 1,214" }, { label: "עמלת פתיחת תיק", val: "₪ 350" }].map((item, i) => (
            <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none" }}><span style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>{item.val}</span><span style={{ fontSize: 12, color: C.t3, fontWeight: 500 }}>{item.label}</span></div>
          ))}
        </div>
      </div>
      <BottomArea><div style={{ display: "flex", flexDirection: "column", gap: 8 }}><PrimaryBtn label="חתום על החוזה" onPress={() => nav("contract")} /><GhostBtn label="שמור לאוחר" onPress={() => nav("dashboard")} /></div></BottomArea>
    </div>
  );
}

function ContractScreen({ nav, back }) {
  const C = useTheme(); const gs = getGlass(C);
  const [signed, setSigned] = useState(false); const [agreed, setAgreed] = useState(false); const [drawing, setDrawing] = useState(false);
  const canvasRef = useRef(null); const canvasWrapRef = useRef(null); const lastPos = useRef(null);
  const getPos = (e, canvas) => { const r = canvas.getBoundingClientRect(); const src = e.touches?.[0] || e; return { x: src.clientX - r.left, y: src.clientY - r.top }; };
  const startDraw = e => { e.preventDefault(); setDrawing(true); lastPos.current = getPos(e, canvasRef.current); };
  const draw = e => { e.preventDefault(); if (!drawing || !canvasRef.current) return; const ctx = canvasRef.current.getContext("2d"); const pos = getPos(e, canvasRef.current); ctx.beginPath(); ctx.moveTo(lastPos.current.x, lastPos.current.y); ctx.lineTo(pos.x, pos.y); ctx.strokeStyle = C.accent; ctx.lineWidth = 2.5; ctx.lineCap = "round"; ctx.stroke(); lastPos.current = pos; setSigned(true); };
  const stopDraw = () => setDrawing(false);
  const clear = () => { if (!canvasRef.current) return; canvasRef.current.getContext("2d").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); setSigned(false); };
  useEffect(() => { const r = () => { if (!canvasWrapRef.current || !canvasRef.current) return; canvasRef.current.width = canvasWrapRef.current.offsetWidth; canvasRef.current.height = 100; }; r(); window.addEventListener("resize", r); return () => window.removeEventListener("resize", r); }, []);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 16px", WebkitOverflowScrolling: "touch" }}>
        <BackBtn onPress={() => back("approved")} />
        <div style={{ marginBottom: 20 }}><div style={{ fontSize: 24, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", marginBottom: 5 }}>חתימה על החוזה</div><div style={{ fontSize: 13, color: C.t4 }}>קרא את הסיכום וחתום בתיבה למטה</div></div>
        <div style={{ ...gs, borderRadius: C.cardRadius - 2, padding: 14, marginBottom: 18, maxHeight: 140, overflowY: "auto" }}>
          <div style={{ fontSize: 11, color: C.t2, lineHeight: 1.8 }}><strong>הסכם הלוואה — מס׳ 2024-39821</strong><br />הלווה: ישראל ישראלי | מס׳ ז.ה.: XXXXXXXXX<br />סכום הלוואה: ₪35,000 | ריבית: 14.9% לשנה<br />מספר תשלומים: 36 חודשיים של ₪1,214 כל אחד<br />מועד תחילה: 01/01/2025 | מועד סיום: 31/12/2027<br />פירעון מוקדם: מותר בכפוף לעמלה של 1% מהיתרה<br />איחור בתשלום: ריבית פיגורים של 0.5% לחודש<br />∙ ∙ ∙ ∙ ∙ ∙</div>
        </div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}><div style={{ fontSize: 13, fontWeight: 600, color: C.t1 }}>חתימה דיגיטלית</div>{signed && <button onClick={clear} style={{ fontSize: 11, color: C.accent, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>נקה</button>}</div>
          <div ref={canvasWrapRef} style={{ width: "100%" }}>
            <canvas ref={canvasRef} height={100} onMouseDown={startDraw} onMouseMove={draw} onMouseUp={stopDraw} onMouseLeave={stopDraw} onTouchStart={startDraw} onTouchMove={draw} onTouchEnd={stopDraw}
              style={{ width: "100%", height: 100, border: `2px dashed ${signed ? C.accent : "rgba(0,0,0,0.08)"}`, borderRadius: C.cardRadius - 4, cursor: "crosshair", display: "block", background: C.name === "apple" ? "#FFF" : "rgba(255,255,255,0.50)", touchAction: "none", transition: "border-color 0.2s ease" }} />
          </div>
          {!signed && <div style={{ fontSize: 11, color: C.t3, textAlign: "center", marginTop: 6 }}>חתום בתיבה למעלה באמצעות העכבר או האצבע</div>}
        </div>
        <button onClick={() => setAgreed(!agreed)} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "right", padding: 0 }}>
          <div style={{ width: 22, height: 22, borderRadius: 7, border: `2px solid ${agreed ? C.accent : "rgba(0,0,0,0.12)"}`, background: agreed ? C.accent : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease" }}>{agreed && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>}</div>
          <span style={{ fontSize: 13, color: C.t2, lineHeight: 1.6 }}>קראתי והבנתי את תנאי חוזה ההלוואה ואני מסכים לכל סעיפיו</span>
        </button>
      </div>
      <BottomArea><PrimaryBtn label="אשר וחתום" onPress={() => nav("bank_setup")} disabled={!signed || !agreed} /></BottomArea>
    </div>
  );
}

function BankSetupScreen({ nav, back }) {
  const C = useTheme();
  const [bank, setBank] = useState("לאומי"); const [branch, setBranch] = useState(""); const [account, setAccount] = useState("");
  const valid = branch.length > 2 && account.length > 5;
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 16px", WebkitOverflowScrolling: "touch" }}>
        <BackBtn onPress={() => back("contract")} /><ProgressBar step={5} total={5} />
        <div style={{ marginBottom: 20 }}><div style={{ fontSize: 24, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em", marginBottom: 5 }}>לאן להעביר?</div><div style={{ fontSize: 13, color: C.t4 }}>פרטי החשבון לקבלת הכסף</div></div>
        <Select label="בנק" value={bank} onChange={setBank} options={["לאומי", "הפועלים", "דיסקונט", "מזרחי טפחות", "אוצר החייל", "ירושלים"]} />
        <Input label="מספר סניף" value={branch} onChange={setBranch} type="number" placeholder="123" />
        <Input label="מספר חשבון" value={account} onChange={setAccount} type="number" placeholder="12-345678-9" />
        <div style={{ background: `${C.green}0F`, borderRadius: C.cardRadius - 4, padding: "14px 16px", border: `1px solid ${C.green}1F`, marginTop: 6 }}>
          <div style={{ fontSize: 12, color: "#166534", lineHeight: 1.65, display: "flex", alignItems: "flex-start", gap: 5 }}><Check size={13} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} /> הסכום יועבר לחשבון זה תוך 24-48 שעות לאחר האישור הסופי</div>
        </div>
      </div>
      <BottomArea><PrimaryBtn label="אשר ושלח כסף →" onPress={() => nav("success")} disabled={!valid} /></BottomArea>
    </div>
  );
}

function SuccessScreen({ nav }) {
  const C = useTheme();
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.darkBg }}>
      <SafeTop dark />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: `36px 28px calc(${SAB})` }}>
        <div style={{ marginBottom: 20, opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.3)", transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)" }}><Sparkles size={64} color={C.accent} strokeWidth={1.2} /></div>
        <div style={{ fontSize: 30, fontWeight: 700, color: C.heroText, textAlign: "center", marginBottom: 10, letterSpacing: "-0.03em", opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.2s" }}>הכסף בדרך אליך!</div>
        <div style={{ fontSize: 14, color: C.darkText, textAlign: "center", marginBottom: 36, opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.3s" }}>₪35,000 יועברו לחשבון לאומי שלך תוך 24-48 שעות</div>
        <div style={{ width: "100%", background: C.darkCard, borderRadius: C.cardRadius, padding: "18px 20px", border: `1px solid ${C.darkCardBorder}`, marginBottom: 28, backdropFilter: `blur(${C.blurAmount})`, opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.4s" }}>
          {[["מספר בקשה", "#2024-39821"], ["תאריך אישור", "03.03.2025"], ["צפי העברה", "04-05.03.2025"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${C.heroDivider}` }}><span style={{ fontSize: 14, fontWeight: 600, color: C.heroText }}>{v}</span><span style={{ fontSize: 12, color: C.darkTextLabel }}>{k}</span></div>
          ))}
        </div>
        <button onClick={() => nav("dashboard")} style={{ width: "100%", height: 52, borderRadius: C.btnRadius + 2, background: C.accent, color: "#FFF", fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: `0 4px 20px ${C.accentShadow}` }}>עבור לדשבורד →</button>
      </div>
    </div>
  );
}

function DashboardScreen({ nav, onOpenSettings }) {
  const C = useTheme(); const gs = getGlass(C); const gss = getGlassStrong(C);
  const [activeTab, setActiveTab] = useState("home");
  const tabs = [{ id: "home", Icon: LayoutGrid, label: "בית" }, { id: "pay", Icon: List, label: "תשלומים" }, { id: "docs", Icon: FileText, label: "מסמכים" }, { id: "profile", Icon: CircleUser, label: "פרופיל" }];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <div style={{ background: C.darkBg2, paddingTop: SAT }}>
        <div style={{ padding: "6px 24px 22px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={onOpenSettings} style={{ width: 40, height: 40, borderRadius: 12, background: C.darkCard, border: `1px solid ${C.darkCardBorder}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Settings size={17} color={C.darkText} strokeWidth={1.5} /></button>
              <button style={{ width: 40, height: 40, borderRadius: 12, background: C.darkCard, border: `1px solid ${C.darkCardBorder}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Bell size={17} color={C.darkText} strokeWidth={1.5} /></button>
            </div>
            <div style={{ textAlign: "right" }}><div style={{ fontSize: 12, color: C.darkTextLabel, fontWeight: 400 }}>שלום,</div><div style={{ fontSize: 20, fontWeight: 700, color: C.heroText, letterSpacing: "-0.02em" }}>ישראל ישראלי</div></div>
          </div>
          <div style={{ background: C.darkCard, borderRadius: C.cardRadius, padding: 20, border: `1px solid ${C.darkCardBorder}`, backdropFilter: `blur(${C.blurAmount})` }}>
            <div style={{ fontSize: 9, color: C.darkTextLabel, marginBottom: 4, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>יתרת הלוואה</div>
            <div style={{ fontSize: 36, fontWeight: 700, color: C.heroText, letterSpacing: "-0.04em", marginBottom: 14 }}>₪33,786</div>
            <div style={{ height: 5, background: C.name === "apple" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)", borderRadius: 999, overflow: "hidden", marginBottom: 6 }}><div style={{ width: "8%", height: "100%", background: C.accent, borderRadius: 999 }} /></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: 11, color: C.darkTextDim }}>₪35,000 מקור</span><span style={{ fontSize: 11, color: C.darkTextDim }}>3/36 תשלומים</span></div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "18px 20px 0", WebkitOverflowScrolling: "touch" }}>
        <div style={{ ...gs, borderRadius: C.cardRadius, padding: "16px 18px", marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: C.t1, letterSpacing: "-0.02em" }}>₪1,214</span>
            <div style={{ textAlign: "right" }}><div style={{ fontSize: 9, color: C.t3, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>תשלום הבא</div><div style={{ fontSize: 13, fontWeight: 600, color: C.t1 }}>01.04.2025</div></div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ flex: 1, height: 40, borderRadius: C.inputRadius, background: C.accent, color: "#FFF", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600, boxShadow: `0 2px 10px ${C.accentShadow}` }}>שלם עכשיו</button>
            <button style={{ flex: 1, height: 40, borderRadius: C.inputRadius, background: C.name === "apple" ? "#FFF" : "rgba(255,255,255,0.60)", color: C.t2, border: `1px solid ${C.controlBorder}`, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 500, boxShadow: C.name === "apple" ? "0 1px 3px rgba(0,0,0,0.04)" : "none" }}>הוראת קבע</button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[{ label: "ריבית שנתית", val: "14.9%", Icon: BarChart3 }, { label: "ציון אשראי", val: "B+", Icon: Star }, { label: "תשלומים שבוצעו", val: "3/36", Icon: CheckCircle }, { label: "עמלת פירעון", val: "1%", Icon: CreditCard }].map(item => (
            <div key={item.label} style={{ ...gs, borderRadius: C.cardRadius - 2, padding: "14px 14px" }}>
              <div style={{ marginBottom: 5 }}><item.Icon size={18} color={C.accent} strokeWidth={1.5} /></div>
              <div style={{ fontSize: 18, fontWeight: 700, color: C.t1, marginBottom: 2, letterSpacing: "-0.02em" }}>{item.val}</div>
              <div style={{ fontSize: 10, color: C.t3, fontWeight: 500, letterSpacing: "0.02em" }}>{item.label}</div>
            </div>
          ))}
        </div>
        <div style={{ ...gs, borderRadius: C.cardRadius, padding: "16px 18px", marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 12 }}>תשלומים אחרונים</div>
          {[{ date: "01.03.2025", amount: "₪1,214", status: "שולם" }, { date: "01.02.2025", amount: "₪1,214", status: "שולם" }, { date: "01.01.2025", amount: "₪1,214", status: "שולם" }].map((t, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
              <span style={{ fontSize: 11, color: C.green, fontWeight: 600, display: "flex", alignItems: "center", gap: 2 }}>{t.status} <Check size={11} strokeWidth={2.5} /></span>
              <span style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>{t.amount}</span>
              <span style={{ fontSize: 11, color: C.t3 }}>{t.date}</span>
            </div>
          ))}
          <button onClick={() => nav("payments")} style={{ marginTop: 10, fontSize: 12, color: C.accent, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "center", fontWeight: 600 }}>כל ההיסטוריה</button>
        </div>
      </div>
      <div style={{ ...gss, borderTop: `1px solid ${C.border}`, padding: `8px 16px calc(${SAB})`, display: "flex", justifyContent: "space-around" }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => tab.id === "pay" ? nav("payments") : setActiveTab(tab.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: "6px 12px" }}>
            <div style={{ opacity: activeTab === tab.id ? 1 : 0.3, transition: "opacity 0.2s ease" }}><tab.Icon size={20} strokeWidth={activeTab === tab.id ? 2 : 1.5} color={activeTab === tab.id ? C.accent : C.t3} /></div>
            <div style={{ fontSize: 10, fontWeight: activeTab === tab.id ? 700 : 400, color: activeTab === tab.id ? C.accent : C.t3 }}>{tab.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PaymentsScreen({ nav, back }) {
  const C = useTheme();
  const months = Array.from({ length: 36 }, (_, i) => ({ n: i + 1, date: `${String(((i % 12) + 1)).padStart(2, "0")}.${2025 + Math.floor(i / 12)}`, principal: Math.round(815 + i * 10), interest: Math.round(399 - i * 8), paid: i < 3, next: i === 3 }));
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: C.pageBg }}>
      <SafeTop />
      <div style={{ padding: "0 24px 14px", borderBottom: `1px solid ${C.border}` }}>
        <BackBtn onPress={() => back("dashboard")} />
        <div style={{ fontSize: 24, fontWeight: 700, color: C.t1, letterSpacing: "-0.03em" }}>היסטוריית תשלומים</div>
        <div style={{ fontSize: 12, color: C.t4, marginTop: 3 }}>3 מתוך 36 תשלומים בוצעו</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: `14px 24px calc(${SAB})`, WebkitOverflowScrolling: "touch" }}>
        <div style={{ background: C.darkBg2, borderRadius: C.cardRadius - 2, padding: "16px 18px", marginBottom: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button style={{ height: 36, padding: "0 16px", borderRadius: C.inputRadius, background: `${C.accent}33`, color: C.accent, border: `1px solid ${C.accent}4D`, cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 500 }}>חשב עלות</button>
          <div style={{ textAlign: "right" }}><div style={{ fontSize: 12, color: C.darkTextLabel }}>יתרה לפירעון מוקדם</div><div style={{ fontSize: 20, fontWeight: 700, color: C.heroText, letterSpacing: "-0.02em" }}>₪33,786</div></div>
        </div>
        {months.slice(0, 12).map(m => (
          <div key={m.n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderRadius: C.inputRadius + 2, background: m.next ? `${C.green}0D` : m.paid ? (C.name === "apple" ? "#FFF" : "rgba(255,255,255,0.55)") : (C.name === "apple" ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.35)"), border: `1px solid ${m.next ? `${C.green}1F` : C.border}`, marginBottom: 7, backdropFilter: `blur(${C.blurAmount})` }}>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 11, color: m.paid ? C.green : m.next ? C.amber : C.t3, fontWeight: 600 }}>{m.paid ? <span style={{ display: "flex", alignItems: "center", gap: 2 }}>שולם <Check size={10} strokeWidth={2.5} /></span> : m.next ? "הבא →" : "עתידי"}</div>
              <div style={{ fontSize: 11, color: C.t3 }}>{m.date}</div>
            </div>
            <div style={{ textAlign: "center" }}><div style={{ fontSize: 9, color: C.t3, fontWeight: 500 }}>קרן / ריבית</div><div style={{ fontSize: 11, color: C.t4 }}>₪{m.principal} / ₪{m.interest}</div></div>
            <div style={{ textAlign: "right" }}><div style={{ fontSize: 9, color: C.t3, fontWeight: 500 }}>תשלום</div><div style={{ fontSize: 15, fontWeight: 700, color: C.t1 }}>₪1,214</div></div>
          </div>
        ))}
        <div style={{ textAlign: "center", padding: "14px 0" }}><span style={{ fontSize: 12, color: C.t3, fontWeight: 500 }}>24 תשלומים נוספים</span></div>
      </div>
    </div>
  );
}

// ── Settings Sheet ───────────────────────────────────────────────────────────
function SettingsSheet({ onClose, themeName, setThemeName }) {
  const C = useTheme();
  const themeOptions = [
    ["apple", "אפל", "#8B5CF6", "סגול-לבן"],
    ["minimal", "מינימלי", "#3b82f6", "כחול-אפור"],
    ["fintech", "פינטק", "#6366f1", "סגול-אינדיגו"],
  ];
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: 430, background: C.glassStrong, backdropFilter: `blur(${C.blurAmount}) saturate(180%)`, WebkitBackdropFilter: `blur(${C.blurAmount}) saturate(180%)`, borderRadius: `${C.cardRadius + 4}px ${C.cardRadius + 4}px 0 0`, padding: `24px 24px calc(${SAB})`, animation: "contentAppear 0.3s ease" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(0,0,0,0.12)", margin: "0 auto 20px" }} />
        <div style={{ fontSize: 20, fontWeight: 700, color: C.t1, marginBottom: 20 }}>הגדרות</div>
        <div style={{ fontSize: 10, fontWeight: 600, color: C.t3, letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}><Palette size={12} strokeWidth={1.5} /> סגנון עיצוב</div>
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          {themeOptions.map(([id, label, color, desc]) => (
            <button key={id} onClick={() => { setThemeName(id); try { localStorage.setItem("credit-il-theme", id); } catch {} }} style={{
              flex: 1, padding: "14px 8px", borderRadius: C.cardRadius - 2, cursor: "pointer", fontFamily: "inherit", textAlign: "center",
              border: `2px solid ${themeName === id ? color : C.border}`, background: themeName === id ? `${color}0D` : (C.name === "apple" ? "#FFF" : "rgba(255,255,255,0.50)"),
              transition: "all 0.25s ease",
            }}>
              <div style={{ width: 28, height: 28, borderRadius: 9, background: color, margin: "0 auto 6px", boxShadow: `0 3px 10px ${color}40` }} />
              <div style={{ fontSize: 12, fontWeight: 600, color: C.t1 }}>{label}</div>
              <div style={{ fontSize: 9, color: C.t3, marginTop: 1 }}>{desc}</div>
            </button>
          ))}
        </div>
        <button onClick={onClose} style={{ width: "100%", height: 48, borderRadius: C.btnRadius, background: "rgba(0,0,0,0.04)", border: "none", color: C.t2, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>סגור</button>
      </div>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("splash");
  const [animKey, setAnimKey] = useState(0);
  const [dir, setDir] = useState("forward");
  const [themeName, setThemeName] = useState(() => { try { return localStorage.getItem("credit-il-theme") || "apple"; } catch { return "apple"; } });
  const [showSettings, setShowSettings] = useState(false);
  const [showDesign, setShowDesign] = useState(() => window.location.hash === "#design-system");

  const C = themes[themeName];

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", C.themeColor);
    document.documentElement.style.setProperty("--accent", C.accent);
    document.body.style.background = C.themeColor;
  }, [C]);

  useEffect(() => {
    const handler = () => setShowDesign(window.location.hash === "#design-system");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const nav = (to) => { setDir("forward"); setAnimKey(k => k + 1); setScreen(to); };
  const back = (to) => { setDir("back"); setAnimKey(k => k + 1); setScreen(to); };

  if (showDesign) {
    return (
      <ThemeContext.Provider value={C}>
        <div style={{
          fontFamily: "'Noto Sans Hebrew', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', system-ui, sans-serif",
          minHeight: "100vh", background: C.outerBg, padding: 24, overflowY: "auto", height: "100%",
        }}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24, flexWrap: "wrap" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 18px", borderRadius: 999, ...getGlass(C), fontSize: 12, fontWeight: 600, color: C.t2, textDecoration: "none" }}>← Back to App</a>
            {[["apple", "Apple"], ["minimal", "Minimal"], ["fintech", "Fintech"]].map(([id, label]) => (
              <button key={id} onClick={() => setThemeName(id)} style={{ padding: "8px 18px", borderRadius: 999, border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: themeName === id ? 600 : 400, background: themeName === id ? C.accent : C.glass, color: themeName === id ? "#FFF" : C.t4, backdropFilter: `blur(${C.blurAmount})`, boxShadow: themeName === id ? `0 2px 12px ${C.accentShadow}` : C.shadowResting }}>
                {label}
              </button>
            ))}
          </div>
          <DesignSystem C={C} themes={themes} />
        </div>
      </ThemeContext.Provider>
    );
  }

  const props = { nav, back };
  const SCREENS = {
    splash: <SplashScreen {...props} />, register: <RegisterScreen {...props} />, otp: <OTPScreen {...props} />,
    personal: <PersonalScreen {...props} />, employment: <EmploymentScreen {...props} />, expenses: <ExpensesScreen {...props} />,
    credit_check: <CreditCheckScreen {...props} />, credit_result: <CreditResultScreen {...props} />, offer: <OfferScreen {...props} />,
    docs: <DocsScreen {...props} />, underwriting: <UnderwritingScreen {...props} />, approved: <ApprovedScreen {...props} />,
    contract: <ContractScreen {...props} />, bank_setup: <BankSetupScreen {...props} />, success: <SuccessScreen {...props} />,
    dashboard: <DashboardScreen nav={nav} onOpenSettings={() => setShowSettings(true)} />, payments: <PaymentsScreen {...props} />,
  };

  return (
    <ThemeContext.Provider value={C}>
      <div style={{
        fontFamily: "'Noto Sans Hebrew', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', system-ui, sans-serif",
        height: "100%", width: "100%", maxWidth: 430, margin: "0 auto",
        background: C.phoneBg, direction: "rtl",
        display: "flex", flexDirection: "column",
        transition: "background 0.4s ease",
        position: "relative", overflow: "hidden",
        boxShadow: "0 0 80px rgba(0,0,0,0.3)",
      }}>
        <div key={animKey} style={{
          flex: 1, display: "flex", flexDirection: "column",
          animation: `${dir === "forward" ? "slideInFwd" : "slideInBck"} 0.25s cubic-bezier(0.22,1,0.36,1)`,
        }}>
          {SCREENS[screen]}
        </div>
        {showSettings && <SettingsSheet onClose={() => setShowSettings(false)} themeName={themeName} setThemeName={setThemeName} />}
      </div>
    </ThemeContext.Provider>
  );
}
