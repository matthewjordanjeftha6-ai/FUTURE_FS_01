# Personal Professional Portfolio Website

A responsive, single-page portfolio website to showcase skills, projects, and professional profile. Features a modern glassmorphism navigation bar, built with vanilla HTML, CSS, and JavaScript, with a Node.js backend for the contact form. Deployed on Render with CI/CD via GitHub Actions.

**Live Demo:** [https://future-fs-01-t7fo.onrender.com/#home](https://future-fs-01-t7fo.onrender.com/#home)  
**GitHub Repo:** [matthewjordanjeftha6-ai/FUTURE_FS_01](https://github.com/matthewjordanjeftha6-ai/FUTURE_FS_01)

## ✨ Key Features

- **Modern Glass Navigation Bar**: Frosted glass effect using `backdrop-filter` and semi-transparent backgrounds. Stays fixed at the top for easy navigation and adapts to mobile screens.
- **Interactive Resume & Portfolio Sections**: Smooth scroll navigation, animated skill cards, and project showcase.
- **Contact Form with Email Notifications**: Secure form submission via Node.js backend.
- **SEO-Friendly Structure**: Semantic HTML5, meta tags, fast load times.
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop.

## 🛠️ Tech Stack & Why I Chose It

| Layer | Technology | Why I Used It |
| --- | --- | --- |
| **Frontend Markup** | **HTML5** | Provides semantic structure for accessibility and SEO. Keeps content separate from styling and logic. |
| **Styling** | **CSS3** | Used for layout, animations, and the glassmorphism effect. Chosen over frameworks to keep the site lightweight and avoid bloat. Features like `backdrop-filter`, CSS Grid, and Flexbox make modern designs possible without dependencies. |
| **Interactivity** | **JavaScript** | Handles smooth scrolling, form validation, mobile menu toggle, and dynamic UI updates. Vanilla JS was used to keep it fast and avoid unnecessary framework overhead for a static site. |
| **Backend** | **Node.js + Express** | Needed a lightweight server to handle contact form submissions securely. Node.js is non-blocking, fast, and integrates easily with Nodemailer for sending emails. Avoids exposing email credentials in client-side code. |
| **CI/CD** | **GitHub Actions** | Automates testing and ensures only working code reaches production. Every push to `main` triggers a check before Render deploys. |
| **Hosting** | **Render** | Free, simple deployment for Node.js apps. Auto-deploys from GitHub and handles HTTPS out of the box. |

### Why Not React?
React.js was optional for this task. I chose vanilla JS to demonstrate core web fundamentals, reduce bundle size, and ensure instant load times. For a portfolio, performance and simplicity matter more than a heavy framework.

## 🎨 Design Highlight: Glassmorphism Navbar

The navigation bar uses a glassmorphism effect to match the modern aesthetic:

```css
.navbar {
 background: rgba(20, 20, 20, 0.75);
 backdrop-filter: blur(12px);
 border-bottom: 1px solid rgba(255, 255, 255, 0.1);
 position: sticky;
 top: 0;
 z-index: 1000;
}

Author
Matthew J Jeftha
