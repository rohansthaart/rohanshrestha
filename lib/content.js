import kastharaThumb from '../public/images/works/Kasthara.png'
import khajaqrThumb from '../public/images/works/khajaqr.jpeg'
import pronunlyThumb from '../public/images/works/pronunly.png'
import autismSansarThumb from '../public/images/works/autismsansar.png'
import cgnetThumb from '../public/images/works/cgnetwebsite.png'
import nagarpalikaThumb from '../public/images/works/nagarpalika.png'
import planningThumb from '../public/images/works/planning.png'
import richInteriorThumb from '../public/images/works/richInterior.png'
import markdownThumb from '../public/images/works/markdown.png'
import cocktailThumb from '../public/images/works/cocktaildb.png'

import sketchThumb from '../public/images/arts/sketch_1.jpg'
import paintingThumb from '../public/images/arts/painting_1.jpg'

import businessFlyer from '../public/images/graphics/flyers_autismsansar.png'
import productBrochure from '../public/images/graphics/banner_autsimsansar.png'
import employeeIdCard from '../public/images/graphics/id_card_autismsansar.png'
import eventPhotoBooth from '../public/images/graphics/photobooth_autismsansar.png'
import promotionalLeaflet from '../public/images/graphics/leaflet_khajaqr.png'
import autismLeaflet from '../public/images/graphics/leaflet_autismsansar.png'
import kastharaInstagramPost from '../public/images/graphics/instagram_post_kasthara.png'
import kastharaLogo from '../public/images/graphics/logo_kasthara.png'
import clipexpenseLogo from '../public/images/graphics/logo_clipexpense.png'
import cgnetSocialGraphic from '../public/images/graphics/graphics_cgnet.png'
import pronunlySocialGraphic from '../public/images/graphics/graphics_pronunly.png'
import shresthaInteractiveGraphic from '../public/images/graphics/graphics_shrestha_interactive.png'
import eventPhotoBoothPatan from '../public/images/graphics/photobooth_autismsansar_patan.png'
import autismSansarLogo from '../public/images/graphics/logo_autism_Sansar.png'
import khajaQrLogo from '../public/images/graphics/HeroImage_illustration_khajaqr.png'
import pronunlyLogo from '../public/images/graphics/pronunly_logo.png'
import bannerPatan from '../public/images/graphics/banner_autsimsansar_patan.png'
import eventPhotoBoothJaulakhel from '../public/images/graphics/photobooth_autismsansar_jaulakhel.png'
import kastharaLogoRealWorld from '../public/images/graphics/kasthara_logo_realworld.png'
import productBrochureAlt from '../public/images/graphics/banner_autsimsansar2.png'

