# Meridian Labs Website

A lightweight, professional website for Meridian Labs built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router) - React framework with built-in routing and SEO
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Resend** - Serverless email delivery via API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

## Setting Up Contact Form

The contact form uses Resend for serverless email delivery.

1. Go to [Resend.com](https://resend.com) and create a free account
2. Get your API key from the Resend dashboard
3. Create a `.env.local` file in the root directory and add:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. (Optional) Verify your domain in Resend to use a custom "from" address. Update the `from` field in `app/api/contact/route.ts` with your verified domain.

The form includes basic rate limiting (5 requests per minute per IP) to prevent abuse.

## Customization

- Update company information in `app/page.tsx`
- Modify colors and styling in `tailwind.config.ts`
- Add your own projects to the Portfolio section
- Update email address in the Contact section

## License

Private - Meridian Labs
