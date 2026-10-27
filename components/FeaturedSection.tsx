'use client'
import Image from 'next/image'
import { Play, ExternalLink, Heart } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from './media'

const SPOTIFY_TRACK = 'https://open.spotify.com/track/7vtXOdQMSiYZjvfn87vw3L?si=2PqYrwEzTCOgjuk1e0SXIA'
const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'
const TRACK_ID = '7vtXOdQMSiYZjvfn87vw3L'

const HIGHLIGHTS = [
  { icon: <Heart size={16} />, title: 'Emotional & Melodic', desc: 'Blends raw feeling with melody' },
  { icon: <Play size={16} />, title: 'Standout Single', desc: 'Fan-favorite across platforms' },
]

export default function FeaturedSection() {
  return (
    <section id="featured" style={{ padding: '100px 0', background: 'var(--bg-section)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 44 }}>
          <div style={{ minWidth: 0 }}>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 10 }}>🏆 Featured Track</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1 }}>
                First Day of Summer
              </h2>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href={SPOTIFY_TRACK} target="_blank" rel="noopener noreferrer" className="btn-sm-purple">
              Listen on Spotify <ExternalLink size={12} />
            </a>
          </Reveal>
        </div>

        {/* Featured card with summer image background */}
        <Reveal direction="up" delay={0.1}>
          <div style={{
            borderRadius: 28,
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid rgba(139,92,246,0.2)',
          }}>
            {/* Summer background image */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={IMG.summer}
                alt="First Day of Summer"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                sizes="1280px"
              />
            </div>
            {/* Gradient overlays for readability */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(105deg, rgba(8,8,18,0.96) 0%, rgba(8,8,18,0.82) 35%, rgba(8,8,18,0.35) 58%, rgba(8,8,18,0.08) 100%)',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(8,8,18,0.88) 0%, rgba(8,8,18,0.2) 35%, transparent 55%)',
            }} />
            {/* Purple glow accent */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 60% 60% at 80% 40%, rgba(139,92,246,0.18) 0%, transparent 70%)',
            }} />

            <div className="featured-inner" style={{ position: 'relative', zIndex: 2 }}>
              {/* Left — Spotify Embed */}
              <div className="featured-media" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <iframe
                  src={`https://open.spotify.com/embed/track/${TRACK_ID}?utm_source=generator&theme=0`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 352, display: 'block' }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="First Day of Summer — $hatterLyfé"
                />
              </div>

              {/* Right — Info */}
              <div className="featured-info" style={{ position: 'relative', zIndex: 2 }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 800, fontFamily: "'Syne',sans-serif", color: 'var(--accent-2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                  ☀️ Featured Single · $hatterLyfé
                </p>
                <h3 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.05, marginBottom: 16, overflowWrap: 'break-word' }}>
                  First Day of <em style={{ fontStyle: 'normal' }} className="gradient-text">Summer</em>
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 24 }}>
                  An emotional, melodic standout from $hatterLyfé — nostalgic, raw, and deeply personal. The kind of track that hits different when you know the story behind it.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                  {HIGHLIGHTS.map(a => (
                    <div key={a.title} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span style={{
                        width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                        background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-2)',
                      }}>{a.icon}</span>
                      <div style={{ minWidth: 0 }}>
                        <p className="font-syne" style={{ fontWeight: 700, fontSize: '0.95rem' }}>{a.title}</p>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <a href={SPOTIFY_TRACK} target="_blank" rel="noopener noreferrer" className="btn-green">
                    <Play size={14} /> Play on Spotify
                  </a>
                  <a href={SPOTIFY_ARTIST} target="_blank" rel="noopener noreferrer" className="btn-outline">Full Catalog</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .featured-inner { display: grid; grid-template-columns: 1.05fr 0.95fr; align-items: stretch; }
        .featured-media, .featured-info { min-width: 0; }
        .featured-media { min-height: 320px; }
        .featured-info { padding: 44px; display: flex; flex-direction: column; justify-content: center; }
        @media(max-width:900px){
          .featured-inner { grid-template-columns: 1fr; }
          .featured-info { padding: 28px; }
        }
      `}</style>
    </section>
  )
}
