'use client'
import Image from 'next/image'
import { Play, ExternalLink, Heart } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from './media'

const SPOTIFY_TRACK = 'https://open.spotify.com/track/7vtXOdQMSiYZjvfn87vw3L?si=2PqYrwEzTCOgjuk1e0SXIA'
const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'

const HIGHLIGHTS = [
  { icon: <Heart size={16} />, title: 'Emotional & Melodic', desc: 'Blends raw feeling with melody' },
  { icon: <Play size={16} />, title: 'Standout Single', desc: 'Fan-favorite across platforms' },
]

export default function FeaturedSection() {
  return (
    <section id="featured" className="featured-section">
      <div className="featured-container">

        {/* Header */}
        <div className="featured-header">
          <div style={{ minWidth: 0 }}>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 10 }}>🏆 Featured Track</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne featured-title">First Day of Summer</h2>
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
          <div className="featured-card">
            {/* Summer background image */}
            <div className="featured-bg">
              <Image
                src={IMG.summer}
                alt="First Day of Summer"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            {/* Readability overlay */}
            <div className="featured-overlay" />
            {/* Purple glow accent */}
            <div className="featured-glow" />

            {/* Info */}
            <div className="featured-info">
              <p className="featured-eyebrow font-syne">☀️ Featured Single · $hatterLyfé</p>
              <h3 className="font-syne featured-heading">
                First Day of <em style={{ fontStyle: 'normal' }} className="gradient-text">Summer</em>
              </h3>
              <p className="featured-desc">
                An emotional, melodic standout from $hatterLyfé nostalgic, raw, and deeply personal. The kind of track that hits different when you know the story behind it.
              </p>

              <div className="featured-highlights">
                {HIGHLIGHTS.map(a => (
                  <div key={a.title} className="featured-highlight">
                    <span className="featured-icon">{a.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <p className="font-syne featured-highlight-title">{a.title}</p>
                      <p className="featured-highlight-desc">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="featured-actions">
                <a href={SPOTIFY_TRACK} target="_blank" rel="noopener noreferrer" className="btn-green">
                  <Play size={14} /> Play on Spotify
                </a>
                <a href={SPOTIFY_ARTIST} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Full Catalog
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .featured-section { padding: 100px 0; background: var(--bg-section); }
        .featured-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

        .featured-header {
          display: flex; flex-wrap: wrap; justify-content: space-between;
          align-items: flex-end; gap: 20px; margin-bottom: 40px;
        }
        .featured-title { font-weight: 900; font-size: clamp(1.8rem, 3vw, 2.6rem); line-height: 1.1; }

        .featured-card {
          position: relative; overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          min-height: 460px;
          display: flex; align-items: center;
        }
        .featured-bg { position: absolute; inset: 0; }
        .featured-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(105deg, rgba(8,8,18,0.96) 0%, rgba(8,8,18,0.82) 35%, rgba(8,8,18,0.35) 65%, rgba(8,8,18,0.1) 100%),
            linear-gradient(to top, rgba(8,8,18,0.7) 0%, transparent 45%);
        }
        .featured-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 60% 60% at 80% 40%, rgba(139, 92, 246, 0.18) 0%, transparent 70%);
        }

        .featured-info {
          position: relative; z-index: 2;
          width: 100%; max-width: 560px; min-width: 0;
          padding: 56px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .featured-eyebrow {
          font-size: 0.68rem; font-weight: 800; color: var(--accent-2);
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px;
        }
        .featured-heading {
          font-weight: 900; font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.05; margin-bottom: 16px; overflow-wrap: break-word;
        }
        .featured-desc { font-size: 0.92rem; color: var(--text-muted); line-height: 1.75; margin-bottom: 24px; }

        .featured-highlights { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
        .featured-highlight { display: flex; align-items: center; gap: 14px; }
        .featured-icon {
          width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0;
          background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.3);
          display: flex; align-items: center; justify-content: center; color: var(--accent-2);
        }
        .featured-highlight-title { font-weight: 700; font-size: 0.95rem; }
        .featured-highlight-desc { font-size: 0.78rem; color: var(--text-muted); }

        .featured-actions { display: flex; flex-wrap: wrap; gap: 10px; }

        /* Tablet */
        @media (max-width: 900px) {
          .featured-section { padding: 72px 0; }
          .featured-card { min-height: 0; border-radius: 24px; }
          .featured-info { max-width: none; padding: 36px 28px; }
          /* Image is behind the text everywhere, so darken evenly for readability */
          .featured-overlay {
            background:
              linear-gradient(to bottom, rgba(8,8,18,0.78) 0%, rgba(8,8,18,0.88) 100%);
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .featured-section { padding: 56px 0; }
          .featured-container { padding: 0 16px; }
          .featured-header { margin-bottom: 28px; }
          .featured-card { border-radius: 20px; }
          .featured-info { padding: 28px 20px; }
          .featured-actions > a { flex: 1 1 100%; justify-content: center; text-align: center; }
        }
      `}</style>
    </section>
  )
}