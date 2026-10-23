'use client'

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import TLink from './TLink'
import { ShellContext } from './shell-context'
import { JUMP_PAGES, PAGES, SAMPLES } from '@/lib/data'

const GLYPHS = '#%&@*+=?'
const MENU: { label: string; href: string; key: string }[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Work', href: '/work', key: 'work' },
  { label: 'Samples', href: '/samples', key: 'samples' },
  { label: 'Tools', href: '/tools', key: 'tools' },
  { label: 'Reviews', href: '/reviews', key: 'reviews' },
  { label: 'Me', href: '/me', key: 'me' },
  { label: 'Contact', href: '/contact', key: 'contact' },
]

const reduced = () => matchMedia('(prefers-reduced-motion:reduce)').matches
const topKey = (u: string) => u.split('/').filter(Boolean)[0] || 'home'
const hrefFor = (key: string) => (key === 'home' ? '/' : '/' + key)

function routeKey(pathname: string) {
  const [first = '', slug = ''] = pathname.split('/').filter(Boolean)
  let key = first || 'home'
  if (key === 'about') key = 'me'
  const known = (PAGES as readonly string[]).includes(key)
  if (!known) key = 'home'
  return { key, slug: key === 'samples' ? slug : '' }
}

/** Menu link whose label scrambles on hover. */
function MenuLink({
  href,
  label,
  current,
  onNavigate,
}: {
  href: string
  label: string
  current: boolean
  onNavigate: () => void
}) {
  const [text, setText] = useState(label)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearInterval(timer.current), [])

  const scramble = () => {
    if (reduced()) return
    window.clearInterval(timer.current)
    let n = 0
    timer.current = window.setInterval(() => {
      setText(
        label
          .split('')
          .map((c, i) => (i < n ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(''),
      )
      if (++n > label.length) {
        window.clearInterval(timer.current)
        setText(label)
      }
    }, 45)
  }

  return (
    <TLink href={href} aria-current={current ? 'page' : undefined} onClick={onNavigate} onMouseEnter={scramble}>
      {text}
    </TLink>
  )
}

export default function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { key, slug } = routeKey(pathname)

  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [palOpen, setPalOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState(0)
  const [clock, setClock] = useState('')
  const [themeLabel, setThemeLabel] = useState('Dark')

  const wipe = useRef<HTMLDivElement>(null)
  const pbar = useRef<HTMLDivElement>(null)
  const gbg = useRef<HTMLDivElement>(null)
  const menuClose = useRef<HTMLButtonElement>(null)
  const palInput = useRef<HTMLInputElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const wipeTimer = useRef<number | undefined>(undefined)
  const pathRef = useRef(pathname)
  const prevPath = useRef<string | null>(null)

  useEffect(() => {
    if (pathRef.current !== pathname) {
      prevPath.current = pathRef.current
      pathRef.current = pathname
    }
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  /* page transition: colour wipe, then route */
  const go = useCallback(
    (url: string, replace = false) => {
      const cur = pathRef.current
      if (url === cur) return
      const nav = () => (replace ? router.replace(url) : router.push(url))
      const w = wipe.current
      if (!w || reduced() || topKey(url) === topKey(cur)) {
        nav()
        return
      }
      w.classList.remove('go')
      void w.offsetWidth
      w.classList.add('go')
      window.clearTimeout(wipeTimer.current)
      wipeTimer.current = window.setTimeout(nav, 560)
      window.setTimeout(() => w.classList.remove('go'), 1100)
    },
    [router],
  )

  const closeViewer = useCallback(() => {
    if (prevPath.current === '/samples') router.back()
    else go('/samples', true)
  }, [router, go])

  const api = useMemo(() => ({ go, closeViewer }), [go, closeViewer])

  /* loader */
  useEffect(() => {
    const t = window.setTimeout(
      () => {
        setLoaded(true)
        window.setTimeout(() => document.body.classList.add('ready'), 350)
      },
      reduced() ? 0 : 1450,
    )
    return () => window.clearTimeout(t)
  }, [])

  /* theme */
  const isDark = () => {
    const r = document.documentElement
    return r.dataset.theme ? r.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches
  }
  useEffect(() => setThemeLabel(isDark() ? 'Light' : 'Dark'), [])
  const toggleTheme = () => {
    const r = document.documentElement
    r.dataset.theme = isDark() ? 'light' : 'dark'
    try {
      localStorage.setItem('t', r.dataset.theme)
    } catch {
      /* ignore */
    }
    setThemeLabel(isDark() ? 'Light' : 'Dark')
  }

  /* menu */
  const toggleMenu = (open: boolean) => {
    setMenuOpen(open)
    document.body.style.overflow = open ? 'hidden' : ''
  }
  useEffect(() => {
    if (menuOpen) menuClose.current?.focus()
  }, [menuOpen])

  /* quick jump palette */
  const items = useMemo(
    () => [
      ...JUMP_PAGES.map((p) => ({ title: p.title, sub: 'Page', path: p.path })),
      ...SAMPLES.map((s) => ({ title: s.name, sub: s.category + ' (preview here)', path: '/samples/' + s.slug })),
    ],
    [],
  )
  const list = items.filter((i) => (i.title + ' ' + i.sub).toLowerCase().includes(query.toLowerCase()))
  const selected = Math.min(sel, Math.max(list.length - 1, 0))

  const openPalette = useCallback(() => {
    toggleMenu(false)
    lastFocus.current = document.activeElement as HTMLElement | null
    setQuery('')
    setSel(0)
    setPalOpen(true)
  }, [])
  const closePalette = useCallback(() => {
    setPalOpen(false)
    lastFocus.current?.focus?.()
  }, [])
  useEffect(() => {
    if (palOpen) palInput.current?.focus()
  }, [palOpen])

  const choose = (i?: { path: string }) => {
    if (!i) return
    setPalOpen(false)
    go(i.path)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = (e.target as HTMLElement | null)?.tagName || ''
      if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && t !== 'INPUT' && t !== 'TEXTAREA')) {
        e.preventDefault()
        openPalette()
      } else if (e.key === 'Escape') {
        setMenuOpen(false)
        document.body.style.overflow = ''
        if (palOpen) closePalette()
      }
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [palOpen, openPalette, closePalette])

  /* hud: clock */
  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Manila',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' Manila',
      )
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  /* hud: scroll progress */
  useEffect(() => {
    const sp = () => {
      const d = document.documentElement.scrollHeight - innerHeight
      if (pbar.current) pbar.current.style.transform = `scaleX(${d > 0 ? scrollY / d : 0})`
    }
    sp()
    addEventListener('scroll', sp, { passive: true })
    return () => removeEventListener('scroll', sp)
  }, [pathname])

  /* hud: grid glow + magnetic buttons */
  useEffect(() => {
    const glow = (e: PointerEvent) => {
      gbg.current?.style.setProperty('--mx', e.clientX + 'px')
      gbg.current?.style.setProperty('--my', e.clientY + 'px')
    }
    addEventListener('pointermove', glow)

    const undo: (() => void)[] = []
    if (!reduced() && matchMedia('(hover:hover) and (pointer:fine)').matches) {
      document.querySelectorAll<HTMLElement>('.hb .pill,.fab,.mark').forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect()
          el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.28}px,${(e.clientY - r.top - r.height / 2) * 0.4}px)`
        }
        const leave = () => {
          el.style.transform = ''
        }
        el.addEventListener('pointermove', move)
        el.addEventListener('pointerleave', leave)
        undo.push(() => {
          el.removeEventListener('pointermove', move)
          el.removeEventListener('pointerleave', leave)
        })
      })
    }
    return () => {
      removeEventListener('pointermove', glow)
      undo.forEach((f) => f())
    }
  }, [])

  const idx = (PAGES as readonly string[]).indexOf(key)
  const nextKey = PAGES[(idx + 1) % PAGES.length]
  const nextLabel = nextKey.charAt(0).toUpperCase() + nextKey.slice(1)

  return (
    <ShellContext.Provider value={api}>
      <div id="load" role="status" className={loaded ? 'off' : undefined}>
        <div>
          <p>Materializing shapes...</p>
          <i></i>
        </div>
      </div>
      <div className="pbar" id="pbar" ref={pbar}></div>
      <div className="gbg" id="gbg" ref={gbg} aria-hidden="true"></div>
      <div id="wipe" ref={wipe} aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

      <header>
        <TLink className="mark" href="/" aria-label="404 Studio home">
          404studio<i>.</i>click
        </TLink>
        <div className="hb">
          <TLink
            className="pill home"
            id="hm"
            href="/"
            data-h="← Back"
            aria-label="Back to home"
            aria-current={key === 'home' ? 'page' : undefined}
          >
            <span>Home</span>
          </TLink>
          <button className="pill" id="th" type="button" aria-label="Switch theme" onClick={toggleTheme}>
            {themeLabel}
          </button>
          <button
            className="pill"
            id="mb"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu"
            onClick={() => toggleMenu(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <div className="hud" aria-hidden="true">
        <span>
          <i className="live"></i>Online
        </span>
        <span id="clk">{clock}</span>
        <span id="pgl">{'Now at /' + key + (slug ? '/' + slug : '')}</span>
        <span id="cnt">{SAMPLES.length + (SAMPLES.length === 1 ? ' sample site' : ' sample sites')}</span>
        <span>Quezon City, PH</span>
      </div>

      <nav id="menu" className={menuOpen ? 'on' : undefined} aria-label="Main menu">
        <button className="pill" id="mc" type="button" ref={menuClose} onClick={() => toggleMenu(false)}>
          Close
        </button>
        {MENU.map((m) => (
          <MenuLink
            key={m.key}
            href={m.href}
            label={m.label}
            current={m.key === key}
            onNavigate={() => toggleMenu(false)}
          />
        ))}
        <button className="srch" id="jk" type="button" onClick={openPalette}>
          Search pages and samples (Ctrl K)
        </button>
      </nav>

      <main id="top">
        {children}
        <section className="nxs">
          <TLink className="next" id="nx" href={hrefFor(nextKey)}>
            <small>Next page</small>
            <strong>{nextLabel}</strong>
          </TLink>
        </section>
      </main>

      <footer>
        © Kean Carl Donato · 404 Studio. Designed and built in Quezon City, Philippines.
        <br />
        <a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a>
        <a href="viber://chat?number=%2B639619679095">Viber</a>
        <TLink href="/me">About me</TLink>
      </footer>

      <div
        id="pal"
        className={palOpen ? 'on' : undefined}
        role="dialog"
        aria-modal="true"
        aria-label="Quick jump"
        onPointerDown={(e) => {
          if (e.target === e.currentTarget) closePalette()
        }}
      >
        <div className="pbx">
          <input
            id="pi"
            ref={palInput}
            value={query}
            placeholder="Jump to a page or sample..."
            autoComplete="off"
            aria-label="Search pages and samples"
            onChange={(e) => {
              setQuery(e.target.value)
              setSel(0)
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setSel(Math.min(selected + 1, list.length - 1))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setSel(Math.max(selected - 1, 0))
              } else if (e.key === 'Enter') {
                choose(list[selected])
              }
            }}
          />
          <ul id="pl">
            {list.length ? (
              list.map((i, n) => (
                <li key={i.path} className={n === selected ? 'sel' : undefined} onClick={() => choose(i)}>
                  {i.title}
                  <span>{i.sub}</span>
                </li>
              ))
            ) : (
              <li>No match. Try a different word.</li>
            )}
          </ul>
          <small>Arrow keys to move, Enter to open, Esc to close</small>
        </div>
      </div>

      <TLink className={'fab' + (key === 'samples' ? ' hide' : '')} id="fab" href="/samples">
        Browse samples
      </TLink>
    </ShellContext.Provider>
  )
}
