# VK Cars & Co — Luxury Car Dealership Website

## Current State
New project. Empty scaffold with Motoko backend and React frontend.

## Requested Changes (Diff)

### Add
- Multi-page React SPA with React Router (6 pages: Home, Inventory, Car Details, Book Test Drive, About Us, Contact)
- Sticky dark navbar with gold accent CTA and mobile hamburger menu
- Home page: fullscreen cinematic video hero (autoplay, muted, loop, dark overlay), trust section (4 icons), featured cars grid
- Inventory page: full car grid with filters (brand, price range, fuel type)
- Car Details page: dynamic route `/inventory/:id`, image gallery, specs table, Book Test Drive + WhatsApp CTAs
- Book Test Drive page: premium form (name, phone, car selector, date), confirmation message on submit
- About Us page: brand story, 5+ years experience, 1000+ customers, trust pillars
- Contact page: contact details, Google Maps embed (Mohali), Call Now + WhatsApp buttons
- Footer: nav links, social icons, copyright 2026
- Floating WhatsApp button on all pages
- VK Cars & Co logo (generated image)
- 5 car listing images (BMW 5 Series, Audi A6, Mercedes E-Class, BMW X5, Audi Q7)
- Backend: store test drive bookings, expose car inventory data

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Generate logo image and 5 car images via image generation
2. Generate Motoko backend with car inventory data model and test drive booking storage
3. Build frontend with React Router, all 6 pages, dark luxury theme, glassmorphism UI, gold/orange accents
4. Wire frontend to backend APIs for inventory and booking submission
5. Validate and deploy

## Car Inventory Data
- BMW 5 Series 2021 | ₹45,00,000 | 28,000 km | Petrol | Automatic
- Audi A6 2022 | ₹50,00,000 | 18,000 km | Petrol | Automatic  
- Mercedes-Benz E-Class 2021 | ₹55,00,000 | 22,000 km | Diesel | Automatic
- BMW X5 2022 | ₹70,00,000 | 15,000 km | Diesel | Automatic
- Audi Q7 2021 | ₹60,00,000 | 20,000 km | Diesel | Automatic

## Business Details
- Name: VK Cars & Co
- Tagline: "Driven by Trust. Powered by Quality."
- Location: Mohali, Punjab, India
- Phone: +91 98765 43210
- Email: info@vkcars.in
- Years: 5+
- Customers: 1000+
