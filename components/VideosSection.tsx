'use client'
import Reveal from './Reveal'
import { ExternalLink } from 'lucide-react'

const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'

const QUOTES = [
  {
    quote: 'I Lost Myself Before I Found My Sound.',
    context: 'The opening line — the whole story in one sentence.',
    icon: '🎵',
    color: '#8B5CF6',
  },
  {
    quote: 'Now I Inject Music In My Veins Instead of Drugs.',
    context: 'Swapping one dependency for the only one worth having.',
    icon: '💊',
    color: '#EC4899',
  },
  {
    quote: 'So I Chose a Different Ending.',
    context: 'At 17, everything changed. The path nobody expected him to take.',
    icon: '🚪',
    color: '#A78BFA',
  },
  {
    quote: 'Love Was a Big Topic Till Music Came to My Mind.',
    context: 'The moment music took over and became the only relationship that mattered.',
    icon: '❤️',
    color: '#F472B6',
  },
  {
    quote: 'Now Love Is a Fantasy and Music Is the Legacy.',
    context: 'The shift that defines $hatterLyfé — from emotion to art.',
    icon: '🎤',
    color: '#8B5CF6',
  },
  {
    quote: 'Music Saved Me When I Didn\'t Think Anything Ever Would.',
    context: 'The truest thing Jaxson has ever said.',
    icon: '🌅',
    color: '#EC4899',
  },
]

const ALL_TRACKS = [
  { title: 'First Day of Summer', href: 'https://open.spotify.com/track/7vtXOdQMSiYZjvfn87vw3L', emoji: '☀️' },
  { title: 'Physco', href: 'https://open.spotify.com/track/1QYLrIQQug45b80u8fpbj1', emoji: '🌀' },
  { title: 'Maybe', href: 'https://open.spotify.com/track/3UQ7DwTKpR9xEBb2oqcOwz', emoji: '💭' },
  { title: 'AMG', href: 'https://open.spotify.com/track/2qIdGg7ypgh5yMdxRIAp4T', emoji: '🚗' },
  { title: 'Weapon in da Coat', href: 'https://open.spotify.com/track/1hMtguHD0ZU3veMNjtXpAa', emoji: '🔥' },
]

export default function VideosSection() {
  return (
    <section id="videos" style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--bg-2) 0%, var(--bg-deep) 100%)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <Reveal direction="up">
            <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 12 }}>✍️ In His Own Words</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1, marginBottom: 10 }}>
              Lyrics & Lines
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Six lines that define the $hatterLyfé story. Real words from a real life.
            </p>
          </Reveal>
        </div>

        {/* Quote cards grid */}
        <div className="quotes-grid">
          {QUOTES.map((q, i) => (
            <Reveal key={i} direction="up" delay={i * 0.07}>
              <div
                className="card-hover"
                style={{
                  borderRadius: 22, padding: '28px 24px',
                  background: `rgba(${q.color === '#8B5CF6' ? '139,92,246' : q.color === '#EC4899' ? '236,72,153' : q.color === '#A78BFA' ? '167,139,250' : '244,114,182'}, 0.06)`,
                  border: `1px solid ${q.color}33`,
                  backdropFilter: 'blur(20px)',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                  cursor: 'default',
                  height: '100%', display: 'flex', flexDirection: 'column', gap: 16,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = q.color + '77'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${q.color}22`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = q.color + '33'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14, fontSize: '1.5rem',
                  background: q.color + '18', border: `1px solid ${q.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {q.icon}
                </div>
                <blockquote style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.45,
                  color: '#fff', margin: 0, fontStyle: 'italic', flex: 1,
                }}>
                  "{q.quote}"
                </blockquote>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {q.context}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* All tracks horizontal list */}
        <Reveal direction="up" delay={0.2}>
          <div className="glass" style={{ marginTop: 52, borderRadius: 24, padding: '36px 40px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20, marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.1rem', marginBottom: 4 }}>The Full Catalog</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>5 tracks · Available on Spotify & all platforms</p>
              </div>
              <a href={SPOTIFY_ARTIST} target="_blank" rel="noopener noreferrer" className="btn-sm-purple">
                Open Spotify <ExternalLink size={12} />
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {ALL_TRACKS.map(t => (
                <a
                  key={t.title}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-pill"
                  style={{ gap: 8 }}
                >
                  {t.emoji} {t.title}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .quotes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media(max-width:900px){ .quotes-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width:600px){ .quotes-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