export const workProjects = [
  {
    slug: 'khajaqr',
    title: 'Khaja QR',
    label: 'Featured Case Study',
    year: '2025',
    category: 'Full-stack Product',
    thumbnail: khajaqrThumb,
    heroImage: '/images/works/khajaqr_01.jpeg',
    intro:
      'QR-based ordering platform for fast-moving Nepali cafes and restaurants.',
    summary:
      'Built a browser-first ordering flow that helps restaurant teams reduce queue friction, improve order accuracy, and move customers through billing faster.',
    role:
      'Product UI, workflow design, and web implementation across the ordering experience.',
    stack: ['Next.js', 'React', 'Restaurant UX', 'Payments'],
    website: 'https://khajaqr.com/',
    focus: 'Workflow design, live order handling, and clear operational UX.',
    outcomes: [
      'Made table-side ordering feel immediate, without an app install.',
      'Connected customer actions to live restaurant operations and kitchen flow.',
      'Kept the interface simple enough for busy in-store contexts.'
    ],
    features: [
      'Scan a table QR and open the menu instantly.',
      'Track orders in real time across customer and service touchpoints.',
      'Support local payment methods including Fonepay, Khalti, and IME Pay.',
      'Auto-print kitchen order tickets as orders are confirmed.',
      'Let merchants mark items sold out instantly during service.'
    ],
    gallery: ['/images/works/khajaqr_01.jpeg'],
    primary: true
  },
  {
    slug: 'pronunly',
    title: 'Pronunly',
    label: 'Interactive Platform',
    year: '2025',
    category: 'Frontend Experience',
    thumbnail: pronunlyThumb,
    heroImage: '/images/works/pronunly_01.png',
    intro:
      'Interactive pronunciation practice platform focused on clarity, confidence, and fast feedback.',
    summary:
      'Designed and developed a modern learning experience that makes pronunciation practice feel guided, responsive, and motivating.',
    role:
      'Frontend experience, interaction design, and product polish across the practice flow.',
    stack: ['Next.js', 'Web Audio API', 'Responsive UI'],
    website: 'https://pronunly.com',
    focus: 'Learning flow clarity, engagement, and responsive audio-led UI.',
    outcomes: [
      'Made practice sessions easy to start and easy to repeat.',
      'Used real-time feedback patterns to keep the product encouraging rather than intimidating.',
      'Balanced pedagogy with interface clarity on desktop and mobile.'
    ],
    features: [
      'Guided pronunciation practice with phonetic and playback support.',
      'Clear learning interface built for repeat daily use.',
      'Progress tracking that reinforces consistency over time.'
    ],
    gallery: [
      '/images/works/pronunly_01.png',
      '/images/works/pronunly_02.png',
      '/images/works/pronunly_03.png'
    ]
  },
  {
    slug: 'cgnetwebsite',
    title: 'CGNET Website',
    label: 'Production Website',
    year: '2025',
    category: 'Website Delivery',
    thumbnail: cgnetThumb,
    heroImage: '/images/works/cgnetwebsite_01.jpeg',
    intro:
      'Production website delivery for one of Nepal\'s most visible internet service providers.',
    summary:
      'Contributed to a real-world rollout where presentation quality, maintainability, and dependable implementation all mattered at once.',
    role:
      'Frontend delivery, visual quality, and production support for the public website.',
    stack: ['Laravel', 'Tailwind CSS', 'Website Delivery'],
    website: 'https://cgnet.com.np/',
    focus: 'Marketing presentation, maintainability, and rollout confidence.',
    outcomes: [
      'Improved the presentation layer for a high-visibility consumer brand.',
      'Worked within production constraints instead of treating the site like a concept build.',
      'Kept the experience maintainable for real handoff and support.'
    ],
    features: [
      'Structured service content for quick scanning and comparison.',
      'Delivered a cleaner user journey across consumer website pages.',
      'Built with maintainable frontend patterns in a Laravel stack.'
    ],
    gallery: [
      '/images/works/cgnetwebsite_01.jpeg',
      '/images/works/cgnetwebsite_02.png',
      '/images/works/cgnetwebsite_03.jpeg'
    ]
  },
  {
    slug: 'autismsansar',
    title: 'Autism Sansar',
    label: 'Mission-led Platform',
    year: '2024',
    category: 'Community Website',
    thumbnail: autismSansarThumb,
    heroImage: '/images/works/autismsansar.png',
    intro:
      'Platform supporting autism awareness, family guidance, and inclusion-focused outreach in Nepal.',
    summary:
      'Helped shape a purpose-driven digital experience that needed warmth, clarity, and trust more than visual noise.',
    role:
      'Platform presentation, communication clarity, and accessibility-minded content framing.',
    stack: ['Website UX', 'Content Strategy', 'Awareness Platform'],
    website: 'https://autismsansar.com.np/',
    focus: 'Trust-building communication and mission-led digital outreach.',
    outcomes: [
      'Supported families with clearer access to information and services.',
      'Used the website as a communication tool, not just a static brochure.',
      'Matched a sensitive subject matter with a calmer, more supportive presentation.'
    ],
    features: [
      'Awareness resources that explain autism accessibly.',
      'Family-centered support information and guidance.',
      'Program and outreach communication focused on inclusion.'
    ],
    gallery: [
      '/images/works/autismsansar.png',
      '/images/works/autismsansar_01.jpeg'
    ]
  },
  {
    slug: 'kasthara',
    title: 'Kasthara',
    label: 'Brand Website',
    year: '2024',
    category: 'Commerce Storytelling',
    thumbnail: kastharaThumb,
    heroImage: '/images/works/kasthara.png',
    intro:
      'Website presence for a personalized wood engraving brand based in Kathmandu.',
    summary:
      'Balanced product storytelling with visual warmth so the brand felt handcrafted and premium without becoming cluttered.',
    role:
      'Website presentation, storytelling structure, and digital brand execution.',
    stack: ['Brand Web', 'Product Storytelling', 'Visual Design'],
    website: 'https://kasthara.com/',
    focus: 'Presenting handmade products with warmth, clarity, and trust.',
    outcomes: [
      'Made the brand feel more premium and gift-ready online.',
      'Framed customization options clearly for buyers.',
      'Connected product visuals with the emotional context of gifting and events.'
    ],
    features: [
      'Clear presentation of personalized wood products and keepsakes.',
      'Wedding and event use cases communicated through structured storytelling.',
      'Support for custom order themes, engraving needs, and gifting contexts.'
    ],
    gallery: ['/images/works/kasthara.png', '/images/works/kasthara_01.jpeg']
  },
  {
    slug: 'nagarpalika',
    title: 'Nagarpalika Service Delivery',
    label: 'Civic Platform',
    year: '2022',
    category: 'Public Service Software',
    thumbnail: nagarpalikaThumb,
    heroImage: '/images/works/nagarpalika.png',
    intro:
      'Municipal service platform designed to structure and scale digital civic workflows.',
    summary:
      'Worked on a complex public-sector product where system organization, reliability, and service clarity were more important than visual novelty.',
    role:
      'Web delivery and UX support across multi-service municipal workflows.',
    stack: ['Node.js', 'React', 'Civic Systems'],
    website: 'https://phidim.cliffbyte.com/',
    focus: 'System structure, service access, and large workflow coordination.',
    outcomes: [
      'Brought order to a platform spanning many civic services.',
      'Supported service delivery patterns that had to work for real public users.',
      'Contributed to a more scalable digital foundation for municipal use.'
    ],
    features: [
      'Microservice-backed service ecosystem for multiple municipal workflows.',
      'Centralized access to service delivery touchpoints.',
      'Architecture built for breadth, reliability, and continued expansion.'
    ],
    gallery: ['/images/works/nagarpalika.png']
  },
  {
    slug: 'planning',
    title: 'Planning Management System',
    label: 'City Operations',
    year: '2022',
    category: 'Operational Platform',
    thumbnail: planningThumb,
    heroImage: '/images/works/planning.png',
    intro:
      'Planning and coordination software for Pokhara Metropolitan City.',
    summary:
      'Helped shape a city-scale platform for task coordination, reporting, and planning workflows that required clarity over flourish.',
    role:
      'Frontend implementation and workflow structure for planning operations.',
    stack: ['Node.js', 'React', 'Planning Workflows'],
    website: 'https://test.pokharamun.gov.np/',
    focus: 'Task coordination, reporting clarity, and municipal operational UX.',
    outcomes: [
      'Turned complex administrative work into trackable digital flows.',
      'Made planning tasks easier to organize and follow across teams.',
      'Supported a more structured operational rhythm for city-level work.'
    ],
    features: [
      'Centralized workspace for planning and assignment.',
      'Task tracking and deadline visibility for teams.',
      'Resource-aware workflow structure across operational phases.'
    ],
    gallery: [
      '/images/works/planning.png',
      '/images/works/planning_01.png',
      '/images/works/planning_02.png'
    ]
  },
  {
    slug: 'richInterior',
    title: 'Rich Interior',
    label: 'Experiment',
    year: '2020',
    category: 'E-commerce Concept',
    thumbnail: richInteriorThumb,
    heroImage: '/images/works/richInterior.png',
    intro:
      'Early ecommerce concept for an interior design and decor brand.',
    summary:
      'Explored how a product-rich shopping experience could feel polished, image-led, and easy to browse.',
    role:
      'Frontend concept design and React-based implementation.',
    stack: ['React'],
    website: 'https://rich-interior.netlify.app/',
    focus: 'Product presentation and a more immersive browse experience.',
    outcomes: [
      'Explored visual merchandising on the web.',
      'Built a cleaner product browsing concept with strong imagery.',
      'Used the project as an early exercise in ecommerce presentation.'
    ],
    features: [
      'Curated product browsing for furniture and decor.',
      'Responsive browsing patterns across device sizes.',
      'Visual-first presentation for high-interest products.'
    ],
    gallery: [
      '/images/works/richInterior.png',
      '/images/works/richInterior_01.png',
      '/images/works/richInterior_02.png',
      '/images/works/richInterior_03.png'
    ],
    experimental: true
  },
  {
    slug: 'markdown',
    title: 'Markdown Editor',
    label: 'Experiment',
    year: '2020',
    category: 'Writing Tool',
    thumbnail: markdownThumb,
    heroImage: '/images/works/markdown.png',
    intro:
      'Simple writing-focused editor with live Markdown preview.',
    summary:
      'Built as a clean interface experiment around authoring, preview, and focus.',
    role:
      'Frontend implementation and editor UI concepting.',
    stack: ['React'],
    website: 'https://resplendent-entremet-7c6794.netlify.app/',
    focus: 'Writing flow clarity and real-time feedback.',
    outcomes: [
      'Explored how far a small utility could go with a clean interface.',
      'Used live preview to keep writing feedback immediate.',
      'Practiced turning a technical utility into a more approachable tool.'
    ],
    features: [
      'Markdown editing with real-time preview.',
      'Simple interface that keeps attention on writing.',
      'Responsive React implementation.'
    ],
    gallery: ['/images/works/markdown.png'],
    experimental: true
  },
  {
    slug: 'cocktailDb',
    title: 'The CocktailDB',
    label: 'Experiment',
    year: '2020',
    category: 'Search Experience',
    thumbnail: cocktailThumb,
    heroImage: '/images/works/cocktaildb.png',
    intro:
      'Lightweight recipe discovery interface built around external cocktail data.',
    summary:
      'Used the project to explore search-driven browsing, content display, and friendlier consumer UI patterns.',
    role:
      'Frontend interface design and React implementation.',
    stack: ['React'],
    website: 'https://cocktail-reactproject.netlify.app/',
    focus: 'Search, browsing flow, and information display.',
    outcomes: [
      'Turned reference data into a faster browse experience.',
      'Practiced content hierarchy and repeatable result layouts.',
      'Used a small scope to sharpen UI fundamentals.'
    ],
    features: [
      'Searchable cocktail database interface.',
      'Recipe and ingredient browsing patterns.',
      'Responsive frontend implementation.'
    ],
    gallery: ['/images/works/cocktaildb.png'],
    experimental: true
  }
]

