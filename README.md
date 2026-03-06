# Arslan Mushtaq — Portfolio

A modern, animated portfolio built with **Next.js 15**, **Framer Motion**, and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design

- **Dark editorial aesthetic** — deep space background (`#07070D`), electric mint accent (`#00E5A0`)
- **Typography**: Syne (display) + Manrope (body) + JetBrains Mono (code labels)
- **Animations**: Framer Motion for staggered reveals, scroll-triggered animations, and interactive hover states
- **Icons**: Lucide React throughout

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── Navigation.tsx      # Fixed nav with active section tracking
│   ├── Hero.tsx            # Hero with stats, CTAs, and animated intro
│   ├── Projects.tsx        # Tabbed project grid (Personal / Professional)
│   ├── Skills.tsx          # Categorised skill badges
│   ├── Experience.tsx      # Interactive accordion timeline
│   ├── Education.tsx       # Education + certifications
│   └── Contact.tsx         # Contact CTA + volunteering + footer
├── lib/
│   └── data.ts             # All portfolio content (single source of truth)
├── tailwind.config.js
├── next.config.mjs
└── tsconfig.json
```

## ✏️ Customisation

All content lives in **`lib/data.ts`** — edit that file to update:
- Personal info, stats, contact links
- Projects (personal & professional)
- Skills by category
- Work experience
- Education & certifications
- Volunteering activities

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React**

## 🌐 Deploy

Deploy easily to **Vercel**:

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.
