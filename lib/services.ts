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
    seoTitle: 'Salon Websites in the Philippines',
    metaDescription: 'A clear, mobile-friendly website for salon owners in the Philippines to show services, share practical details and help clients plan a visit.',
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
      { question: 'Do you work with salons across the Philippines?', answer: 'Yes. I am based in the Philippines and work remotely, so a salon in Metro Manila, Cebu, Davao or anywhere else can work with me online.' },
    ],
    relatedWorkSlugs: ['tmm-clippers', 'maison-lumi', 'bellaluz'],
    ctaText: 'Discuss a salon website',
    shortDescription: 'Present salon services, practical details and a clear way for clients to get in touch.',
  },
  {
    slug: 'booking-system-for-barbershops',
    seoTitle: 'Barbershop Booking System in the Philippines',
    metaDescription: 'A barbershop booking system for owners in the Philippines: clients see your services and details, then send appointment requests online.',
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
      { question: 'Do you work with barbershops across the Philippines?', answer: 'Yes. I am based in the Philippines and work remotely, so a barbershop in Metro Manila, Cebu, Davao or anywhere else can work with me online.' },
    ],
    relatedWorkSlugs: [],
    ctaText: 'Discuss a barbershop booking system',
    shortDescription: 'Help barbershop clients understand services and send appointment requests online.',
  },
  {
    slug: 'website-for-restaurants',
    seoTitle: 'Restaurant Websites in the Philippines',
    metaDescription: 'A restaurant website for the Philippines that puts your menu, location and contact or ordering information in one mobile-friendly place.',
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
    seoTitle: 'Online Stores for Philippine Small Shops',
    metaDescription: 'An online store for small shops in the Philippines to present products clearly and give customers a direct way to place orders.',
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
  {
    slug: 'website-for-spas',
    seoTitle: 'Spa Websites in the Philippines',
    metaDescription: 'A calm, mobile-friendly website for spa owners in the Philippines to present treatments and packages and receive booking requests.',
    h1: 'A spa website that helps guests choose a treatment and ask to book',
    intro: 'Give guests one calm, clear place to explore your treatments, understand what each includes and decide how to reach you. I build spa websites for owners who want useful treatment and package information and a simple path from browsing to a booking request.',
    problems: [
      'Guests may need to message just to learn which treatments, durations or packages you offer.',
      'Social posts can show the atmosphere, but treatment details, hours and how to book are hard to find in one place.',
      'When the next step is unclear, interested visitors may leave without sending an enquiry.',
    ],
    whatYouGet: [
      'A responsive spa website shaped around your treatments and the information guests need.',
      'Organized treatment, package, hours, location and contact details using the content you provide.',
      'A clear route for visitors to ask a question or request a booking.',
    ],
    features: [
      'Treatment and package pages that explain what guests can ask for.',
      'Gallery areas for your space, rooms and atmosphere.',
      'Booking or enquiry forms, or links to Messenger or Viber, where they suit your process.',
      'Mobile layouts that keep essential information easy to scan.',
    ],
    process: [
      'We discuss your spa, your guests and the questions people most often ask.',
      'I organize the pages and content around the actions visitors need to take.',
      'I build the site and share it with you to review the content and experience.',
      'After your feedback, I prepare the approved website for launch.',
    ],
    faq: [
      { question: 'Can the website list my treatments and packages?', answer: 'Yes. The pages can organize the treatment and package details you provide, such as what is included, so visitors know what your spa offers.' },
      { question: 'Can guests book a treatment online?', answer: 'The site can include an enquiry or booking request form, or link to the chat app you already use. Confirming a booking depends on the process agreed for your spa.' },
      { question: 'Do you work with spas across the Philippines?', answer: 'Yes. I am based in the Philippines and work remotely, so a spa in Metro Manila, Cebu, Davao or anywhere else can work with me online.' },
    ],
    relatedWorkSlugs: [],
    ctaText: 'Discuss a spa website',
    shortDescription: 'Present treatments, packages and a clear way for guests to book or ask a question.',
  },
  {
    slug: 'website-for-coffee-shops',
    seoTitle: 'Coffee Shop Websites in the Philippines',
    metaDescription: 'A coffee shop website for the Philippines with your menu, story, location and hours in one fast, mobile-friendly place.',
    h1: 'A coffee shop website that helps people find you and order',
    intro: 'Help customers find you, see what you serve and know when you are open. I build coffee shop websites that bring your menu, story, location and hours together, with a clear next step whether that is visiting, ordering or getting in touch.',
    problems: [
      'Customers may have to search several profiles to find your menu, hours and exact location.',
      'A menu shared only as a photo can be hard to read on a phone and awkward to keep current.',
      'Visitors need to know how to ask about an order, a reservation or an event.',
    ],
    whatYouGet: [
      'A responsive website that presents your café and the information you provide.',
      'A readable menu area for drinks and food, organized the way you serve them.',
      'A clear route to your chosen contact, pre-order or ordering method.',
    ],
    features: [
      'Menu pages grouped by the categories and details you supply.',
      'Location, opening hours and a map link in easy-to-find places.',
      'Photo galleries of your space, drinks and food.',
      'Links or forms that guide visitors to your existing ordering or enquiry process.',
    ],
    process: [
      'We discuss your coffee shop, your customers and what they ask most often.',
      'I organize the menu and key information into a clear page structure.',
      'I build the website and share it for your review on mobile and desktop.',
      'After you approve the content and experience, I prepare the site for launch.',
    ],
    faq: [
      { question: 'Can you put my menu on the website?', answer: 'Yes. I can organize the drinks and food you provide into a menu page designed to be read on phones and larger screens.' },
      { question: 'Can the website take orders?', answer: 'The site can guide visitors to an ordering or pre-order method agreed for your coffee shop. The available features depend on the systems and requirements we choose together.' },
      { question: 'Do you work with coffee shops across the Philippines?', answer: 'Yes. I am based in the Philippines and work remotely, so a coffee shop in Metro Manila, Cebu, Davao or anywhere else can work with me online.' },
    ],
    relatedWorkSlugs: ['kape-noval'],
    ctaText: 'Discuss a coffee shop website',
    shortDescription: 'Bring your menu, hours, location and ordering information together in one fast page.',
  },
  {
    slug: 'portfolio-website-for-creatives',
    seoTitle: 'Portfolio Websites for Filipino Creatives',
    metaDescription: 'A fast, mobile-friendly portfolio website for Filipino freelancers and creatives to show their work and receive client enquiries.',
    h1: 'A portfolio website that turns visitors into client enquiries',
    intro: 'Show your best work in one fast, clear place and make it easy for clients to contact you. I build portfolio websites for freelancers, photographers, designers and other creatives who want their work and their enquiry route to stand out.',
    problems: [
      'Work scattered across social profiles and file links can be hard for a client to browse.',
      'A client who cannot quickly see your best work, services and contact details may move on.',
      'Without a clear enquiry route, interested visitors may not know how to hire you.',
    ],
    whatYouGet: [
      'A responsive portfolio shaped around your strongest work and the services you offer.',
      'Project or case study pages using the images, text and results you provide.',
      'A clear route for clients to ask about working with you.',
    ],
    features: [
      'Project galleries and case study pages.',
      'An about page and services area that explain who you are and what you do.',
      'Contact or enquiry forms, with links to your email, Messenger or Viber where useful.',
      'Fast, mobile-friendly layouts so your work loads quickly on any connection.',
    ],
    process: [
      'We discuss your work, your ideal clients and what you want them to do next.',
      'I choose the projects to feature and organize the pages around them.',
      'I build the portfolio and share it with you to review the content and experience.',
      'After your feedback, I prepare the approved website for launch.',
    ],
    faq: [
      { question: 'What do I need to provide?', answer: 'Your best images or project files, short descriptions of each project, a short bio and your contact details. I can help organize them.' },
      { question: 'Can I add new projects myself later?', answer: 'That depends on how the site is built. We can discuss whether you want to update projects yourself or have changes made for you.' },
      { question: 'Do you work with creatives across the Philippines?', answer: 'Yes. I am based in the Philippines and work remotely, so a freelancer or studio in Metro Manila, Cebu, Davao or anywhere else can work with me online.' },
    ],
    relatedWorkSlugs: [],
    ctaText: 'Discuss a portfolio website',
    shortDescription: 'Show your best work and give clients a clear way to contact you.',
  },
]

export const SERVICES_BY_SLUG = new Map(SERVICES.map((service) => [service.slug, service]))