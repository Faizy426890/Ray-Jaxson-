'use client'

const ITEMS = [
  '$hatterLyfé · Melodic Rap',
  'First Day of Summer · Out Now',
  'Physco · Stream on Spotify',
  'Maybe · Out Now',
  'AMG · On All Platforms',
  'Weapon in da Coat · Stream Now',
  'Portland, Oregon · Jaxson',
  'Follow @official.shatterlyfe',
  '@shatter_lyfe on TikTok',
  '$hatterLyfé on SoundCloud & YouTube',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
