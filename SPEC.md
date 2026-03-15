# Innovation Exchange - Specification

## Project Overview
- **Project Name**: Innovation Exchange
- **Type**: Web Application (Next.js)
- **Core Functionality**: A cryptographically secured intellectual property marketplace - "The Global Stock Market for Ideas" - where ideas become legally tradeable assets
- **Target Users**: Inventors, entrepreneurs, investors, and businesses looking to buy/sell IP

## UI/UX Specification

### Layout Structure

**Global Layout**
- Fixed top navigation (64px height)
- Main content area with max-width 1400px, centered
- Footer with links and copyright

**Pages**
1. **Landing Page** - Hero, features, stats, testimonials, CTA
2. **Marketplace** - Grid of idea listings with filters
3. **Idea Detail** - Full idea view with layers, scoring, actions
4. **Dashboard** - User's ideas, portfolio, activity

### Visual Design

**Color Palette**
- Background Primary: `#0a0a0f` (deep void black)
- Background Secondary: `#12121a` (dark card)
- Background Tertiary: `#1a1a24` (elevated surfaces)
- Accent Primary: `#00ff88` (electric mint - trust/verified)
- Accent Secondary: `#7c3aed` (vivid purple - innovation)
- Accent Tertiary: `#06b6d4` (cyan - tech)
- Text Primary: `#f0f0f5` (off-white)
- Text Secondary: `#8888a0` (muted)
- Border: `#2a2a3a` (subtle)
- Success: `#00ff88`
- Warning: `#fbbf24`
- Error: `#ef4444`

**Typography**
- Headings: `"Clash Display", sans-serif` (Google Fonts - bold, modern)
- Body: `"Satoshi", sans-serif` (clean, readable)
- Monospace (hashes/IDs): `"JetBrains Mono", monospace`
- Hero Title: 72px / 80px line-height
- H1: 48px
- H2: 36px
- H3: 24px
- Body: 16px
- Small: 14px

**Spacing System**
- Base unit: 4px
- Section padding: 120px vertical
- Card padding: 24px
- Component gap: 16px

**Visual Effects**
- Cards: `backdrop-blur-xl`, subtle border glow on hover
- Buttons: gradient backgrounds with hover scale(1.02)
- Background: animated grid pattern with floating particles
- Glassmorphism on modals and cards
- Smooth page transitions

### Components

**Navigation**
- Logo (left) - "IX" mark + "Innovation Exchange"
- Nav links (center): Marketplace, How It Works, Pricing
- Auth buttons (right): Sign In, Get Started
- Mobile: hamburger menu

**Hero Section**
- Large headline with gradient text
- Animated background with floating geometric shapes
- Two CTAs: "Explore Ideas" (primary), "Submit Idea" (outline)
- Stats row: "2,400+ Ideas", "$48M Traded", "15K Users"

**Feature Cards**
- Icon (48px, gradient background)
- Title
- Description
- Hover: lift + border glow

**Idea Card**
- Thumbnail/icon area
- Title
- Category tag
- Innovation score (visual meter)
- Price
- Owner avatar
- Timestamp

**Security Badge**
- Lock icon + "SHA-256 Secured" text
- Tooltip on hover

**Innovation Score Meter**
- Circular progress with gradient
- Score number in center
- Color coded: 0-40 red, 40-70 yellow, 70-100 green

**Action Buttons**
- Primary: filled gradient (mint to cyan)
- Secondary: outlined
- Danger: red tint

## Functionality Specification

### Core Features (Frontend Demo)

1. **Landing Page**
   - Animated hero with particle background
   - Feature highlights (6 features)
   - Live stats counter
   - How it works (3 steps)
   - CTA sections

2. **Marketplace**
   - Filter by category (Tech, Healthcare, Finance, etc.)
   - Sort by: newest, price, score
   - Search by title
   - Grid/list view toggle
   - Pagination

3. **Idea Detail Page**
   - Idea header with title, category, score
   - Layer system (5 layers showing progressive disclosure)
   - Ownership ledger display
   - Similar ideas section
   - Action buttons: Buy, Make Offer, Send NDA

4. **Dashboard (Mock)**
   - User portfolio overview
   - My Ideas list
   - Recent activity
   - Notification center

### User Interactions
- Smooth scroll between sections
- Card hover animations
- Modal for idea details
- Toast notifications for actions
- Loading skeletons

### Data Handling
- Mock data for ideas (12 sample ideas)
- Local state for filters/sorting
- Simulated API calls with delays

## Acceptance Criteria

1. Landing page loads with animated hero
2. All 6 features displayed with icons
3. Marketplace shows filterable grid of ideas
4. Idea cards show: title, category, score, price
5. Detail page shows layer system
6. Innovation score meters render correctly
7. Responsive on mobile (375px), tablet (768px), desktop (1440px)
8. No console errors
9. TypeScript strict mode passes
10. All animations smooth (60fps)
