# PWA Icons Directory

This directory contains all Progressive Web App (PWA) icons and favicon files for the Todd Agriscience website.

## Directory Structure

```
/icons/
├── README.md                    # This documentation file
├── favicon-16x16.png           # 16x16px favicon
├── favicon-32x32.png           # 32x32px favicon
├── android-chrome-192x192.png  # Android Chrome icon (192x192px)
└── android-chrome-512x512.png  # Android Chrome icon (512x512px)
```

## Icon Specifications

### Favicon Files

- **favicon-16x16.png** - 16x16px, used in browser tabs
- **favicon-32x32.png** - 32x32px, used in bookmarks and browser UI

### Android/Chrome Icons

- **android-chrome-192x192.png** - 192x192px, Android home screen
- **android-chrome-512x512.png** - 512x512px, Android splash screen

### Root Level Icons

- **favicon.ico** - Multi-size ICO file (16x16, 32x32, 48x48px)
- **apple-touch-icon.png** - 180x180px, iOS home screen

## Design Guidelines

1. **Consistent Branding**: Use Todd Agriscience logo and brand colors
2. **High Quality**: Ensure crisp rendering at all sizes
3. **Simple Design**: Avoid complex details that don't scale well
4. **Square Format**: All icons should be square (1:1 ratio)
5. **Safe Area**: Keep important elements within the center 80% of the icon

## File Formats

- **PNG**: Preferred format for all icon files
- **ICO**: Required for favicon.ico (multi-size format)
- **Transparency**: Use transparent backgrounds for better integration

## Usage in Code

These icons are referenced in the metadata configuration:

```typescript
// src/lib/metadata.ts
icons: {
  icon: [
    { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
    { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  // ... other icon configurations
}
```

## PWA Manifest

The icons are also referenced in the web app manifest:

```json
// public/site.webmanifest
{
  "icons": [
    {
      "src": "/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
    // ... other icon definitions
  ]
}
```

## Testing

Test your icons using:

- [Favicon Checker](https://realfavicongenerator.net/favicon_checker)
- [PWA Builder](https://www.pwabuilder.com/)
- Browser developer tools (Application tab)

## Adding New Icons

1. Create the icon following the specifications above
2. Save it in this directory with the appropriate naming convention
3. Update the metadata configuration if needed
4. Test the icon display across different platforms

## Current Status

⚠️ **Placeholder Files**: The current PNG files are placeholders. Replace them with actual icon files before deploying to production.

## File Naming Convention

- Use lowercase with hyphens: `favicon-16x16.png`
- Include size in filename: `android-chrome-192x192.png`
- Be descriptive: `apple-touch-icon.png`
