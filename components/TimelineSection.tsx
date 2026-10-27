'use client'
import Reveal from './Reveal'

const EVENTS = [
  { tag: 'The Beginning', icon: '🌧️', title: 'Born in Seattle, Washington', desc: 'Jaxson enters the world in Seattle, WA — a city known for its rain, its music scene, and its complex streets.', upcoming: false },
  { tag: 'Age 9', icon: '🌲', title: 'Moved to Oregon', desc: 'The family relocates to Oregon. A new state, new surroundings — but the weight of home stays heavy.', upcoming: false },
  { tag: 'Age 10', icon: '💔', title: 'Lost His Mother', desc: 'At 10 years old, Jaxson loses his mother. The wound that never fully closes — the loss that lives in every bar he writes.', upcoming: false },
  { tag: 'Age 14', icon: '💊', title: 'Addiction & Gang Affiliation', desc: 'By 14, Jaxson is deep in opioid addiction and borderline alcoholism, caught in gang life with no clear exit in sight.', upcoming: false },
  { tag: 'Age 17', icon: '🚪', title: 'Chose a Different Ending', desc: 'At 17, he walks away — from the drugs, the affiliation, the destruction. He finds music waiting where everything else had failed.', upcoming: false },
  { tag: 'The Present', icon: '🎵', title: 'Music Over Everything', desc: 'Love was a big topic until music took its place. Now music is the legacy — the coping, the healing, the mission. Five tracks and counting.', upcoming: true },
]

export default function TimelineSection() {
  return (
    <section id="timeline" style={{ padding: '100px 0', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Reveal direction="up">
            <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 12 }}>🗺️ The Journey</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1, marginBottom: 10 }}>
              From Darkness to Sound
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              A life that could have gone a dozen different ways — and the one where music won.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div className="tl-line" style={{
            position: 'absolute', top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(to bottom, rgba(139,92,246,0.6), rgba(236,72,153,0.3), rgba(139,92,246,0.05))',
          }} />

          {EVENTS.map((e, i) => (
            <Reveal key={e.title} direction="up" delay={i * 0.08}>
              <div className="tl-row" style={{ position: 'relative', display: 'flex', gap: 24, marginBottom: 28 }}>
                {/* Marker */}
                <div style={{ position: 'relative', flexShrink: 0, width: 56, display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 18, fontSize: '1.4rem',
                    background: e.upcoming
                      ? 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(236,72,153,0.15))'
                      : 'rgba(139,92,246,0.06)',
                    border: `1px solid ${e.upcoming ? 'rgba(139,92,246,0.5)' : 'rgba(139,92,246,0.15)'}`,
                    backdropFilter: 'blur(14px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: e.upcoming ? '0 0 26px rgba(139,92,246,0.3)' : 'none',
                    zIndex: 1,
                  }}>{e.icon}</div>
                </div>

                {/* Content */}
                <div className="glass" style={{ flex: 1, borderRadius: 20, padding: '20px 24px' }}>
                  <span style={{
                    display: 'inline-block', fontSize: '0.62rem', fontWeight: 800, fontFamily: "'Syne',sans-serif",
                    textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10,
                    color: e.upcoming ? '#fff' : 'var(--accent-2)',
                    background: e.upcoming
                      ? 'linear-gradient(135deg, #8B5CF6, #EC4899)'
                      : 'rgba(139,92,246,0.12)',
                    border: e.upcoming ? 'none' : '1px solid rgba(139,92,246,0.25)',
                    padding: '3px 10px', borderRadius: 999,
                  }}>{e.tag}</span>
                  <h3 className="font-syne" style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 6 }}>{e.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .tl-line { left: 27px; }
        @media(max-width:600px){
          .tl-row { gap: 16px; }
        }
      `}</style>
    </section>
  )
}
