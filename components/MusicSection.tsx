'use client'
import { Play, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'

const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'

const TRACKS = [
  {
    badge: 'Featured', badgeClass: 'badge-new',
    tag: 'Single · $hatterLyfé',
    title: 'First Day of Summer',
    emoji: '☀️',
    desc: 'Feel the nostalgia and emotion in this melodic standout track.',
    spotify: 'https://open.spotify.com/track/7vtXOdQMSiYZjvfn87vw3L?si=2PqYrwEzTCOgjuk1e0SXIA',
    color: '#EC4899',
  },
  {
    badge: 'Single', badgeClass: 'badge-live',
    tag: 'Single · $hatterLyfé',
    title: 'Physco',
    emoji: '🌀',
    desc: 'Raw energy and unfiltered emotion — a track that hits hard.',
    spotify: 'https://open.spotify.com/track/1QYLrIQQug45b80u8fpbj1?si=y3n4KVy2RECBGu1j4_lYYQ',
    color: '#8B5CF6',
  },
  {
    badge: 'Single', badgeClass: 'badge-feat',
    tag: 'Single · $hatterLyfé',
    title: 'Maybe',
    emoji: '💭',
    desc: 'Introspective and melodic — wrestling with love and uncertainty.',
    spotify: 'https://open.spotify.com/track/3UQ7DwTKpR9xEBb2oqcOwz?si=s8itGJgqRem1W_t8GVVZMQ',
    color: '#A78BFA',
  },
  {
    badge: 'Single', badgeClass: 'badge-gold',
    tag: 'Single · $hatterLyfé',
    title: 'AMG',
    emoji: '🚗',
    desc: 'Ambition, hustle, and the drive to build something real.',
    spotify: 'https://open.spotify.com/track/2qIdGg7ypgh5yMdxRIAp4T?si=ce30aKQjSeSxV7xPcnYQgg',
    color: '#F59E0B',
  },
  {
    badge: 'Single', badgeClass: 'badge-pink',
    tag: 'Single · $hatterLyfé',
    title: 'Weapon in da Coat',
    emoji: '🔥',
    desc: 'Street storytelling at its finest — cinematic and hard-hitting.',
    spotify: 'https://open.spotify.com/track/1hMtguHD0ZU3veMNjtXpAa?si=ZE6rQoKqQqOuWeZppJDqFg',
    color: '#EC4899',
  },
]

export default function MusicSection() {
  return (
    <section id="music" style={{ padding: '100px 0', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 52 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 12 }}>🎧 The Catalog</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.8rem)', lineHeight: 1.1 }}>
                The Music
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <p style={{ marginTop: 10, fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: 460, lineHeight: 1.7 }}>
                Five tracks. Each one a chapter of survival, love, and finding purpose through sound.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href={SPOTIFY_ARTIST} target="_blank" rel="noopener noreferrer"
               className="btn-sm-purple">Full Catalog <ExternalLink size={12} /></a>
          </Reveal>
        </div>

        {/* Featured track — large card */}
        <Reveal direction="up" delay={0.05}>
          <a
            href={TRACKS[0].spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover"
            style={{
              display: 'block', textDecoration: 'none',
              borderRadius: 24, overflow: 'hidden', marginBottom: 24,
              background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.08))',
              border: '1px solid rgba(139,92,246,0.25)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ padding: '40px 40px', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Big emoji */}
              <div style={{
                width: 120, height: 120, borderRadius: 22, flexShrink: 0,
                background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(236,72,153,0.25))',
                border: '1px solid rgba(139,92,246,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3.5rem',
              }}>
                {TRACKS[0].emoji}
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
                  <span className={`badge ${TRACKS[0].badgeClass}`}>{TRACKS[0].badge}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-2)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{TRACKS[0].tag}</span>
                </div>
                <h3 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: 10 }}>{TRACKS[0].title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 20, maxWidth: 480 }}>{TRACKS[0].desc}</p>
                <span className="btn-green" style={{ display: 'inline-flex' }}>
                  <Play size={14} /> Play on Spotify
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        {/* Rest of tracks grid */}
        <div className="tracks-grid">
          {TRACKS.slice(1).map((track, i) => (
            <Reveal key={track.title} direction={i % 2 === 0 ? 'right' : 'left'} delay={i * 0.08}>
              <a
                href={track.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover"
                style={{
                  display: 'flex', flexDirection: 'column', height: '100%',
                  textDecoration: 'none', borderRadius: 20, overflow: 'hidden',
                  background: 'rgba(139,92,246,0.05)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(20px)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = track.color + '66'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
              >
                {/* Color bar */}
                <div style={{ height: 3, background: track.color, width: '100%' }} />

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Icon + badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 16,
                      background: track.color + '18',
                      border: `1px solid ${track.color}44`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.6rem',
                    }}>
                      {track.emoji}
                    </div>
                    <span className={`badge ${track.badgeClass}`}>{track.badge}</span>
                  </div>

                  <p style={{ fontSize: '0.65rem', fontWeight: 700, color: track.color, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>{track.tag}</p>
                  <h3 className="font-syne" style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: 8, lineHeight: 1.3 }}>{track.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{track.desc}</p>

                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: track.color + '18', border: `1px solid ${track.color}44`,
                    borderRadius: 10, padding: '8px 14px', fontSize: '0.8rem', fontWeight: 700, color: track.color,
                  }}>
                    <Play size={13} /> Open in Spotify
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.2}>
          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <div className="divider" style={{ marginBottom: 32 }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 18 }}>Stream $hatterLyfé on all platforms</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
              {[
                { name: 'Spotify', href: SPOTIFY_ARTIST, icon: '🎧' },
                { name: 'SoundCloud', href: 'https://soundcloud.com/shatterlyfe', icon: '☁️' },
                { name: 'Instagram', href: 'https://instagram.com/official.shatterlyfe', icon: '📸' },
                { name: 'TikTok', href: 'https://tiktok.com/@shatter_lyfe', icon: '🎵' },
              ].map(p => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="platform-pill">
                  {p.icon} {p.name}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .tracks-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
        @media(max-width:900px){ .tracks-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width:600px){ .tracks-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
