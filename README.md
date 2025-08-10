# 🎮 Gaming Review

**Live Site:** [https://gaming-review-client.vercel.app/](https://gaming-review-client.vercel.app/)

---

## 📌 Project Purpose

Gaming Review is a web application for game enthusiasts to share, explore, and manage game reviews.  
Users can add reviews, update or delete their own reviews, and maintain a personal watchlist.  
The app uses Firebase authentication for secure login and private route protection.

---

## 🚀 Key Features

- 🔐 **Authentication**
  - Email/Password Sign Up and Login
  - Google Sign-In
  - Protected (private) routes for Add Review, My Reviews, and Watchlist

- 📝 **Game Reviews**
  - Add new game reviews with images, rating, genre, and description
  - Update and delete your own reviews
  - Explore detailed reviews of each game

- ⭐ **Highest Rated Games**
  - Dedicated section on home page showing top-rated games

- 📃 **Watchlist**
  - Add reviews to personal watchlist
  - Manage watchlist (view-only for now)

- ❌ **Error Handling**
  - Custom 404 page for invalid routes

- 💻 **Responsive Design**
  - Fully responsive for mobile, tablet, and desktop
  - Clean and modern UI

---

## ⚙️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **DaisyUI**
- **Firebase Authentication**
- **React Router DOM**
- **SweetAlert2**
- **Vercel (for deployment)**

---

## 📦 NPM Packages Used

- `react-router-dom`
- `firebase`
- `sweetalert2`
- `tailwindcss`
- `daisyui`

---

## 🚀 Deployment

This app is deployed using Vercel. To deploy:
```bash
# Build the project
npm run build

# Deploy to Vercel (Production)
vercel --prod

