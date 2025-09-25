# Midnight's Woodworking Website

A static website for Midnight's Woodworking, showcasing handcrafted wood and resin gifts made in Buffalo, NY.

## Features

- Responsive design optimized for mobile and desktop
- SEO-optimized with local search targeting
- Schema.org structured data for better search visibility
- Fast loading with WebP images and optimized assets
- Contact form integration with Formspree
- Venmo payment integration
- Local landing pages for Buffalo area suburbs
- Blog section for content marketing

## File Structure

```
midnights-woodworking/
├── index.html              # Main homepage
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── img/                # Images and graphics
├── local/                  # Local SEO landing pages
├── blog/                   # Blog posts
├── manifest.webmanifest    # Web app manifest
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for search engines
└── README.md               # This file
```

## Setup Instructions

1. **GitHub Pages Setup:**
   - Create a new repository named `midnights-woodworking`
   - Upload all files to the repository
   - Enable GitHub Pages in repository settings
   - Set source to "Deploy from a branch" and select "main"

2. **Update Contact Form:**
   - Sign up for a free Formspree account at https://formspree.io
   - Replace the form action URL in index.html with your Formspree endpoint
   - Current placeholder: `https://formspree.io/f/xpzvgqjr`

3. **Update URLs:**
   - Replace `terrybridenbaker.github.io/midnights-woodworking` with your actual GitHub Pages URL
   - Update in: index.html, sitemap.xml, and all local pages

## Adding New Products

1. Add product images to `assets/img/`
2. Convert to WebP format for better performance:
   ```bash
   cwebp -q 85 image.jpg -o image.webp
   ```
3. Update the categories section in index.html
4. Add product schema markup if needed

## Adding New Local Pages

1. Copy an existing local page from the `local/` directory
2. Update the city name, content, and local references
3. Add the new page to `sitemap.xml`
4. Link to it from other local pages

## Adding Blog Posts

1. Create a new HTML file in the `blog/` directory
2. Follow the existing blog post structure
3. Add to `sitemap.xml`
4. Consider linking from the homepage or other relevant pages

## SEO Optimization

- Each page has unique title tags and meta descriptions
- Schema.org markup is included for better search visibility
- Local keywords are naturally integrated throughout content
- Image alt text includes relevant keywords
- Internal linking structure supports SEO

## Performance Optimization

- Images are converted to WebP format with JPEG fallbacks
- CSS and JavaScript are minified for production
- Lazy loading is implemented for non-critical images
- Font loading is optimized with preconnect

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers

## Contact Information

- **Business:** Midnight's Woodworking
- **Phone:** (716) 799-5297
- **Email:** midnightswoodworking@gmail.com
- **Venmo:** @terrybridenbaker
- **Facebook:** https://www.facebook.com/terry.bridenbaker

## License

All content and code is proprietary to Midnight's Woodworking. Images and branding elements are not to be used without permission.

## Maintenance

- Update product images and descriptions as inventory changes
- Add new blog posts regularly for SEO benefits
- Monitor contact form submissions
- Update local pages with seasonal content
- Check for broken links quarterly

## Analytics Setup (Optional)

To track website performance:

1. Set up Google Analytics 4
2. Add the tracking code to the `<head>` section of all pages
3. Set up Google Search Console for SEO monitoring
4. Consider Facebook Pixel for social media advertising

## Backup

- Repository is automatically backed up on GitHub
- Consider downloading a local copy periodically
- Export any form submissions from Formspree regularly

