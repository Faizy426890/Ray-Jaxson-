'use client'
import type { CSSProperties } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'

const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'
const ARTIST = '$hatterLyfé'

type Track = {
  title: string
  emoji: string
  thumb?: string
  featured?: boolean
  spotify: string
  color: string
}

const TRACKS: Track[] = [
  {
    title: 'First Day of Summer',
    emoji: '☀️',
    thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfx_Ut-yjY9i-2MhwagIrg0QoNvkuc9sAP0n6lZoRptRfcqPh13-YOIxP&s=10',
    spotify: 'https://open.spotify.com/track/7vtXOdQMSiYZjvfn87vw3L?si=2PqYrwEzTCOgjuk1e0SXIA',
    color: '#EC4899',
  },
  {
    title: 'Psycho',
    emoji: '🌀',
    thumb: 'https://res.cloudinary.com/geecu3mo/image/upload/v1793225385/WhatsApp_Image_2026-10-28_at_23.34.50_2.jpg',
    spotify: 'https://open.spotify.com/track/1QYLrIQQug45b80u8fpbj1?si=y3n4KVy2RECBGu1j4_lYYQ',
    color: '#8B5CF6',
  },
  {
    title: 'Maybe',
    emoji: '💭',
    thumb: 'https://res.cloudinary.com/geecu3mo/image/upload/v1793225386/WhatsApp_Image_2026-10-28_at_23.34.51.jpg',
    spotify: 'https://open.spotify.com/track/3UQ7DwTKpR9xEBb2oqcOwz?si=s8itGJgqRem1W_t8GVVZMQ',
    color: '#A78BFA',
  },
  {
    title: 'AMG',
    emoji: '🚗',
    thumb: 'https://res.cloudinary.com/geecu3mo/image/upload/v1793225385/WhatsApp_Image_2026-10-28_at_23.34.50_1.jpg',
    spotify: 'https://open.spotify.com/track/2qIdGg7ypgh5yMdxRIAp4T?si=ce30aKQjSeSxV7xPcnYQgg',
    color: '#F59E0B',
  },
  {
    title: 'Weapon in da Coat',
    emoji: '🔥',
    thumb: 'https://res.cloudinary.com/geecu3mo/image/upload/v1793225385/WhatsApp_Image_2026-10-28_at_23.34.50.jpg',
    spotify: 'https://open.spotify.com/track/1hMtguHD0ZU3veMNjtXpAa?si=ZE6rQoKqQqOuWeZppJDqFg',
    color: '#EC4899',
  },
]

/* Cloudinary: serve a square crop instead of the full-size WhatsApp image */
const sized = (url: string, px = 520) =>
  url.replace('/upload/', `/upload/c_fill,w_${px},h_${px},q_auto,f_auto/`)

/* CSS kept in a constant and injected as raw HTML to avoid hydration text mismatches */
const CSS = `
.track-grid {
  display: grid; grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

.tcard {
  display: block; text-decoration: none; color: inherit;
  padding: 14px 14px 18px; border-radius: 16px;
  background: rgba(255,255,255,.035);
  transition: background .25s;
  outline: none;
}
.tcard:hover, .tcard:focus-visible { background: rgba(255,255,255,.09); }
.tcard:focus-visible { box-shadow: 0 0 0 2px rgba(255,255,255,.6); }

.tcover {
  position: relative; width: 100%; aspect-ratio: 1 / 1;
  border-radius: 12px; overflow: hidden; margin-bottom: 14px;
  background: #1a1726;
  box-shadow: 0 10px 28px rgba(0,0,0,.45);
}
.tcover img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s cubic-bezier(.2,.8,.2,1); }
.tcard:hover .tcover img { transform: scale(1.04); }

.tcover-empty {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: clamp(2.6rem, 5vw, 3.6rem);
  background: linear-gradient(135deg, #7c3aed, #ec4899);
}

.tflag {
  position: absolute; top: 10px; left: 10px;
  padding: 4px 10px; border-radius: 999px;
  font-size: .68rem; font-weight: 700; color: #fff;
  background: rgba(10,8,20,.65); backdrop-filter: blur(8px);
}

.tplay {
  position: absolute; right: 10px; bottom: 10px;
  width: 46px; height: 46px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: #1ed760; color: #000;
  box-shadow: 0 8px 20px rgba(0,0,0,.5);
  opacity: 0; transform: translateY(8px);
  transition: opacity .25s, transform .25s, background .15s;
}
.tplay svg { margin-left: 2px; }
.tcard:hover .tplay, .tcard:focus-visible .tplay { opacity: 1; transform: translateY(0); }
.tplay:hover { background: #3be477; }

.ttitle {
  font-weight: 700; font-size: .98rem; line-height: 1.3; color: #fff;
  margin: 0 0 4px;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.tartist { font-size: .84rem; color: var(--text-muted); margin: 0; }

/* Tablet & phone: horizontal swipe row, like a Spotify shelf */
@media (max-width: 1000px) {
  .track-grid {
    display: flex; gap: 12px; overflow-x: auto;
    margin: 0 -24px; padding: 0 24px 8px;
    scroll-snap-type: x mandatory; scroll-padding-left: 24px;
    scrollbar-width: none;
  }
  .track-grid::-webkit-scrollbar { display: none; }
  .track-grid > * { flex: 0 0 clamp(158px, 40vw, 220px); scroll-snap-align: start; }
}

/* Phone: single column, compact Spotify-style list rows */
@media (max-width: 600px) {
  .track-grid {
    flex-direction: column;
    gap: 10px;
    overflow: visible;
    margin: 0;
    padding: 0;
    scroll-snap-type: none;
  }
  .track-grid > * { flex: none; width: 100%; }

  .tcard {
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    column-gap: 14px;
    align-items: center;
    padding: 10px;
  }
  .tcover {
    grid-row: 1 / span 2;
    margin-bottom: 0;
    border-radius: 10px;
    box-shadow: 0 6px 16px rgba(0,0,0,.4);
  }
  .ttitle { align-self: end; font-size: 1rem; }
  .tartist { align-self: start; }

  /* smaller play button so it fits the thumbnail */
  .tplay { width: 28px; height: 28px; right: 5px; bottom: 5px; }
  .tplay svg { width: 13px; height: 13px; }
  .tflag { top: 5px; left: 5px; padding: 2px 7px; font-size: .6rem; }
}

/* Touch screens have no hover — keep the play button visible */
@media (hover: none) {
  .tplay { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .tcover img, .tplay, .tcard { transition: none; }
}
`

export default function MusicSection() {
  return (
    <section id="music" style={{ padding: '100px 0', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 40 }}>
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

        {/* Tracks */}
        <div className="track-grid">
          {TRACKS.map((track, i) => (
            <Reveal key={track.title} direction="up" delay={i * 0.06}>
              <a
                href={track.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="tcard"
                aria-label={`${track.title} by ${ARTIST} — open in Spotify`}
                style={{ '--accent': track.color } as CSSProperties}
              >
                <div className="tcover">
                  {track.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={sized(track.thumb)} alt={`${track.title} cover art`} loading="lazy" />
                  ) : (
                    <div className="tcover-empty">{track.emoji}</div>
                  )}
                  {track.featured && <span className="tflag">Featured</span>}
                  <span className="tplay"><Play size={20} fill="currentColor" /></span>
                </div>
                <h3 className="font-syne ttitle">{track.title}</h3>
                <p className="tartist">{ARTIST}</p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.2}>
          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <div className="divider" style={{ marginBottom: 32 }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 18 }}>Stream {ARTIST} on all platforms</p>
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

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: CSS }} />
    </section>
  )
}