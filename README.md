# Vishal Eshwar - Portfolio

A modern, gamer-themed portfolio website built with React.

## Features

- Dark gamer theme with cyan/magenta accents
- Responsive design
- Multiple pages: About, Work Experience, Resume, Contact
- Smooth animations and transitions

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deployment

The project includes redirect configurations for different hosting platforms:

- **Netlify**: Uses `public/_redirects` (automatically copied to dist on build)
- **Vercel**: Uses `vercel.json`
- **Apache**: Uses `.htaccess` (copy to dist folder after build)
- **Nginx**: Use `nginx.conf` as reference for server configuration

After building (`npm run build`), all routes will redirect to `index.html` to support client-side routing.

