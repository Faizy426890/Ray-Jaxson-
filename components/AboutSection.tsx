'use client'
import Image from 'next/image'
import Reveal from './Reveal'
import { IMG } from './media'

const PROFILE = IMG.hero

const SPOTIFY = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'
const INSTAGRAM = 'https://instagram.com/official.shatterlyfe'
const TIKTOK = 'https://tiktok.com/@shatter_lyfe'
const SOUNDCLOUD = 'https://soundcloud.com/shatterlyfe'

const STATS = [
  { icon: '📍', num: 'Seattle', label: 'Born in Washington' },
  { icon: '🌲', num: 'Oregon', label: 'Home Since Age 9' },
  { icon: '💔', num: 'Age 10', label: 'Lost His Mother' },
  { icon: '💊', num: 'Age 14', label: 'Found in Addiction' },
  { icon: '🎵', num: 'Age 17', label: 'Music Over Drugs' },
  { icon: '🎤', num: 'Melodic', label: 'Rap Genre' },
]

const PLATFORMS = [
  { name: 'Spotify', href: SPOTIFY },
  { name: 'Instagram', href: INSTAGRAM },
  { name: 'TikTok', href: TIKTOK },
  { name: 'SoundCloud', href: SOUNDCLOUD },
]

const CARDS = [
  { icon: '💊', title: 'The Struggle', desc: 'By 14, Jaxson was an opioid addict and borderline alcoholic, caught in gang affiliation and a world that felt like it had no way out.' },
  { icon: '🎵', title: 'The Salvation', desc: 'At 17, he chose music. Not as a career — as a lifeline. Every bar he wrote was a step away from where he had been and toward who he wanted to be.' },
  { icon: '🚀', title: 'The Legacy', desc: 'Love was a big topic until music took over. Now love is a fantasy and music is the legacy — the one thing that saved him when nothing else could.' },
]

export default function AboutSection() {
  return (
    <section id="about" style={{
      padding: '100px 0', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--bg-2) 0%, var(--bg-deep) 60%)',
    }}>
      {/* BG orbs */}
      <div className="orb" style={{
        width: 500, height: 500, top: -80, right: -80,
        background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
      }} />
      <div className="orb" style={{
        width: 300, height: 300, bottom: 0, left: -60,
        background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Main grid */}
        <div className="about-grid">
          {/* Left — text */}
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 16 }}>🎤 The Story</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.8rem)', lineHeight: 1.1, marginBottom: 28 }}>
                From Seattle Streets<br /><span className="gradient-text">To Oregon Stages</span>
              </h2>
            </Reveal>

            <div style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
              {[
                { d: 0.2, text: <>Born <strong style={{color:'#fff'}}>Jaxson</strong>, originally from <strong style={{color:'#fff'}}>Seattle, Washington</strong> — he moved to <strong style={{color:'#fff'}}>Oregon when he was 9</strong> years old, carrying everything a kid that age shouldn't have to carry.</> },
                { d: 0.25, text: <>At <strong style={{color:'var(--accent-pink)'}}>10, he lost his mother</strong> — a loss that cracked the foundation of who he was. By <strong style={{color:'var(--accent-pink)'}}>14, he was deep in opioid addiction</strong> and borderline alcoholism, caught in <strong style={{color:'#fff'}}>gang affiliation and drug abuse</strong> with no clear exit.</> },
                { d: 0.3, text: <>At <strong style={{color:'#fff'}}>17, he chose a different ending</strong>. He walked away from the drugs, the affiliation, and the destruction — and found music waiting where everything else had failed him.</> },
                { d: 0.35, text: <><strong style={{color:'var(--accent-2)'}}>Love was a big topic</strong> at first, woven through his earliest bars. Then music consumed everything. <em style={{color:'var(--accent-2)'}}>Now love is a fantasy and music is the legacy he wants to leave behind.</em></> },
                { d: 0.4, text: <><strong style={{color:'#fff'}}>"Music saved me when I didn't think anything ever would,"</strong> <span style={{color:'var(--text-muted)'}}>he says — and it continues to shape the person he's still becoming.</span></> },
              ].map((item, i) => (
                <Reveal key={i} direction="right" delay={item.d}>
                  <p style={{ marginBottom: 16 }}>{item.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal direction="right" delay={0.45}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
                {PLATFORMS.map(p => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="platform-pill">{p.name}</a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — photo + stats */}
          <div>
            <Reveal direction="left" delay={0.1}>
              <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', aspectRatio: '4/3', border: '1px solid var(--border)', marginBottom: 20 }}>
                <Image src={PROFILE} alt="$hatterLyfé" fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="600px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,8,18,0.85) 0%, rgba(13,11,26,0.5) 45%, rgba(139,92,246,0.3) 100%)' }} />
                <span className="badge badge-south" style={{ position: 'absolute', top: 12, left: 12 }}>Portland Artist</span>
                <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                  background: 'rgba(8,8,18,0.88)', backdropFilter: 'blur(14px)',
                  border: '1px solid var(--border)', borderRadius: 14, padding: '12px 18px', textAlign: 'center',
                }}>
                  <p className="font-syne" style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--accent-2)' }}>$hatterLyfé</p>
                  <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Real Name: Jaxson</p>
                </div>
              </div>
            </Reveal>

            {/* Stats grid */}
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <Reveal key={s.label} direction="up" delay={i * 0.08}>
                  <div className="glass" style={{
                    borderRadius: 16, padding: '16px 12px', textAlign: 'center',
                    transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(139,92,246,0.15)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{s.icon}</div>
                    <div className="font-syne" style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--accent-2)', marginBottom: 2 }}>{s.num}</div>
                    <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Quote banner */}
        <Reveal direction="up" delay={0.1}>
          <div style={{
            margin: '56px 0', borderRadius: 22,
            background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.08))',
            border: '1px solid rgba(139,92,246,0.2)',
            padding: '40px 48px', textAlign: 'center',
            backdropFilter: 'blur(20px)',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>💬</div>
            <blockquote style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.2rem,2.5vw,1.8rem)', lineHeight: 1.4,
              color: '#fff', margin: '0 0 12px', fontStyle: 'italic',
            }}>
              "Music saved me when I didn't think anything ever would — and it's continued to help me create the person I want to be."
            </blockquote>
            <p style={{ color: 'var(--accent-2)', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.9rem' }}>— Jaxson · $hatterLyfé</p>
          </div>
        </Reveal>

        {/* Bottom cards */}
        <div className="about-cards">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} direction={i % 2 === 0 ? 'right' : 'left'} delay={i * 0.1}>
              <div className="glass" style={{
                borderRadius: 22, padding: '28px', height: '100%', transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.4)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(139,92,246,0.12)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 14 }}>{card.icon}</div>
                <h3 className="font-syne" style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 10, color: '#fff' }}>{card.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; margin-bottom: 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
        .about-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media(max-width:900px){
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-cards { grid-template-columns: 1fr 1fr; }
        }
        @media(max-width:600px){
          .about-cards { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2,1fr); }
        }
      `}</style>
    </section>
  )
}
