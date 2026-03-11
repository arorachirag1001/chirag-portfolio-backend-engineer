import React, { Suspense, useMemo, useRef } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Cloud,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Radar,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

const experience = [
  {
    company: "PayPal",
    role: "Senior Software Engineer",
    location: "San Jose, CA",
    period: "Jan 2025 – Present",
    metric: "1M+ users annually",
    color: "cyan",
    points: [
      "Designed and developed onboarding APIs for signup, checkpoint, submit, and retrieval flows in Java and Spring Boot.",
      "Enabled seamless onboarding for 1M+ users annually and reduced user drop-off by 20%.",
      "Engineered modular KYC and legal compliance flows integrated with Wallet, Identity, Risk, Compliance, Contact Verification, and Credentials services.",
      "Owned API specifications and documentation, reducing integration errors by 30% and accelerating partner adoption.",
      "Built unit, functional, and integration test automation with 95–100% code coverage and reduced manual QA cycles by 25%.",
    ],
  },
  {
    company: "Walmart Global Tech",
    role: "Software Engineer (Contract)",
    location: "Sunnyvale, CA",
    period: "Jun 2024 – Jan 2025",
    metric: "25% efficiency gain",
    color: "violet",
    points: [
      "Developed and optimized backend APIs for the Sellers Chargeback feature using Java and Spring.",
      "Improved transaction efficiency by 25% and compliance accuracy by 15%.",
      "Integrated 3+ third-party APIs and services to improve platform extensibility.",
      "Led testing and deployment quality efforts with 98% code coverage.",
      "Used Git and JIRA to streamline release cycles and reduce deployment errors by 20%.",
    ],
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    location: "Noida, India",
    period: "Nov 2016 – Aug 2022",
    metric: "11M+ subscribers",
    color: "gold",
    points: [
      "Engineered scalable microservices using Java, Spring Boot, and Kubernetes supporting 11M+ mobile subscribers.",
      "Delivered 99.9% uptime and improved incident response time by 40%.",
      "Designed and implemented CI/CD frameworks with 95% deployment success.",
      "Integrated Kafka-based messaging and improved message processing speed by 40%.",
      "Resolved 150+ recurring code issues, reducing production defects by 60%.",
    ],
  },
];

const skills = [
  { title: "Backend", icon: Server, items: ["Java", "Spring Boot", "Microservices", "Distributed Systems", "REST APIs", "API Design"] },
  { title: "Cloud", icon: Cloud, items: ["AWS", "Google Cloud", "Kubernetes", "Docker", "CI/CD", "Jenkins"] },
  { title: "Data", icon: Database, items: ["SQL", "MongoDB", "DynamoDB", "PostgreSQL", "Kafka"] },
  { title: "Quality", icon: Workflow, items: ["Rest Assured", "TestNG", "Cucumber", "Automation", "Agile", "Production Support"] },
];

const projects = [
  {
    title: "THU Bridge Mobile Application",
    stack: "iOS · Flask · PostgreSQL",
    description: "Healthcare communication app bridging language gaps between patients, interpreters, and administrators.",
    href: "#",
  },
  {
    title: "Airport Management System",
    stack: "Node.js · React · MongoDB",
    description: "Integrated airport operations system for flight details, baggage workflows, and gate maintenance.",
    href: "https://github.com/gopinathsjsu/team-project-data-structure-deadheads",
  },
  {
    title: "Road Trip Planner",
    stack: "HTML · CSS · JavaScript · REST APIs",
    description: "Travel planner bringing together live events, fuel stations, and attractions in one experience.",
    href: "https://github.com/prajwalnadagouda/Road-Trip-Planner",
  },
];

const metrics = [
  { value: "6+", label: "Years" },
  { value: "1M+", label: "Users" },
  { value: "11M+", label: "Subscribers" },
  { value: "95–100%", label: "Coverage" },
];

const architecture = [
  { title: "Client Apps", icon: Cpu },
  { title: "API Gateway", icon: Radar },
  { title: "Identity / KYC", icon: Server },
  { title: "Core Services", icon: Workflow },
  { title: "Data / Monitoring", icon: Database },
];

