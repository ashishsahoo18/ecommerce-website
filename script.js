/* ============================================================
   BLOCKROCK — script.js
   All interactivity: products, cart, wishlist, filters, slider,
   dark mode, modal, toast, timer, search
   ============================================================ */

'use strict';

/* ============================================================
   PRODUCT DATA (32 products)
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

  // ── EARBUDS ────────────────────────────────────────────────
  {
    id: 12, name: 'Sony WF-1000XM5', brand: 'Sony',
    category: 'Earbuds', price: 24990, original: 29990, rating: 4.8, reviews: 18400,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSl1dBGRjgMeg-JxliCiKK6cK-MwgRKlUafsKtILXfFSqaJ4MDQVktVmO49cOdAtrbrJPtmJMXkQKLtGSw9nnj1pTm0D23eCWVGCAOXZXT5RNSvReY72mJS',
    badge: 'hot', tags: ['ANC', 'LDAC', '8hr Battery'],
    desc: 'Industry-leading noise cancellation in the smallest, lightest WF-1000X series ever. Hi-Res Audio Wireless with LDAC.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 13, name: 'Apple AirPods Pro 2nd Gen', brand: 'Apple',
    category: 'Earbuds', price: 24900, original: 29900, rating: 4.7, reviews: 31000,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTMJXCLWId2m2It9x05XPbmIy4EylEuL0qKC39XtGFmy7Vdx20fgHnaN3v3b5obDgHrzsOToIhyLh5f4EKPT0g76MGkVcXCwLBvqRLFqGrkQWVgSotVn4CsnQ',
    badge: null, tags: ['H2 Chip', 'Adaptive Audio', 'USB-C'],
    desc: 'Next-level Active Noise Cancellation, Transparency mode, and Adaptive Audio for seamless listening.',
    tab: ['bestseller'],
  },
  {
    id: 14, name: 'Nothing Ear (2)', brand: 'Nothing',
    category: 'Earbuds', price: 9999, original: 11999, rating: 4.4, reviews: 11200,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTfMMEz6I0qF9of561ZoshodfdX9IX9F0LBkALrN7zcP8vD0vd7QNiny9XalEWTTO9H-07mu1rouy0trM9QDNEI2j2UhWi-glSVuS7CEP_9f2W8-g4mDrzP',
    badge: 'new', tags: ['Transparent Design', 'ANC', 'LHDC 5.0'],
    desc: 'Iconic transparent design with Hi-Res LHDC 5.0 audio, dual ANC technology, and 6-mic clear call system.',
    tab: ['new', 'topdeals'],
  },
  {
    id: 15,
    name: 'Bose QuietComfort Earbuds II',
    brand: 'Bose',
    category: 'Earbuds',
    price: 22990,
    original: 27990,
    rating: 4.6,
    reviews: 8900,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    badge: null,
    tags: ['CustomTune ANC', '6hr Battery', 'IPX4'],
    desc: 'World\'s best noise cancelling earbuds with CustomTune sound calibration technology.',
    tab: ['featured']
},

  // ── KEYBOARDS ──────────────────────────────────────────────
  {
    id: 16, name: 'Keychron Q1 Pro', brand: 'Keychron',
    category: 'Keyboards', price: 58527, original: 68527, rating: 4.8, reviews: 5600,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzwSS0y7pP8LLZXTcPL7TlwHer5YDY0SkMqLlumE10pJrboG-Ya9PJEEXkXBD7xmeNh3eEuKzQ2EHJMEbYXLlwh0BXmHHehO6rTZaH8DDIyAkvOPn7wCeD',
    badge: 'hot', tags: ['75% Layout', 'QMK/VIA', 'Gasket Mount'],
    desc: 'Premium wireless mechanical keyboard with QMK/VIA support, RGB backlight, and gasket mount for a typing experience like no other.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 17, name: 'Logitech MX Keys S', brand: 'Logitech',
    category: 'Keyboards', price: 9495, original: 11995, rating: 4.6, reviews: 13200,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLzYATnhmwLeCt2hRsTKCL7G3mQmvETfB8K5EAguhbH3o3qEYP7hoqjY8aj1f7wJ0HkMRJ9pEl88XBzrg3T9juGsOjtGVyrQbc97B5Mvkj',
    badge: null, tags: ['Multi-Device', 'Backlit', 'Flow Cross-Computer'],
    desc: 'Smart wireless keyboard for serious work. Connects up to 3 devices, backlit keys, and Logitech Flow for cross-computer typing.',
    tab: ['bestseller', 'topdeals'],
  },
  {
    id: 18,
    name: 'Razer BlackWidow V4 Pro',
    brand: 'Razer',
    category: 'Keyboards',
    price: 19999,
    original: 24999,
    rating: 4.5,
    reviews: 7400,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdSJMaJ7W9SqeuooB7aas1izDaOXuPgbN9xlDRnAJjTO79ZTWs_RRHvCBEs-fESIMBsKusRbLB1rOMaF-4XtGW8s5YV1jx4yVmxXAlnITZ6Ut97n7I9sApKKi9E071RmKPDDp_RQ&usqp=CAc',
    badge: null,
    tags: ['Razer Yellow Switches','HyperSpeed','Command Dial'],
    desc: 'Gaming keyboard',
    tab: ['featured']
},

  // ── FASHION ───────────────────────────────────────────────
  {
    id: 19, name: 'Premium Oversized Hoodie', brand: 'H&M',
    category: 'Fashion', price: 1999, original: 3999, rating: 4.3, reviews: 22100,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDvkXK3xWRaVXZKszbFatPi-E7vONk__IS1wYE5aUNkkM2t-DCrwYDClgBtDzb1lyVHume2awtYm-ybi-T5Mz3UXfFj2DJp3FCW8HIemgZy4l-7AOQWqVc',
    badge: 'new', tags: ['Cotton Blend', 'Unisex', 'Multiple Colors'],
    desc: 'Ultra-soft premium cotton-blend oversized hoodie. Perfect for lazy days or street styling. Available in 8 colours.',
    tab: ['new', 'flashsale'],
  },
  {
    id: 20, name: 'Slim Fit Formal Shirt', brand: 'Van Heusen',
    category: 'Fashion', price: 1499, original: 2999, rating: 4.2, reviews: 14500,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkH9PEySesUPfV7NpoheMJl5sc4yzT91u3AaGF1hB5rt_CJbUK-9obcXTqydqMz421DyYVFZ-TuWdPmv3kmkqjwbit0sqt6LeSXuWx0T-Hf6959VJ5jEwZSg',
    badge: null, tags: ['Wrinkle-Free', 'Cotton', 'Office Ready'],
    desc: 'Professional slim-fit formal shirt with wrinkle-resistant fabric. Office-ready in classic and contemporary colours.',
    tab: ['topdeals', 'flashsale'],
  },

  // ── SHOES ─────────────────────────────────────────────────
  {
    id: 21, name: 'Nike Air Max 270', brand: 'Nike',
    category: 'Shoes', price: 12495, original: 14995, rating: 4.6, reviews: 28000,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9s5GDqkiItI1Ov7rs7gctfgzNSO1bVrw11Vbtm6gas1uHVU0G132HntTt9XQjyztOrQtus-D1r-LoOQgpAXsjcB2KVsQqAncaaqS_L1ImEb0hgPq4Pn7XRQ',
    badge: 'hot', tags: ['Air Unit', 'Breathable', 'Lifestyle'],
    desc: 'The first lifestyle Air Max shoe with a 270-degree Air unit. Designed for all-day comfort and iconic street style.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 22, name: 'Adidas Ultraboost 23', brand: 'Adidas',
    category: 'Shoes', price: 14999, original: 18000, rating: 4.7, reviews: 18700,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMfW-bd8A7jo5bGBeTQbWcS50glTTHUNsu987yD-iWfJuFWBeSkegHKGsKmceV8k6vOk5WZYe50NxiejhStjbKG5vrKXMZN69XTLBc8dkw1X-re1nGoxir',
    badge: null, tags: ['BOOST Midsole', 'Primeknit', 'Running'],
    desc: 'Feel the BOOST energy return with every stride. The most responsive running shoe ever, now with Primeknit+ upper.',
    tab: ['featured', 'topdeals'],
  },
  {
    id: 23, name: 'Puma Cali Dream', brand: 'Puma',
    category: 'Shoes', price: 7999, original: 9999, rating: 4.4, reviews: 9300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMNYHe-aibc4iJ4PV84mKr-D2iw8AvbZKVdDI79U17TM_iRLehllOjndkoC9IfeTJU1MkeP8MOCagAjDXjEg2yPfhdyu6SZE4tgWEQfYZWoYD0WzlaC1OyVA',
    badge: 'new', tags: ['Platform', 'Lifestyle', 'Women\'s'],
    desc: 'Chunky platform sneakers with premium leather upper. Inspired by California\'s surf culture.',
    tab: ['new', 'flashsale'],
  },

  // ── BEAUTY ────────────────────────────────────────────────
  {
    id: 24, name: 'Dyson Airwrap Complete', brand: 'Dyson',
    category: 'Beauty', price: 44900, original: 49900, rating: 4.7, reviews: 12600,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVETYL9BOpp7I09XxUEQZekdvuB1lOU151ZFqFNons_akvbShQ2b70EgjfxH9oQNW4dp0auFDtm5V8GKvF4X00PU1oXjGrza7qDKNbG3iQ44Y_di-lRq-uHA',
    badge: 'hot', tags: ['Coanda Effect', 'Multi-Styler', 'Frizz Control'],
    desc: 'Styles, waves, curls and dries. Uses Coanda airflow to attract and wrap hair for a professional finish without extreme heat.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 25, name: 'The Ordinary Skincare Set', brand: 'The Ordinary',
    category: 'Beauty', price: 2499, original: 3499, rating: 4.5, reviews: 34500,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLemi_UQyjVc0Mm8CVZK-4rFLWBCjD4RZd5RsC93Nf8-6M9paox-zkuErRbps9lEoi85oeNU0QoHx-GdLHVzIvgAzy6CwzjrfF6Azhc8Fdj4MTMM0RZpZi',
    badge: 'new', tags: ['Niacinamide', 'Retinol', 'Hyaluronic Acid'],
    desc: 'The ultimate starter skincare routine. Includes Niacinamide 10%, Hyaluronic Acid 2%, and 0.2% Retinol serum.',
    tab: ['new', 'topdeals'],
  },
  {
    id: 26, name: 'MAC Studio Fix Powder Plus Foundation', brand: 'MAC',
    category: 'Beauty', price: 3600, original: 4500, rating: 4.4, reviews: 19800,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDnds7VnB9nk4XVwQL3AzaKyMOyhFi5F1kpoYz4SOyDRkCfZ8zWlhcdByviWc6apz30SQuniU1hx2LzR4q1Fc4JUXG7M4ntHORHobZ7kib-UTP2krB1hmP',
    badge: null, tags: ['Full Coverage', 'SPF 15', '12hr Wear'],
    desc: 'Full-coverage pressed powder foundation with SPF 15 and 12-hour wear. Matte finish with a natural-looking result.',
    tab: ['flashsale'],
  },

  // ── GAMING ────────────────────────────────────────────────
  {
    id: 27, name: 'PlayStation 5 Console', brand: 'Sony',
    category: 'Gaming', price: 54990, original: 59990, rating: 4.9, reviews: 41000,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGDTc9Pndln9jL4DfrJdsj89SLJ2tCNWfeKmYHB_ccKX9PQfgK7ymycE3ZlLa_CZVwfiyLfkn35BPbaxGjZgbjR75onoweqfSKZLnJ_m1dRvlImSxltHV1',
    badge: 'hot', tags: ['4K Gaming', 'DualSense', 'Ray Tracing'],
    desc: 'The ultimate gaming console. Lightning-fast SSD, 4K gaming at 120fps, and DualSense wireless controller with haptic feedback.',
    tab: ['featured', 'bestseller'],
  },
  {
    id: 28, name: 'Xbox Series X', brand: 'Microsoft',
    category: 'Gaming', price: 49990, original: 55990, rating: 4.8, reviews: 28700,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSj6PeWU0-1-Hszn1ZOGiRwLY12qCHqBBKS81qyMvR9QM9F_ReE2eaWF-q8wKQlyCOlH-kUbOvhbMFat9wDNR3EXaw0iketTk252_YbJk0xF2iWYCF793DhTA',
    badge: null, tags: ['True 4K', 'Xbox Game Pass', '120fps'],
    desc: 'The world\'s most powerful console. 12 teraflops of power, true 4K gaming, up to 120fps, and Smart Delivery.',
    tab: ['featured', 'topdeals'],
  },
  {
    id: 29, name: 'Razer DeathAdder V3 Pro', brand: 'Razer',
    category: 'Gaming', price: 13999, original: 16999, rating: 4.7, reviews: 9200,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSD2jglsqKcxrDaOg1VsZsCPYbEdLxOn9588F8jhG-qRfZUKo2Tnu9nokRU8f9EdRxe4GCVlG_EvJAHn__yWqlMCOLdfM9AUWz9nI5-Q9tdZDmx1lyPVq4h',
    badge: 'new', tags: ['30K DPI', 'Wireless', '90hr Battery'],
    desc: 'The most iconic ergonomic gaming mouse, evolved. Razer Focus Pro 30K optical sensor, 90-hour battery, ultra-lightweight.',
    tab: ['new', 'flashsale'],
  },

  // ── GROCERY ───────────────────────────────────────────────
  {
    id: 30, name: 'Himalayan Pink Salt 1kg', brand: 'Tata Salt',
    category: 'Grocery', price: 299, original: 399, rating: 4.3, reviews: 54000,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRi2VmXIxhX8K69ToyiiXvJN5LTmcD8xCRQiSDU9xThv3_cRGy6M_w_uT-JZnOMJNZyyvOKMs83ocidqTXIiid5SJ-LSdRL87EEn8hIWidOtQDIZ1gebH_M5JQ',
    badge: null, tags: ['Natural', 'Mineral-Rich', '1kg Pack'],
    desc: 'Premium quality Himalayan pink salt rich in 84+ natural minerals. Perfect for cooking and seasoning.',
    tab: ['topdeals'],
  },
  {
    id: 31, name: 'Organic Green Tea Box', brand: 'Tetley',
    category: 'Grocery', price: 349, original: 499, rating: 4.5, reviews: 29300,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGhrPuOx5PTqrlGrIelW4RuToDxvXM4OYRLjdlVV10SvtZqNv3arNwr-UaLBfOdxSa_xklhsC2WvVA7oKnCpr2YtO01Kc4Nu2SAHr2cJ2G_jc7TIdT1H0z',
    badge: 'new', tags: ['Organic', '100 Tea Bags', 'Antioxidants'],
    desc: 'Premium organic green tea sourced from the best gardens. Rich in antioxidants with a refreshing, delicate flavour.',
    tab: ['new', 'flashsale'],
  },
  {
    id: 32, name: 'Honey Raw Organic 500g', brand: 'Dabur',
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
  icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('blockrock_theme', next);
  document.getElementById('themeIcon').className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on', 'info');
});

/* ============================================================
   HERO SLIDER
   ============================================================ */
