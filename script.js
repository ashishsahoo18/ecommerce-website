/* ============================================================
   BLOCKROCK — script.js
   All interactivity: products, cart, wishlist, filters, slider,
   dark mode, modal, toast, timer, search
   ============================================================ */
console.log("JavaScript Loaded");
'use strict';

/* ============================================================
   PRODUCT DATA (130 products)
   Images from Unsplash (free, no auth required)
   ============================================================ */
const PRODUCTS = [
  // ── MOBILES ──────────────────────────────────────────────
  {
    id: 1, name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung',
    category: 'Mobiles', price: 81400, original: 91999, rating: 4.7, reviews: 12540,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_Fy4hdwyIQZXTCWmpOp0l7en3LHDvHxgIa836PSsF7HlgJNsjGuUszPm2q2i55sG6EmEPvjTX4GRZRJhRxV7lZe5E6KO7',
    badge: 'hot', tags: ['5G', '200MP Camera', 'Titanium'],
    desc: 'The most powerful Galaxy ever. 200MP camera, built-in S Pen, 12GB RAM, 256GB storage, and titanium frame for ultimate durability.',
    tab: ['bestseller', 'featured'],
  },
  {
    id: 2, name: 'Apple iPhone 16 Pro Max', brand: 'Apple',
    category: 'Mobiles', price: 149900, original: 169900, rating: 4.8, reviews: 23800,
    image: 'https://www.bbassets.com/media/uploads/p/xxl/40330658_6-apple-iphone-16-pro-max-1tb-desert-titanium.jpg',
    badge: 'hot', tags: ['A17 Pro', 'Titanium', 'USB-C'],
    desc: 'Titanium design with A17 Pro chip, 48MP main camera with 5× telephoto, Action button and USB 3 speeds.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 3, name: 'OnePlus 12R 5G', brand: 'OnePlus',
    category: 'Mobiles', price: 39999, original: 49999, rating: 4.5, reviews: 8700,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTryi7KDDHNFTPNNVgwiYrslxJWF9ytweP08WE-71X1OUUfemZlU-pcZ7GiW-0bg6NugDrnZDr9GMZhuOWWRW7G-_lHJcl14lNiq4ZgnX7vJbEuh4VEcBN3Pw',
    badge: null, tags: ['5G', 'Snapdragon 8 Gen 2', '100W Charging'],
    desc: 'Flagship-grade performance at a mid-range price. 6.78" AMOLED, 120Hz, 50MP Sony camera, 5400mAh battery.',
    tab: ['new', 'topdeals'],
  },
  {
    id: 4, name: 'Redmi Note 13 Pro+', brand: 'Xiaomi',
    category: 'Mobiles', price: 26999, original: 34999, rating: 4.4, reviews: 15200,
    image: 'https://rukminim2.flixcart.com/image/1500/1500/xif0q/mobile/z/l/m/note-13-pro-5g-mzb0g42inin-mzb0g42in-redmi-original-imah4e97g4agtgut.jpeg',
    badge: 'new', tags: ['200MP', '120W HyperCharge', '5G'],
    desc: 'Flagship camera experience at an affordable price. 200MP camera, 120W fast charging, and a stunning curved AMOLED display.',
    tab: ['new', 'flashsale'],
  },

  // ── LAPTOPS ──────────────────────────────────────────────
  {
    id: 5, name: 'MacBook Pro 14" M3 Pro', brand: 'Apple',
    category: 'Laptops', price: 199900, original: 229900, rating: 4.9, reviews: 6400,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnytenrofUc82GBmbSjdu2hmHoxi6lvfZxdOtPMYSzv2uGbSkwXOo51xGRzKGQoBD7-YZiDSMfgrmgBAnsTLTDj5QPA9Zh',
    badge: 'hot', tags: ['M3 Pro', '18GB RAM', 'Liquid Retina XDR'],
    desc: 'Supercharged by M3 Pro chip. Up to 22 hours battery life, Liquid Retina XDR display, and ProRes video.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 6, name: 'Dell XPS 15 OLED', brand: 'Dell',
    category: 'Laptops', price: 174990, original: 199990, rating: 4.6, reviews: 3200,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlrbl9PUaCwnPzC8ct5Ft5uIByHFPudBHH3GWCg2GJDCkHL3a-1314aoU3yWba0hbs6hE_5gbYANB3YytHbptlP7XoHMlfVvEZcDEo8GoQ0PZ3_Pa1kUEj6A',
    badge: null, tags: ['Intel i9', 'RTX 4070', '3.5K OLED'],
    desc: 'The ultimate Windows content creation machine. 3.5K OLED display, 32GB RAM, 1TB NVMe SSD.',
    tab: ['featured'],
  },
  {
    id: 7, name: 'ASUS ROG Zephyrus G14', brand: 'ASUS',
    category: 'Laptops', price: 139990, original: 164990, rating: 4.7, reviews: 5100,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLPHJ8kL5sMfLxK9W3L_wmpzyP4JHfAda5n6JaK_OAmSev6qb2rYzYaWMHspvA6C4EthFwX9ek_euYJAz1DhDfwDUiTVgvRkid3lqP96hJq_15_kSebpeqhg',
    badge: 'hot', tags: ['Ryzen 9', 'RTX 4060', 'AniMe Matrix'],
    desc: 'Compact gaming powerhouse. AMD Ryzen 9, 32GB DDR5, ROG Nebula OLED display with 120Hz refresh rate.',
    tab: ['featured', 'topdeals'],
  },
  {
    id: 8, name: 'Lenovo ThinkPad X1 Carbon', brand: 'Lenovo',
    category: 'Laptops', price: 154990, original: 185990, rating: 4.5, reviews: 2900,
    image: 'https://p1-ofp.static.pub/ShareResource/optimized/pdp/thinkpad/thinkpad-x1-series/len101t0112/thinkpad-x1-2-in-1-gen-10-aura-edition-14-intel-lnl.png',
    badge: null, tags: ['Intel i7', 'Business Grade', 'Lightweight'],
    desc: 'The gold standard for business laptops. Feather-light carbon fibre build, MIL-SPEC tested durability, and 15hr battery.',
    tab: ['bestseller'],
  },

  // ── SMART WATCHES ─────────────────────────────────────────
  {
    id: 9, name: 'Apple Watch Ultra 2', brand: 'Apple',
    category: 'SmartWatches', price: 89900, original: 99900, rating: 4.8, reviews: 9800,
    image: 'https://s3bg.cashify.in/gpro/uploads/2023/02/13113714/apple-watch-ultra-2-front-1.webp',
    badge: 'hot', tags: ['Titanium', 'Precision GPS', '60hr Battery'],
    desc: 'Built for extreme adventure. Titanium case, Precision GPS, 60-hour battery life, and 100m water resistance.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 10, name: 'Samsung Galaxy Watch 6 Classic', brand: 'Samsung',
    category: 'SmartWatches', price: 39999, original: 49999, rating: 4.5, reviews: 7200,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_jeFNM_NaaynaaGQ3igYi89Qvd6FobwMGe796Ry1jpjvo_zn-zwxDzt4Zn5yoICW7p49XhUt7p9t-QkXczrbzS-i13iLvqMWQt-ZjWgY',
    badge: null, tags: ['Rotating Bezel', 'Health Tracker', 'BioActive Sensor'],
    desc: 'Premium smartwatch with the iconic rotating bezel. Advanced health monitoring including BioActive Sensor.',
    tab: ['new', 'topdeals'],
  },
  {
    id: 11, name: 'Garmin Fenix 7X Solar', brand: 'Garmin',
    category: 'SmartWatches', price: 61152, original: 95990, rating: 4.7, reviews: 3100,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSieCgzBFv0wZsTM-0g30A2OIw6VAGm1gJjwNlXy-1g0Hc29lQlBSKrXNWOYYdWcQ6SqE3PJ8IjgS-pqgoVan3hUNdSqAyPUjVSDhIYu1EpWNuskIAZj57P',
    badge: null, tags: ['Solar Charging', 'GPS Multisport', '28-day Battery'],
    desc: 'Ultimate outdoor GPS smartwatch with solar charging technology, multi-sport tracking, and 28-day battery life.',
    tab: ['featured'],
  },
  {
    id: 12, name: 'Samsung Galaxy Watch Ultra', brand: 'Samsung',
    category: 'SmartWatches', price: 59999, original: 69999, rating: 4.7, reviews: 8400,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    badge: 'hot', tags: ['Titanium', 'Dual GPS', 'Sports Tracking'],
    desc: 'Premium smartwatch with advanced fitness tracking, dual-frequency GPS and rugged titanium design.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 13, name: 'Garmin Fenix 8', brand: 'Garmin',
    category: 'SmartWatches', price: 89990, original: 99990, rating: 4.9, reviews: 5200,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
    badge: 'premium', tags: ['AMOLED', 'Adventure', 'Multi-Sport'],
    desc: 'Elite GPS smartwatch designed for athletes, adventurers and outdoor enthusiasts.',
    tab: ['premium', 'featured'],
  },
  {
    id: 14, name: 'OnePlus Watch 3', brand: 'OnePlus',
    category: 'SmartWatches', price: 24999, original: 29999, rating: 4.6, reviews: 11300,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
    badge: 'new', tags: ['AMOLED', 'Health Tracking', 'Long Battery'],
    desc: 'Stylish smartwatch with premium design, health sensors and extended battery life.',
    tab: ['new', 'featured'],
  },
  {
    id: 15, name: 'Google Pixel Watch 3', brand: 'Google',
    category: 'SmartWatches', price: 39999, original: 45999, rating: 4.7, reviews: 6700,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500',
    badge: 'hot', tags: ['Wear OS', 'Fitbit', 'Heart Rate'],
    desc: 'Google smartwatch with Fitbit integration and advanced wellness tracking.',
    tab: ['featured', 'trending'],
  },
  {
    id: 16, name: 'Huawei Watch GT 5 Pro', brand: 'Huawei',
    category: 'SmartWatches', price: 32999, original: 38999, rating: 4.6, reviews: 5900,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500',
    badge: 'premium', tags: ['Titanium', 'Golf Mode', '14-Day Battery'],
    desc: 'Premium smartwatch with elegant design and impressive battery performance.',
    tab: ['premium', 'featured'],
  },
  {
    id: 17, name: 'Amazfit T-Rex 3', brand: 'Amazfit',
    category: 'SmartWatches', price: 19999, original: 24999, rating: 4.5, reviews: 7800,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500',
    badge: 'trending', tags: ['Military Grade', 'GPS', 'Outdoor'],
    desc: 'Rugged smartwatch built for extreme conditions and outdoor adventures.',
    tab: ['trending', 'featured'],
  },
  {
    id: 18, name: 'Fitbit Sense 2', brand: 'Fitbit',
    category: 'SmartWatches', price: 24999, original: 29999, rating: 4.5, reviews: 9400,
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=500',
    badge: 'bestseller', tags: ['Stress Tracking', 'ECG', 'Health'],
    desc: 'Advanced health-focused smartwatch with ECG and stress management tools.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 19, name: 'Noise ColorFit Pro 6', brand: 'Noise',
    category: 'SmartWatches', price: 4999, original: 6999, rating: 4.4, reviews: 32400,
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=500',
    badge: 'sale', tags: ['Bluetooth Calling', 'AMOLED', 'Fitness'],
    desc: 'Feature-packed smartwatch with vibrant AMOLED display and calling support.',
    tab: ['sale', 'featured'],
  },
  {
    id: 20, name: 'boAt Lunar Pro LTE', brand: 'boAt',
    category: 'SmartWatches', price: 8999, original: 11999, rating: 4.3, reviews: 18600,
    image: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500',
    badge: 'new', tags: ['LTE', 'AMOLED', 'Calling'],
    desc: 'Affordable smartwatch with LTE connectivity and smart calling features.',
    tab: ['new', 'trending'],
  },
  {
    id: 21, name: 'Fire-Boltt Dream', brand: 'Fire-Boltt',
    category: 'SmartWatches', price: 5999, original: 7999, rating: 4.2, reviews: 22100,
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500',
    badge: 'sale', tags: ['Android Apps', '4G', 'Touchscreen'],
    desc: 'Smartwatch with app support, calling features and stylish design.',
    tab: ['sale', 'featured'],
  },
  {
    id: 22, name: 'Fossil Gen 6 Wellness', brand: 'Fossil',
    category: 'SmartWatches', price: 21999, original: 29999, rating: 4.5, reviews: 6400,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
    badge: 'premium', tags: ['Wear OS', 'Classic Design', 'Wellness'],
    desc: 'Elegant smartwatch combining classic aesthetics with smart features.',
    tab: ['premium', 'featured'],
  },
  {
    id: 23, name: 'Casio G-Shock GBD-H2000', brand: 'Casio',
    category: 'SmartWatches', price: 34999, original: 39999, rating: 4.7, reviews: 4800,
    image: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=500',
    badge: 'hot', tags: ['G-Shock', 'Solar Charging', 'Rugged'],
    desc: 'Ultra-durable sports smartwatch with solar charging and GPS tracking.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 24, name: 'Xiaomi Watch 2 Pro', brand: 'Xiaomi',
    category: 'SmartWatches', price: 19999, original: 24999, rating: 4.4, reviews: 9700,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500',
    badge: 'trending', tags: ['Wear OS', 'GPS', 'Fitness'],
    desc: 'Premium Xiaomi smartwatch featuring Wear OS and advanced tracking.',
    tab: ['trending', 'featured'],
  },
  {
    id: 25, name: 'Realme Watch S2', brand: 'Realme',
    category: 'SmartWatches', price: 5999, original: 7999, rating: 4.3, reviews: 15900,
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500',
    badge: 'sale', tags: ['Bluetooth Calling', 'Sports Modes', 'AMOLED'],
    desc: 'Affordable smartwatch packed with health and fitness features.',
    tab: ['sale', 'featured'],
  },
  {
    id: 26, name: 'Titan Smart Pro', brand: 'Titan',
    category: 'SmartWatches', price: 12999, original: 15999, rating: 4.4, reviews: 8900,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500',
    badge: 'featured', tags: ['Premium Design', 'Health Tracking', 'AMOLED'],
    desc: 'Stylish smartwatch from Titan with premium finish and smart features.',
    tab: ['featured', 'trending'],
  },
  {
    id: 27, name: 'Nothing CMF Watch Pro 2', brand: 'CMF',
    category: 'SmartWatches', price: 4999, original: 6999, rating: 4.5, reviews: 12100,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500',
    badge: 'new', tags: ['Minimal Design', 'GPS', 'Calling'],
    desc: 'Modern smartwatch with clean design and useful smart features.',
    tab: ['new', 'featured'],
  },
  {
    id: 28, name: 'Polar Vantage V3', brand: 'Polar',
    category: 'SmartWatches', price: 54999, original: 59999, rating: 4.8, reviews: 2700,
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=500',
    badge: 'premium', tags: ['Training Load', 'Recovery', 'GPS'],
    desc: 'Advanced performance watch with detailed training insights.',
    tab: ['premium', 'featured'],
  },
  {
    id: 29, name: 'Mobvoi TicWatch Pro 5', brand: 'Mobvoi',
    category: 'SmartWatches', price: 28999, original: 34999, rating: 4.6, reviews: 5100,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
    badge: 'hot', tags: ['Wear OS', 'Dual Display', 'Long Battery'],
    desc: 'Powerful Wear OS smartwatch with exceptional battery life.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 30, name: 'Amazfit Balance', brand: 'Amazfit',
    category: 'SmartWatches', price: 22999, original: 27999, rating: 4.6, reviews: 7400,
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500',
    badge: 'featured', tags: ['Wellness', 'GPS', 'AI Coach'],
    desc: 'Smartwatch focused on balancing fitness, recovery and daily health.',
    tab: ['featured', 'trending'],
  },

  // ── EARBUDS ────────────────────────────────────────────────
  {
    id: 31, name: 'Sony WF-1000XM5', brand: 'Sony',
    category: 'Earbuds', price: 24990, original: 29990, rating: 4.8, reviews: 18400,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSl1dBGRjgMeg-JxliCiKK6cK-MwgRKlUafsKtILXfFSqaJ4MDQVktVmO49cOdAtrbrJPtmJMXkQKLtGSw9nnj1pTm0D23eCWVGCAOXZXT5RNSvReY72mJS',
    badge: 'hot', tags: ['ANC', 'LDAC', '8hr Battery'],
    desc: 'Industry-leading noise cancellation in the smallest, lightest WF-1000X series ever. Hi-Res Audio Wireless with LDAC.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 32, name: 'Apple AirPods Pro 2nd Gen', brand: 'Apple',
    category: 'Earbuds', price: 24900, original: 29900, rating: 4.7, reviews: 31000,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTMJXCLWId2m2It9x05XPbmIy4EylEuL0qKC39XtGFmy7Vdx20fgHnaN3v3b5obDgHrzsOToIhyLh5f4EKPT0g76MGkVcXCwLBvqRLFqGrkQWVgSotVn4CsnQ',
    badge: null, tags: ['H2 Chip', 'Adaptive Audio', 'USB-C'],
    desc: 'Next-level Active Noise Cancellation, Transparency mode, and Adaptive Audio for seamless listening.',
    tab: ['bestseller'],
  },
  {
    id: 33, name: 'Nothing Ear (2)', brand: 'Nothing',
    category: 'Earbuds', price: 9999, original: 11999, rating: 4.4, reviews: 11200,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTfMMEz6I0qF9of561ZoshodfdX9IX9F0LBkALrN7zcP8vD0vd7QNiny9XalEWTTO9H-07mu1rouy0trM9QDNEI2j2UhWi-glSVuS7CEP_9f2W8-g4mDrzP',
    badge: 'new', tags: ['Transparent Design', 'ANC', 'LHDC 5.0'],
    desc: 'Iconic transparent design with Hi-Res LHDC 5.0 audio, dual ANC technology, and 6-mic clear call system.',
    tab: ['new', 'topdeals'],
  },
  {
    id: 34, name: 'Bose QuietComfort Earbuds II', brand: 'Bose',
    category: 'Earbuds', price: 22990, original: 27990, rating: 4.6, reviews: 8900,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    badge: null, tags: ['CustomTune ANC', '6hr Battery', 'IPX4'],
    desc: 'World\'s best noise cancelling earbuds with CustomTune sound calibration technology.',
    tab: ['featured'],
  },
  {
    id: 35, name: 'Apple AirPods Pro 2', brand: 'Apple',
    category: 'Earbuds', price: 24900, original: 26900, rating: 4.9, reviews: 45200,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7KffMP0BPubecjYAqKFqxWXaBndtJJTjkbI-BeA3rib7Ja_2QoF2mAThCnc4m7JFPsUQ3VsQ1hT1ABQjq52XRmYF2X6bjha8CuOfENO8vENCLHN6Ypr2CpWfz6zuxDLbtnRYHZs0&usqp=CAc',
    badge: 'bestseller', tags: ['ANC', 'Spatial Audio', 'USB-C'],
    desc: 'Premium wireless earbuds with active noise cancellation, adaptive audio and personalized spatial audio.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 36, name: 'Samsung Galaxy Buds3 Pro', brand: 'Samsung',
    category: 'Earbuds', price: 19999, original: 24999, rating: 4.7, reviews: 17600,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    badge: 'hot', tags: ['ANC', 'Hi-Fi Audio', '360 Audio'],
    desc: 'Premium earbuds delivering immersive sound and intelligent noise cancellation.',
    tab: ['featured', 'trending'],
  },
  {
    id: 37, name: 'Bose QuietComfort Ultra Earbuds', brand: 'Bose',
    category: 'Earbuds', price: 26999, original: 31999, rating: 4.8, reviews: 9200,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500',
    badge: 'premium', tags: ['ANC', 'Immersive Audio', 'Premium'],
    desc: 'World-class noise cancellation paired with rich and detailed sound.',
    tab: ['premium', 'featured'],
  },
  {
    id: 38, name: 'Sennheiser Momentum True Wireless 4', brand: 'Sennheiser',
    category: 'Earbuds', price: 24990, original: 29990, rating: 4.8, reviews: 7800,
    image: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500',
    badge: 'premium', tags: ['Hi-Fi', 'ANC', 'Audiophile'],
    desc: 'Exceptional audio quality with adaptive ANC and premium craftsmanship.',
    tab: ['premium', 'featured'],
  },
  {
    id: 39, name: 'Nothing Ear (2024)', brand: 'Nothing',
    category: 'Earbuds', price: 11999, original: 14999, rating: 4.6, reviews: 22400,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500',
    badge: 'new', tags: ['ANC', 'Transparent Design', 'LDAC'],
    desc: 'Stylish transparent earbuds with premium sound and advanced ANC.',
    tab: ['new', 'featured'],
  },
  {
    id: 40, name: 'OnePlus Buds Pro 3', brand: 'OnePlus',
    category: 'Earbuds', price: 11999, original: 13999, rating: 4.7, reviews: 19100,
    image: 'https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?w=500',
    badge: 'hot', tags: ['LHDC', 'ANC', 'Fast Charging'],
    desc: 'Flagship earbuds with rich bass, adaptive ANC and ultra-fast charging.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 41, name: 'Google Pixel Buds Pro 2', brand: 'Google',
    category: 'Earbuds', price: 18999, original: 22999, rating: 4.7, reviews: 8700,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbzG1BV_J9H6v7xWBKGaNE5gOcoYyOE4mQxnYJWYC1evXJnrf_DoRcuAFEE3_x-kuNIPrciYvB27WQ_bFu8ZCJf-Vslr3z1vQgGOM_N1QBH6fc5jgTNNocCvzU0VIpPw&usqp=CAc',
    badge: 'featured', tags: ['ANC', 'Google Assistant', 'Multipoint'],
    desc: 'Smart earbuds optimized for Android with premium sound quality.',
    tab: ['featured', 'trending'],
  },
  {
    id: 42, name: 'Jabra Elite 10', brand: 'Jabra',
    category: 'Earbuds', price: 17999, original: 21999, rating: 4.6, reviews: 6100,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMaRpNgez3FykYKl4pLHV6t7asTZ1O0dKuEdTUWJJFP6U5KvpbBSqJCPnWFBcznxSpFhsTtaw-f5okk71C0KbovJf1SGsKattiXa4wjoB8YuNNVKi1Ph_e6fZZmP-65MhHXWOLrhFS&usqp=CAc',
    badge: 'premium', tags: ['Dolby Atmos', 'ANC', 'Comfort Fit'],
    desc: 'Comfortable premium earbuds designed for music, calls and entertainment.',
    tab: ['premium', 'featured'],
  },
  {
    id: 43, name: 'JBL Live Beam 3', brand: 'JBL',
    category: 'Earbuds', price: 14999, original: 17999, rating: 4.5, reviews: 8900,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfLtc-hVDBr-MDyeZcdQZamLkum2XIiCdzDyk5ATmMy4JH-9TngsR8JdCqPApnUXapIE0mvzKYSb1nulNact7Sl1IxVaiDCP8PC5b9GO70ujAm8srhU82PijC7MMNk&usqp=CAc',
    badge: 'trending', tags: ['JBL Signature', 'ANC', 'Smart Case'],
    desc: 'Powerful sound with adaptive noise cancelling and a smart charging case.',
    tab: ['featured', 'trending'],
  },
  {
    id: 44, name: 'Realme Buds Air 6 Pro', brand: 'Realme',
    category: 'Earbuds', price: 4999, original: 6999, rating: 4.5, reviews: 31500,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfG1FE8znj6OBqEVxhQic5NZ4f7jV5SD59-eX3PKG90fG9pRSqsOvBEP9ptVBUYaQw-gGeAgU78bziBdburWrNqhLs_tdDoS9SyL1NMz0UtJRYps8fJZw0YLYZ8yxDXHBJa0o5zg&usqp=CAc',
    badge: 'sale', tags: ['50dB ANC', 'LDAC', 'Hi-Res Audio'],
    desc: 'Feature-rich earbuds offering excellent value and premium audio quality.',
    tab: ['sale', 'featured'],
  },
  {
    id: 45, name: 'boAt Nirvana Ion ANC', brand: 'boAt',
    category: 'Earbuds', price: 2999, original: 4999, rating: 4.3, reviews: 44100,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSVIfbUymcV0Nibks2HE9tVXQANSlUERTlrsNWORCWuQb4kOnJr0-iXYv1Fn8HTLQ9mLFmy1CGRjWgyK2_4GQCi5UrvThbYdun0C9Z_woLZ-LR7Wzf6MVwb0oLNP5_J-L3U5Nnp7Q&usqp=CAc',
    badge: 'bestseller', tags: ['ANC', '120hr Battery', 'Gaming'],
    desc: 'Long battery life earbuds with active noise cancellation and gaming mode.',
    tab: ['bestseller', 'sale'],
  },
  {
    id: 46, name: 'Noise Buds X Prime', brand: 'Noise',
    category: 'Earbuds', price: 2499, original: 3999, rating: 4.2, reviews: 27300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYcBgRPONqmLq7Y7d6MUBxlWkLEb-voRkTbgl0hkLTm-s_QDK3nwsBPXhsao55U3LkB_6Q0zxNN_ZJ5oS5VYKgSN5R4u26LXhN2r6yTuDB3ejnAdkopuitm73RJQ&usqp=CAc',
    badge: 'sale', tags: ['ENC', 'Gaming Mode', 'Bluetooth 5.3'],
    desc: 'Affordable earbuds designed for daily music, calls and gaming.',
    tab: ['sale', 'featured'],
  },
  {
    id: 47, name: 'Huawei FreeBuds Pro 3', brand: 'Huawei',
    category: 'Earbuds', price: 16999, original: 19999, rating: 4.7, reviews: 5800,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLh6x_CmY5TchJRJLwRwaa2m7pxluaIDNmPHVfntf2yq23cYmWI1OGUg0QAu_QSkGJ5eLQXRoMBom5zeQJ6G0u185s4vqhLBJ4jjeDX9Gu7ub9pYBkEEKNzbXWOmVPPmGIfpuQwQ&usqp=CAc',
    badge: 'premium', tags: ['ANC', 'Dual Drivers', 'Hi-Res'],
    desc: 'Elegant earbuds delivering premium sound and intelligent ANC.',
    tab: ['premium', 'featured'],
  },
  {
    id: 48, name: 'Anker Soundcore Liberty 4 NC', brand: 'Soundcore',
    category: 'Earbuds', price: 8999, original: 11999, rating: 4.7, reviews: 12600,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNycLOIPaZL1lC2_1yAOjfjiiYbfxHef7benZvYwihcqm6s1e1btAniEbMBad0Oo-rMFYk4AGI24vDuoqm1dCPk5ozuKy_gETdyOnqOZHYAAbh55uvOjTDedzOVfY-sKd9rXU-LQ&usqp=CAc',
    badge: 'featured', tags: ['ANC', '50hr Battery', 'LDAC'],
    desc: 'Excellent value earbuds with strong ANC and extended battery life.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 49, name: 'Sony LinkBuds S', brand: 'Sony',
    category: 'Earbuds', price: 14990, original: 18990, rating: 4.6, reviews: 11200,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSmSXSUTge_QcbqfdeLiDLI3pYFatCUPnBluus1OlQ-Lxv0r3A23KPEkzaVlbWDUZYNQvPPXSIwwdQt-pYuTTzsSX34xYooCns5wtJFUYSVo75K45CPbBEkA_HOzcoAJCP5IbbJAIMXPI&usqp=CAc',
    badge: 'trending', tags: ['ANC', 'Lightweight', 'LDAC'],
    desc: 'Compact and lightweight earbuds with premium Sony audio technology.',
    tab: ['featured', 'trending'],
  },
  {
    id: 50, name: 'CMF Buds Pro 2', brand: 'CMF',
    category: 'Earbuds', price: 4299, original: 5999, rating: 4.4, reviews: 16400,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgggb0zIfE2Iz7DCHixSEQBxwHL26c00ZB7Q&s',
    badge: 'new', tags: ['ANC', 'Bass Boost', 'Fast Pair'],
    desc: 'Affordable earbuds offering powerful bass and modern design.',
    tab: ['new', 'featured'],
  },
  {
    id: 51, name: 'Skullcandy Rail ANC', brand: 'Skullcandy',
    category: 'Earbuds', price: 7999, original: 9999, rating: 4.3, reviews: 7200,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOuK5qPm3j1qMcKbJ5mmPZMi_o1JEK_KmMhHDeeQPaPImw_8-s5nwQHKsxW1CfaooZt6EUzhnbSJrTGmO5cH9NXbg-53DxedQQE862bUO1T_JPx2Q2Iyj57w&usqp=CAc',
    badge: 'featured', tags: ['ANC', 'Multipoint', 'IP55'],
    desc: 'Feature-packed earbuds designed for music lovers and active users.',
    tab: ['featured', 'sale'],
  },
  {
    id: 52, name: 'Beats Studio Buds+', brand: 'Beats',
    category: 'Earbuds', price: 16999, original: 19999, rating: 4.7, reviews: 13800,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmeaeTCDBkk-wopGXdUXc2YurOIpHy25Fha8rifXcidSHGBTccEwBFGThOVyjY32GOOADJJmrHGLagCEZCdFgdcSx_m9mLyBfmzvALYNkRs-Q4dM1td26EAWI0bvll7zqVatumsw&usqp=CAc',
    badge: 'hot', tags: ['ANC', 'Transparency Mode', 'Apple Compatible'],
    desc: 'Stylish earbuds with powerful sound and seamless Apple integration.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 53, name: 'Xiaomi Buds 5 Pro', brand: 'Xiaomi',
    category: 'Earbuds', price: 9999, original: 12999, rating: 4.5, reviews: 10300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpKfckJfAvB5wLMAJi0aeDTYV_nXc9H2FMu88R7-GiOkBRNuglff6IVdIIIOGyZ_gktiPmfOPoR-WC_wEO7DEbhntaABY8dT7wftzBkJ0jM6bUGyih2yqOo3Iwria0wCE3pX5h3Q&usqp=CAc',
    badge: 'trending', tags: ['ANC', 'Hi-Res Audio', 'Dual Drivers'],
    desc: 'Premium Xiaomi earbuds featuring advanced audio tuning and ANC.',
    tab: ['trending', 'featured'],
  },

  // ── KEYBOARDS ──────────────────────────────────────────────
  {
    id: 54, name: 'Keychron Q1 Pro', brand: 'Keychron',
    category: 'Keyboards', price: 58527, original: 68527, rating: 4.8, reviews: 5600,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzwSS0y7pP8LLZXTcPL7TlwHer5YDY0SkMqLlumE10pJrboG-Ya9PJEEXkXBD7xmeNh3eEuKzQ2EHJMEbYXLlwh0BXmHHehO6rTZaH8DDIyAkvOPn7wCeD',
    badge: 'hot', tags: ['75% Layout', 'QMK/VIA', 'Gasket Mount'],
    desc: 'Premium wireless mechanical keyboard with QMK/VIA support, RGB backlight, and gasket mount for a typing experience like no other.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 55, name: 'Logitech MX Keys S', brand: 'Logitech',
    category: 'Keyboards', price: 9495, original: 11995, rating: 4.6, reviews: 13200,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLzYATnhmwLeCt2hRsTKCL7G3mQmvETfB8K5EAguhbH3o3qEYP7hoqjY8aj1f7wJ0HkMRJ9pEl88XBzrg3T9juGsOjtGVyrQbc97B5Mvkj',
    badge: null, tags: ['Multi-Device', 'Backlit', 'Flow Cross-Computer'],
    desc: 'Smart wireless keyboard for serious work. Connects up to 3 devices, backlit keys, and Logitech Flow for cross-computer typing.',
    tab: ['bestseller', 'topdeals'],
  },
  {
    id: 56, name: 'Razer BlackWidow V4 Pro', brand: 'Razer',
    category: 'Keyboards', price: 19999, original: 24999, rating: 4.5, reviews: 7400,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdSJMaJ7W9SqeuooB7aas1izDaOXuPgbN9xlDRnAJjTO79ZTWs_RRHvCBEs-fESIMBsKusRbLB1rOMaF-4XtGW8s5YV1jx4yVmxXAlnITZ6Ut97n7I9sApKKi9E071RmKPDDp_RQ&usqp=CAc',
    badge: null, tags: ['Razer Yellow Switches', 'HyperSpeed', 'Command Dial'],
    desc: 'Gaming keyboard with wireless HyperSpeed technology and a tactile command dial.',
    tab: ['featured'],
  },

  // ── FASHION ───────────────────────────────────────────────
  {
    id: 57, name: 'Premium Oversized Hoodie', brand: 'H&M',
    category: 'Fashion', price: 1999, original: 3999, rating: 4.3, reviews: 22100,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDvkXK3xWRaVXZKszbFatPi-E7vONk__IS1wYE5aUNkkM2t-DCrwYDClgBtDzb1lyVHume2awtYm-ybi-T5Mz3UXfFj2DJp3FCW8HIemgZy4l-7AOQWqVc',
    badge: 'new', tags: ['Cotton Blend', 'Unisex', 'Multiple Colors'],
    desc: 'Ultra-soft premium cotton-blend oversized hoodie. Perfect for lazy days or street styling. Available in 8 colours.',
    tab: ['new', 'flashsale'],
  },
  {
    id: 58, name: 'Slim Fit Formal Shirt', brand: 'Van Heusen',
    category: 'Fashion', price: 1499, original: 2999, rating: 4.2, reviews: 14500,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkH9PEySesUPfV7NpoheMJl5sc4yzT91u3AaGF1hB5rt_CJbUK-9obcXTqydqMz421DyYVFZ-TuWdPmv3kmkqjwbit0sqt6LeSXuWx0T-Hf6959VJ5jEwZSg',
    badge: null, tags: ['Wrinkle-Free', 'Cotton', 'Office Ready'],
    desc: 'Professional slim-fit formal shirt with wrinkle-resistant fabric. Office-ready in classic and contemporary colours.',
    tab: ['topdeals', 'flashsale'],
  },
  {
    id: 59, name: 'Classic Slim Fit Denim Jeans', brand: 'Levi\'s',
    category: 'Fashion', price: 2499, original: 4499, rating: 4.5, reviews: 18500,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    badge: 'bestseller', tags: ['Stretch Denim', 'Slim Fit', 'Blue Wash'],
    desc: 'Premium stretch denim jeans with a modern slim fit. Comfortable for all-day wear.',
    tab: ['bestseller', 'trending'],
  },
  {
    id: 60, name: 'Men\'s Casual Checked Shirt', brand: 'Roadster',
    category: 'Fashion', price: 1199, original: 2499, rating: 4.2, reviews: 15600,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
    badge: 'sale', tags: ['Cotton', 'Regular Fit', 'Checked'],
    desc: 'Comfortable cotton checked shirt suitable for casual and office wear.',
    tab: ['sale', 'featured'],
  },
  {
    id: 61, name: 'Men\'s Solid Cotton T-Shirt', brand: 'Puma',
    category: 'Fashion', price: 299, original: 599, rating: 4.4, reviews: 18500,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbrhbmxoM41hXsv4C1YLO7rGc8EHONgfTEeNr0tsUJV31hWAZqqnJgMT0s1AeQ1pCaVbq-K6tITJT2hk6xgZVZ5eIQq9rQENLqpc2hwCPKC1VjUAAk5V2rNFc',
    badge: 'bestseller', tags: ['Cotton', 'Regular Fit', 'Casual'],
    desc: 'Comfortable cotton t-shirt for daily wear.',
    tab: ['bestseller', 'mens'],
  },
  {
    id: 62, name: 'Men\'s Graphic Print T-Shirt', brand: 'Nike',
    category: 'Fashion', price: 399, original: 799, rating: 4.5, reviews: 14300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOPhRRTfT-tLnYBhCUXwjvs7URceEklqKBMbmVhwkECk5oS37psxZjiN1yZ2sR5k21vaEvOOA2t9_xfPrd8tKF9emaXTa_SMmhNhJrwiw',
    badge: 'trending', tags: ['Graphic', 'Stylish', 'Casual'],
    desc: 'Trendy graphic print t-shirt with premium fabric.',
    tab: ['trending', 'mens'],
  },
  {
    id: 63, name: 'Men\'s Polo T-Shirt', brand: 'U.S. Polo Assn.',
    category: 'Fashion', price: 899, original: 1799, rating: 4.6, reviews: 11200,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjqIPDODe3uJ2x2c6eRbC8LT62G6uPKaFwojtLWvJbru6U1fLOfDs4NuyeWa_QJAexCFNodR-corsxJUWzL24UxBmteZqDPhWvYaIk9atMn15BqwpvJdve',
    badge: 'popular', tags: ['Polo', 'Premium', 'Smart Casual'],
    desc: 'Classic polo t-shirt suitable for every occasion.',
    tab: ['popular', 'mens'],
  },
  {
    id: 64, name: 'Men\'s Oversized T-Shirt', brand: 'Roadster',
    category: 'Fashion', price: 399, original: 677, rating: 4.3, reviews: 9700,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzp7Ul2B1b07UIroSvkWKyLQxzyyEkl1_XLuOHN3J3Koq23pipreWhAloD39DbriTT1CajYviab-mHVLrSEfQobqSzjgk9ErjeHAdlTIw',
    badge: 'new', tags: ['Oversized', 'Streetwear', 'Comfort'],
    desc: 'Relaxed oversized fit for a trendy look.',
    tab: ['new', 'mens'],
  },
  {
    id: 65, name: 'Men\'s Round Neck T-Shirt', brand: 'Levis',
    category: 'Fashion', price: 999, original: 1799, rating: 4.5, reviews: 13600,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRS1wp5-h3uv-0y7m7j4sOxvJ8GX3Ofk3lCo34bqXfCCkIW-RMT8rxkXQ8L-fxxe362veh3exI7xdw6Q0JiR3YUTJq6WHloJ3pzqJSnNSOoMgXKOz6pmI6x_g',
    badge: null, tags: ['Round Neck', 'Cotton', 'Everyday'],
    desc: 'Soft and durable round neck t-shirt.',
    tab: ['mens'],
  },
  {
    id: 66, name: 'Men\'s Sports T-Shirt', brand: 'Adidas',
    category: 'Fashion', price: 1299, original: 2299, rating: 4.7, reviews: 15900,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    badge: 'sports', tags: ['Sports', 'Dry Fit', 'Training'],
    desc: 'Lightweight sports t-shirt for workouts.',
    tab: ['sports', 'mens'],
  },
  {
    id: 67, name: 'Men\'s Striped T-Shirt', brand: 'Allen Solly',
    category: 'Fashion', price: 849, original: 1499, rating: 4.4, reviews: 8900,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZ3fcKTcBo3i1cBt5K9JIYAHC23zKiaz1RFlZfpxKt_bmoHh7PtHURFyOTTBVxiW_aPQhdpuej6PQdBEQ9-AvMRrwzS_fSzt13Ttui2h4p',
    badge: 'sale', tags: ['Striped', 'Casual', 'Fashion'],
    desc: 'Stylish striped t-shirt with modern fit.',
    tab: ['sale', 'mens'],
  },
  {
    id: 68, name: 'Men\'s Henley T-Shirt', brand: 'Roadster',
    category: 'Fashion', price: 899, original: 1699, rating: 4.5, reviews: 7800,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTfGD9e77-0RiKwpSvkoC7fxoc_SZtMtGTcBn8fVePIy2jPISL9HGxrRsKWyk83kEA6itHuxkCISlT9XjtfNJdsp6sQ5VQZdQ',
    badge: null, tags: ['Henley', 'Button Neck', 'Trendy'],
    desc: 'Smart henley t-shirt with button placket.',
    tab: ['mens'],
  },
  {
    id: 69, name: 'Men\'s Printed T-Shirt', brand: 'HRX',
    category: 'Fashion', price: 749, original: 1399, rating: 4.3, reviews: 12300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ09lDaFSImEODMb5_FScFSplFw1xrYYaXKCReOO9v_IiKcyXdQIq0qugr4i441brZMKyhcoMqM7YiGAqcuCDgjmllSBE08kPkFcbl8atR_KJKgxt1kPbOB',
    badge: 'sale', tags: ['Printed', 'Casual', 'Comfort'],
    desc: 'Modern printed t-shirt for casual outings.',
    tab: ['sale', 'mens'],
  },
  {
    id: 70, name: 'Men\'s V-Neck T-Shirt', brand: 'Puma',
    category: 'Fashion', price: 699, original: 1299, rating: 4.2, reviews: 6500,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsnyr3mniZIDJ4XZJucvcrj-u70K1FYUoCrQzxCBfjbgUrCMEWchylUtW2UcDi_7_bgQ_LCGTmH6ThEng1ozjv7voLIFqSxxdEVX-AXavw5Yy0f-N1ujSPcg',
    badge: null, tags: ['V-Neck', 'Cotton', 'Lightweight'],
    desc: 'Classic V-neck design with soft cotton fabric.',
    tab: ['mens'],
  },
  {
    id: 71, name: 'Men\'s Full Sleeve T-Shirt', brand: 'Nike',
    category: 'Fashion', price: 1099, original: 1899, rating: 4.5, reviews: 9800,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQtQb7aw8grb1u_9Y3uSPNHuhHJlhlju2cMVzYtrZfv6lrm2LCZRpOuA_rcI0dDhzaAdu59qbZrnkWV3q87wDZ5itqf9xPOuNmg0m-ZGtoL',
    badge: 'winter', tags: ['Full Sleeve', 'Comfort', 'Stylish'],
    desc: 'Full sleeve t-shirt for a premium look.',
    tab: ['winter', 'mens'],
  },
  {
    id: 72, name: 'Men\'s Slim Fit T-Shirt', brand: 'Levis',
    category: 'Fashion', price: 999, original: 1799, rating: 4.6, reviews: 10800,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRc3ddJupCzt-prKzfaoJk8DjHVYGQpE0nUHeAhT5YXQnYFT2GVWY3_DXKCL7YBUwtnVDH02jH7YMArfrNWileyoRIidyeODJXvm-brRw0',
    badge: 'popular', tags: ['Slim Fit', 'Premium', 'Fashion'],
    desc: 'Modern slim-fit t-shirt with premium finish.',
    tab: ['popular', 'mens'],
  },
  {
    id: 73, name: 'Men\'s Color Block T-Shirt', brand: 'HRX',
    category: 'Fashion', price: 849, original: 1499, rating: 4.4, reviews: 7300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVFjrUqIBhPFFAFrubnik-IuEjkITYiuoYlLacu-Ee5P87Y3qm3nblVZv4IsCaTH3ipi4bvRnCJYswaMSEYzooFjvjsFHNoIsHmAlpai8S6TnsChQWwPBRJg',
    badge: 'trending', tags: ['Color Block', 'Youth', 'Casual'],
    desc: 'Eye-catching color block design.',
    tab: ['trending', 'mens'],
  },
  {
    id: 74, name: 'Men\'s Casual Crew Neck T-Shirt', brand: 'Allen Solly',
    category: 'Fashion', price: 799, original: 1399, rating: 4.3, reviews: 8500,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtc4dSuCeTyvi5rgWSFO-8W7uLJR4cJ0TXrJOodhUceijht9ko4xZJDoZKG9ZuJbH6HID_Q-KNmJiinwV9V2FQuro4a-9bfacrTjca5K7-lMCCw8-I29PAh0s',
    badge: null, tags: ['Crew Neck', 'Casual', 'Soft Fabric'],
    desc: 'Versatile crew neck t-shirt for daily use.',
    tab: ['mens'],
  },
  {
    id: 75, name: 'Men\'s Premium Cotton T-Shirt', brand: 'Tommy Hilfiger',
    category: 'Fashion', price: 1499, original: 2499, rating: 4.8, reviews: 12400,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfXcgxbQb6TBlfrdV5Uf9tJeVPGppKbtXYTrxx33mVzq1UEkHuHxQKeDB-MUCZcGKZJOT53x7EdC42cjVfM14K13y1M29SEg',
    badge: 'premium', tags: ['Premium', 'Cotton', 'Branded'],
    desc: 'High-quality premium cotton t-shirt.',
    tab: ['premium', 'mens'],
  },
  {
    id: 76, name: 'Women\'s Floral Maxi Dress', brand: 'Zara',
    category: 'Fashion', price: 2799, original: 4999, rating: 4.7, reviews: 12800,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500',
    badge: 'hot', tags: ['Floral Print', 'Summer Wear', 'Elegant'],
    desc: 'Beautiful floral maxi dress crafted for comfort and style.',
    tab: ['hot', 'trending'],
  },
  {
    id: 77, name: 'Premium Leather Jacket', brand: 'Jack & Jones',
    category: 'Fashion', price: 4999, original: 8999, rating: 4.8, reviews: 9200,
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500',
    badge: 'premium', tags: ['Leather', 'Winter Wear', 'Stylish'],
    desc: 'Premium-quality leather jacket designed for a bold and modern look.',
    tab: ['premium', 'featured'],
  },
  {
    id: 78, name: 'Athletic Jogger Pants', brand: 'Puma',
    category: 'Fashion', price: 1499, original: 2999, rating: 4.4, reviews: 17400,
    image: 'https://hyvesports.com/cdn/shop/files/04.BD0A6256.jpg?v=1773306238&width=1000',
    badge: 'sale', tags: ['Sportswear', 'Lightweight', 'Comfort Fit'],
    desc: 'Breathable athletic joggers perfect for workouts and daily wear.',
    tab: ['sale', 'sports'],
  },
  {
    id: 79, name: 'Women\'s High-Waist Jeans', brand: 'ONLY',
    category: 'Fashion', price: 2299, original: 3999, rating: 4.6, reviews: 14200,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500',
    badge: 'trending', tags: ['High Waist', 'Skinny Fit', 'Blue'],
    desc: 'Fashionable high-waist jeans with a flattering skinny fit.',
    tab: ['trending', 'new'],
  },
  {
    id: 80, name: 'Premium Graphic T-Shirt', brand: 'H&M',
    category: 'Fashion', price: 999, original: 1999, rating: 4.3, reviews: 31200,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    badge: 'new', tags: ['Graphic Print', 'Oversized', 'Streetwear'],
    desc: 'Trendy oversized graphic tee inspired by modern street fashion.',
    tab: ['new', 'flashsale'],
  },
  {
    id: 81, name: 'Formal Business Suit', brand: 'Louis Philippe',
    category: 'Fashion', price: 6999, original: 11999, rating: 4.8, reviews: 6800,
    image: 'https://tumuh.in/cdn/shop/products/966153715_01.jpg?v=1598097176&width=1080',
    badge: 'premium', tags: ['Formal', 'Business', 'Luxury'],
    desc: 'Elegant business suit crafted with premium fabric and tailoring.',
    tab: ['premium', 'featured'],
  },
  {
    id: 82, name: 'Women\'s Cotton Kurti', brand: 'Biba',
    category: 'Fashion', price: 1399, original: 2699, rating: 4.5, reviews: 19100,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500',
    badge: 'bestseller', tags: ['Ethnic Wear', 'Cotton', 'Comfort Fit'],
    desc: 'Stylish and comfortable cotton kurti for everyday wear.',
    tab: ['bestseller', 'ethnic'],
  },
  {
    id: 83, name: 'Floral Printed Kurti', brand: 'Libas',
    category: 'Fashion', price: 1199, original: 2299, rating: 4.4, reviews: 15400,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTw-2mMPyhUx5xxfBC1IhTCW2Wdas4TziXI3aSWLSm0RWEAE4QZ0mZaEpy9K_OQO1QCfy_WJfoGrG3h-8keLk8xzh-RLU70IhSpjItuxpdQ495FYUaxF4LG&usqp=CAc',
    badge: 'sale', tags: ['Floral', 'Casual', 'Soft Fabric'],
    desc: 'Elegant floral printed kurti for daily and festive wear.',
    tab: ['sale', 'ethnic'],
  },
  {
    id: 84, name: 'Rayon Straight Kurti', brand: 'W',
    category: 'Fashion', price: 1499, original: 2799, rating: 4.6, reviews: 17300,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScYCK6uyHm1X8JitHj7WfcpgV9qJ-XK-PXLNAVdaEJW1RsH07ikjJ8E8Ni9qEALM4TOzjzWarpglfYG03GkUEzgFLgh1LT77i9a4shmOdm7nF9a1JzOhBX',
    badge: 'trending', tags: ['Rayon', 'Straight Fit', 'Modern'],
    desc: 'Premium rayon kurti with a modern straight fit design.',
    tab: ['trending', 'ethnic'],
  },
  {
    id: 85, name: 'Anarkali Kurti', brand: 'Aurelia',
    category: 'Fashion', price: 1899, original: 3499, rating: 4.7, reviews: 20500,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR09sHJD8xMGVyDiT27KvsWl39u9w5jIP9-hxwr57aGOtkSMQiGZmHA7gg8HImDXpCO-SzjHBPyfWRg5F5SLaS1vXggfL-RCU2adPJedTAomoLuFhXycw50',
    badge: 'bestseller', tags: ['Anarkali', 'Festive', 'Elegant'],
    desc: 'Beautiful Anarkali kurti perfect for festive occasions.',
    tab: ['bestseller', 'ethnic'],
  },
  {
    id: 86, name: 'Chikankari Kurti', brand: 'Biba',
    category: 'Fashion', price: 1699, original: 2999, rating: 4.5, reviews: 14800,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSPCGgmaDte0nsnP5rDOvBUm7DUuKgdgAvz2bkdMNdZjWFdx_r3Uq3Pir8AJZNmtiXjx-5MK8NdMpY47mPrqphk9xJNS66ypxR1vhWL3v-tgUF69jHQyFNWQ',
    badge: 'new', tags: ['Chikankari', 'Cotton', 'Handwork'],
    desc: 'Traditional chikankari kurti with delicate embroidery.',
    tab: ['new', 'ethnic'],
  },
  {
    id: 87, name: 'A-Line Printed Kurti', brand: 'Libas',
    category: 'Fashion', price: 1299, original: 2399, rating: 4.3, reviews: 12100,
    image: 'https://rangita.com/cdn/shop/files/WE-AW24-KUR-DO-123_1_1d0f7e04-769e-47b5-af86-3cf3a502829b.webp?v=1737961748&width=750',
    badge: null, tags: ['A-Line', 'Printed', 'Comfort'],
    desc: 'Comfortable A-line kurti with attractive prints.',
    tab: ['ethnic'],
  },
  {
    id: 88, name: 'Designer Kurti', brand: 'W',
    category: 'Fashion', price: 2199, original: 3999, rating: 4.8, reviews: 11200,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNEVda_ncVeQ1WEApjp4oXYU7JG93Vwr-kmp59S0shCBjELAaWx1hIhZ29Brj5eM5ugv_raywBUXFDweMZhhxL2VWR3p0-7J_PX0z4D4vQ8nltV6VppJCu',
    badge: 'premium', tags: ['Designer', 'Party Wear', 'Premium'],
    desc: 'Exclusive designer kurti for special occasions.',
    tab: ['premium', 'ethnic'],
  },
  {
    id: 89, name: 'Cotton Embroidered Kurti', brand: 'Aurelia',
    category: 'Fashion', price: 1599, original: 2899, rating: 4.6, reviews: 14200,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQuGkjTOls7jU7z2LJf67NS3cDdNlpCThTXFfIuPdjQwf67JcRZZJX7qFgNro6XQdG7Pf_kky3dc78VVmVn92M4EwjirZRveokmwyyhmTY',
    badge: 'sale', tags: ['Embroidery', 'Cotton', 'Traditional'],
    desc: 'Elegant embroidered cotton kurti with traditional styling.',
    tab: ['sale', 'ethnic'],
  },
  {
    id: 90, name: 'Festive Wear Kurti', brand: 'Libas',
    category: 'Fashion', price: 980, original: 1739, rating: 4.7, reviews: 18800,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwzZqxzU-5VZZePN4uYx7UL6dcNwsSzd3VeidLSEdh1JIsem_bxilg2npfaRfhkrrIAByGAH7z74v8XJM-0PaW1b_mac2-',
    badge: 'trending', tags: ['Festive', 'Elegant', 'Party'],
    desc: 'Perfect festive wear kurti with rich detailing.',
    tab: ['trending', 'ethnic'],
  },
  {
    id: 91, name: 'Printed Cotton Kurti', brand: 'Aurelia',
    category: 'Fashion', price: 1099, original: 1999, rating: 4.3, reviews: 9900,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqAsJIXdpZP1JKgC3OhRsgq0bCvsL3IEYkwuGjC-VOcYc5bdSi6RfQyWGMRpVp7ei1_8eNVuXSfB-qYz4uGRgHORe92IyUxhwQnUCDf59H',
    badge: 'sale', tags: ['Printed', 'Cotton', 'Daily Wear'],
    desc: 'Lightweight cotton kurti ideal for daily use.',
    tab: ['sale', 'ethnic'],
  },
  {
    id: 92, name: 'Office Wear Kurti', brand: 'W',
    category: 'Fashion', price: 999, original: 2199, rating: 4.5, reviews: 14500,
    image: 'https://m.media-amazon.com/images/I/51cx1-eTyuL.jpg',
    badge: 'popular', tags: ['Office Wear', 'Formal', 'Elegant'],
    desc: 'Professional and stylish office wear kurti.',
    tab: ['popular', 'ethnic'],
  },
  {
    id: 93, name: 'Hand Block Print Kurti', brand: 'Biba',
    category: 'Fashion', price: 1699, original: 3099, rating: 4.6, reviews: 13100,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSoWI9JXNtXTo8LuLBNHLx2EWMcsVeZAzUQFPs6cJERfRl0y5CBEE921S5bkGUQhhkAKyr7nh5EBO7rAndo08TR0pBUnMfU6z83rcPE8pvC',
    badge: 'new', tags: ['Hand Block', 'Traditional', 'Artisan'],
    desc: 'Traditional hand block printed kurti.',
    tab: ['new', 'ethnic'],
  },
  {
    id: 94, name: 'Sleeveless Summer Kurti', brand: 'Libas',
    category: 'Fashion', price: 389, original: 699, rating: 4.2, reviews: 8700,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSd4WcTtHstOrKKmMXYkCu2pyVc63Wmx1Qy5f6aZFriAW00DzaQPMwXuj-3YYlMEnmC9wX2Xi1YGUFdaLAVbzl4vQtt13DNaFqoH9I9',
    badge: 'summer', tags: ['Sleeveless', 'Summer', 'Lightweight'],
    desc: 'Cool and breathable sleeveless kurti for summer.',
    tab: ['summer', 'ethnic'],
  },
  {
    id: 95, name: 'Premium Silk Kurti', brand: 'Aurelia',
    category: 'Fashion', price: 2499, original: 4499, rating: 4.8, reviews: 10300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbEsD4eKAbU2neyHIRBZ8dhwC6xGV_qCmkxJmb3mXQ0-e-Tf52J-upFoyeMEmfumhwP85EL-ziTh-g6VDXYIrYxbahgUVSTuvZxa9zj6tU',
    badge: 'premium', tags: ['Silk', 'Luxury', 'Festive'],
    desc: 'Premium silk kurti with luxurious finish.',
    tab: ['premium', 'ethnic'],
  },

  // ── SHOES ─────────────────────────────────────────────────
  {
    id: 96, name: 'Nike Air Max 270', brand: 'Nike',
    category: 'Shoes', price: 12495, original: 14995, rating: 4.6, reviews: 28000,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9s5GDqkiItI1Ov7rs7gctfgzNSO1bVrw11Vbtm6gas1uHVU0G132HntTt9XQjyztOrQtus-D1r-LoOQgpAXsjcB2KVsQqAncaaqS_L1ImEb0hgPq4Pn7XRQ',
    badge: 'hot', tags: ['Air Unit', 'Breathable', 'Lifestyle'],
    desc: 'The first lifestyle Air Max shoe with a 270-degree Air unit. Designed for all-day comfort and iconic street style.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 97, name: 'Puma RS-X Reinvention', brand: 'Puma',
    category: 'Shoes', price: 8999, original: 11999, rating: 4.5, reviews: 18900,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500',
    badge: 'hot', tags: ['Chunky Sole', 'Streetwear', 'Comfort'],
    desc: 'Bold retro-inspired sneakers with excellent comfort and standout styling.',
    tab: ['trending', 'featured'],
  },
  {
    id: 98, name: 'Nike Revolution 7', brand: 'Nike',
    category: 'Shoes', price: 4995, original: 6995, rating: 4.4, reviews: 21500,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    badge: 'sale', tags: ['Running', 'Lightweight', 'Daily Wear'],
    desc: 'Lightweight running shoes designed for everyday comfort and performance.',
    tab: ['sale', 'featured'],
  },
  {
    id: 99, name: 'Adidas Forum Low', brand: 'Adidas',
    category: 'Shoes', price: 9999, original: 12999, rating: 4.6, reviews: 14200,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500',
    badge: 'new', tags: ['Basketball', 'Classic', 'Leather'],
    desc: 'Classic basketball-inspired sneakers with premium leather construction.',
    tab: ['new', 'trending'],
  },
  {
    id: 100, name: 'New Balance 574', brand: 'New Balance',
    category: 'Shoes', price: 8999, original: 10999, rating: 4.8, reviews: 17300,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
    badge: 'premium', tags: ['Suede', 'Lifestyle', 'Classic'],
    desc: 'Timeless sneaker combining comfort, durability, and iconic styling.',
    tab: ['premium', 'bestseller'],
  },
  {
    id: 101, name: 'Asics Gel-Kayano 30', brand: 'Asics',      // ← FIXED: was duplicated
    category: 'Shoes', price: 15999, original: 18999, rating: 4.9, reviews: 9800,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500',
    badge: 'premium', tags: ['Stability', 'Running', 'Gel Cushioning'],
    desc: 'Premium running shoes offering advanced stability and cushioning.',
    tab: ['premium', 'featured'],
  },
  {
    id: 102, name: 'Reebok Club C 85', brand: 'Reebok',        // ← FIXED: was also id 101
    category: 'Shoes', price: 6999, original: 8999, rating: 4.5, reviews: 12700,
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500',
    badge: 'trending', tags: ['Retro', 'Leather', 'Lifestyle'],
    desc: 'Clean and minimalist retro sneakers perfect for everyday outfits.',
    tab: ['trending', 'featured'],
  },
  {
    id: 103, name: 'Converse Chuck Taylor High', brand: 'Converse',
    category: 'Shoes', price: 5499, original: 6999, rating: 4.7, reviews: 35100,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500',
    badge: 'iconic', tags: ['Canvas', 'High Top', 'Classic'],
    desc: 'The legendary high-top sneaker that never goes out of style.',
    tab: ['bestseller', 'featured'],
  },
  {
    id: 104, name: 'Vans Old Skool', brand: 'Vans',
    category: 'Shoes', price: 6499, original: 7999, rating: 4.6, reviews: 22600,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500',
    badge: 'hot', tags: ['Skateboarding', 'Streetwear', 'Canvas'],
    desc: 'Iconic skate shoe featuring the signature Vans side stripe.',
    tab: ['featured', 'trending'],
  },
  {
    id: 105, name: 'Skechers Go Walk 7', brand: 'Skechers',
    category: 'Shoes', price: 5999, original: 7999, rating: 4.5, reviews: 19400,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500',
    badge: 'comfort', tags: ['Walking', 'Lightweight', 'Slip-On'],
    desc: 'Ultra-comfortable walking shoes with responsive cushioning.',
    tab: ['featured', 'sale'],
  },
  {
    id: 106, name: 'Under Armour Charged Assert 10', brand: 'Under Armour',
    category: 'Shoes', price: 7499, original: 9999, rating: 4.4, reviews: 12100,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500',
    badge: 'new', tags: ['Running', 'Charged Cushioning', 'Breathable'],
    desc: 'Versatile running shoes with durable support and comfort.',
    tab: ['new', 'featured'],
  },
  {
    id: 107, name: 'Nike Dunk Low Retro', brand: 'Nike',
    category: 'Shoes', price: 9695, original: 11995, rating: 4.8, reviews: 29500,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500',
    badge: 'bestseller', tags: ['Basketball', 'Retro', 'Leather'],
    desc: 'Classic basketball silhouette loved by sneaker enthusiasts worldwide.',
    tab: ['bestseller', 'trending'],
  },
  {
    id: 108, name: 'Adidas NMD_R1', brand: 'Adidas',
    category: 'Shoes', price: 11999, original: 14999, rating: 4.6, reviews: 16300,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500',
    badge: 'featured', tags: ['Boost', 'Lifestyle', 'Urban'],
    desc: 'Modern streetwear sneakers with responsive cushioning and sleek styling.',
    tab: ['featured', 'trending'],
  },
  {
    id: 109, name: 'Puma Future Rider', brand: 'Puma',
    category: 'Shoes', price: 6999, original: 8999, rating: 4.3, reviews: 10800,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
    badge: 'sale', tags: ['Retro', 'Comfort', 'Casual'],
    desc: 'Retro-inspired sneakers built for comfort and everyday style.',
    tab: ['sale', 'featured'],
  },
  {
    id: 110, name: 'New Balance Fresh Foam X', brand: 'New Balance',
    category: 'Shoes', price: 12999, original: 15999, rating: 4.8, reviews: 8800,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    badge: 'premium', tags: ['Fresh Foam', 'Running', 'Premium'],
    desc: 'Advanced running shoes engineered for maximum cushioning and support.',
    tab: ['premium', 'featured'],
  },
  {
    id: 111, name: 'Adidas Ultraboost 23', brand: 'Adidas',
    category: 'Shoes', price: 14999, original: 18000, rating: 4.7, reviews: 18700,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMfW-bd8A7jo5bGBeTQbWcS50glTTHUNsu987yD-iWfJuFWBeSkegHKGsKmceV8k6vOk5WZYe50NxiejhStjbKG5vrKXMZN69XTLBc8dkw1X-re1nGoxir',
    badge: null, tags: ['BOOST Midsole', 'Primeknit', 'Running'],
    desc: 'Feel the BOOST energy return with every stride. The most responsive running shoe ever, now with Primeknit+ upper.',
    tab: ['featured', 'topdeals'],
  },
  {
    id: 112, name: 'Puma Cali Dream', brand: 'Puma',
    category: 'Shoes', price: 7999, original: 9999, rating: 4.4, reviews: 9300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMNYHe-aibc4iJ4PV84mKr-D2iw8AvbZKVdDI79U17TM_iRLehllOjndkoC9IfeTJU1MkeP8MOCagAjDXjEg2yPfhdyu6SZE4tgWEQfYZWoYD0WzlaC1OyVA',
    badge: 'new', tags: ['Platform', 'Lifestyle', 'Women\'s'],
    desc: 'Chunky platform sneakers with premium leather upper. Inspired by California\'s surf culture.',
    tab: ['new', 'flashsale'],
  },

  // ── BEAUTY ────────────────────────────────────────────────
  {
    id: 113, name: 'Dyson Airwrap Complete', brand: 'Dyson',
    category: 'Beauty', price: 44900, original: 49900, rating: 4.7, reviews: 12600,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVETYL9BOpp7I09XxUEQZekdvuB1lOU151ZFqFNons_akvbShQ2b70EgjfxH9oQNW4dp0auFDtm5V8GKvF4X00PU1oXjGrza7qDKNbG3iQ44Y_di-lRq-uHA',
    badge: 'hot', tags: ['Coanda Effect', 'Multi-Styler', 'Frizz Control'],
    desc: 'Styles, waves, curls and dries. Uses Coanda airflow to attract and wrap hair for a professional finish without extreme heat.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 114, name: 'Philips Multigroom Series 7000', brand: 'Philips',
    category: 'Beauty', price: 4499, original: 5999, rating: 4.6, reviews: 28400,
    image: 'https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=500',
    badge: 'bestseller', tags: ['Beard Trimmer', '13-in-1', 'Waterproof'],
    desc: 'All-in-one grooming kit for beard, hair, body and facial styling with self-sharpening blades.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 115, name: 'The Man Company Charcoal Grooming Kit', brand: 'The Man Company',
    category: 'Beauty', price: 1299, original: 1999, rating: 4.4, reviews: 17800,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgBNi_Ql5D3JBXNKzZTjct7eKV8OFJKZlMRAOk2hoyhae9E2DPNi658mxBRQF_cc-xuotFzcsQ-r93Do_9RvfeHbDm4kvX59tCR7alF35gaJOdlFdHb6epWxXWbZafr2Bbiq_GBA&usqp=CAc',
    badge: 'hot', tags: ['Face Care', 'Charcoal', 'Men'],
    desc: 'Complete grooming kit including face wash, scrub and moisturizer for everyday skincare.',
    tab: ['sale', 'featured'],
  },
  {
    id: 116, name: 'Beardo Hair Wax Strong Hold', brand: 'Beardo',
    category: 'Beauty', price: 349, original: 599, rating: 4.3, reviews: 22100,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500',
    badge: 'sale', tags: ['Hair Styling', 'Strong Hold', 'Matte Finish'],
    desc: 'Provides long-lasting hold with a natural matte finish for modern hairstyles.',
    tab: ['sale', 'trending'],
  },
  {
    id: 117, name: 'Minimalist Vitamin C Serum', brand: 'Minimalist',
    category: 'Beauty', price: 699, original: 999, rating: 4.5, reviews: 34200,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500',
    badge: 'bestseller', tags: ['Vitamin C', 'Skin Brightening', 'Unisex'],
    desc: 'Powerful antioxidant serum that helps brighten skin and reduce dullness.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 118, name: 'Cetaphil Gentle Skin Cleanser', brand: 'Cetaphil',
    category: 'Beauty', price: 199, original: 333, rating: 4.8, reviews: 45600,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgFRlitbA0j4JRZs3FFkqz_NKFaPj27S5c2wsgqAv4kRLUJ7Pozh-q5x1DbrYWxmNLSvMtY7avaQrSEj6_zv2eheUhudPJYBgjjGRv_skQhhnhGnBBdCOcPGkuv4Ku2AkLf1uZnZE&usqp=CAc',
    badge: 'premium', tags: ['Sensitive Skin', 'Hydrating', 'Unisex'],
    desc: 'Gentle daily cleanser suitable for all skin types, including sensitive skin.',
    tab: ['featured', 'premium'],
  },
  {
    id: 119, name: 'Mamaearth Ubtan Face Wash', brand: 'Mamaearth',
    category: 'Beauty', price: 299, original: 399, rating: 4.4, reviews: 38900,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    badge: 'trending', tags: ['Natural Ingredients', 'Tan Removal', 'Unisex'],
    desc: 'Traditional ubtan formulation that helps cleanse and brighten the skin.',
    tab: ['trending', 'featured'],
  },
  {
    id: 120, name: 'Lakmé Absolute Matte Lipstick', brand: 'Lakmé',
    category: 'Beauty', price: 749, original: 999, rating: 4.6, reviews: 26700,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
    badge: 'hot', tags: ['Matte Finish', 'Long Lasting', 'Makeup'],
    desc: 'Rich matte lipstick with intense colour payoff and comfortable wear.',
    tab: ['featured', 'trending'],
  },
  {
    id: 121, name: 'Maybelline Fit Me Foundation', brand: 'Maybelline',
    category: 'Beauty', price: 599, original: 799, rating: 4.7, reviews: 41300,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    badge: 'bestseller', tags: ['Foundation', 'Natural Finish', 'Makeup'],
    desc: 'Lightweight foundation that blends seamlessly for a natural skin-like finish.',
    tab: ['bestseller', 'featured'],
  },
  {
    id: 122, name: 'L\'Oréal Paris Extraordinary Oil Serum', brand: 'L\'Oréal Paris',
    category: 'Beauty', price: 549, original: 799, rating: 4.6, reviews: 29500,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500',
    badge: 'hot', tags: ['Hair Serum', 'Smooth Hair', 'Frizz Control'],
    desc: 'Nourishing hair serum that adds shine and controls frizz instantly.',
    tab: ['featured', 'sale'],
  },
  {
    id: 123, name: 'Dyson Supersonic Hair Dryer', brand: 'Dyson',
    category: 'Beauty', price: 36900, original: 41900, rating: 4.8, reviews: 11800,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500',
    badge: 'premium', tags: ['Fast Drying', 'Hair Care', 'Premium'],
    desc: 'High-performance hair dryer engineered for fast drying and heat protection.',
    tab: ['premium', 'featured'],
  },
  {
    id: 124, name: 'The Ordinary Skincare Set', brand: 'The Ordinary',
    category: 'Beauty', price: 2499, original: 3499, rating: 4.5, reviews: 34500,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLemi_UQyjVc0Mm8CVZK-4rFLWBCjD4RZd5RsC93Nf8-6M9paox-zkuErRbps9lEoi85oeNU0QoHx-GdLHVzIvgAzy6CwzjrfF6Azhc8Fdj4MTMM0RZpZi',
    badge: 'new', tags: ['Niacinamide', 'Retinol', 'Hyaluronic Acid'],
    desc: 'The ultimate starter skincare routine. Includes Niacinamide 10%, Hyaluronic Acid 2%, and 0.2% Retinol serum.',
    tab: ['new', 'topdeals'],
  },
  {
    id: 125, name: 'MAC Studio Fix Powder Plus Foundation', brand: 'MAC',
    category: 'Beauty', price: 3600, original: 4500, rating: 4.4, reviews: 19800,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDnds7VnB9nk4XVwQL3AzaKyMOyhFi5F1kpoYz4SOyDRkCfZ8zWlhcdByviWc6apz30SQuniU1hx2LzR4q1Fc4JUXG7M4ntHORHobZ7kib-UTP2krB1hmP',
    badge: null, tags: ['Full Coverage', 'SPF 15', '12hr Wear'],
    desc: 'Full-coverage pressed powder foundation with SPF 15 and 12-hour wear. Matte finish with a natural-looking result.',
    tab: ['flashsale'],
  },

  // ── GAMING ────────────────────────────────────────────────
  {
    id: 126, name: 'PlayStation 5 Console', brand: 'Sony',
    category: 'Gaming', price: 54990, original: 59990, rating: 4.9, reviews: 41000,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGDTc9Pndln9jL4DfrJdsj89SLJ2tCNWfeKmYHB_ccKX9PQfgK7ymycE3ZlLa_CZVwfiyLfkn35BPbaxGjZgbjR75onoweqfSKZLnJ_m1dRvlImSxltHV1',
    badge: 'hot', tags: ['4K Gaming', 'DualSense', 'Ray Tracing'],
    desc: 'The ultimate gaming console. Lightning-fast SSD, 4K gaming at 120fps, and DualSense wireless controller with haptic feedback.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 127, name: 'Xbox Series X', brand: 'Microsoft',
    category: 'Gaming', price: 49990, original: 55990, rating: 4.8, reviews: 28700,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSj6PeWU0-1-Hszn1ZOGiRwLY12qCHqBBKS81qyMvR9QM9F_ReE2eaWF-q8wKQlyCOlH-kUbOvhbMFat9wDNR3EXaw0iketTk252_YbJk0xF2iWYCF793DhTA',
    badge: null, tags: ['True 4K', 'Xbox Game Pass', '120fps'],
    desc: 'The world\'s most powerful console. 12 teraflops of power, true 4K gaming, up to 120fps, and Smart Delivery.',
    tab: ['featured', 'topdeals'],
  },
  {
    id: 128, name: 'Razer DeathAdder V3 Pro', brand: 'Razer',
    category: 'Gaming', price: 13999, original: 16999, rating: 4.7, reviews: 9200,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSD2jglsqKcxrDaOg1VsZsCPYbEdLxOn9588F8jhG-qRfZUKo2Tnu9nokRU8f9EdRxe4GCVlG_EvJAHn__yWqlMCOLdfM9AUWz9nI5-Q9tdZDmx1lyPVq4h',
    badge: 'new', tags: ['30K DPI', 'Wireless', '90hr Battery'],
    desc: 'The most iconic ergonomic gaming mouse, evolved. Razer Focus Pro 30K optical sensor, 90-hour battery, ultra-lightweight.',
    tab: ['new', 'flashsale'],
  },

  // ── GROCERY ───────────────────────────────────────────────
  {
    id: 129, name: 'Himalayan Pink Salt 1kg', brand: 'Tata Salt',
    category: 'Grocery', price: 299, original: 399, rating: 4.3, reviews: 54000,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRi2VmXIxhX8K69ToyiiXvJN5LTmcD8xCRQiSDU9xThv3_cRGy6M_w_uT-JZnOMJNZyyvOKMs83ocidqTXIiid5SJ-LSdRL87EEn8hIWidOtQDIZ1gebH_M5JQ',
    badge: null, tags: ['Natural', 'Mineral-Rich', '1kg Pack'],
    desc: 'Premium quality Himalayan pink salt rich in 84+ natural minerals. Perfect for cooking and seasoning.',
    tab: ['topdeals'],
  },
  {
    id: 130, name: 'Organic Green Tea Box', brand: 'Tetley',
    category: 'Grocery', price: 349, original: 499, rating: 4.5, reviews: 29300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGhrPuOx5PTqrlGrIelW4RuToDxvXM4OYRLjdlVV10SvtZqNv3arNwr-UaLBfOdxSa_xklhsC2WvVA7oKnCpr2YtO01Kc4Nu2SAHr2cJ2G_jc7TIdT1H0z',
    badge: 'new', tags: ['Organic', '100 Tea Bags', 'Antioxidants'],
    desc: 'Premium organic green tea sourced from the best gardens. Rich in antioxidants with a refreshing, delicate flavour.',
    tab: ['new', 'flashsale'],
  },
  {
    id: 131, name: 'Honey Raw Organic 500g', brand: 'Dabur',
    category: 'Grocery', price: 399, original: 549, rating: 4.6, reviews: 47200,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_Ci85a6yMC0BSksg87wTq8O7vyezGaKtdiSbdAccSyStV9W1Wer61YvwKNk6T1BnvtZ-fxHEKjxS1xFoaxBdTLRYjjmtFOhYK-Wkr5Kba',
    badge: null, tags: ['Raw', 'Unprocessed', '100% Pure'],
    desc: '100% pure, raw, and unprocessed honey. Sourced directly from Himalayan honeybees. No added sugars or preservatives.',
    tab: ['topdeals'],
  },
];

