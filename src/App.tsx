import { useState } from 'react';
import { Presentation, Users, Network, TrendingUp, Megaphone, Globe, Rocket, Check, Mail, Vote } from 'lucide-react';
import sectionLogos from './imports/image.png';
import bannerImg from './imports/Medellin_Next_2026_JULIO.jpg';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

function hover3d(el: HTMLElement) {
  el.style.borderColor = '#0068FF';
  el.style.transform = 'translate(-4px,-4px)';
  el.style.boxShadow = '8px 8px 0px 0px #0068FF';
  el.style.zIndex = '10';
  el.style.position = 'relative';
}

function unhover3d(el: HTMLElement) {
  el.style.borderColor = '#E6E6E6';
  el.style.transform = '';
  el.style.boxShadow = '';
  el.style.zIndex = '';
}

const phases = [
  {
    phase: "Fase 1",
    title: "Lanzamiento convocatoria",
    date: "2 de julio de 2026",
    status: "completed" as const,
    detail: "Apertura oficial del proceso de postulación. Las startups interesadas pueden registrar su aplicación a partir de esta fecha.",
  },
  {
    phase: "Fase 2",
    title: "Cierre convocatoria",
    date: "31 de julio de 2026",
    dateDetail: "Hasta las 6:00 p.m.",
    status: "completed" as const,
    detail: "Fecha límite para enviar la postulación. No se aceptarán aplicaciones recibidas después de las 6:00 p.m. de este día.",
  },
  {
    phase: "Fase 3",
    title: "Revisión de requisitos",
    date: "Hasta el 4 de agosto",
    dateDetail: "A medida que lleguen las postulaciones",
    status: "completed" as const,
    detail: "El equipo evaluador verifica que cada postulación cumple los requisitos habilitantes del programa antes de avanzar a la siguiente etapa.",
  },
  {
    phase: "Fase 4",
    title: "Entrevista y selección",
    date: "Hasta el 6 de agosto",
    dateDetail: "A medida que lleguen las postulaciones",
    status: "completed" as const,
    detail: "Entrevistas con los equipos fundadores para profundizar en el modelo de negocio, tracción y potencial de escala de cada startup.",
  },
  {
    phase: "Fase 5",
    title: "Notificación de resultados",
    date: "6 de agosto de 2026",
    status: "completed" as const,
    detail: "Las startups seleccionadas reciben la comunicación oficial de su admisión al programa y los próximos pasos para el onboarding.",
  },
  {
    phase: "Fase 6",
    title: "Inicio del acompañamiento",
    date: "10 ago – 11 dic de 2026",
    dateDetail: "5 meses de programa intensivo",
    status: "active" as const,
    detail: "Comienza el programa de aceleración con mentorías especializadas, talleres, conexiones con inversores y acceso a la red del ecosistema Medellín Next.",
  },
];

