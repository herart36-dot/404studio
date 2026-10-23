import type { Metadata } from 'next'
import { DESCRIPTIONS, SITE_URL, TITLES } from './data'

const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Kean Carl Donato, web developer portfolio at 404studio.click',
}

/** Full per-page metadata (title, description, canonical, Open Graph, Twitter). */
export function pageMeta(
  key: string,
  path: string,
  override?: { title?: string; description?: string },
): Metadata {
  const title = override?.title ?? TITLES[key]
  const description = override?.description ?? DESCRIPTIONS[key]
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'Kean Carl Donato | 404 Studio',
      locale: 'en_PH',
      url: SITE_URL + path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
  }
}