function HeroCore() {
  const group = useRef<any>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.4}>
        <RoundedBox args={[2.8, 2.8, 2.8]} radius={0.18} smoothness={4}>
          <meshStandardMaterial color="#111827" metalness={0.7} roughness={0.15} />
        </RoundedBox>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1.15, 0.22, 220, 32]} />
          <meshStandardMaterial color="#4fd1ff" emissive="#143f52" metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.6}>
        <Sphere args={[0.45, 64, 64]} position={[1.85, 1.1, 0.2]}>
          <MeshDistortMaterial color="#a855f7" emissive="#43115d" speed={2.2} distort={0.32} roughness={0.1} />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <Sphere args={[0.28, 64, 64]} position={[-1.9, -1.25, 0.4]}>
          <meshStandardMaterial color="#ffcc66" emissive="#5a3f09" metalness={0.4} roughness={0.25} />
        </Sphere>
      </Float>

      <Text
        position={[0, -2.35, 0]}
        fontSize={0.22}
        color="#dbeafe"
        anchorX="center"
        anchorY="middle"
      >
        BACKEND SYSTEMS
      </Text>
    </group>
  );
}

function ParticleField() {
  const points = useMemo(() => {
    const arr = [] as [number, number, number][];
    for (let i = 0; i < 90; i += 1) {
      arr.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ]);
    }
    return arr;
  }, []);

  return (
    <group>
      {points.map((p, idx) => (
        <Float key={idx} speed={1 + (idx % 5) * 0.15} rotationIntensity={0.3} floatIntensity={0.6}>
          <mesh position={p}>
            <sphereGeometry args={[0.03 + (idx % 4) * 0.01, 16, 16]} />
            <meshStandardMaterial
              color={idx % 3 === 0 ? "#4fd1ff" : idx % 3 === 1 ? "#a855f7" : "#ffcc66"}
              emissive={idx % 3 === 0 ? "#123b4d" : idx % 3 === 1 ? "#401255" : "#4b3206"}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 42 }} gl={{ antialias: true }}>
      <color attach="background" args={["#070914"]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} color="#dbeafe" />
      <pointLight position={[-4, -2, 3]} intensity={2.2} color="#a855f7" />
      <pointLight position={[4, 2, 2]} intensity={1.8} color="#4fd1ff" />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ParticleField />
        <HeroCore />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} enablePan={false} />
    </Canvas>
  );
}

function ArchitectureScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true }}>
      <color attach="background" args={["#0a0d16"]} />
      <ambientLight intensity={1.2} />
      <pointLight position={[5, 4, 3]} intensity={2} color="#4fd1ff" />
      <pointLight position={[-5, -2, 3]} intensity={1.6} color="#a855f7" />
      <Suspense fallback={null}>
        <group>
          {[
            [-2.8, 0, 0, "#4fd1ff", "Client"],
            [-1.4, 0.7, 0, "#a855f7", "Gateway"],
            [0, 0, 0, "#ffcc66", "Identity"],
            [1.4, -0.8, 0, "#4fd1ff", "Services"],
            [2.8, 0.1, 0, "#a855f7", "Data"],
          ].map(([x, y, z, color, label], idx) => (
            <Float key={idx} speed={1.2 + idx * 0.15} rotationIntensity={0.6} floatIntensity={0.8}>
              <group position={[x as number, y as number, z as number]}>
                <Sphere args={[0.42, 48, 48]}>
                  <meshStandardMaterial color={color as string} emissive={color as string} emissiveIntensity={0.25} metalness={0.35} roughness={0.2} />
                </Sphere>
                <Text position={[0, -0.78, 0]} fontSize={0.18} color="#e5eefc" anchorX="center" anchorY="middle">
                  {label as string}
                </Text>
              </group>
            </Float>
          ))}
          {[
            [-2.1, 0.35, 0],
            [-0.7, 0.35, 0],
            [0.7, -0.4, 0],
            [2.1, -0.35, 0],
          ].map((pos, idx) => (
            <mesh key={idx} position={pos as [number, number, number]} rotation={[0, 0, idx < 2 ? 0.46 : -0.4]}>
              <boxGeometry args={[1.3, 0.05, 0.05]} />
              <meshStandardMaterial color="#8aa4c8" emissive="#203047" />
            </mesh>
          ))}
        </group>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.45} enablePan={false} />
    </Canvas>
  );
}

function HoverCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -10, rotateX: 6, rotateY: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="root3d">
      <style>{`
        :root {
          --bg:#05060a; --panel:rgba(255,255,255,.06); --line:rgba(255,255,255,.1);
          --text:rgba(255,255,255,.95); --soft:rgba(255,255,255,.72); --muted:rgba(255,255,255,.48);
          --cyan:#45d3ff; --violet:#9f67ff; --pink:#ff59d1; --gold:#ffcb66;
        }
        *{box-sizing:border-box} html,body,#root{margin:0;min-height:100%;background:#05060a}
        body{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--text);background:
          radial-gradient(circle at 12% 8%, rgba(69,211,255,.15), transparent 22%),
          radial-gradient(circle at 84% 14%, rgba(159,103,255,.16), transparent 22%),
          radial-gradient(circle at 68% 74%, rgba(255,89,209,.10), transparent 18%),
          linear-gradient(180deg,#080915 0%,#05060a 100%)}
        a{text-decoration:none;color:inherit}.root3d{min-height:100vh;overflow-x:hidden}.shell{width:min(1280px,calc(100% - 32px));margin:0 auto}
        .nav{position:sticky;top:0;z-index:60;backdrop-filter:blur(20px);background:rgba(5,6,10,.68);border-bottom:1px solid var(--line)}
        .navin{width:min(1280px,calc(100% - 32px));margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:18px 0}.brand{font-size:12px;letter-spacing:.34em;text-transform:uppercase;color:#fff}.links{display:flex;gap:24px}.links a{font-size:14px;color:rgba(255,255,255,.62)}.links a:hover{color:#fff}
        .hero{padding:28px 0 18px}.heroWrap{position:relative;overflow:hidden;border-radius:42px;border:1px solid var(--line);background:linear-gradient(135deg, rgba(18,26,58,.95) 0%, rgba(12,15,28,.98) 32%, rgba(8,9,13,.99) 100%);box-shadow:0 45px 140px rgba(0,0,0,.62);padding:36px}.heroGrid{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center}.eyebrow{display:inline-flex;gap:10px;align-items:center;padding:10px 16px;border-radius:999px;border:1px solid var(--line);background:rgba(255,255,255,.06);font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.72)}
        .hero h1{margin:22px 0 0;font-size:clamp(60px,8vw,118px);line-height:.88;letter-spacing:-.075em;font-weight:800;background:linear-gradient(180deg,#fff 0%, rgba(255,255,255,.45) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.hero h2{margin:16px 0 0;font-size:22px;font-weight:500;color:rgba(255,255,255,.84)}.hero p{margin:20px 0 0;max-width:700px;font-size:17px;line-height:1.86;color:var(--soft)}
        .actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}.btn{display:inline-flex;align-items:center;gap:10px;padding:14px 20px;border-radius:999px;font-size:14px;font-weight:600;transition:.18s ease}.btn:hover{transform:translateY(-2px)}.solid{background:linear-gradient(135deg,#fff,#bff4ff);color:#000}.ghost{background:rgba(255,255,255,.06);border:1px solid var(--line)}
        .canvasHero{height:500px;border-radius:34px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#070914;box-shadow:inset 0 0 80px rgba(255,255,255,.03)}
        .section{padding:34px 0}.label{font-size:11px;text-transform:uppercase;letter-spacing:.24em;color:var(--muted)}.section h3{margin:10px 0 0;font-size:clamp(30px,4vw,48px);line-height:1;letter-spacing:-.04em}
        .stats,.skills,.projects{display:grid;gap:18px}.stats{grid-template-columns:repeat(4,1fr)}.skills{grid-template-columns:repeat(4,1fr)}.projects{grid-template-columns:repeat(3,1fr)}.panel,.stat,.archBox,.xp,.skill,.proj,.edu,.contact{border:1px solid var(--line);background:rgba(255,255,255,.05);backdrop-filter:blur(18px)}
        .panel{border-radius:32px;padding:28px;font-size:18px;line-height:1.95;color:var(--soft)}.stat{position:relative;overflow:hidden;border-radius:26px;padding:22px}.stat:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at top right, rgba(69,211,255,.12), transparent 28%);pointer-events:none}.stat strong{position:relative;z-index:1;display:block;font-size:32px}.stat span{position:relative;z-index:1;display:block;margin-top:10px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
        .archWrap{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;align-items:stretch}.archCanvas{min-height:380px;border-radius:34px;overflow:hidden;border:1px solid var(--line);background:#0a0d16}.archBox{border-radius:34px;padding:26px}.archList{display:grid;gap:12px;margin-top:18px}.archPill{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid var(--line);color:rgba(255,255,255,.84)}
        .xps{display:grid;gap:18px}.xp{position:relative;overflow:hidden;border-radius:34px;padding:28px;background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.03))}.xp.cyan:before,.xp.violet:before,.xp.gold:before{content:"";position:absolute;inset:0;pointer-events:none}.xp.cyan:before{background:radial-gradient(circle at top right, rgba(69,211,255,.18), transparent 28%)}.xp.violet:before{background:radial-gradient(circle at top right, rgba(159,103,255,.18), transparent 28%)}.xp.gold:before{background:radial-gradient(circle at top right, rgba(255,203,102,.18), transparent 28%)}
        .xtop{position:relative;z-index:1;display:grid;grid-template-columns:1fr auto;gap:18px;align-items:start}.xtitle{font-size:30px;margin:0;letter-spacing:-.03em}.xrole{margin-top:6px;color:rgba(255,255,255,.8);font-size:16px}.meta{display:flex;gap:12px;flex-wrap:wrap;margin-top:12px}.pill{display:inline-flex;gap:8px;align-items:center;padding:10px 14px;border-radius:999px;border:1px solid var(--line);background:rgba(255,255,255,.06);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.72)}.bullets{position:relative;z-index:1;display:grid;gap:12px;margin-top:18px}.b{display:flex;gap:12px;align-items:start;padding:14px 16px;border-radius:20px;background:rgba(0,0,0,.22);border:1px solid var(--line);color:rgba(255,255,255,.84);line-height:1.75}.dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(180deg,var(--cyan),var(--pink));margin-top:10px}
        .skill{border-radius:28px;padding:22px}.skill h4{margin:16px 0 0;font-size:21px}.chips{margin-top:14px;display:flex;flex-wrap:wrap;gap:10px}.tchip{border-radius:999px;padding:10px 14px;font-size:13px;background:rgba(0,0,0,.24);border:1px solid var(--line);color:rgba(255,255,255,.86)}.ibox{width:44px;height:44px;border-radius:16px;display:grid;place-items:center;background:linear-gradient(135deg, rgba(69,211,255,.16), rgba(159,103,255,.12));border:1px solid var(--line)}
        .proj{position:relative;overflow:hidden;border-radius:30px;padding:24px}.proj:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at top right, rgba(255,89,209,.14), transparent 24%);pointer-events:none}.pstack{position:relative;z-index:1;color:var(--muted);text-transform:uppercase;letter-spacing:.18em;font-size:11px}.proj h4{position:relative;z-index:1;margin:14px 0 0;font-size:27px;line-height:1.08;letter-spacing:-.03em}.proj p{position:relative;z-index:1;margin:16px 0 0;line-height:1.8;color:var(--soft)}.plink{position:relative;z-index:1;margin-top:24px;display:inline-flex;gap:10px;align-items:center;color:rgba(255,255,255,.86)}
        .dual{display:grid;grid-template-columns:1fr 1fr;gap:18px}.edu{border-radius:30px;padding:24px}.ehead{display:flex;gap:14px;align-items:center;margin-bottom:18px}.edu h4{margin:0;font-size:26px;letter-spacing:-.03em}.eitem{border:1px solid var(--line);background:rgba(255,255,255,.04);border-radius:22px;padding:18px;margin-top:14px}.eitem strong{display:block;font-size:18px}.eitem span{display:block;margin-top:6px;color:rgba(255,255,255,.8)}.eitem small{display:block;margin-top:8px;color:var(--muted);letter-spacing:.08em;text-transform:uppercase}
        .contact{border-radius:36px;padding:28px;background:radial-gradient(circle at top, rgba(255,255,255,.11), transparent 34%), linear-gradient(135deg, rgba(14,10,30,.98) 0%, rgba(10,10,16,.98) 50%, rgba(9,24,42,.98) 100%);box-shadow:0 32px 100px rgba(0,0,0,.52)}.cgrid{display:grid;grid-template-columns:1fr .95fr;gap:20px}.contact h3{margin:10px 0 0;font-size:clamp(30px,4vw,48px);line-height:1;letter-spacing:-.04em}.contact p{margin-top:18px;color:var(--soft);line-height:1.85;max-width:720px}.clinks{display:grid;gap:14px}.cl{display:flex;justify-content:space-between;align-items:center;gap:14px;border-radius:22px;border:1px solid var(--line);background:rgba(255,255,255,.05);padding:16px 18px}.left{display:flex;align-items:center;gap:14px}.cmeta small{display:block;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}.cmeta span{display:block;margin-top:6px;color:rgba(255,255,255,.88)}.foot{padding:24px 0 50px;color:var(--muted);font-size:13px}
        @media (max-width:1120px){.heroGrid,.archWrap,.cgrid,.dual{grid-template-columns:1fr}.stats,.skills{grid-template-columns:repeat(2,1fr)}.projects{grid-template-columns:1fr 1fr}}
        @media (max-width:760px){.shell,.navin{width:min(100% - 24px,1280px)}.links{display:none}.heroWrap{padding:22px}.canvasHero,.archCanvas{min-height:320px}.stats,.skills,.projects{grid-template-columns:1fr}.xtop{grid-template-columns:1fr}}
      `}</style>

      <header className="nav"><div className="navin"><div className="brand">Chirag Arora</div><nav className="links"><a href="#summary">Summary</a><a href="#architecture">Architecture</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a></nav></div></header>

      <main className="shell">
        <section className="hero">
          <motion.div className="heroWrap" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="heroGrid">
              <div>
                <div className="eyebrow"><Sparkles size={14} /> Real 3D Portfolio</div>
                <h1>Chirag Arora</h1>
                <h2>Senior Backend Engineer · Distributed Systems · Scalable APIs</h2>
                <p>Backend engineer with 6+ years of experience building secure APIs, distributed systems, CI/CD pipelines, and production-grade backend platforms across PayPal, Walmart Global Tech, and Ericsson.</p>
                <div className="actions">
                  <a href="#experience" className="btn solid">Explore <ArrowRight size={16} /></a>
                  <a href="https://github.com/chirag-arora01" target="_blank" rel="noreferrer" className="btn ghost">GitHub <Github size={16} /></a>
                </div>
              </div>
              <div className="canvasHero"><HeroScene /></div>
            </div>
          </motion.div>
        </section>

        <section className="section" id="summary"><div className="label">Summary</div><h3>Experienced backend engineer with strong systems depth.</h3><div className="panel">Experienced Software Engineer with 6+ years of expertise in backend system design and cloud technologies. Specialized in microservices, system scalability, CI/CD, and secure backend architecture with a strong record of delivering reliable, high-performance systems for global organizations.</div></section>

        <section className="section"><div className="label">Highlights</div><h3>Impact metrics</h3><div className="stats">{metrics.map((m) => <HoverCard key={m.label} className="stat"><strong>{m.value}</strong><span>{m.label}</span></HoverCard>)}</div></section>

        <section className="section" id="architecture"><div className="label">Architecture</div><h3>System flow</h3><div className="archWrap"><div className="archCanvas"><ArchitectureScene /></div><div className="archBox"><div className="panel" style={{ padding: 0, background: 'transparent', border: 'none', backdropFilter: 'none' }}>PayPal, Walmart, and Ericsson work all point to the same core strengths: service orchestration, reliability, testing discipline, cloud delivery, and backend systems that scale cleanly.</div><div className="archList">{architecture.map((n: { title: string; icon: React.ComponentType<{ size?: number }> }) => { const Icon = n.icon; return <HoverCard key={n.title} className="archPill"><Icon size={18} /><span>{n.title}</span></HoverCard>; })}</div></div></div></section>

        <section className="section" id="experience"><div className="label">Experience</div><h3>Professional experience</h3><div className="xps">{experience.map((exp) => <HoverCard key={exp.company} className={`xp ${exp.color}`}><div className="xtop"><div><h4 className="xtitle">{exp.company}</h4><div className="xrole">{exp.role}</div><div className="meta"><span className="pill"><Briefcase size={12} /> {exp.period}</span><span className="pill"><MapPin size={12} /> {exp.location}</span></div></div><div className="pill">{exp.metric}</div></div><div className="bullets">{exp.points.map((p) => <div key={p} className="b"><span className="dot" /><span>{p}</span></div>)}</div></HoverCard>)}</div></section>

        <section className="section" id="skills"><div className="label">Skills</div><h3>Technical stack</h3><div className="skills">{skills.map((s) => { const Icon = s.icon; return <HoverCard key={s.title} className="skill"><div className="ibox"><Icon size={18} /></div><h4>{s.title}</h4><div className="chips">{s.items.map((item) => <span key={item} className="tchip">{item}</span>)}</div></HoverCard>; })}</div></section>

        <section className="section" id="projects"><div className="label">Projects</div><h3>Selected projects</h3><div className="projects">{projects.map((p) => <HoverCard key={p.title} className="proj"><a href={p.href} target={p.href.startsWith('http') ? '_blank' : undefined} rel={p.href.startsWith('http') ? 'noreferrer' : undefined}><div className="pstack">{p.stack}</div><h4>{p.title}</h4><p>{p.description}</p><div className="plink">View Project <ArrowRight size={16} /></div></a></HoverCard>)}</div></section>

        <section className="section" id="education"><div className="label">Education & Awards</div><h3>Academic background and recognition</h3><div className="dual"><div className="edu"><div className="ehead"><div className="ibox"><GraduationCap size={18} /></div><h4>Education</h4></div><div className="eitem"><strong>San Jose State University</strong><span>Master of Science, Software Engineering</span><small>San Jose, CA · 2022 – 2024 · CGPA 3.82 / 4</small></div><div className="eitem"><strong>Amity University</strong><span>Bachelor of Technology, Computer Science</span><small>Noida, India · 2012 – 2016 · CGPA 3.70 / 4</small></div></div><div className="edu"><div className="ehead"><div className="ibox"><Award size={18} /></div><h4>Awards</h4></div><div className="eitem"><strong>Ericsson Ace Award</strong><span>Recognized for exceptional technical competency.</span><small>2021</small></div><div className="eitem"><strong>Customer Excellence Award</strong><span>Awarded for consistently delivering outstanding customer results.</span><small>2018</small></div></div></div></section>

        <section className="section" id="contact"><div className="contact"><div className="cgrid"><div><div className="label">Contact</div><h3>Let’s connect.</h3><p>Senior Backend Engineer focused on scalable systems, secure APIs, automation, and reliable production delivery.</p></div><div className="clinks">{[[Github,'GitHub','github.com/chirag-arora01','https://github.com/chirag-arora01'],[Linkedin,'LinkedIn','linkedin.com/in/chirag-arora-1001','https://www.linkedin.com/in/chirag-arora-1001/'],[Mail,'Email','arorachirag1001@gmail.com','mailto:arorachirag1001@gmail.com'],[Phone,'Phone','+1 (669) 877-4684','tel:+16698774684']].map(([Icon,label,val,href]) => { const Cmp = Icon as React.ComponentType<{ size?: number }>; return <a key={label as string} href={href as string} target={(href as string).startsWith('http') ? '_blank' : undefined} rel={(href as string).startsWith('http') ? 'noreferrer' : undefined} className="cl"><div className="left"><div className="ibox"><Cmp size={18} /></div><div className="cmeta"><small>{label as string}</small><span>{val as string}</span></div></div><ArrowRight size={16} style={{ color:'rgba(255,255,255,.45)' }} /></a>; })}</div></div></div></section>

        <footer className="foot">Chirag Arora · Backend Engineer Portfolio</footer>
      </main>
    </div>
  );
}
