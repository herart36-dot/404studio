export type ServiceFaq = { question: string; answer: string }

export type Service = {
  slug: string
  seoTitle: string
  metaDescription: string
  h1: string
  intro: string
  problems: string[]
  whatYouGet: string[]
  features: string[]
  process: string[]
  faq: ServiceFaq[]
  relatedWorkSlugs: string[]
  ctaText: string
  shortDescription: string
}

export const SERVICES: Service[] = [
  {
    slug: 'website-for-salons',
    seoTitle: 'Salon Websites',
    metaDescription: 'A clear, mobile-friendly website for salon owners to present services, share practical details and help clients plan a visit.',
    h1: 'A website that helps salon clients choose their next visit',
    intro: 'Give people one clear place to explore your salon, understand what you offer and decide how to get in touch. I build salon websites for owners who want useful service information and a straightforward path from browsing to booking.',
    problems: [
      'Clients may need to message just to find your services, opening details or location.',
      'A social profile can show your work, but important details and booking instructions can be difficult to find together.',
      'When the next step is unclear, interested visitors may leave without making an enquiry.',
    ],
    whatYouGet: [
      'A responsive website shaped around your salon and the information clients need.',
      'Organized service, hours, location and contact details using the content you provide.',
      'A clear route for visitors to ask a question or request an appointment.',
    ],
    features: [
      'Service and treatment pages that explain what clients can ask for.',
      'Gallery areas for salon photos and examples of your work.',
      'Contact or appointment enquiry forms, where appropriate to your process.',
      'Mobile layouts that keep essential information easy to scan.',
    ],
    process: [
      'We discuss your salon, customers and the questions people most often ask.',
      'I organize the pages and content around the actions visitors need to take.',
      'I build the site and share it with you to review the content and experience.',
      'After your feedback, I prepare the approved website for launch.',
    ],
    faq: [
      { question: 'Can the website show my salon services?', answer: 'Yes. The pages can organize the service information and details you provide so visitors can understand what your salon offers.' },
      { question: 'Can clients request an appointment online?', answer: 'The site can include a contact or appointment enquiry form. The form can be planned around how you want requests to reach you.' },
      { question: 'Do I need to be in the Philippines?', answer: 'No. I am based in the Philippines and work remotely with clients worldwide. We can discuss the project online.' },
    ],
    relatedWorkSlugs: ['tmm-clippers', 'maison-lumi', 'bellaluz'],
    ctaText: 'Discuss a salon website',
    shortDescription: 'Present salon services, practical details and a clear way for clients to get in touch.',
  },
  {
    slug: 'booking-system-for-barbershops',
    seoTitle: 'Barbershop Booking Systems',
    metaDescription: 'A barbershop booking system that helps clients find the details they need and send appointment requests online.',
    h1: 'A simpler way for barbershop clients to request a slot',
    intro: 'Make it easier for clients to understand your services and send an appointment request without relying on scattered messages. I can build a booking-focused website around the way your barbershop wants to receive and manage enquiries.',
    problems: [
      'Appointment requests across different message threads can be hard to keep track of.',
      'Clients may not know which service to choose or what information to include in a request.',
      'Without clear hours, location and contact details, visitors may need to ask before deciding to book.',
    ],
    whatYouGet: [
      'A barbershop website with service, hours, location and contact information.',
      'A booking enquiry flow that collects the details agreed for your process.',
      'A mobile-friendly experience for clients checking availability on their phones.',
    ],
    features: [
      'Service choices and descriptions that help clients explain what they need.',
      'Appointment request forms with fields selected for your workflow.',
      'Clear confirmation guidance so clients know what happens after submitting a request.',
      'Contact details and location information alongside the booking path.',
    ],
    process: [
      'We map how clients currently request appointments and what information you need.',
      'I plan the booking flow and the supporting service and shop information.',
      'I build the website and form, then share them for your review.',
      'After revisions, I prepare the approved experience for launch.',
    ],
    faq: [
      { question: 'Does a booking form guarantee a confirmed appointment?', answer: 'Not by itself. A request form can send an enquiry; the confirmation step depends on the process agreed for your barbershop.' },
      { question: 'Can the form ask about a service or preferred time?', answer: 'Yes. We can define form fields around the details you need from clients to respond to a request.' },
      { question: 'Can we work together remotely?', answer: 'Yes. I am based in the Philippines and work remotely with clients worldwide, using online conversations and reviews.' },
    ],
    relatedWorkSlugs: [],
    ctaText: 'Discuss a barbershop booking system',
    shortDescription: 'Help barbershop clients understand services and send appointment requests online.',
  },
  {
    slug: 'website-for-restaurants',
    seoTitle: 'Restaurant Websites',
    metaDescription: 'A restaurant website that puts your menu, location and contact or ordering information in one mobile-friendly place.',
    h1: 'A restaurant website built around the guest’s next step',
    intro: 'Help guests decide whether to visit or get in touch by making your menu and practical details easy to find. I build restaurant websites that bring your information together and make the next action clear.',
    problems: [
      'Guests may have to search several profiles to find the menu, opening details and location.',
      'Menu information can be difficult to read or keep current when it is only shared as an image.',
      'Visitors need to know how to ask about a visit, place an order or contact the restaurant.',
    ],
    whatYouGet: [
      'A responsive website that presents the restaurant and the information you provide.',
      'A structured menu area that is readable on phones and desktop screens.',
      'A clear route to your chosen contact, reservation or ordering method.',
    ],
    features: [
      'Menu pages organized by the categories and details you supply.',
      'Location, hours and contact information in easy-to-find areas.',
      'Food and venue photography presented in a gallery where useful.',
      'Links or forms that guide visitors to your existing enquiry or ordering process.',
    ],
    process: [
      'We identify what guests need to know before visiting or contacting you.',
      'I organize the menu and key information into a clear page structure.',
      'I build the website and share it for your review on mobile and desktop.',
      'After you approve the content and experience, I prepare the site for launch.',
    ],
    faq: [
      { question: 'Can you put my menu on the website?', answer: 'Yes. I can organize menu information that you provide into a web page designed to be read on different screen sizes.' },
      { question: 'Can the website accept orders?', answer: 'The site can guide visitors to an ordering method agreed for your business. The available ordering features depend on the systems and requirements we choose together.' },
      { question: 'Do you work with restaurants outside the Philippines?', answer: 'Yes. I am based in the Philippines and work remotely with clients worldwide.' },
    ],
    relatedWorkSlugs: ['kape-noval'],
    ctaText: 'Discuss a restaurant website',
    shortDescription: 'Bring your menu, location and guest contact or ordering information together.',
  },
  {
    slug: 'online-store-for-small-shops',
    seoTitle: 'Online Stores for Small Shops',
    metaDescription: 'An online store for small shops to present products clearly and give customers a direct way to place orders.',
    h1: 'An online store that makes your products easy to browse',
    intro: 'Give customers a useful way to explore your products and understand how to order. I build online stores for small shops with product pages and a shopping flow planned around the shop’s catalogue and fulfilment process.',
    problems: [
      'Product details spread across social posts can be difficult for customers to compare.',
      'Customers may need to message repeatedly to ask about options, availability or ordering.',
      'A shop needs a clear path from product discovery to placing an order.',
    ],
    whatYouGet: [
      'A storefront organized around the products and information you provide.',
      'Product pages that help shoppers review relevant details and options.',
      'An ordering flow planned to fit your chosen way of handling orders.',
    ],
    features: [
      'Product categories and pages for images, descriptions and options.',
      'A cart or order enquiry flow, depending on your requirements.',
      'Clear shipping, collection or ordering guidance based on your shop’s process.',
      'Responsive layouts so customers can browse on mobile devices.',
    ],
    process: [
      'We review your catalogue, product details and how you want orders handled.',
      'I plan the storefront structure and the steps customers take to place an order.',
      'I build the store and share it for your review with the provided product content.',
      'After feedback and approval, I prepare the agreed store experience for launch.',
    ],
    faq: [
      { question: 'Can customers order products through the store?', answer: 'The site can include an ordering flow suited to your requirements. The exact checkout and payment setup is decided based on your chosen systems.' },
      { question: 'Can I show product options?', answer: 'Product pages can present options and details you provide, with the ordering flow planned to collect the selections customers need to make.' },
      { question: 'Can we work together if my shop is outside the Philippines?', answer: 'Yes. I am based in the Philippines and work remotely with clients worldwide.' },
    ],
    relatedWorkSlugs: ['pillowpop', 'rootwell'],
    ctaText: 'Discuss an online store',
    shortDescription: 'Present products clearly and plan a straightforward path for customers to order.',
  },
]

export const SERVICES_BY_SLUG = new Map(SERVICES.map((service) => [service.slug, service]))
