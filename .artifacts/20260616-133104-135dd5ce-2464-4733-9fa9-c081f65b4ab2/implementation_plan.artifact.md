# Implementation Plan - CARS24-Style Digital Marketplace

Transform Manish Motors into a modern, search-centric digital marketplace inspired by CARS24. This involves a complete theme shift to Light Mode, modular UI components, and trust-first architecture.

## User Review Required

- **Theme Transition**: Moving from "Ultra-Premium Dark" to "Modern Marketplace Light".
- **Color Palette**:
    - Primary Blue: `#2176FF` (Trust & Modernity)
    - CTA Orange: `#FF5A00` (High Urgency/Cars24 style)
    - Background: `#F4F7FB` (Clean Marketplace feel)
- **Features**:
    - Search-first Hero with Buy/Sell/Finance tabs.
    - Horizontal Body-Type Carousels.
    - Trust Banners (6-Month Warranty, 140-Point Inspection).
    - Detailed Inventory Cards with EMI estimates.

## Proposed Changes

### Configuration & Global Styles

#### [tailwind.config.js](file:///D:/Desktop/used%20car/tailwind.config.js)
- Define `marketplace` color palette.
- Add `shadow-soft` and `rounded-marketplace` (softer corners).

#### [index.css](file:///D:/Desktop/used%20car/src/index.css)
- Reset to Light Mode background.
- Add marketplace-style button and card classes.

---

### Component Rebuilds (Lego Design System)

#### [Navbar.jsx](file:///D:/Desktop/used%20car/src/components/Navbar.jsx)
- Search-centric bar with Location selector (Raja Park).
- Clear "Buy" and "Sell" entry points.

#### [Hero.jsx](file:///D:/Desktop/used%20car/src/components/Hero.jsx)
- Tabbed interface: [Buy Used Car] | [Sell Car] | [Car Finance].
- Large, bold "Find your perfect car" search input.

#### [CategoryCarousel.jsx](file:///D:/Desktop/used%20car/src/components/CategoryCarousel.jsx) [NEW]
- Horizontal scroll of body types (SUV, Sedan, Hatchback, Luxury) with icons.

#### [Inventory.jsx](file:///D:/Desktop/used%20car/src/components/Inventory.jsx)
- **Marketplace Cards**:
    - Multi-line specs (Year, Month, KM, Owner).
    - EMI estimation labels (e.g., "Starting at ₹12,400/mo").
    - Condition Grade (4.8/5) and 140-Point Badge.

#### [TrustBar.jsx](file:///D:/Desktop/used%20car/src/components/TrustBar.jsx) [NEW]
- High-visibility banner with 3 pillars: 140-Point Inspection, 6-Month Warranty, Free RC Transfer.

---

### Lead Funnel Enhancements
- **WhatsApp Integration**: Pre-fill with "EMI Inquiry" or "Valuation Inquiry".

## Verification Plan

### Manual Verification
- Test the Tabbed Hero interface on mobile.
- Verify the horizontal scrolling of categories.
- Ensure the Light Mode has high contrast and readability.
- Check that all Cars24-style badges (Warranty, Inspection) are prominent.
