# Social Cards Media Directory

This directory contains all social media card images and related assets for the Todd Agriscience website.

## Directory Structure

```
/media/social-cards/
├── README.md                    # This documentation file
├── og-image.png                 # Open Graph image (1200x630px)
├── twitter-card-image.png       # Twitter card image (1200x630px)
├── linkedin-card-image.png      # LinkedIn card image (1200x627px)
└── [future-social-cards]        # Additional social media assets
```

## File Naming Conventions

### Required Social Cards

- `og-image.png` - Open Graph image for Facebook, LinkedIn, etc.
- `twitter-card-image.png` - Twitter card image
- `linkedin-card-image.png` - LinkedIn specific card

## Image Specifications

### Open Graph (og-image.png)

- **Dimensions**: 1200x630px (1.91:1 ratio)
- **Format**: PNG (preferred) or JPG
- **File size**: < 1MB
- **Usage**: Facebook, LinkedIn, WhatsApp, Discord, etc.

### Twitter Card (twitter-card-image.png)

- **Dimensions**: 1200x630px (1.91:1 ratio)
- **Format**: PNG (preferred) or JPG
- **File size**: < 1MB
- **Usage**: Twitter, X, etc.

### LinkedIn Card (linkedin-card-image.png)

- **Dimensions**: 1200x627px (1.91:1 ratio)
- **Format**: PNG (preferred) or JPG
- **File size**: < 1MB
- **Usage**: LinkedIn posts and articles

## Design Guidelines

1. **Brand Consistency**: Use Todd Agriscience brand colors and fonts
2. **Readability**: Ensure text is legible at small sizes
3. **Logo Placement**: Include the Todd logo prominently
4. **Safe Area**: Keep important content within the center 80% of the image
5. **High Contrast**: Use sufficient contrast for accessibility

## Usage in Code

These images are referenced in the metadata configuration:

```typescript
// src/lib/metadata.ts
const siteConfig = {
  ogImage: 'https://www.toddagriscience.com/media/social-cards/og-image.png',
  twitterImage:
    'https://www.toddagriscience.com/media/social-cards/twitter-card-image.png',
  linkedinImage:
    'https://www.toddagriscience.com/media/social-cards/linkedin-card-image.png',
};
```

## Adding New Social Cards

1. Create the image following the specifications above
2. Save it in this directory with the appropriate naming convention
3. Update the metadata configuration if needed
4. Test the social card preview using tools like:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## File Management

- Keep original design files in a separate design repository
- Use version control for tracking changes
- Optimize images for web before adding to this directory
- Consider creating different versions for different use cases (e.g., seasonal variations)
