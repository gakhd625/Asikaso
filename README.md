# Asikaso 🇵🇭

A beginner-friendly Next.js web app that serves as a dashboard-style guide for Philippine government online applications (NBI, SSS, Pag-IBIG, PhilHealth).

**Target users:** First-time job seekers and beginners who need step-by-step guidance on applying for essential government IDs and services.

## ✨ Features

- 📋 **Dashboard** - Grid of service cards for quick navigation
- 📝 **Step-by-step guides** - Easy-to-follow numbered instructions
- 🔗 **Official links** - Direct links to government websites
- 📱 **Mobile-first** - Responsive design for all devices
- 🎨 **Clean UI** - Simple, accessible interface

## 🛠️ Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📁 Project Structure

```
asikaso/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Header
│   ├── page.tsx             # Dashboard page
│   └── services/
│       └── [slug]/
│           ├── page.tsx     # Service detail page
│           └── not-found.tsx
├── components/
│   ├── index.ts             # Component exports
│   ├── Header.tsx           # Navigation header
│   ├── ServiceCard.tsx      # Dashboard service cards
│   └── StepList.tsx         # Step-by-step list component
├── data/
│   └── services.ts          # Static service data
└── public/
```

## 🚀 Installation Guide

### Prerequisites

Make sure you have the following installed:

- **Node.js** 18.17 or later - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** - [Download here](https://git-scm.com/)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/asikaso.git
   cd asikaso
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding a New Service

1. Open `data/services.ts`
2. Add a new service object to the `services` array:

   ```typescript
   {
     slug: "your-service-slug",
     name: "Service Name",
     shortName: "SHORT",
     description: "Brief description for the card.",
     longDescription: "Detailed description for the service page.",
     steps: [
       "Step 1 instruction",
       "Step 2 instruction",
       // ... more steps
     ],
     officialLink: "https://official-website.gov.ph/",
     icon: "Shield", // Options: Shield, Users, Home, Heart
     color: "blue",  // Options: blue, green, yellow, red
   }
   ```

3. The new service will automatically appear on the dashboard!

### Code Contributions

1. **Fork** the repository
2. **Create a branch** for your feature: `git checkout -b feature/your-feature`
3. **Make your changes** and test locally
4. **Commit** with clear messages: `git commit -m "Add: description of change"`
5. **Push** to your fork: `git push origin feature/your-feature`
6. **Open a Pull Request** with a description of your changes

### Code Style Guidelines

- Use TypeScript for all new files
- Follow existing naming conventions
- Use Tailwind CSS for styling (no custom CSS unless necessary)
- Keep components small and reusable
- Add comments for complex logic

### Reporting Issues

Found a bug or have a suggestion? [Open an issue](https://github.com/your-username/asikaso/issues) with:

- Clear description of the problem
- Steps to reproduce (if it's a bug)
- Screenshots (if applicable)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Philippine government agencies for their online services
- The Next.js team for the amazing framework
- All contributors who help improve this guide

---

**Made with 🇵🇭 for Filipinos**

_Disclaimer: This is an informational guide only. Always verify information on official government websites (.gov.ph)._
