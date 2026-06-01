# 🎯 FocusFlow AI - Personal Productivity Analytics System

A modern, AI-powered productivity dashboard that helps you track goals, manage time with a focus timer, and get personalized productivity suggestions.

**🌍 Live Demo:** https://focus-flow-ai-gray.vercel.app/

---

## ✨ Features

- 📊 **Analytics Dashboard** - Visual insights into your productivity patterns
- ⏱️ **Focus Timer** - Pomodoro-style timer for deep work sessions
- 🎯 **Goal Tracker** - Set and track daily/weekly goals
- 🤖 **AI Suggestions** - Personalized productivity tips based on your habits
- 🔐 **Authentication** - Firebase Auth (Login/Signup)
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS + Inline Styles
- **Backend:** Firebase (Auth + Firestore)
- **Charts:** Chart.js + react-chartjs-2
- **Deployment:** Vercel (auto-deploy from GitHub)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- GitHub account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/apekshaacharya2247-oss/Focus-Flow-AI.git
cd Focus-Flow-AI

# Install dependencies
cd client
npm install

# Start dev server
npm run dev
```

The app will run at `http://localhost:5174/`

### Build for Production

```bash
npm run build
```

Output files will be in `client/dist/`

---

## 📁 Project Structure

```
Focus-Flow-AI/
├── client/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Auth pages (Login/Signup)
│   │   ├── App.jsx             # Main dashboard
│   │   ├── firebase.js         # Firebase config
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── package.json                # Root package.json
├── vercel.json                 # Vercel deployment config
└── README.md
```

---

## 🔧 Configuration

### Firebase Setup
Update `client/src/firebase.js` with your Firebase credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Automatic)

1. Push to GitHub: `git push origin main`
2. Vercel auto-deploys on every push
3. Live at: https://focus-flow-ai-gray.vercel.app/

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on localhost:5174 |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

---

## 🤝 Contributing

Feel free to fork, submit issues, and create pull requests!

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📧 Contact

- **GitHub:** https://github.com/apekshaacharya2247-oss
- **Live App:** https://focus-flow-ai-gray.vercel.app/

---

**Happy productivity! 🚀**