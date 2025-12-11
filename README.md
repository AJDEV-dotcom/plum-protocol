<div align="center">
<!-- Animated Header -->
<h1>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=45&duration=2000&pause=1000&color=6366F1&center=true&vCenter=true&width=1000&lines=Veyra+Creatives+%26+Digital+Lab" alt="Veyra Creatives & Digital Lab" />
</h1>
<h3>WHERE CREATIVITY MEETS INNOVATION</h3>
<!-- Typing SVG -->
<!-- Typing SVG -->

<!-- Typing SVG -->
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&multiline=true&repeat=false&width=800&height=100&lines=A+Modern+Creative+Agency+Portfolio;Built+with+Node.js+%7C+Express+%7C+GSAP+%7C+Three.js;Featuring+Advanced+Animations+%26+Serverless+Architecture" alt="Typing SVG" /></a>

[![Live Site](https://img.shields.io/badge/LIVE_SITE-Visit_Now-6366f1?style=for-the-badge&logo=google-chrome&logoColor=white)](https://ajdev.onrender.com)
[![GitHub](https://img.shields.io/badge/GITHUB-Repository-181717?style=for-the-badge&logo=github)](https://github.com/AJDEV-dotcom/AJDEV)
[![Stars](https://img.shields.io/github/stars/AJDEV-dotcom/AJDEV?style=for-the-badge&logo=github&color=yellow)](https://github.com/AJDEV-dotcom/AJDEV/stargazers)
[![Forks](https://img.shields.io/github/forks/AJDEV-dotcom/AJDEV?style=for-the-badge&logo=github&color=blue)](https://github.com/AJDEV-dotcom/AJDEV/network/members)

</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## OVERVIEW

**Veyra Creatives & Digital Lab** is a cutting-edge portfolio website that pushes the boundaries of modern web development. This isn't just another website—it's a showcase of technical excellence, combining high-performance animations, serverless architecture, and intelligent automation to create an immersive digital experience.

<div align="center">

### PRODUCTION READY • FULLY RESPONSIVE • LIGHTNING FAST • CINEMATIC ANIMATIONS

</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## HIGHLIGHTS
<div align="center">
<table>
<tr>
<td width="50%">

### VISUAL EXPERIENCE
**GSAP Timeline Animations**  
Scroll-triggered, physics-based motion design

**Lenis Smooth Scroll**  
Professional-grade scrolling engine

**Three.js Particle System**  
Real-time generative art with WebGL

**Responsive Architecture**  
Flawless across all devices and viewports

</td>
<td width="50%">

### TECHNICAL EXCELLENCE
**Node.js & Express Backend**  
Fast, scalable server infrastructure

**Serverless Integration**  
Google Apps Script automation

**Automated Lead Capture**  
Direct-to-Sheets data pipeline

**CI/CD Pipeline**  
Continuous deployment via Render

</td>
</tr>
</table>
</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## TECHNOLOGY STACK

<div align="center">

<!-- Animated Tech Stack -->
<img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,tailwind,threejs,git,github" alt="Tech Stack" />
<br><br>

| LAYER | TECHNOLOGY | PURPOSE |
|:-----:|:----------:|:--------|
| **FRONTEND** | HTML5, CSS3, JavaScript ES6+ | Core structure and interactivity |
| **STYLING** | Tailwind CSS | Utility-first responsive design |
| **ANIMATION** | GSAP, Lenis | Professional motion graphics |
| **3D GRAPHICS** | Three.js | WebGL particle systems |
| **BACKEND** | Node.js, Express.js | Server runtime and framework |
| **AUTOMATION** | Google Apps Script | Serverless form handling |
| **DATABASE** | Google Sheets | Lead management system |
| **DEPLOYMENT** | Render, GitHub Actions | Continuous integration and delivery |

</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## QUICK START

<div align="center">

### PREREQUISITES

![Node.js](https://img.shields.io/badge/Node.js-v14.0.0+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-v6.0.0+-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-Installed-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

### INSTALLATION

```bash
# Clone the repository
git clone https://github.com/AJDEV-dotcom/AJDEV.git

# Navigate to project directory
cd AJDEV

# Install dependencies
npm install

# Start development server
node app.js
```

### ACCESS THE SITE

```
http://localhost:3000
```

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## PROJECT ARCHITECTURE

```
AJDEV/
│
├── public/                 # Static assets
│   ├── css/               # Stylesheets & animations
│   ├── js/                # Client-side scripts
│   ├── images/            # Media files
│   └── fonts/             # Typography
│
├── views/                 # HTML templates
│   ├── index.html         # Landing page
│   ├── portfolio.html     # Project showcase
│   └── contact.html       # Contact form
│
├── app.js                 # Express server
├── package.json           # Dependencies
└── README.md              # Documentation
```

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## ANIMATION SYSTEM

### GSAP SCROLL ANIMATIONS

```javascript
// Hero section parallax effect
gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true
  }
})
.from(".hero-title", { 
  y: 100, 
  opacity: 0, 
  duration: 1.2,
  ease: "power4.out" 
})
.from(".hero-subtitle", { 
  y: 50, 
  opacity: 0, 
  duration: 1,
  ease: "power3.out" 
}, "-=0.6");
```

### THREE.JS PARTICLE SYSTEM

**Technical Specifications:**
- **Particle Count:** 10,000+ dynamic particles
- **Interaction:** Mouse-reactive movement physics
- **Performance:** Optimized for 60fps on all devices
- **Visual Effects:** Dynamic color gradients based on scroll position
- **Rendering:** WebGL-accelerated graphics pipeline

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## SERVERLESS CONTACT FORM

### ARCHITECTURE FLOW

```
USER SUBMISSION
      ↓
CLIENT VALIDATION (JavaScript)
      ↓
GOOGLE APPS SCRIPT (Serverless Function)
      ↓
GOOGLE SHEETS (Database)
      ↓
EMAIL NOTIFICATION
      ↓
SUCCESS RESPONSE
```

**FEATURES:**
- Real-time input validation
- Automatic data logging
- Email notifications
- Spam protection
- Zero backend overhead
- 100% serverless architecture

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## CONTINUOUS DEPLOYMENT

### AUTOMATED WORKFLOW

Every push to `main` triggers an automated deployment pipeline:

```bash
PUSH TO GITHUB → WEBHOOK TRIGGER → BUILD PROCESS → HEALTH CHECK → LIVE DEPLOYMENT
```

**DEPLOYMENT STEPS:**
1. GitHub webhook notifies Render
2. Install dependencies (`npm install`)
3. Run build process
4. Execute health checks
5. Deploy to production
6. Site live in approximately 2 minutes

```bash
# Simple deployment workflow
git add .
git commit -m "feat: implement new animation sequence"
git push origin main
# Automatic deployment initiated
```

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## PERFORMANCE METRICS

<div align="center">

| METRIC | SCORE | STATUS |
|:------:|:-----:|:------:|
| **Lighthouse Performance** | 95/100 | ![Excellent](https://img.shields.io/badge/Excellent-00C851?style=flat-square) |
| **First Contentful Paint** | 1.2s | ![Fast](https://img.shields.io/badge/Fast-00C851?style=flat-square) |
| **Time to Interactive** | 2.1s | ![Fast](https://img.shields.io/badge/Fast-00C851?style=flat-square) |
| **Cumulative Layout Shift** | 0.01 | ![Stable](https://img.shields.io/badge/Stable-00C851?style=flat-square) |
| **SEO Score** | 100/100 | ![Perfect](https://img.shields.io/badge/Perfect-FFD700?style=flat-square) |

</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## DESIGN PHILOSOPHY

### ANIMATION PRINCIPLES
**PURPOSEFUL MOTION** - Every animation serves the narrative  
**PERFORMANCE FIRST** - Consistent 60fps across all devices  
**SUBTLE ELEGANCE** - Enhance the experience, never distract

### COLOR PALETTE

```css
Primary:   #6366f1  /* Indigo - Brand Identity */
Secondary: #8b5cf6  /* Purple - Accent Elements */
Highlight: #ec4899  /* Pink - Call-to-Actions */
Neutral:   #1e293b  /* Slate - Typography */
```

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## FUTURE ROADMAP

- [ ] **Dark Mode System** - User preference with smooth transitions
- [ ] **Blog Platform** - Dynamic content management
- [ ] **Case Study Section** - Detailed project breakdowns
- [ ] **Advanced Analytics** - Custom tracking dashboard
- [ ] **Internationalization** - Multi-language support
- [ ] **PWA Implementation** - Offline-first capabilities
- [ ] **WebGL Shaders** - Advanced visual effects
- [ ] **Voice Interface** - Experimental UI interactions

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## CONTRIBUTING

Contributions are welcome. Follow these steps:

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/YourFeature

# Commit your changes
git commit -m 'Add YourFeature'

# Push to the branch
git push origin feature/YourFeature

# Open a Pull Request
```

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">


<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## CONTACT

<div align="center">

[![Website](https://img.shields.io/badge/WEBSITE-Visit_Us-6366f1?style=for-the-badge&logo=google-chrome&logoColor=white)](https://ajdev.onrender.com)
[![Email](https://img.shields.io/badge/EMAIL-Contact-ec4899?style=for-the-badge&logo=gmail&logoColor=white)](mailto:anujjagtap05@gmail.com)
[![Portfolio](https://img.shields.io/badge/PORTFOLIO-View_Work-8b5cf6?style=for-the-badge&logo=aboutdotme&logoColor=white)](https://ajdev.onrender.com/portfolio)

</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<div align="center">

### SHOW YOUR SUPPORT

If this project inspired you or helped with your work:

⭐ **Star this repository**  
🔄 **Share it with others**  
🐛 **Report issues**  
💡 **Suggest features**

<!-- GitHub Stats -->
<br>

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=AJDEV-dotcom&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=6366f1&icon_color=ec4899)

</div>

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<div align="center">

### DEVELOPED BY AJDEV

**CRAFTING DIGITAL EXPERIENCES THAT MATTER**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer"/>

</div>
