'use client'

import { createContext, useContext } from 'react'

export type ShellApi = {
  /** Navigate with the colour-wipe page transition (like the original site). */
  go: (url: string, replace?: boolean) => void
  /** Close the sample viewer: back if we came from /samples, otherwise replace. */
  closeViewer: () => void
}

export const ShellContext = createContext<ShellApi>({
  go: (url) => {
    window.location.href = url
  },
  closeViewer: () => {
    window.location.href = '/samples'
  },
})

export const useShell = () => useContext(ShellContext)
