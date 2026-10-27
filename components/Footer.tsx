'use client'
import { useState } from 'react'
import { Music, Send, Check } from 'lucide-react'

const SPOTIFY = 'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx?si=nSPwq2knRdSF-QkzO8umOQ'
const INSTAGRAM = 'https://instagram.com/official.shatterlyfe'
const TIKTOK = 'https://tiktok.com/@shatter_lyfe'
const SOUNDCLOUD = 'https://soundcloud.com/shatterlyfe'
const YOUTUBE = 'https://youtube.com/@shatterlyfe'

const NAV = [
  { label: 'Music', href: '#music' },
  { label: 'Story', href: '#about' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Themes', href: '#themes' },
  { label: 'Connect', href: '#social' },
  { label: 'Booking', href: '#booking' },
]

const TRACKS = [
  { label: 'First Day of Summer', href: 'https://open.spotify.com/track/7vtXOdQMSiYZjvfn87vw3L' },
  { label: 'Physco', href: 'https://open.spotify.com/track/1QYLrIQQug45b80u8fpbj1' },
  { label: 'Maybe', href: 'https://open.spotify.com/track/3UQ7DwTKpR9xEBb2oqcOwz' },
  { label: 'AMG', href: 'https://open.spotify.com/track/2qIdGg7ypgh5yMdxRIAp4T' },
  { label: 'Weapon in da Coat', href: 'https://open.spotify.com/track/1hMtguHD0ZU3veMNjtXpAa' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border)', padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="footer-grid">
          {/* Brand + newsletter */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <span style={{
                width:34, height:34,
                background:'linear-gradient(135deg, #8B5CF6, #EC4899)',
                borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow:'0 4px 16px rgba(139,92,246,0.4)',
              }}>
                <Music size={16} color="#fff" />
              </span>
              <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:'1.05rem' }}>
                $hatter<span style={{ color:'var(--accent-2)' }}>Lyfé</span>
              </span>
            </div>
            <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', lineHeight:1.75, maxWidth:280, marginBottom:8 }}>
              Melodic rap artist from Portland, Oregon. Music over everything.
            </p>
            <p style={{ color:'var(--text-dim)', fontSize:'0.75rem', marginBottom:20 }}>
              📧 shatterlyfemusic@gmail.com
            </p>

            {/* Newsletter */}
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:10, color:'var(--text-dim)' }}>Stay in the Loop</p>
            {subscribed ? (
              <div style={{ display:'flex', alignItems:'center', gap:8, color:'var(--accent-2)', fontSize:'0.85rem', fontWeight:600 }}>
                <Check size={16} /> You're on the list. Thank you.
              </div>
            ) : (
              <form onSubmit={subscribe} style={{ display:'flex', gap:8, maxWidth:300 }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  style={{ flex:1, padding:'10px 14px', fontSize:'0.82rem' }}
                />
                <button type="submit" className="btn-green" aria-label="Subscribe" style={{ padding:'10px 14px' }}>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:16, color:'var(--text-dim)' }}>Navigation</p>
            {NAV.map(link => (
              <button key={link.href} onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior:'smooth' })}
                style={{ display:'block', background:'none', border:'none', color:'var(--text-muted)', fontSize:'0.85rem', padding:'4px 0', cursor:'pointer', textAlign:'left', transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                onMouseLeave={e => (e.currentTarget.style.color='var(--text-muted)')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Tracks */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:16, color:'var(--text-dim)' }}>The Music</p>
            {TRACKS.map(t => (
              <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer"
                 style={{ display:'block', color:'var(--text-muted)', fontSize:'0.85rem', padding:'4px 0', textDecoration:'none', transition:'color 0.2s' }}
                 onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                 onMouseLeave={e => (e.currentTarget.style.color='var(--text-muted)')}
              >{t.label}</a>
            ))}
          </div>

          {/* Follow */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:16, color:'var(--text-dim)' }}>Follow $hatterLyfé</p>
            {[
              { name: 'Spotify', href: SPOTIFY },
              { name: 'Instagram · @official.shatterlyfe', href: INSTAGRAM },
              { name: 'TikTok · @shatter_lyfe', href: TIKTOK },
              { name: 'SoundCloud', href: SOUNDCLOUD },
              { name: 'YouTube', href: YOUTUBE },
            ].map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                 style={{ display:'block', color:'var(--text-muted)', fontSize:'0.82rem', padding:'4px 0', textDecoration:'none', transition:'color 0.2s' }}
                 onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                 onMouseLeave={e => (e.currentTarget.style.color='var(--text-muted)')}
              >{p.name}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', marginTop:40, paddingTop:24, display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:12 }}>
          <p style={{ color:'var(--text-dim)', fontSize:'0.75rem' }}>
            © 2026 $hatterLyfé · Jaxson · All rights reserved
          </p>
          <button onClick={scrollTop}
            style={{ background:'rgba(139,92,246,0.12)', border:'1px solid rgba(139,92,246,0.25)', color:'var(--accent-2)', padding:'8px 16px', borderRadius:8, cursor:'pointer', fontSize:'0.75rem', fontFamily:"'Syne',sans-serif", fontWeight:600, transition:'all 0.25s cubic-bezier(0.16,1,0.3,1)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='linear-gradient(135deg, #8B5CF6, #EC4899)'; (e.currentTarget as HTMLElement).style.color='#fff'; (e.currentTarget as HTMLElement).style.boxShadow='0 4px 20px rgba(139,92,246,0.35)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(139,92,246,0.12)'; (e.currentTarget as HTMLElement).style.color='var(--accent-2)'; (e.currentTarget as HTMLElement).style.boxShadow='none'; }}
          >
            Back to Top ↑
          </button>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
        @media(max-width:900px){ .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media(max-width:500px){ .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  )
}
