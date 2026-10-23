'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useShell } from './shell-context'

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string }

/** <Link> that plays the page-wipe transition before navigating. */
export default function TLink({ href, onClick, ...rest }: Props) {
  const { go } = useShell()
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        go(href)
      }}
    />
  )
}
