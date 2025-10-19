# Minimalist Portfolio - Next.js

A clean, professional portfolio template built with Next.js, TypeScript, and Tailwind CSS. This template replicates the minimalist design from DevPortfolioTemplates with a focus on showcasing technical expertise and professional experience.

## Features

- 🎨 **Minimalist Design** - Clean, professional layout with dark theme
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Next.js 15** - Built with the latest Next.js App Router
- 🎯 **TypeScript** - Type-safe development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 🔍 **SEO Optimized** - Meta tags and structured data for better search visibility
- 🚀 **Performance Optimized** - Static generation for fast loading times

## Design Highlights

- **Two-column Layout**: Profile information on the left, content on the right
- **Professional Profile Section**: Photo, name, title, contact info, and social links
- **Skills Showcase**: Categorized technical skills with clean tag design
- **Experience Timeline**: Professional experience with timeline visualization
- **Dark Theme**: Modern dark color scheme with excellent contrast
- **Smooth Interactions**: Hover effects and transitions for better UX

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd minimalist-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

Edit the content in the following components:

- **Profile**: `src/components/ProfileSection.tsx`
  - Update name, title, bio, email, location
  - Replace profile image in `public/portrait.jpg`
  - Update social media links

- **Skills**: `src/components/SkillsSection.tsx`
  - Modify skill categories and technologies
  - Add or remove skill sections

- **Experience**: `src/components/ExperienceSection.tsx`
  - Update job titles, companies, dates, and descriptions
  - Add or remove experience entries

### Styling

The design uses Tailwind CSS classes. Key customization areas:

- **Colors**: Modify the gray color palette in component classes
- **Typography**: Update font sizes and weights
- **Spacing**: Adjust padding and margins
- **Layout**: Modify grid columns and responsive breakpoints

### SEO & Metadata

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your professional description",
};
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main portfolio page
└── components/
    ├── ProfileSection.tsx    # Left column profile info
    ├── SkillsSection.tsx     # Skills showcase
    └── ExperienceSection.tsx # Experience timeline
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Next.js Image** - Optimized image component

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms

The portfolio generates static files and can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Build the static files:
```bash
npm run build
```

## Performance

- ✅ Static Site Generation (SSG)
- ✅ Optimized images with Next.js Image
- ✅ Minimal JavaScript bundle
- ✅ Excellent Core Web Vitals scores
- ✅ Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Inspiration

This template is inspired by the minimalist portfolio design from [DevPortfolioTemplates](https://www.devportfoliotemplates.com/portfolio-templates/minimalist), rebuilt from scratch using modern Next.js best practices.