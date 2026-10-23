'use client'

import { useState } from 'react'

type Screen = 'home' | 'prices' | 'book'

const TABS: { key: Screen; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'prices', label: 'Prices' },
  { key: 'book', label: 'Booking' },
]

const SERVICES = ['Haircut', 'Balayage', 'Collagen treatment']
const TIMES = ['10:00 AM', '2:00 PM', '6:00 PM']

function BookScreen() {
  const [service, setService] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)
  const [status, setStatus] = useState('')

  return (
    <>
      <h3>Pick a slot.</h3>
      <p>Choose a service and a time, then confirm.</p>
      <div className="row" data-g="s">
        {SERVICES.map((s) => (
          <button key={s} className={'chip' + (service === s ? ' on' : '')} type="button" onClick={() => setService(s)}>
            {s}
          </button>
        ))}
      </div>
      <div className="row" data-g="t">
        {TIMES.map((t) => (
          <button key={t} className={'chip' + (time === t ? ' on' : '')} type="button" onClick={() => setTime(t)}>
            {t}
          </button>
        ))}
      </div>
      <button
        className="go"
        id="go"
        type="button"
        onClick={() =>
          setStatus(
            service && time
              ? `Booked: ${service} at ${time}. This is a demo, so nothing was sent.`
              : 'Choose a service and a time first.',
          )
        }
      >
        Book this slot
      </button>
      <div id="st">{status}</div>
    </>
  )
}

export default function WorkScreens() {
  const [tab, setTab] = useState<Screen>('home')

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Site screens">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={tab === t.key ? 'on' : undefined}
            role="tab"
            aria-selected={tab === t.key}
            type="button"
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="shot">
        <div className="bar">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div id="pane" role="tabpanel" aria-live="polite">
          {tab === 'home' && (
            <>
              <h3>Beauty, booked in a minute.</h3>
              <p>The home screen leads with the salon&apos;s work and one clear button.</p>
              <div className="tiles">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </>
          )}
          {tab === 'prices' && (
            <>
              <h3>Every price, up front.</h3>
              <p>Customers see the cost before they ask.</p>
              {SERVICES.map((s) => (
                <div className="price" key={s}>
                  <span>{s === 'Balayage' ? 'Non bleach balayage' : s}</span>
                  <b>Ask the salon</b>
                </div>
              ))}
              <p style={{ marginTop: '14px' }}>Sample screen: the live site shows the real price list.</p>
            </>
          )}
          {tab === 'book' && <BookScreen />}
        </div>
      </div>
    </>
  )
}
