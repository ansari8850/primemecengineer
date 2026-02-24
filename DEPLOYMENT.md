# 🚀 Prime Mech Engineers — Vercel Deployment Guide

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A [Vercel account](https://vercel.com/signup) (free tier works perfectly)
- Node.js 18+ installed locally
- Git installed locally

---

## Step 1: Push Your Code to Git

```bash
cd /Users/atifansari/projects/primemacengineer

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Prime Mech Engineers website"

# Create a repo on GitHub (go to https://github.com/new)
# Then add the remote and push:
git remote add origin https://github.com/<your-username>/primemechengineer.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy on Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and **sign in** with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your **primemechengineer** repository from the list.
4. Vercel will auto-detect it as a **Next.js** project. Leave all settings as default:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `next build` (auto)
   - **Output Directory**: `.next` (auto)
5. Click **"Deploy"**.
6. Wait 1–2 minutes. Once done, Vercel will provide a live URL like:
   ```
   https://primemechengineer.vercel.app
   ```

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
cd /Users/atifansari/projects/primemacengineer

# Deploy to preview (staging)
vercel

# Deploy to production
vercel --prod
```

Follow the prompts:
- **Set up and deploy?** → `Y`
- **Which scope?** → Select your account
- **Link to existing project?** → `N`
- **Project name?** → `primemechengineer`
- **Directory?** → `./`
- **Override settings?** → `N`

---

## Step 3: Set Up Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → **Settings** → **Domains**.
2. Add your custom domain (e.g., `primemechengineers.com`).
3. Vercel will provide DNS records. Update them at your domain registrar:

   | Type  | Name | Value                        |
   |-------|------|------------------------------|
   | A     | @    | 76.76.21.21                  |
   | CNAME | www  | cname.vercel-dns.com         |

4. SSL certificate is auto-provisioned by Vercel. ✅

---

## Step 4: Environment Variables (If Needed)

If you integrate EmailJS or any other service later:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**.
2. Add variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID = your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_public_key
   ```
3. Click **Save** and **Redeploy**.

---

## Step 5: Enable Vercel Analytics (Optional)

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// Inside <body>:
<Analytics />
```

Then redeploy:
```bash
git add . && git commit -m "Add Vercel analytics" && git push
```

---

## Auto-Deploy on Git Push

Once connected to Vercel, every `git push` to `main` branch will **automatically trigger a new deployment**. No manual steps needed!

---

## Build & Test Locally Before Deploying

```bash
# Build production bundle locally
npm run build

# Test the production build locally
npm start
# Visit http://localhost:3000
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm run build` locally first to catch errors |
| Images not loading | Ensure images are in `/public/images/` directory |
| 404 on refresh | Next.js App Router handles this automatically on Vercel |
| Slow initial load | Images are optimized by Next.js `<Image>` component |
| Custom domain not working | Wait 24-48 hours for DNS propagation |

---

## Project Structure

```
primemacengineer/
├── app/
│   ├── globals.css          # Global styles & design system
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage (all sections)
├── components/
│   ├── Navbar.tsx            # Sticky navigation bar
│   ├── HeroSection.tsx       # Hero with CTA & stats
│   ├── ServicesSection.tsx    # 8 service cards + extras
│   ├── AboutSection.tsx      # Company introduction
│   ├── ClientsSection.tsx    # Client logo grid
│   ├── TestimonialsSection.tsx  # Testimonial carousel
│   ├── ContactSection.tsx    # Contact form & info
│   ├── Footer.tsx            # Footer with links
│   └── *.module.css          # CSS modules for each component
├── public/
│   └── images/               # Service images
├── next.config.ts
├── package.json
└── DEPLOYMENT.md             # This file
```

---

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Framer Motion** (animations)
- **React Intersection Observer** (scroll reveals)
- **React Hot Toast** (notifications)
- **Vanilla CSS Modules** (styling)

---

## 🎉 Your website is live!

After deployment, your website will be accessible at:
- **Vercel URL**: `https://primemechengineer.vercel.app`
- **Custom Domain**: `https://primemechengineers.com` (after DNS setup)

For support, email: primemechengineers@gmail.com | Call: 9967765728
