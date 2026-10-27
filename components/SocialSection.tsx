'use client'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const SPOTIFY = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'
const INSTAGRAM = 'https://instagram.com/official.shatterlyfe'
const TIKTOK = 'https://tiktok.com/@shatter_lyfe'
const SOUNDCLOUD = 'https://soundcloud.com/shatterlyfe'
const YOUTUBE = 'https://youtube.com/@shatterlyfe'

const SOCIAL_CARDS = [
  {
    name: 'Instagram',
    handle: '@official.shatterlyfe',
    desc: 'Behind the scenes, drops & daily life',
    href: INSTAGRAM,
    color: '#E1306C',
    gradient: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    image: 'https://cdn.pixabay.com/photo/2022/01/26/23/18/instagram-6970243_640.jpg',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@shatter_lyfe',
    desc: 'Music clips, skits & the Oregon life',
    href: TIKTOK,
    color: '#FF0050',
    gradient: 'linear-gradient(135deg, #010101, #FF0050)',
    image: 'https://media.wired.com/photos/651c76f4574790876e74efc1/1:1/w_1592,h_1592,c_limit/Tik-Tok-EU-Data-Centers-Business-1258278519.jpg',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    name: 'SoundCloud',
    handle: '$hatterLyfé',
    desc: 'Early tracks, unreleased cuts & more',
    href: SOUNDCLOUD,
    color: '#FF5500',
    gradient: 'linear-gradient(135deg, #1a0800, #FF5500)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDLGrNPs0VliNyqvCtIntgLqnYOokGaxr7IPUmW5oJzuj2JL5uB9MtVnu&s=10',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.175 12.225c-.015-.032-.028-.067-.036-.104L0 7.508l1.139 4.613c.008.037.021.072.036.104zM24 12.014c0-.992-.806-1.797-1.798-1.797-.252 0-.49.051-.707.143C21.188 8.86 19.714 7.6 17.96 7.6c-.435 0-.85.071-1.236.2-.282.093-.55.213-.793.36C15.748 6.24 14.156 5.1 12.3 5.1c-2.762 0-5.002 2.24-5.002 5.002v.043C6.78 9.8 6.2 9.54 5.56 9.54c-1.47 0-2.662 1.192-2.662 2.662s1.193 2.662 2.662 2.662h16.44A1.799 1.799 0 0 0 24 12.014zm-22.825.104c-.008.037-.021.072-.036.104L0 7.508l1.139 4.61z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@shatterlyfe',
    desc: 'Music videos, vlogs & visual content',
    href: YOUTUBE,
    color: '#FF0000',
    gradient: 'linear-gradient(135deg, #1a0000, #FF0000)',
    image: 'https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953528_640.jpg',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

const SPOTIFY_ICON = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

export default function SocialSection() {
  return (
    <section id="social" style={{ padding: '100px 0', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 52 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 10 }}>🔗 Stream &amp; Follow</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1 }}>
                Find $hatterLyfé Everywhere
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.15}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 10, maxWidth: 440, lineHeight: 1.7 }}>
                One sound. Every platform. Stream, follow, and connect with $hatterLyfé.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left">
            <button
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-green"
            >
              Book $hatterLyfé
            </button>
          </Reveal>
        </div>

        {/* ── Spotify featured strip ── */}
        <Reveal direction="up">
          <a
            href={SPOTIFY}
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-strip"
            style={{ textDecoration: 'none' }}
          >
            {/* Background waveform decoration */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 'inherit', pointerEvents: 'none' }}>
              <div style={{
                position: 'absolute', bottom: -20, right: 60,
                display: 'flex', alignItems: 'flex-end', gap: 4, height: 120, opacity: 0.12,
              }}>
                {[30,60,90,50,80,40,70,100,55,75,35,65,45,85,50,90,60,40,70,55,80,30].map((h, i) => (
                  <span key={i} style={{ width: 6, height: h, background: '#1DB954', borderRadius: 3, flexShrink: 0 }} />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
              {/* Spotify icon */}
              <div style={{
                width: 64, height: 64, borderRadius: 18, flexShrink: 0,
                background: 'rgba(29,185,84,0.15)', border: '1px solid rgba(29,185,84,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1DB954',
              }}>
                {SPOTIFY_ICON}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', color: '#fff', marginBottom: 4 }}>
                  Stream $hatterLyfé on Spotify
                </p>
                <p style={{ color: 'rgba(29,185,84,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>
                  5 Tracks · Melodic Rap · Portland, Oregon
                </p>
              </div>

              {/* Live bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 28, flexShrink: 0 }}>
                {[10, 22, 28, 16, 20].map((h, i) => (
                  <span key={i} className="wave-bar"
                    style={{ height: h, background: '#1DB954', animationDelay: `${i * 0.18}s` }} />
                ))}
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
                background: '#1DB954', color: '#000',
                fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '0.85rem',
                padding: '12px 22px', borderRadius: 12,
              }}>
                Listen Now <ArrowUpRight size={16} />
              </div>
            </div>
          </a>
        </Reveal>

        {/* ── Platform image cards — 2×2 grid ── */}
        <div className="social-image-grid" style={{ marginTop: 24 }}>
          {SOCIAL_CARDS.map((p, i) => (
            <Reveal key={p.name} direction="up" delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-img-card"
                style={{ textDecoration: 'none', position: 'relative', display: 'block', overflow: 'hidden', borderRadius: 22 }}
                onMouseEnter={e => {
                  const overlay = (e.currentTarget as HTMLElement).querySelector('.social-overlay') as HTMLElement
                  if (overlay) overlay.style.opacity = '0.55'
                  const btn = (e.currentTarget as HTMLElement).querySelector('.social-btn') as HTMLElement
                  if (btn) { btn.style.background = p.color; btn.style.color = '#fff'; btn.style.borderColor = p.color }
                }}
                onMouseLeave={e => {
                  const overlay = (e.currentTarget as HTMLElement).querySelector('.social-overlay') as HTMLElement
                  if (overlay) overlay.style.opacity = '1'
                  const btn = (e.currentTarget as HTMLElement).querySelector('.social-btn') as HTMLElement
                  if (btn) { btn.style.background = 'rgba(0,0,0,0.35)'; btn.style.color = '#fff'; btn.style.borderColor = 'rgba(255,255,255,0.2)' }
                }}
              >
                {/* Background image */}
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)' }}
                  className="social-card-img"
                  sizes="640px"
                />

                {/* Dark gradient overlay */}
                <div
                  className="social-overlay"
                  style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(160deg, rgba(8,8,18,0.75) 0%, rgba(8,8,18,0.45) 40%, rgba(8,8,18,0.82) 100%)`,
                    transition: 'opacity 0.35s ease',
                  }}
                />
                {/* Bottom color wash */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, ${p.color}33 0%, transparent 50%)`,
                  pointerEvents: 'none',
                }} />
                {/* Top-left color accent border */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: p.gradient,
                }} />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2, padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 260 }}>
                  {/* Top row: icon + platform name */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                        background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
                        border: `1px solid ${p.color}55`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: p.color,
                      }}>
                        {p.icon}
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: '1.05rem', color: '#fff', lineHeight: 1.1 }}>
                          {p.name}
                        </p>
                        <p style={{ fontSize: '0.72rem', color: p.color, fontWeight: 700, letterSpacing: '0.04em' }}>
                          {p.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight size={18} color="rgba(255,255,255,0.5)" />
                  </div>

                  {/* Bottom: description + button */}
                  <div>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: 16 }}>
                      {p.desc}
                    </p>
                    <div
                      className="social-btn"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 700,
                        fontSize: '0.78rem', padding: '9px 16px', borderRadius: 10,
                        transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                      }}
                    >
                      Follow on {p.name} <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* ── Booking CTA ── */}
        <Reveal direction="up" delay={0.2}>
          <div className="glass" style={{ marginTop: 28, border: '1px solid rgba(139,92,246,0.25)', borderRadius: 22, padding: '44px 48px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 32, justifyContent: 'space-between' }}>
            <div>
              <h3 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.2rem,2vw,1.5rem)', marginBottom: 6 }}>
                Want $hatterLyfé at Your Event?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 6 }}>
                Venues, bars, festivals, colleges, corporate, and private events.
              </p>
              <p style={{ color: 'var(--accent-2)', fontSize: '0.85rem' }}>
                📧 shatterlyfemusic@gmail.com
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button
                onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-green"
              >
                📅 Book a Performance
              </button>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-outline">
                @official.shatterlyfe
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .spotify-strip {
          display: block;
          position: relative;
          background: rgba(29,185,84,0.07);
          border: 1px solid rgba(29,185,84,0.22);
          border-radius: 20px;
          padding: 28px 32px;
          margin-bottom: 0;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          overflow: hidden;
        }
        .spotify-strip:hover {
          background: rgba(29,185,84,0.12);
          border-color: rgba(29,185,84,0.4);
          transform: translateY(-2px);
          box-shadow: 0 20px 60px rgba(29,185,84,0.1);
        }
        .social-image-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .social-img-card:hover .social-card-img {
          transform: scale(1.06);
        }
        @media(max-width:1100px){
          .social-image-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width:600px){
          .social-image-grid { grid-template-columns: 1fr; }
          .spotify-strip { padding: 20px; }
        }
      `}</style>
    </section>
  )
}
