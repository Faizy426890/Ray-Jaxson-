'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { IMG } from './media'

const PORTRAIT = IMG.hero
const SPOTIFY = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'

const CATEGORIES = [
  { num: '#01', label: 'Melodic Rap' },
  { num: '#02', label: 'Survival Stories' },
  { num: '#03', label: 'Oregon Sound' },
  { num: '#04', label: 'Live Bookings' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  const scrollTo = (sel: string) =>
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-deep)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Full-bleed background photo with parallax ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-8% 0 -8% 0',
          y: imgY,
          scale: imgScale,
          transformOrigin: 'center top',
        }}
      >
        <Image
          src={PORTRAIT}
          alt="$hatterLyfé"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
          sizes="100vw"
        />
      </motion.div>

      {/* ── Gradient layers ── */}
      {/* Deep left dark panel */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(100deg, rgba(8,8,18,0.98) 0%, rgba(8,8,18,0.88) 35%, rgba(8,8,18,0.45) 58%, rgba(8,8,18,0.10) 80%, rgba(8,8,18,0.04) 100%)',
      }} />
      {/* Bottom floor fade */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(8,8,18,1) 0%, rgba(8,8,18,0.75) 18%, rgba(8,8,18,0.15) 45%, transparent 65%)',
      }} />
      {/* Purple radial glow from upper-right */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 80% at 72% 20%, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)',
      }} />
      {/* Pink accent glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 50% at 85% 70%, rgba(236,72,153,0.14) 0%, transparent 60%)',
      }} />
      {/* Top vignette */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 220, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(8,8,18,0.7) 0%, transparent 100%)',
      }} />

      {/* ── Main content ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 2,
        maxWidth: 1320,
        margin: '0 auto',
        width: '100%',
        padding: '0 48px',
      }} className="hero-outer">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingTop: 110, marginBottom: 'auto' }}
        >
          <span className="section-pill">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
            Melodic Rap · Portland, Oregon
          </span>
        </motion.div>

        {/* ── Two-column hero body ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'flex-end',
          paddingBottom: 48,
          marginTop: 'auto',
        }} className="hero-body-grid">

          {/* LEFT: Heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 400,
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: 14,
                letterSpacing: '0.01em',
              }}
            >
              Hey, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{ margin: 0 }}
            >
              <span style={{
                display: 'block',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3.4rem, 7.5vw, 7rem)',
                lineHeight: 0.97,
                letterSpacing: '-0.035em',
                color: '#fff',
              }}>
                $hatter
              </span>
              <span style={{
                display: 'block',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3.4rem, 7.5vw, 7rem)',
                lineHeight: 0.97,
                letterSpacing: '-0.035em',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 55%, #A78BFA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Lyfé.
              </span>
            </motion.h1>
          </div>

          {/* RIGHT: Quote + description + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)',
              lineHeight: 1.25,
              color: '#fff',
              marginBottom: 16,
            }}>
              Music hits different<br />when it&apos;s built from pain.
            </p>

            <p style={{
              fontSize: '0.92rem',
              color: 'rgba(196,181,253,0.85)',
              lineHeight: 1.8,
              marginBottom: 32,
              maxWidth: 440,
            }}>
              From overcoming addiction at 14 to performing on stages —
              Jaxson turned survival into sound. His melodic rap cuts
              through noise and speaks directly to the soul.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href={SPOTIFY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green glow-pulse"
                style={{ fontSize: '0.85rem', padding: '13px 26px', borderRadius: 14 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Stream Now
              </a>
              <button
                onClick={() => scrollTo('#booking')}
                className="btn-outline"
                style={{ fontSize: '0.85rem', padding: '13px 26px', borderRadius: 14 }}
              >
                Book Jaxson →
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Numbered category bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(139,92,246,0.18)',
            paddingTop: 28,
            paddingBottom: 44,
          }}
          className="hero-cats"
        >
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.num}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                paddingRight: 24,
                paddingLeft: i > 0 ? 24 : 0,
                borderRight: i < 3 ? '1px solid rgba(139,92,246,0.1)' : 'none',
              }}
            >
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '0.62rem',
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                {cat.num}
              </span>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '0.92rem',
                color: 'rgba(255,255,255,0.82)',
                letterSpacing: '-0.01em',
              }}>
                {cat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollTo('#ticker-section')}
        style={{
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dim)',
          transition: 'color 0.2s', zIndex: 5,
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-2)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
      >
        <span style={{ fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Scroll</span>
        <span className="bounce-y"><ChevronDown size={18} /></span>
      </button>


    </section>
  )
}