let currentSlide = 0;
const SLIDE_COUNT = 4;

function initSlider() {
  const dots = document.getElementById('sliderDots');
  for (let i = 0; i < SLIDE_COUNT; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goToSlide(i));
    dots.appendChild(d);
  }

  document.getElementById('sliderPrev').addEventListener('click', () => {
    goToSlide((currentSlide - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  });
  document.getElementById('sliderNext').addEventListener('click', () => {
    goToSlide((currentSlide + 1) % SLIDE_COUNT);
  });

  // Auto-advance every 5 seconds
  setInterval(() => goToSlide((currentSlide + 1) % SLIDE_COUNT), 5000);
}

function goToSlide(n) {
  currentSlide = n;
  document.getElementById('sliderTrack').style.transform = `translateX(-${n * 100}%)`;
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
  cats.forEach(cat => {
    const label = document.createElement('label');
    label.className = 'filter-checkbox';
    label.innerHTML = `<input type="checkbox" value="${cat}" onchange="toggleCategoryFilter(this)"> ${cat}`;
    catWrap.appendChild(label);
  });

  const brandWrap = document.getElementById('brandFilters');
  brands.forEach(brand => {
    const label = document.createElement('label');
    label.className = 'filter-checkbox';
    label.innerHTML = `<input type="checkbox" value="${brand}" onchange="toggleBrandFilter(this)"> ${brand}`;
    brandWrap.appendChild(label);
  });
}

function toggleCategoryFilter(checkbox) {
  if (checkbox.checked) {
    activeCategory = checkbox.value;
    // Uncheck all other category checkboxes
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
  document.getElementById('priceLabel').textContent = '₹' + parseInt(val).toLocaleString('en-IN');
  renderProducts();
}

function filterByRating(min) {
  minRating = min;
  document.querySelectorAll('.rating-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderProducts();
}

function clearFilters() {
  activeCategory = '';
  activeBrands   = [];
  maxPrice       = 200000;
  minRating      = 0;
  searchQuery    = '';
  sortOrder      = 'default';
  document.getElementById('priceRange').value = 200000;
  document.getElementById('priceLabel').textContent = '₹2,00,000';
  document.querySelectorAll('#categoryFilters input, #brandFilters input').forEach(cb => cb.checked = false);
  document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'default';
  renderProducts();
}

/* ============================================================
   CATEGORY / TAB FILTERING
   ============================================================ */
function filterCategory(cat) {
  activeCategory = cat;
  activeTab = 'all';
  // Sync filter sidebar checkboxes
  document.querySelectorAll('#categoryFilters input').forEach(cb => {
    cb.checked = cb.value === cat;
  });
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-tab="all"]').classList.add('active');
  renderProducts();
  document.getElementById('mainSection').scrollIntoView({ behavior: 'smooth' });
}

function switchTab(tab, btn) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
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

  btn.addEventListener('click', doSearch);
  input.addEventListener('keyup', e => { if (e.key === 'Enter') doSearch(); });
  // Live search
  input.addEventListener('input', () => {
    searchQuery = input.value.trim().toLowerCase();
    renderProducts();
  });
}

function doSearch() {
  searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
  renderProducts();
  document.getElementById('mainSection').scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Tab filter
  if (activeTab !== 'all') {
    list = list.filter(p => p.tab && p.tab.includes(activeTab));
  }

  // Category filter
  if (activeCategory) {
    list = list.filter(p => p.category === activeCategory);
  }

  // Brand filter
  if (activeBrands.length > 0) {
    list = list.filter(p => activeBrands.includes(p.brand));
  }

  // Price filter
  list = list.filter(p => p.price <= maxPrice);

  // Rating filter
  if (minRating > 0) {
    list = list.filter(p => p.rating >= minRating);
  }

  // Search
  if (searchQuery) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(searchQuery) ||
      p.brand.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery) ||
      (p.tags || []).some(t => t.toLowerCase().includes(searchQuery))
    );
  }

  // Sort
  if (sortOrder === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (sortOrder === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sortOrder === 'rating')     list.sort((a, b) => b.rating - a.rating);
  if (sortOrder === 'discount')   list.sort((a, b) => discount(b) - discount(a));

  return list;
}

