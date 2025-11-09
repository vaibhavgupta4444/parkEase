# 🅿️⚡ ParkEase — Smart Parking, Simplified

ParkEase is a modern smart-city solution designed to eliminate the everyday frustration of finding parking.  
Built using **Next.js, Supabase, and PostgreSQL**, it provides real-time parking availability, smart booking, digital payments, EV readiness, and AI-driven optimization.

---

# 🚦 Urban Parking Predicament

### 🚗 Traffic Congestion
Urban centers face massive traffic jams caused by unorganized parking systems.

### ⏳ Wasted Time & Fuel
Drivers spend **15–20 minutes daily** searching for parking, wasting fuel, time, and productivity.

### ❌ Lack of Real-Time Information
Most locations offer **no live parking updates**, causing unnecessary chaos.

### ⚠️ Disorder & Penalties
Unauthorized parking obstructs traffic, blocks emergency routes, and results in fines.

---

# 🎯 Our Mission

ParkEase aims to build **efficient, intelligent, and sustainable parking ecosystems**.

✅ Real-time slot availability  
✅ Smart booking before arrival  
✅ Reduced congestion & pollution  
✅ Seamless digital payments  

---

# 🧩 Core Features

### ✅ 1. Real-Time Slot Availability
Live updates about available, occupied, and EV-enabled slots.

### ✅ 2. Smart Booking
Reserve your space before you arrive for guaranteed availability.

### ✅ 3. Cashless Payments
Supports **UPI, cards, digital wallets, and Razorpay**.

### ✅ 4. Alerts & Notifications
- Slot availability  
- Booking expiry  
- New offers  
- EV charging updates  

### ✅ 5. Anti-Theft & Security Alerts
Instant alerts for unauthorized vehicle movement.

---

# 🏗️ Technology Stack

| Layer | Technology | Purpose |
|-------|------------|----------|
| **Frontend** | Next.js | Fast, modern, responsive UI |
| **Backend** | Supabase | Authentication & database layer |
| **Database** | PostgreSQL | Efficient structured parking data |
| **AI/ML** | Predictive Models | Demand forecasting & slot optimization |
| **Hosting** | Vercel | Global deployment & edge performance |
| **Payments** | Razorpay / UPI | Secure digital payments |

---


# 🎨 ParkEase Theme & Design System

## Color System

ParkEase uses **5 semantic colors** tied to real parking and EV contexts.

### Primary Colors

| Color | Hex Code | Usage | Meaning |
|-------|----------|-------|---------|
| **Emerald Green** | `#10B981` | Primary brand, availability | Eco-friendly, open slots |
| **Electric Blue** | `#3B82F6` | EV charging, tech | Power, electricity |
| **Amber** | `#F59E0B` | Alerts, transit | Warnings, metro |
| **Dark Charcoal** | `#1F2937` | Infrastructure | Asphalt, structure |
| **White** | `#FFFFFF` | Backgrounds | Openness, clarity |

### Color Usage Guide

- **Emerald Green** — CTAs, success, available spots  
- **Electric Blue** — EV charging UI, secondary buttons  
- **Amber** — alerts, warnings, “full parking” states  
- **Dark Charcoal** — text, headers, footers, dark surfaces  
- **White** — cards, content backgrounds  

---

# ✒️ Typography System

### Font Family

- **Primary Font:** Geist  
- **Monospace Font:** Geist Mono  
- **Fallback:** Geist Fallback (cross-browser consistency)

### Typography Scale

| Element | Font | Weight | Size | Line-Height |
|---------|------|--------|------|-------------|
| H1 | Geist Sans | 700 | 3.75rem | 1.2 |
| H2 | Geist Sans | 600 | 2.25rem | 1.3 |
| H3 | Geist Sans | 600 | 1.875rem | 1.4 |
| Body | Geist Sans | 400 | 1rem | 1.6 |
| Small | Geist Sans | 400 | 0.875rem | 1.5 |
| Labels | Geist Mono | 500 | 0.75rem | 1.4 |

### Typography Guidelines

- Maintain clear hierarchy using size + weight  
- Line-height between **1.4–1.6** for readability  
- Minimal, clean typographic approach  
- Global antialiasing  

---

# 🧱 Layout Principles

- **Mobile-first UI design**  
- **Flexbox for most layouts** (`flex items-center justify-between`)  
- **Grid only for complex layouts**  
- **Generous whitespace** using `p-4`, `p-6`, `gap-6`  
- **Responsive breakpoints:** `md`, `lg`, `xl`  

---

# 🎛️ Design Tokens (CSS Variables)

```css
/* Light Mode */
--background: #FFFFFF;
--foreground: #1F2937;
--primary: #10B981;
--primary-foreground: #FFFFFF;
--secondary: #3B82F6;
--secondary-foreground: #FFFFFF;
--accent: #F59E0B;
--accent-foreground: #1F2937;
--muted: #F3F4F6;
--muted-foreground: #6B7280;

/* Dark Mode */
--background: #1F2937;
--foreground: #FFFFFF;
--primary: #10B981;
--primary-foreground: #1F2937;
--secondary: #3B82F6;
--secondary-foreground: #1F2937;
--accent: #F59E0B;
--accent-foreground: #1F2937;
