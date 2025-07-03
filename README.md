# DevPortfolio - Modern React Portfolio

A beautiful, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme support, and a responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Fast Loading**: Optimized performance with Vite

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Lucide React
- **SEO**: React Helmet

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio_update
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Theme Colors
Customize the color scheme by editing the CSS variables in `src/styles/tokens.css`:

```css
:root {
  --clr-brand: #0a192f;        /* Primary brand color */
  --clr-accent: #64ffda;       /* Accent color */
  --clr-text: #2d3748;         /* Text color */
  --clr-bg: #f3f4f6;           /* Background color */
}
```

### Content
- Update personal information in the components
- Replace project data in `src/components/Projects.tsx`
- Modify skills in `src/components/Skills.tsx`
- Update contact information in `src/components/Contact.tsx`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React context providers
├── pages/              # Page components
├── styles/             # Global styles and tokens
├── App.tsx             # Main app component
└── main.tsx           # Application entry point
```

## 🚀 Deployment

This project can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command to `npm run build`
3. Set output directory to `dist`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 👤 Author

**Your Name**
- Website: [mike-sho.com](https://mike-sho.com)
- GitHub: [@lumskii](https://github.com/lumskii)
- LinkedIn: [@olumike](https://linkedin.com/in/olumike-sholola)

---

⭐ Star this repo if you like it! 