export const featuredProjectSlugs = ['khajaqr', 'pronunly', 'cgnetwebsite']

export const technicalSkillGroups = [
  {
    title: 'Frontend Systems',
    description: 'The stack I lean on most for polished, product-facing interface work.',
    items: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Chakra UI', icon: 'chakraui' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' }
    ]
  },
  {
    title: 'Backend Delivery',
    description: 'Enough backend depth to carry features past the presentation layer.',
    items: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'PostgreSQL', icon: 'postgresql' }
    ]
  },
  {
    title: 'Quality And Shipping',
    description: 'The supporting tools that keep releases sturdier and easier to evolve.',
    items: [
      { name: 'React Query', icon: 'reactquery' },
      { name: 'Zod', icon: 'zod' },
      { name: 'Vitest', icon: 'vitest' },
      { name: 'Docker', icon: 'docker' }
    ]
  }
]

export const graphicsProjects = [
  {
    id: 'product-brochure',
    title: 'Product Brochure',
    category: 'Print Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'Brochure-style banner layouts created for Autism Sansar promotional use.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: productBrochure,
    storyText:
      'Designed to communicate offerings quickly with a cleaner, more accessible layout.',
    gallery: {
      design: [
        {
          src: productBrochure,
          alt: 'Product brochure layout for Autism Sansar'
        },
        {
          src: productBrochureAlt,
          alt: 'Alternate product brochure layout for Autism Sansar'
        }
      ],
      realWorld: [
        {
          src: bannerPatan,
          alt: 'Banner used at an Autism Sansar event in Patan',
          caption: 'Shown in a real event setting, where legibility and scale mattered.'
        }
      ]
    }
  },
  {
    id: 'event-photobooth-frame',
    title: 'Event Photo Booth Frame',
    category: 'Event Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'Photo booth frame concept designed for Autism Sansar public events.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: eventPhotoBooth,
    storyText:
      'A concept-to-event flow showing how the final piece performs in live community settings.',
    gallery: {
      design: [
        {
          src: eventPhotoBooth,
          alt: 'Photobooth frame design concept for Autism Sansar'
        }
      ],
      realWorld: [
        {
          src: eventPhotoBoothPatan,
          alt: 'Photobooth frame used at an Autism Sansar event in Patan',
          caption: 'Live event setup in Patan.'
        },
        {
          src: eventPhotoBoothJaulakhel,
          alt: 'Photobooth frame used at an Autism Sansar event in Jaulakhel',
          caption: 'Live event setup in Jaulakhel.'
        }
      ]
    }
  },
  {
    id: 'employee-id-card',
    title: 'Employee ID Card',
    category: 'Identity Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'Identity card system prepared for the Autism Sansar team.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: employeeIdCard,
    storyText:
      'An identity asset focused on consistency, readability, and brand trust.',
    gallery: {
      design: [
        {
          src: employeeIdCard,
          alt: 'Employee ID card design system for Autism Sansar'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'promotional-leaflet',
    title: 'Promotional Leaflet',
    category: 'Print Design',
    client: 'KhajaQR',
    clientLogo: khajaQrLogo,
    description:
      'Compact leaflet design made for KhajaQR offers and local promotions.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: promotionalLeaflet,
    storyText:
      'Print collateral designed for quick offer communication and street-level clarity.',
    gallery: {
      design: [
        {
          src: promotionalLeaflet,
          alt: 'Promotional leaflet design for KhajaQR'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'business-flyer',
    title: 'Business Flyer',
    category: 'Campaign Creative',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'Promotional flyer built for Autism Sansar campaigns and awareness work.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: businessFlyer,
    storyText:
      'Campaign collateral built to support awareness with a stronger visual hook.',
    gallery: {
      design: [
        {
          src: businessFlyer,
          alt: 'Business flyer design for Autism Sansar'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'kasthara-brand-logo',
    title: 'Kasthara Brand Logo',
    category: 'Brand Identity',
    client: 'Kasthara',
    clientLogo: kastharaLogo,
    description:
      'Logo direction crafted for Kasthara with a clean and memorable mark.',
    tools: ['Illustrator', 'Photoshop'],
    thumbnail: kastharaLogo,
    storyText:
      'Identity exploration focused on recall, warmth, and versatile application.',
    gallery: {
      design: [
        {
          src: kastharaLogo,
          alt: 'Kasthara logo design'
        }
      ],
      realWorld: [
        {
          src: kastharaLogoRealWorld,
          alt: 'Kasthara logo applied in a real-world context',
          caption: 'Storefront application showing scale and visibility.'
        }
      ]
    }
  },
  {
    id: 'clipexpense-logo',
    title: 'Clipexpense Logo',
    category: 'Brand Identity',
    client: 'Clipexpense',
    clientLogo: clipexpenseLogo,
    description:
      'Product logo concept developed for Clipexpense brand positioning.',
    tools: ['Illustrator'],
    thumbnail: clipexpenseLogo,
    storyText:
      'A minimal digital mark tuned for recognition at small sizes.',
    gallery: {
      design: [
        {
          src: clipexpenseLogo,
          alt: 'Clipexpense logo concept'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'cgnet-social-graphic',
    title: 'CGNET Social Graphic',
    category: 'Marketing Graphic',
    client: 'CGNET',
    clientLogo: cgnetSocialGraphic,
    description:
      'Campaign visual created for CGNET digital and social media use.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: cgnetSocialGraphic,
    storyText:
      'Social-first creative built for speed, readability, and brand presence.',
    gallery: {
      design: [
        {
          src: cgnetSocialGraphic,
          alt: 'CGNET social campaign graphic design'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'autism-sansar-leaflet',
    title: 'Autism Sansar Leaflet',
    category: 'Print Design',
    client: 'Autism Sansar',
    clientLogo: autismSansarLogo,
    description:
      'Service-focused leaflet layout prepared for Autism Sansar outreach.',
    tools: ['Illustrator', 'Canva'],
    thumbnail: autismLeaflet,
    storyText:
      'Service messaging turned into a cleaner, outreach-ready print format.',
    gallery: {
      design: [
        {
          src: autismLeaflet,
          alt: 'Autism Sansar service leaflet layout'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'kasthara-instagram-post',
    title: 'Kasthara Instagram Post',
    category: 'Social Creative',
    client: 'Kasthara',
    clientLogo: kastharaLogo,
    description:
      'Social media post creative designed for Kasthara digital campaigns.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: kastharaInstagramPost,
    storyText:
      'Campaign creative shaped for brand consistency in fast-scroll social feeds.',
    gallery: {
      design: [
        {
          src: kastharaInstagramPost,
          alt: 'Kasthara Instagram post creative'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'pronunly-social-graphic',
    title: 'Pronunly Social Graphic',
    category: 'Marketing Graphic',
    client: 'Pronunly',
    clientLogo: pronunlyLogo,
    description:
      'Promotional social graphic created for Pronunly brand communication.',
    tools: ['Photoshop', 'Illustrator'],
    thumbnail: pronunlySocialGraphic,
    storyText:
      'Branded social direction tuned for clarity and confident communication.',
    gallery: {
      design: [
        {
          src: pronunlySocialGraphic,
          alt: 'Pronunly social graphic concept'
        }
      ],
      realWorld: []
    }
  },
  {
    id: 'shrestha-interactive-graphic',
    title: 'Shrestha Interactive Graphic',
    category: 'Campaign Graphic',
    client: 'Shrestha Interactive',
    clientLogo: shresthaInteractiveGraphic,
    description:
      'Campaign graphic designed for Shrestha Interactive promotions.',
    tools: ['Photoshop', 'Canva'],
    thumbnail: shresthaInteractiveGraphic,
    storyText:
      'High-impact digital creative shaped for promotion-heavy channels.',
    gallery: {
      design: [
        {
          src: shresthaInteractiveGraphic,
          alt: 'Shrestha Interactive campaign graphic design'
        }
      ],
      realWorld: []
    }
  }
]

export const artCollections = [
  {
    slug: 'sketch',
    title: 'Sketch',
    thumbnail: sketchThumb,
    intro:
      'Graphite and pen-based drawing studies focused on expression, detail, and observation.',
    description:
      'A quieter body of personal work built around line, patience, and visual storytelling through black-and-white studies.',
    note:
      'These pieces are less about polish and more about attention. They show how I think through form, rhythm, and emotional detail when the medium gets stripped back.',
    instagram: 'https://www.instagram.com/rohanstha.art/',
    video: 'https://www.youtube.com/embed/fcR7N5BSYK4?si=rnlPW2w7SLJcxkoK',
    imageCount: 9,
    imagePath: i => `/images/arts/sketch/sketch_${String(i).padStart(2, '0')}.jpg`
  },
  {
    slug: 'painting',
    title: 'Painting',
    thumbnail: paintingThumb,
    intro:
      'Color-rich paintings built around mood, contrast, and textured composition.',
    description:
      'A personal collection that explores atmosphere and emotion through broader shapes, richer contrast, and slower visual pacing.',
    note:
      'The painting work complements the product portfolio by showing a different side of craft: less systems thinking, more material intuition.',
    instagram: 'https://www.instagram.com/rohanstha.art/',
    video: 'https://www.youtube.com/embed/fcR7N5BSYK4?si=rnlPW2w7SLJcxkoK',
    imageCount: 4,
    imagePath: i =>
      `/images/arts/painting/painting_${String(i).padStart(2, '0')}.jpg`
  }
]

export const getWorkBySlug = slug =>
  workProjects.find(project => project.slug === slug)

export const primaryProjects = workProjects.filter(project => !project.experimental)

export const experimentalProjects = workProjects.filter(project => project.experimental)

export const featuredProjects = featuredProjectSlugs
  .map(slug => getWorkBySlug(slug))
  .filter(Boolean)

export const getArtCollectionBySlug = slug =>
  artCollections.find(collection => collection.slug === slug)