/* ============================================================
   STATE
   ============================================================ */
let cart      = JSON.parse(localStorage.getItem('blockrock_cart')     || '[]');
let wishlist  = JSON.parse(localStorage.getItem('blockrock_wishlist') || '[]');
let activeTab      = 'all';
let activeCategory = '';
let activeBrands   = [];
let maxPrice       = 200000;
let minRating      = 0;
let searchQuery    = '';
let sortOrder      = 'default';

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  initSlider();
  initFlashTimer();
  buildFilterOptions();
  renderProducts();
  renderCart();
  renderWishlist();
  updateBadges();
  initScrollTop();
  initHamburger();
  initSearch();
});

/* ============================================================
   THEME
   ============================================================ */
function applyTheme() {
  const saved = localStorage.getItem('blockrock_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('blockrock_theme', next);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on', 'info');
});

/* ============================================================
   HERO SLIDER
   ============================================================ */
let currentSlide = 0;
const SLIDE_COUNT = 4;

function initSlider() {
  const dots = document.getElementById('sliderDots');
  if (!dots) return;
  for (let i = 0; i < SLIDE_COUNT; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goToSlide(i));
    dots.appendChild(d);
  }

  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide((currentSlide - 1 + SLIDE_COUNT) % SLIDE_COUNT));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide((currentSlide + 1) % SLIDE_COUNT));

  setInterval(() => goToSlide((currentSlide + 1) % SLIDE_COUNT), 5000);
}