function Timeline() {
  const defaultActive = phases.findIndex(p => p.status === "active");
  const [selected, setSelected] = useState(defaultActive !== -1 ? defaultActive : 0);
  const [openMobile, setOpenMobile] = useState<number | null>(defaultActive !== -1 ? defaultActive : 0);

  const selectedPhase = phases[selected];

  return (
    <section className="py-9 md:py-20 px-5 md:px-16" style={{ backgroundColor: '#0068FF' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-bold mb-6 md:mb-14"
          style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#ffffff', letterSpacing: '-0.005em' }}
        >
          Cronograma del Programa
        </h2>

        {/* ── Desktop stepper ── */}
        <div className="hidden lg:block">
          {/* Phase nodes row */}
          <div className="relative flex items-start">
            {/* Background connector line */}
            <div className="absolute" style={{ top: '20px', left: '20px', right: '20px', height: '2px', backgroundColor: 'rgba(255,255,255,0.15)', zIndex: 0 }} />
            {/* Filled connector line (completed segments) */}
            <div
              className="absolute transition-all duration-500"
              style={{
                top: '20px',
                left: '20px',
                height: '2px',
                backgroundColor: '#ffffff',
                zIndex: 1,
                width: `calc(${(phases.filter(p => p.status === 'completed').length / (phases.length - 1)) * 100}% - 40px * ${phases.filter(p => p.status === 'completed').length / (phases.length - 1)})`,
                maxWidth: 'calc(100% - 40px)',
              }}
            />

            {phases.map((p, i) => {
              const isSelected = selected === i;
              const isCompleted = p.status === 'completed';
              const isActive = p.status === 'active';

              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className="relative flex-1 flex flex-col items-center group"
                  style={{ zIndex: 2, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  {/* Node */}
                  <div
                    className="flex items-center justify-center font-bold transition-all duration-200"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: isCompleted ? 'none' : isActive ? 'none' : '2px solid rgba(255,255,255,0.3)',
                      backgroundColor: isCompleted ? '#ffffff' : isActive ? '#C0D400' : 'rgba(0,104,255,0.5)',
                      color: isCompleted ? '#0068FF' : isActive ? '#111111' : 'rgba(255,255,255,0.4)',
                      fontSize: '14px',
                      boxShadow: isActive ? '0 0 0 6px rgba(192,212,0,0.2)' : isSelected && !isActive && !isCompleted ? '0 0 0 4px rgba(255,255,255,0.15)' : 'none',
                      transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                    }}
                  >
                    {isCompleted ? <Check size={16} strokeWidth={2.5} /> : i + 1}
                  </div>

                  {/* Label */}
                  <div className="mt-3 text-center px-1" style={{ maxWidth: '120px' }}>
                    <div
                      className="font-bold uppercase mb-1"
                      style={{ fontSize: '9px', letterSpacing: '0.1em', color: isActive ? '#C0D400' : isCompleted ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)' }}
                    >
                      {p.phase}
                    </div>
                    <div
                      className="font-semibold leading-tight"
                      style={{ fontSize: '12px', color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.55)', fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif' " }}
                    >
                      {p.title}
                    </div>
                  </div>

                  {/* Active indicator arrow */}
                  {isSelected && (
                    <div
                      className="mt-4"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '8px solid rgba(255,255,255,0.15)',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Expanded detail panel */}
          <div
            className="mt-2 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '28px 32px',
            }}
          >
            <div className="flex items-start gap-8">
              <div className="shrink-0">
                <span
                  className="font-bold uppercase inline-block px-3 py-1.5 rounded-sm"
                  style={{ backgroundColor: '#C0D400', color: '#111111', fontSize: '10px', letterSpacing: '0.1em' }}
                >
                  {selectedPhase.phase}
                </span>
                {selectedPhase.status === 'active' && (
                  <span
                    className="ml-2 font-bold uppercase inline-block px-2 py-1 rounded-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', fontSize: '9px', letterSpacing: '0.08em' }}
                  >
                    En curso
                  </span>
                )}
                {selectedPhase.status === 'completed' && (
                  <span
                    className="ml-2 font-bold uppercase inline-block px-2 py-1 rounded-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '9px', letterSpacing: '0.08em' }}
                  >
                    Completada
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '22px', color: '#ffffff', lineHeight: '1.2' }}
                >
                  {selectedPhase.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', marginBottom: '6px' }}>
                  {selectedPhase.date}{selectedPhase.dateDetail ? ` · ${selectedPhase.dateDetail}` : ''}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.6', maxWidth: '640px' }}>
                  {selectedPhase.detail}
                </p>
              </div>
              {/* Navigation arrows */}
              <div className="shrink-0 flex gap-2 mt-1">
                <button
                  onClick={() => setSelected(s => Math.max(0, s - 1))}
                  disabled={selected === 0}
                  style={{
                    width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.2)', background: 'none', cursor: selected === 0 ? 'not-allowed' : 'pointer',
                    color: selected === 0 ? 'rgba(255,255,255,0.2)' : '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  ←
                </button>
                <button
                  onClick={() => setSelected(s => Math.min(phases.length - 1, s + 1))}
                  disabled={selected === phases.length - 1}
                  style={{
                    width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.2)', background: 'none', cursor: selected === phases.length - 1 ? 'not-allowed' : 'pointer',
                    color: selected === phases.length - 1 ? 'rgba(255,255,255,0.2)' : '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile accordion ── */}
        <div className="lg:hidden flex flex-col">
          {phases.map((p, i) => {
            const isOpen = openMobile === i;
            const isCompleted = p.status === 'completed';
            const isActive = p.status === 'active';

            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <button
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  className="w-full flex items-center gap-3 py-3 text-left"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {/* Node */}
                  <div
                    className="flex items-center justify-center font-bold shrink-0"
                    style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      backgroundColor: isCompleted ? '#ffffff' : isActive ? '#C0D400' : 'rgba(255,255,255,0.1)',
                      color: isCompleted ? '#0068FF' : isActive ? '#111111' : 'rgba(255,255,255,0.4)',
                      fontSize: '13px',
                      boxShadow: isActive ? '0 0 0 5px rgba(192,212,0,0.2)' : 'none',
                    }}
                  >
                    {isCompleted ? <Check size={15} strokeWidth={2.5} /> : i + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.1em', color: isActive ? '#C0D400' : 'rgba(255,255,255,0.55)' }}>
                        {p.phase}
                      </span>
                      {isActive && (
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C0D400', display: 'inline-block' }} />
                      )}
                    </div>
                    <span className="font-semibold" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '15px', color: '#ffffff' }}>
                      {p.title}
                    </span>
                  </div>

                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-4 pl-11">
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', marginBottom: '6px' }}>
                      {p.date}{p.dateDetail ? ` · ${p.dateDetail}` : ''}
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.6' }}>
                      {p.detail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const votingCandidates = [
  { name: "Startup candidata 01", logo: "01" },
  { name: "Startup candidata 02", logo: "02" },
  { name: "Startup candidata 03", logo: "03" },
  { name: "Startup candidata 04", logo: "04" },
  { name: "Startup candidata 05", logo: "05" },
  { name: "Startup candidata 06", logo: "06" },
  { name: "Startup candidata 07", logo: "07" },
  { name: "Startup candidata 08", logo: "08" },
  { name: "Startup candidata 09", logo: "09" },
  { name: "Startup candidata 10", logo: "10" },
];

const voterStorageKey = "medellin-next-2026-voters";

function VotingSection() {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [voteError, setVoteError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVote = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedCandidate) {
      return;
    }

    setIsSubmitting(true);
    setVoteError("");

    const normalizedEmail = email.trim().toLowerCase();
    const encodedEmail = new TextEncoder().encode(normalizedEmail);
    const emailDigest = await crypto.subtle.digest("SHA-256", encodedEmail);
    const emailHash = Array.from(new Uint8Array(emailDigest), byte => byte.toString(16).padStart(2, "0")).join("");

    let registeredVoters: string[] = [];

    try {
      const storedVoters = JSON.parse(localStorage.getItem(voterStorageKey) ?? "[]");
      registeredVoters = Array.isArray(storedVoters) ? storedVoters : [];
    } catch {
      registeredVoters = [];
    }

    if (registeredVoters.includes(emailHash)) {
      setVoteError("Este correo ya registró un voto y no puede votar nuevamente.");
      setIsSubmitting(false);
      return;
    }

    localStorage.setItem(voterStorageKey, JSON.stringify([...registeredVoters, emailHash]));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="px-5 py-7 md:px-16 md:py-10" style={{ backgroundColor: "#0068FF" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 grid gap-2 lg:mb-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="flex items-center gap-3 lg:order-2">
            <span className="flex h-9 w-9 items-center justify-center md:h-10 md:w-10" style={{ backgroundColor: "#C0D400", color: "#111111" }}>
              <Vote aria-hidden="true" className="h-5 w-5" />
            </span>
            <p className="font-bold uppercase" style={{ color: "#C0D400", fontSize: "12px", letterSpacing: "0.16em" }}>
              Votaciones abiertas
            </p>
          </div>
          <h2
            className="font-bold tracking-tight text-left lg:order-1 lg:justify-self-start"
            style={{ color: "#ffffff", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Elige a los nuevos embajadores de Medellín Next
          </h2>
        </div>

        <form onSubmit={handleVote} className="bg-white p-3 md:p-5" style={{ border: "1px solid #111111", boxShadow: "8px 8px 0 #C0D400" }}>
          {submitted ? (
            <div className="flex min-h-36 items-center justify-center text-center" role="status" aria-live="polite">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#C0D400", color: "#111111" }}>
                  <Check aria-hidden="true" className="h-6 w-6" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-bold" style={{ color: "#111111", fontSize: "24px", lineHeight: 1.15 }}>
                    Muchas gracias
                  </h3>
                  <p className="mt-2 max-w-md" style={{ color: "#333333", fontSize: "15px", lineHeight: 1.45 }}>
                    Tu voto por {selectedCandidate} ha sido registrado. Este correo no podrá volver a votar.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <fieldset>
                <legend className="mb-3 font-bold" style={{ color: "#111111", fontSize: "16px" }}>
                  1. Selecciona tu startup favorita
                </legend>
                <div className="grid grid-cols-2 gap-1.5 md:grid-cols-5 md:gap-2">
                  {votingCandidates.map((candidate) => {
                    const isSelected = selectedCandidate === candidate.name;

                    return (
                      <label
                        key={candidate.name}
                        className="flex min-h-12 cursor-pointer items-center gap-1.5 p-1.5 transition-all md:min-h-14 md:gap-2 md:p-2"
                        style={{
                          border: isSelected ? "2px solid #0068FF" : "1px solid #E6E6E6",
                          backgroundColor: isSelected ? "#F5F6F7" : "#ffffff",
                          color: "#111111",
                        }}
                      >
                        <input
                          type="radio"
                          name="candidate"
                          value={candidate.name}
                          checked={isSelected}
                          onChange={() => setSelectedCandidate(candidate.name)}
                          className="h-4 w-4 shrink-0 accent-[#0068FF]"
                          required
                        />
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center font-bold md:h-9 md:w-9"
                          style={{
                            backgroundColor: isSelected ? "#0068FF" : "#F5F6F7",
                            color: isSelected ? "#ffffff" : "#0068FF",
                            border: isSelected ? "1px solid #0068FF" : "1px solid #E6E6E6",
                            fontSize: "12px",
                          }}
                        >
                          {candidate.logo}
                        </span>
                        <span className="font-semibold" style={{ fontSize: "14px", lineHeight: 1.15 }}>
                          {candidate.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <label className="block" htmlFor="voter-email">
                  <span className="mb-2 block font-bold" style={{ color: "#111111", fontSize: "16px" }}>
                    2. Ingresa tu correo
                  </span>
                  <span className="relative block">
                    <Mail aria-hidden="true" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: "#0068FF" }} />
                    <input
                      id="voter-email"
                      type="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setVoteError("");
                      }}
                      placeholder="tu@correo.com"
                      autoComplete="email"
                      required
                      className="min-h-12 w-full px-4 pl-12 outline-none focus:ring-2 focus:ring-[#0068FF]"
                      style={{ border: "1px solid #111111", color: "#111111", fontSize: "16px" }}
                    />
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-12 px-7 py-3 font-bold transition-colors"
                  style={{ backgroundColor: "#0068FF", color: "#ffffff", border: "2px solid #0068FF", opacity: isSubmitting ? 0.65 : 1 }}
                >
                  {isSubmitting ? "Registrando..." : "Registrar mi voto"}
                </button>
              </div>
              {voteError && (
                <p className="mt-3 font-semibold" role="alert" style={{ color: "#B42318", fontSize: "14px" }}>
                  {voteError}
                </p>
              )}
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: '#111111' }}>

      {/* 1. Hero Banner */}
      <section className="relative w-full min-h-[320px] md:h-[60vh] md:min-h-[480px] flex items-center overflow-hidden bg-[#111111]">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />
          <img 
            src={bannerImg} 
            alt="Medellín Next 2026 Banner Principal" 
            className="w-full h-full object-cover object-center block"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-16 text-left">
          <p
            className="font-bold uppercase mb-4 drop-shadow-md"
            style={{ color: 'rgba(255,255,255,0.9)', letterSpacing: '0.15em', fontSize: '11px' }}
          >
            Programa de aceleración de startups · Medellín
          </p>
          <h1
            className="font-bold leading-none drop-shadow-xl"
            style={{
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 'clamp(2.15rem, 8vw, 7rem)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
            }}
          >
            Medellín<br />
            <span style={{ color: '#0068FF' }}>Next</span>
          </h1>
        </div>
      </section>

      <VotingSection />

      {/* 2. Convocatoria */}
      <section className="py-10 md:py-24 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-7 lg:gap-16 items-start">
          <div>
            <h2
              className="font-bold mb-4 md:mb-8 tracking-tight"
              style={{
                fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                color: '#111111',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Estamos buscando la próxima generación de emprendedores de Medellín
            </h2>

            <div className="space-y-3 mb-6 md:space-y-4 md:mb-8" style={{ fontSize: '16px', lineHeight: '1.5', color: '#333333' }}>
              <p className="font-semibold" style={{ color: '#111111' }}>
                Medellín Next: donde las ondas se conectan y multiplican el futuro. Cuando las startups se encuentran, el crecimiento se multiplica.
              </p>
              <p>
                Las startups son centros de energía que vibran solas pero que al conectar entre sí y con el ecosistema de ciencia, tecnología e innovación producen un efecto multiplicador que genera dinamismo, colaboración y crecimiento en la ciudad.
              </p>
              <div className="hidden space-y-4 md:block">
                <p>
                  Por ello, hemos lanzado en 2026 la tercera cohorte de Medellín Next, el programa que impulsa startups de base tecnológica hacia escenarios reales de crecimiento, escalamiento e internacionalización.
                </p>
                <p>
                  Aquí seleccionaremos 50 startups de alto potencial para acompañarlas en un proceso intensivo de fortalecimiento y aceleración, con una oferta diferencial que combina diagnósticos, mentorías, conexiones y eventos.
                </p>
                <p>
                  Al finalizar el año conoceremos el top 5 de startups embajadoras de la innovación de Medellín, quienes le mostrarán al mundo la fuerza transformadora que tienen nuestros emprendedores.
                </p>
              </div>
              <details className="group md:hidden">
                <summary className="cursor-pointer font-bold text-[#0068FF] marker:hidden">
                  Conoce más del programa
                  <span className="ml-2 inline-block transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <div className="mt-3 space-y-3">
                  <p>
                    En 2026 lanzamos la tercera cohorte para impulsar startups de base tecnológica hacia escenarios de crecimiento, escalamiento e internacionalización.
                  </p>
                  <p>
                    Seleccionaremos 50 startups para un proceso intensivo con diagnósticos, mentorías, conexiones y eventos. Al finalizar el año conoceremos las cinco embajadoras de la innovación de Medellín.
                  </p>
                </div>
              </details>

              <div
                className="p-4 md:p-5 mt-6"
                style={{ borderLeft: '4px solid #0068FF', backgroundColor: '#F5F6F7', color: '#111111' }}
              >
                <p className="font-semibold" style={{ fontSize: '15px' }}>
                  Convocatoria abierta hasta el 31 de julio de 2026 a las 6:00 p.m.
                </p>
              </div>
            </div>
          </div>

          {/* Right column — stat cards and CTA buttons */}
          <div className="flex flex-col gap-5 md:gap-8 justify-start mt-1 lg:mt-0 pt-2 w-full">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:flex lg:flex-col">
              {[
                { num: '50', shortLabel: 'Seleccionadas', label: 'startups seleccionadas en 2026 - Semestre II' },
                { num: 'Top 5', shortLabel: 'Embajadoras', label: 'startups embajadoras de Medellín en el 2025' },
                { num: '74', shortLabel: 'Acompañadas', label: 'startups acompañadas desde el 2025' },
              ].map((s) => (
                <div 
                  key={s.num} 
                  className="flex flex-col justify-center p-3 md:p-6 flex-1 transition-all duration-200 bg-white" 
                  style={{ border: '1px solid #E6E6E6', borderLeft: '4px solid #C0D400', position: 'relative' }}
                  onMouseEnter={e => hover3d(e.currentTarget as HTMLDivElement)}
                  onMouseLeave={e => unhover3d(e.currentTarget as HTMLDivElement)}
                >
                  <p style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 'clamp(1.5rem, 7vw, 3rem)', fontWeight: 700, color: '#0068FF', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    {s.num}
                  </p>
                  <p className="text-sm" style={{ color: '#111111', fontWeight: 600, lineHeight: 1.25, textTransform: 'uppercase', letterSpacing: '0.03em', maxWidth: '200px' }}>
                    <span className="md:hidden">{s.shortLabel}</span>
                    <span className="hidden md:inline">{s.label}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="https://rutanmedellin.org/hubfs/T%C3%A9rminos%20de%20participacion%20Medell%C3%ADn%20Next%202026%20II_.pdf?hsLang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 md:px-7 py-2.5 md:py-4 font-bold transition-colors w-full sm:w-auto flex-1 text-center justify-center rounded-md"
                style={{ background: '#0068FF', color: '#ffffff', border: '2px solid #0068FF', fontSize: '14px', minHeight: '44px' }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLAnchorElement; b.style.background = '#0055d4'; b.style.borderColor = '#0055d4'; }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLAnchorElement; b.style.background = '#0068FF'; b.style.borderColor = '#0068FF'; }}
              >
                Términos de referencia
              </a>
              <a
                href="https://rutanmedellin.org/hubfs/ADENDATERMINOSDE%20PARTICIPACIONMEDELLINNEXT.pdf?hsLang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 md:px-7 py-2.5 md:py-4 font-bold transition-colors w-full sm:w-auto flex-1 text-center justify-center rounded-md"
                style={{ background: 'transparent', color: '#111111', border: '2px solid #111111', fontSize: '14px', minHeight: '44px' }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLAnchorElement; b.style.background = '#111111'; b.style.color = '#ffffff'; }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLAnchorElement; b.style.background = 'transparent'; b.style.color = '#111111'; }}
              >
                Adenda
              </a>
              <a
                href="https://3a3g2.share.hsforms.com/2wcIB3KKcQMOwKt8jnBZFkg?__hstc=264965520.3faa07e123efb0046276d1032cd5e04d.1791490005172.1792160489055.1792178183265.13&__hssc=264965520.14.1792178183265&__hsfp=96b012d9801d9a46d1036cbc27889edb"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex items-center px-5 md:px-7 py-2.5 md:py-4 font-bold transition-colors w-full sm:w-auto flex-1 text-center justify-center rounded-md"
                style={{ background: '#C0D400', color: '#111111', border: '2px solid #C0D400', fontSize: '14px', minHeight: '44px' }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLAnchorElement; b.style.background = '#a8ba00'; b.style.borderColor = '#a8ba00'; }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLAnchorElement; b.style.background = '#C0D400'; b.style.borderColor = '#C0D400'; }}
              >
                Postular mi startup
              </a>
            </div>

            <div className="mt-2 pt-4 md:mt-8" style={{ borderTop: '1px solid #E6E6E6' }}>
              <img src={sectionLogos} alt="Logos Medellín Next" className="max-h-16 md:max-h-28 w-full object-contain object-left" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Carrusel de 74 startups — cohortes 1 y 2 */}
      <section className="py-8 md:py-20 overflow-hidden" style={{ backgroundColor: '#0068FF' }}>
        <h2 className="text-center font-extrabold uppercase mb-5 md:mb-12 px-5" style={{ color: '#ffffff', fontSize: 'clamp(1rem, 3vw, 1.5rem)', letterSpacing: '0.1em' }}>
          ESTAS SON LAS 74 STARTUPS ACOMPAÑADAS EN LA COHORTE 1 y 2:
        </h2>

        <div className="flex overflow-hidden w-full mb-3 md:mb-6">
          <div className="animate-marquee flex gap-3 md:gap-10 items-center px-2 md:px-5">
            {[...Array(24), ...Array(24)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-28 md:w-36 h-10 md:h-12 flex items-center justify-center transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', opacity: 0.7, fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.opacity = '1'; el.style.borderColor = '#C0D400'; el.style.color = '#C0D400'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.opacity = '0.7'; el.style.borderColor = 'rgba(255,255,255,0.3)'; el.style.color = '#ffffff'; }}
              >
                STARTUP {i % 24 + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden w-full md:mb-6">
          <div className="animate-marquee-reverse flex gap-3 md:gap-10 items-center px-2 md:px-5">
            {[...Array(25), ...Array(25)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-28 md:w-36 h-10 md:h-12 flex items-center justify-center transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', opacity: 0.7, fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.opacity = '1'; el.style.borderColor = '#C0D400'; el.style.color = '#C0D400'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.opacity = '0.7'; el.style.borderColor = 'rgba(255,255,255,0.3)'; el.style.color = '#ffffff'; }}
              >
                STARTUP {i % 25 + 25}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden overflow-hidden w-full md:flex">
          <div className="animate-marquee flex gap-6 md:gap-10 items-center px-3 md:px-5">
            {[...Array(25), ...Array(25)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-28 md:w-36 h-10 md:h-12 flex items-center justify-center transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', opacity: 0.7, fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.opacity = '1'; el.style.borderColor = '#C0D400'; el.style.color = '#C0D400'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.opacity = '0.7'; el.style.borderColor = 'rgba(255,255,255,0.3)'; el.style.color = '#ffffff'; }}
              >
                STARTUP {i % 25 + 50}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Beneficios — gap grid, no negative margins, z-index on hover */}
      <section className="py-10 md:py-24 px-5 md:px-16 max-w-7xl mx-auto">
        <h2
          className="font-bold mb-6 md:mb-16 tracking-tight"
          style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#111111', lineHeight: 1.15, letterSpacing: '-0.005em' }}
        >
          Beneficios
        </h2>

        {/* Bento grid layout for 7 cards to avoid empty spaces */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 grid-flow-dense">
          {[
            { desc: "Formación ajustada al nivel de madurez de la startup.", icon: <Presentation className="w-8 h-8" />, spanClass: "col-span-1" },
            { desc: "Acompañamiento de alto nivel con diagnósticos, mentorías y metodologías efectivas para crecer y escalar.", icon: <Users className="w-8 h-8" />, spanClass: "col-span-2" },
            { desc: "Conexión con redes, mentores, corporativos e inversionistas nacionales e internacionales.", icon: <Network className="w-8 h-8" />, spanClass: "col-span-1" },
            { desc: "Fortalecimiento de capacidades para competir y prepararse para levantar inversión.", icon: <svg aria-hidden="true" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>, spanClass: "col-span-1" },
            { desc: "Visibilidad y posicionamiento en eventos, ferias y el ecosistema global.", icon: <Megaphone className="w-8 h-8" />, spanClass: "col-span-1" },
            { desc: "Acceso a mercados nacionales e internacionales, con rutas de entrada a hubs de innovación.", icon: <Globe className="w-8 h-8" />, spanClass: "col-span-1" },
            { desc: "Participación en bootcamps y un Demo Day.", icon: <Rocket className="w-8 h-8" />, spanClass: "col-span-1" },
          ].map((b, i) => (
            <div
              key={i}
              className={`p-4 md:p-8 flex flex-col gap-3 md:gap-4 transition-all duration-200 bg-white ${b.spanClass}`}
              style={{ border: '1px solid #E6E6E6', position: 'relative' }}
              onMouseEnter={e => hover3d(e.currentTarget as HTMLDivElement)}
              onMouseLeave={e => unhover3d(e.currentTarget as HTMLDivElement)}
            >
              <span style={{ color: '#0068FF' }}>{b.icon}</span>
              <p style={{ fontSize: '15px', color: '#333333', lineHeight: '1.5' }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Cronograma interactivo */}
      <Timeline />

      {/* 7. Top 5 startups */}
      <section className="py-10 md:py-24 px-5 md:px-16" style={{ backgroundColor: '#F5F6F7' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold mb-6 md:mb-16 tracking-tight"
            style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 'clamp(1.25rem, 3vw, 2.2rem)', color: '#111111', lineHeight: 1.2, letterSpacing: '-0.005em', maxWidth: '780px' }}
          >
            En 2025 Medellín votó y eligió el top 5 de startups que representan a la ciudad:
          </h2>

          {/* grid layout instead of flex-wrap: cleaner control, no calc() bugs */}
          {/* Row 1: 3 cards. Row 2: 2 cards centered via col-start offset */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6 lg:gap-8">
            {[
              { id: 1, name: "ERCO Energy", founder: "Juan Esteban Hincapié Rivera", desc: "Impulsan la transición energética en América Latina con soluciones que integran energía solar, almacenamiento y movilidad eléctrica. Ayudan a empresas, hogares y territorios a producir y gestionar energía limpia de forma eficiente. Combinan tecnología, acompañamiento integral e innovación para convertir la sostenibilidad en una ventaja competitiva." },
              { id: 2, name: "B2Chat", founder: "Pamela Richter", desc: "Plataforma SaaS para ventas y atención al cliente por mensajería instantánea. Permite escalar soporte, marketing y ventas desde un solo inbox multicanal. Integra IA, chatbots, analítica e integraciones con Shopify, HubSpot y CRMs." },
              { id: 3, name: "Somos Internet", founder: "Forrest Traynham Heat", desc: "Operan una red activa de fibra óptica desde el data center hasta el hogar. Fabrican sus propios equipos de red y desarrollan el software que los gestiona. Ofrecen conectividad robusta, experiencia superior y operación eficiente." },
              { id: 4, name: "Netux", founder: "Sergio Albeiro Marín Correa", desc: "Desarrollan soluciones basadas en IoT, electrónica y software para el sector salud. Monitorean activos, procesos y pacientes en tiempo real. Mejoran la eficiencia, seguridad y sostenibilidad de las operaciones médicas." },
              { id: 5, name: "Azimut Energía", founder: "Santiago Uribe", desc: "Aceleran la transición energética desde el ahorro y la eficiencia. Usan IoT, EMS y analítica de datos para optimizar el consumo energético. Transforman la energía en rentabilidad y sostenibilidad." },
            ].map((startup, idx) => (
              <div
                key={startup.id}
                className={[
                  "bg-white flex w-[82vw] max-w-[320px] shrink-0 snap-start flex-col transition-all duration-200 sm:w-auto sm:max-w-none",
                  // Desktop (6-col grid): first 3 cards span 2 cols each; last 2 are centered
                  idx < 3 ? "lg:col-span-2" : idx === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2 lg:col-start-4",
                  // Tablet (2-col): all span 1
                  "sm:col-span-1",
                ].join(" ")}
                style={{ border: '1px solid #E6E6E6', position: 'relative' }}
                onMouseEnter={e => hover3d(e.currentTarget as HTMLDivElement)}
                onMouseLeave={e => unhover3d(e.currentTarget as HTMLDivElement)}
              >
                <div className="px-4 md:px-8 py-4 md:py-6 flex items-center gap-3 md:gap-4" style={{ borderBottom: '1px solid #E6E6E6' }}>
                  {/* Logo placeholder */}
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{ width: '52px', height: '52px', backgroundColor: '#F5F6F7', border: '1px solid #E6E6E6' }}
                  >
                    <span style={{ fontSize: '9px', color: '#AAAAAA', fontWeight: 600, textAlign: 'center', lineHeight: 1.2 }}>LOGO</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold uppercase mb-1" style={{ color: '#0068FF', fontSize: '10px', letterSpacing: '0.18em' }}>
                      Top {startup.id}
                    </p>
                    <h3 className="font-bold" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '20px', color: '#111111', lineHeight: 1.2 }}>
                      {startup.name}
                    </h3>
                    <p style={{ color: '#0068FF', fontSize: '13px', fontWeight: 600, marginTop: '2px' }}>
                      {startup.founder}
                    </p>
                  </div>
                </div>

                <div className="px-4 md:px-8 py-4 md:py-6 flex-grow">
                  <p style={{ fontSize: '14px', color: '#333333', lineHeight: '1.5' }}>{startup.desc}</p>
                </div>

                <div className="px-4 md:px-8 py-2 md:py-5 flex items-center gap-2" style={{ borderTop: '1px solid #E6E6E6' }}>
                  <a href="#" title="Web"
                    style={{ color: '#555555', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#0068FF'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#555555'}>
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" title="LinkedIn"
                    style={{ color: '#555555', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#0068FF'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#555555'}>
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