function discount(p) {
  return Math.round(((p.original - p.price) / p.original) * 100);
}

function renderProducts() {
  const list  = getFilteredProducts();
  const grid  = document.getElementById('productsGrid');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('resultsCount');

  grid.innerHTML = '';
  count.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    noRes.style.display = 'block';
    return;
  }
  noRes.style.display = 'none';

  list.forEach((product, idx) => {
    const card = createProductCard(product);
    card.style.animationDelay = `${idx * 0.04}s`;
    card.classList.add('card-appear');
    grid.appendChild(card);
  });
}

function createProductCard(p) {
  const disc  = discount(p);
  const inWL  = wishlist.some(w => w.id === p.id);
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
        <span class="price-original">₹${p.original.toLocaleString('en-IN')}</span>
        <span class="price-discount">${disc}% off</span>
      </div>

      <button class="add-cart-btn ${inCart ? 'added' : ''}" onclick="addToCart(${p.id}, this)">
        <i class="fas fa-${inCart ? 'check' : 'cart-plus'}"></i>
        ${inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  `;
  return card;
}

/* Add a simple appear animation via JS */
const style = document.createElement('style');
style.textContent = `
  .card-appear { animation: cardIn 0.4s ease both; }
  @keyframes cardIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
`;
document.head.appendChild(style);

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
  renderProducts(); // refresh Add to Cart states
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

  container.innerHTML = '';

  if (cart.length === 0) {
    footer.style.display = 'none';
    empty.style.display = 'flex';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'block';

  let subtotal = 0, origTotal = 0;

  cart.forEach(item => {
    subtotal  += item.price    * item.qty;
    origTotal += item.original * item.qty;

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
  document.getElementById('cartSubtotal').textContent  = '₹' + origTotal.toLocaleString('en-IN');
  document.getElementById('cartDiscount').textContent  = '-₹' + savings.toLocaleString('en-IN');
  document.getElementById('cartTotal').textContent     = '₹' + subtotal.toLocaleString('en-IN');
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cartNavBtn').addEventListener('click', openCart);

/* ============================================================
   WISHLIST
   ============================================================ */
function toggleWishlist(id, btn) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const idx = wishlist.findIndex(w => w.id === id);

  // Heartbeat animation
  if (btn) { btn.classList.add('heartbeat'); setTimeout(() => btn.classList.remove('heartbeat'), 400); }

  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) { btn.classList.remove('active'); btn.innerHTML = '<i class="far fa-heart"></i>'; }
    showToast(`💔 Removed from wishlist`, 'warn');
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
  container.innerHTML = '';

  if (wishlist.length === 0) {
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';

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
  document.getElementById('wishlistSidebar').classList.add('open');
  document.getElementById('wishlistOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('wishlistOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('wishlistNavBtn').addEventListener('click', openWishlist);

/* ============================================================
   BADGES
   ============================================================ */
function updateBadges() {
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);
  document.getElementById('cartBadge').textContent     = cartCount;
  document.getElementById('wishlistBadge').textContent = wishlist.length;
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const disc  = discount(p);
  const inWL  = wishlist.some(w => w.id === p.id);
  const body  = document.getElementById('modalBody');

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
        <span class="price-original">₹${p.original.toLocaleString('en-IN')}</span>
        <span class="price-discount">${disc}% off</span>
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

  document.getElementById('productModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeCart(); closeWishlist(); } });

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warn' ? 'exclamation-circle' : 'info-circle'}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
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
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('catNav').classList.toggle('open');
  });
}