function goToSlide(n) {
  currentSlide = n;
  const track = document.getElementById('sliderTrack');
  if (track) track.style.transform = `translateX(-${n * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === n));
}

/* ============================================================
   FLASH TIMER
   ============================================================ */
function initFlashTimer() {
  let h = 5, m = 47, s = 30;
  const hEl = document.getElementById('timerH');
  const mEl = document.getElementById('timerM');
  const sEl = document.getElementById('timerS');
  if (!hEl || !mEl || !sEl) return;

  setInterval(() => {
    s--;
    if (s < 0) { s = 59; m--; }
    if (m < 0) { m = 59; h--; }
    if (h < 0) { h = 5; m = 59; s = 59; }
    hEl.textContent = String(h).padStart(2, '0');
    mEl.textContent = String(m).padStart(2, '0');
    sEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

/* ============================================================
   FILTER OPTIONS (dynamic generation)
   ============================================================ */
function buildFilterOptions() {
  const cats   = [...new Set(PRODUCTS.map(p => p.category))].sort();
  const brands = [...new Set(PRODUCTS.map(p => p.brand))].sort();

  const catWrap = document.getElementById('categoryFilters');
  if (catWrap) {
    cats.forEach(cat => {
      const label = document.createElement('label');
      label.className = 'filter-checkbox';
      label.innerHTML = `<input type="checkbox" value="${cat}" onchange="toggleCategoryFilter(this)"> ${cat}`;
      catWrap.appendChild(label);
    });
  }

  const brandWrap = document.getElementById('brandFilters');
  if (brandWrap) {
    brands.forEach(brand => {
      const label = document.createElement('label');
      label.className = 'filter-checkbox';
      label.innerHTML = `<input type="checkbox" value="${brand}" onchange="toggleBrandFilter(this)"> ${brand}`;
      brandWrap.appendChild(label);
    });
  }
}

function toggleCategoryFilter(checkbox) {
  if (checkbox.checked) {
    activeCategory = checkbox.value;
    document.querySelectorAll('#categoryFilters input').forEach(cb => {
      if (cb !== checkbox) cb.checked = false;
    });
  } else {
    activeCategory = '';
  }
  renderProducts();
}

function toggleBrandFilter(checkbox) {
  if (checkbox.checked) {
    activeBrands.push(checkbox.value);
  } else {
    activeBrands = activeBrands.filter(b => b !== checkbox.value);
  }
  renderProducts();
}

function updatePriceFilter(val) {
  maxPrice = parseInt(val);
  const label = document.getElementById('priceLabel');
  if (label) label.textContent = '₹' + parseInt(val).toLocaleString('en-IN');
  renderProducts();
}

/* FIXED: now receives the clicked element instead of relying on global event */
function filterByRating(min, el) {
  minRating = min;
  document.querySelectorAll('.rating-btn').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');
  renderProducts();
}

function clearFilters() {
  activeCategory = '';
  activeBrands   = [];
  maxPrice       = 200000;
  minRating      = 0;
  searchQuery    = '';
  sortOrder      = 'default';

  const priceRange = document.getElementById('priceRange');
  const priceLabel = document.getElementById('priceLabel');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');

  if (priceRange)  priceRange.value = 200000;
  if (priceLabel)  priceLabel.textContent = '₹2,00,000';
  if (searchInput) searchInput.value = '';
  if (sortSelect)  sortSelect.value = 'default';

  document.querySelectorAll('#categoryFilters input, #brandFilters input').forEach(cb => cb.checked = false);
  document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
  renderProducts();
}

/* ============================================================
   CATEGORY / TAB FILTERING
   ============================================================ */
function filterCategory(cat) {
  activeCategory = cat;
  activeTab = 'all';
  document.querySelectorAll('#categoryFilters input').forEach(cb => {
    cb.checked = cb.value === cat;
  });
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const allTab = document.querySelector('[data-tab="all"]');
  if (allTab) allTab.classList.add('active');
  renderProducts();
  const main = document.getElementById('mainSection');
  if (main) main.scrollIntoView({ behavior: 'smooth' });
}

function switchTab(tab, btn) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
}

/* ============================================================
   SORT
   ============================================================ */
function sortProducts(val) {
  sortOrder = val;
  renderProducts();
}

/* ============================================================
   SEARCH
   ============================================================ */
function initSearch() {
  const input = document.getElementById('searchInput');
  const btn   = document.getElementById('searchBtn');
  if (!input) return;

  if (btn) btn.addEventListener('click', doSearch);
  input.addEventListener('keyup', e => { if (e.key === 'Enter') doSearch(); });
  input.addEventListener('input', () => {
    searchQuery = input.value.trim().toLowerCase();
    renderProducts();
  });
}

function doSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  searchQuery = input.value.trim().toLowerCase();
  renderProducts();
  const main = document.getElementById('mainSection');
  if (main) main.scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   HELPER: safe discount — returns 0 if original is missing
   ============================================================ */
function discount(p) {
  if (!p.original || p.original <= p.price) return 0;   // FIXED: was NaN for products without original
  return Math.round(((p.original - p.price) / p.original) * 100);
}

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (activeTab !== 'all') {
    list = list.filter(p => p.tab && p.tab.includes(activeTab));
  }
  if (activeCategory) {
    list = list.filter(p => p.category === activeCategory);
  }
  if (activeBrands.length > 0) {
    list = list.filter(p => activeBrands.includes(p.brand));
  }
  list = list.filter(p => p.price <= maxPrice);
  if (minRating > 0) {
    list = list.filter(p => p.rating >= minRating);
  }
  if (searchQuery) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(searchQuery) ||
      p.brand.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery) ||
      (p.tags || []).some(t => t.toLowerCase().includes(searchQuery))
    );
  }

  if (sortOrder === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (sortOrder === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sortOrder === 'rating')     list.sort((a, b) => b.rating - a.rating);
  if (sortOrder === 'discount')   list.sort((a, b) => discount(b) - discount(a));

  return list;
}

function renderProducts() {
  const list  = getFilteredProducts();
  const grid  = document.getElementById('productsGrid');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('resultsCount');

  if (!grid) return;

  grid.innerHTML = '';
  if (count) count.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    if (noRes) noRes.style.display = 'block';
    return;
  }
  if (noRes) noRes.style.display = 'none';

  list.forEach((product, idx) => {
    const card = createProductCard(product);
    card.style.animationDelay = `${idx * 0.04}s`;
    card.classList.add('card-appear');
    grid.appendChild(card);
  });
}

function createProductCard(p) {
  const disc   = discount(p);
  const inWL   = wishlist.some(w => w.id === p.id);
  const inCart = cart.some(c => c.id === p.id);

  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    ${p.badge ? `<span class="card-badge ${p.badge === 'new' ? 'new' : p.badge === 'hot' ? 'hot' : ''}">${p.badge === 'new' ? 'New' : p.badge === 'hot' ? '🔥 Hot' : p.badge}</span>` : ''}

    <button class="wishlist-btn ${inWL ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)" title="Add to Wishlist">
      <i class="fa${inWL ? 's' : 'r'} fa-heart"></i>
    </button>

    <div class="product-img-wrap" onclick="openModal(${p.id})">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'" />
    </div>

    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-name">${p.name}</div>

      <div class="product-rating">
        <span class="rating-pill"><i class="fas fa-star"></i> ${p.rating}</span>
        <span class="rating-count">(${p.reviews.toLocaleString('en-IN')})</span>
      </div>

      <div class="product-prices">
        <span class="price-final">₹${p.price.toLocaleString('en-IN')}</span>
        ${p.original && p.original > p.price
          ? `<span class="price-original">₹${p.original.toLocaleString('en-IN')}</span>
             <span class="price-discount">${disc}% off</span>`
          : ''}
      </div>

      <button class="add-cart-btn ${inCart ? 'added' : ''}" onclick="addToCart(${p.id}, this)">
        <i class="fas fa-${inCart ? 'check' : 'cart-plus'}"></i>
        ${inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  `;
  return card;
}

