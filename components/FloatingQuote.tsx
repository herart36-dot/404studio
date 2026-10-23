'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function FloatingQuote() {
  const pathname = usePathname()
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting
      document.documentElement.classList.toggle('footer-visible', visible)
      setFooterVisible(visible)
    })
    observer.observe(footer)

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('footer-visible')
    }
  }, [pathname])

  if (pathname === '/contact' || footerVisible) return null

  return (
    <Link className="pill floating-quote" href="/contact">
      Get a quote
    </Link>
  )
}
