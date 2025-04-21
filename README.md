# Luxury Interior Design Website

A modern, luxury-themed marketing website built with Next.js 14, React, and Tailwind CSS.

## Features

- 🎨 Modern, luxury design with custom theme
- 📱 Fully responsive layout
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with email notifications
- 🖼️ Portfolio gallery with lightbox
- 🎯 SEO optimized
- 🚀 Fast and performant

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Heroicons
- React Hook Form
- Zod
- Nodemailer
- React Email
- Lightbox2

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/luxury-interior-design.git
   cd luxury-interior-design
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   # SMTP Configuration (Zoho example)
   SMTP_HOST=smtp.zoho.com
   SMTP_PORT=465
   SMTP_USER=your-email@zoho.com
   SMTP_PASSWORD=your-app-password
   ADMIN_EMAIL=your-admin-email@example.com

   # Next.js Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/src
  /app
    /(pages)
      - page.tsx (Home)
      - services/[slug]/page.tsx
      - portfolio/[slug]/page.tsx
      /api
        /contact/route.ts
  /components
    - About.tsx
    - Services.tsx
    - ProcessTimeline.tsx
    - PortfolioGallery.tsx
    - ContactForm.tsx
    - Footer.tsx
    /ui
      - button.tsx
  /emails
    - ThankYouEmail.tsx
  /lib
    - utils.ts
  /styles
    - globals.css
```

## Customization

- Update the theme colors in `tailwind.config.ts`
- Modify the content in the respective component files
- Add or remove services in `src/components/Services.tsx`
- Update portfolio items in `src/components/PortfolioGallery.tsx`
- Customize the email template in `src/emails/ThankYouEmail.tsx`

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## License

MIT