/* Card appear animation */
const _cardStyle = document.createElement('style');
_cardStyle.textContent = `
  .card-appear { animation: cardIn 0.4s ease both; }
  @keyframes cardIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
`;
document.head.appendChild(_cardStyle);

/* ============================================================
   CART
   ============================================================ */
function addToCart(id, btn) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
    showToast(`🛒 ${product.name} quantity updated`, 'success');
  } else {
    cart.push({ ...product, qty: 1 });
    showToast(`🛒 Added to cart: ${product.name}`, 'success');
  }

  saveCart();
  renderCart();
  updateBadges();

  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check"></i> In Cart';
  }
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
  updateBadges();
  renderProducts();
  showToast('🗑️ Item removed from cart', 'warn');
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
  updateBadges();
}

function saveCart() {
  localStorage.setItem('blockrock_cart', JSON.stringify(cart));
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');
  const empty     = document.getElementById('cartEmpty');
  if (!container) return;

  container.innerHTML = '';

  if (cart.length === 0) {
    if (footer) footer.style.display = 'none';
    if (empty)  empty.style.display = 'flex';
    return;
  }

  if (empty)  empty.style.display = 'none';
  if (footer) footer.style.display = 'block';

  let subtotal = 0, origTotal = 0;

  cart.forEach(item => {
    const itemOriginal = item.original || item.price;
    subtotal  += item.price    * item.qty;
    origTotal += itemOriginal  * item.qty;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, +1)"><i class="fas fa-plus"></i></button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
          <i class="fas fa-trash-alt"></i> Remove
        </button>
      </div>
    `;
    container.appendChild(div);
  });

  const savings = origTotal - subtotal;
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartDiscount = document.getElementById('cartDiscount');
  const cartTotal    = document.getElementById('cartTotal');
  if (cartSubtotal) cartSubtotal.textContent = '₹' + origTotal.toLocaleString('en-IN');
  if (cartDiscount) cartDiscount.textContent = '-₹' + savings.toLocaleString('en-IN');
  if (cartTotal)    cartTotal.textContent    = '₹' + subtotal.toLocaleString('en-IN');
}

function openCart() {
  const sidebar  = document.getElementById('cartSidebar');
  const overlay  = document.getElementById('cartOverlay');
  if (sidebar)  sidebar.classList.add('open');
  if (overlay)  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  const sidebar  = document.getElementById('cartSidebar');
  const overlay  = document.getElementById('cartOverlay');
  if (sidebar)  sidebar.classList.remove('open');
  if (overlay)  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

const cartNavBtn = document.getElementById('cartNavBtn');
if (cartNavBtn) cartNavBtn.addEventListener('click', openCart);

/* ============================================================
   WISHLIST
   ============================================================ */
function toggleWishlist(id, btn) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const idx = wishlist.findIndex(w => w.id === id);

  if (btn) {
    btn.classList.add('heartbeat');
    setTimeout(() => btn.classList.remove('heartbeat'), 400);
  }

  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) { btn.classList.remove('active'); btn.innerHTML = '<i class="far fa-heart"></i>'; }
    showToast('💔 Removed from wishlist', 'warn');
  } else {
    wishlist.push(product);
    if (btn) { btn.classList.add('active'); btn.innerHTML = '<i class="fas fa-heart"></i>'; }
    showToast(`❤️ Added to wishlist: ${product.name}`, 'success');
  }

  localStorage.setItem('blockrock_wishlist', JSON.stringify(wishlist));
  renderWishlist();
  updateBadges();
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(w => w.id !== id);
  localStorage.setItem('blockrock_wishlist', JSON.stringify(wishlist));
  renderWishlist();
  updateBadges();
  renderProducts();
  showToast('💔 Removed from wishlist', 'warn');
}

function renderWishlist() {
  const container = document.getElementById('wishlistItems');
  const empty     = document.getElementById('wishlistEmpty');
  if (!container) return;
  container.innerHTML = '';

  if (wishlist.length === 0) {
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  wishlist.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
        <div style="display:flex;gap:8px;margin-top:8px;">
          <button style="background:var(--primary);color:#fff;padding:6px 12px;border-radius:6px;font-size:0.78rem;font-weight:600;display:flex;align-items:center;gap:5px;" onclick="addToCart(${item.id});closeWishlist();">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
          <button class="cart-item-remove" style="margin-top:0;" onclick="removeFromWishlist(${item.id})">
            <i class="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function openWishlist() {
  const sidebar = document.getElementById('wishlistSidebar');
  const overlay = document.getElementById('wishlistOverlay');
  if (sidebar) sidebar.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  const sidebar = document.getElementById('wishlistSidebar');
  const overlay = document.getElementById('wishlistOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

const wishlistNavBtn = document.getElementById('wishlistNavBtn');
if (wishlistNavBtn) wishlistNavBtn.addEventListener('click', openWishlist);

/* ============================================================
   BADGES
   ============================================================ */
function updateBadges() {
  const cartCount     = cart.reduce((sum, c) => sum + c.qty, 0);
  const cartBadge     = document.getElementById('cartBadge');
  const wishlistBadge = document.getElementById('wishlistBadge');
  if (cartBadge)     cartBadge.textContent     = cartCount;
  if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const disc = discount(p);
  const body = document.getElementById('modalBody');
  if (!body) return;

  body.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="modal-info">
      <div class="modal-brand">${p.brand}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-rating">
        <span class="rating-pill"><i class="fas fa-star"></i> ${p.rating}</span>
        <span style="font-size:0.82rem;color:var(--text-secondary)">${p.reviews.toLocaleString('en-IN')} ratings</span>
      </div>
      <div class="modal-prices">
        <span class="price-final">₹${p.price.toLocaleString('en-IN')}</span>
        ${p.original && p.original > p.price
          ? `<span class="price-original">₹${p.original.toLocaleString('en-IN')}</span>
             <span class="price-discount">${disc}% off</span>`
          : ''}
      </div>
      <div class="modal-desc">${p.desc}</div>
      <div class="modal-tags">
        ${(p.tags || []).map(t => `<span class="modal-tag">${t}</span>`).join('')}
      </div>
      <div class="modal-actions">
        <button class="modal-add-cart" onclick="addToCart(${p.id});closeModal()">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button class="modal-buy-btn" onclick="addToCart(${p.id});closeModal();openCart()">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>
    </div>
  `;

  const modal   = document.getElementById('productModal');
  const overlay = document.getElementById('modalOverlay');
  if (modal)   modal.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal   = document.getElementById('productModal');
  const overlay = document.getElementById('modalOverlay');
  if (modal)   modal.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeCart(); closeWishlist(); }
});

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warn' ? 'exclamation-circle' : 'info-circle'}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

function subscribe() {
  alert("Button Clicked");
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   HAMBURGER (mobile)
   ============================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const catNav    = document.getElementById('catNav');
  if (hamburger && catNav) {
    hamburger.addEventListener('click', () => catNav.classList.toggle('open'));
  }
}
function askAI(){


let input = document.getElementById("user-message");


let message = input.value.trim();



if(message === ""){

alert("Please type something");

return;

}



let chat = document.getElementById("chat-area");



chat.innerHTML += `

<p>User: ${message}</p>

<p>
AI: Searching products for "${message}"...
</p>

`;



input.value="";


}