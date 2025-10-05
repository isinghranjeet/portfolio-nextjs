# 🚀 Portfolio Website - Full Stack Developer Portfolio

A modern, responsive portfolio website built with **Next.js 15** frontend and **Node.js/Express** backend with **MongoDB** database. Features a sleek design with smooth animations and full-stack capabilities.

## ✨ Features

### Frontend (Next.js 15)
- ⚡ **Next.js 15** with App Router and React 18
- 🎨 **Modern UI/UX** with smooth animations
- 📱 **Fully Responsive** design
- 🚀 **Performance Optimized** with Turbopack
- 🎭 **Interactive Components** with hover effects
- 📧 **Contact Form** with backend integration

### Backend (Node.js/Express)
- 🔒 **RESTful API** with Express.js
- 🗄️ **MongoDB** database with Mongoose ODM
- 📧 **Email notifications** with Nodemailer
- 🔐 **JWT Authentication** ready
- 🛡️ **Security** with Helmet, CORS, Rate Limiting
- 📊 **API Documentation** included

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15.5.2
- **Styling:** CSS Modules & Styled JSX
- **Animations:** AOS (Animate On Scroll)
- **Icons:** React Icons
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js 22.11.0
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Email:** Nodemailer
- **Security:** Helmet, CORS, Express Rate Limit
- **Development:** Nodemon

## 📁 Project Structure

```
portfolio/
├── portfolio-nextjs/                 # Frontend (Next.js)
│   ├── components/                   # React components
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Projects.js
│   │   └── Testimonials.js
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAOS.js
│   │   ├── useScroll.js
│   │   └── useTestimonialSlider.js
│   ├── pages/                        # Next.js pages
│   │   ├── _app.js
│   │   ├── _document.js
│   │   └── index.js
│   ├── styles/                       # Global styles
│   │   └── global.css
│   ├── utils/                        # Utilities
│   │   ├── api.js                    # API configuration
│   │   └── constants.js
│   └── public/                       # Static assets
│
└── portfolio-backend/                # Backend (Node.js/Express)
    ├── config/
    │   └── database.js               # MongoDB configuration
    ├── controllers/                  # Route controllers
    │   ├── contactController.js
    │   ├── projectController.js
    │   └── testimonialController.js
    ├── models/                       # MongoDB models
    │   ├── Contact.js
    │   ├── Project.js
    │   └── Testimonial.js
    ├── routes/                       # API routes
    │   ├── contactRoutes.js
    │   ├── projectRoutes.js
    │   └── testimonialRoutes.js
    ├── middleware/                   # Custom middleware
    │   ├── auth.js
    │   └── validation.js
    ├── server.js                     # Main server file
    └── .env                          # Environment variables
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB (local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd portfolio-nextjs

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=My Portfolio
NEXT_PUBLIC_EMAIL=your-email@example.com
```

### 3. Backend Setup
```bash
# Navigate to backend directory
cd ../portfolio-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

Edit `.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
CLIENT_URL=http://localhost:3000
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
JWT_SECRET=your-secret-key
```

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd portfolio-backend
npm run dev
```
Backend will run on: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd portfolio-nextjs
npm run dev
```
Frontend will run on: `http://localhost:3000`

## 📚 API Endpoints

### Contact
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/all` - Get all contacts (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial

### Health
- `GET /api/health` - Server health check

## 🎨 Customization

### Personal Information
Edit the following files to add your personal information:
- `components/Hero.js` - Main headline and introduction
- `components/About.js` - Personal bio and background
- `components/Experience.js` - Skills, education, and work experience
- `components/Projects.js` - Your portfolio projects
- `utils/constants.js` - Social links and contact info

### Styling
- Modify `styles/global.css` for global styles
- Use CSS Modules for component-specific styles
- Update color scheme in CSS variables

### Adding New Sections
1. Create new component in `components/`
2. Import and add to `pages/index.js`
3. Add corresponding backend routes if needed

## 🗄️ Database Models

### Contact
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // 'new', 'read', 'replied'
  createdAt: Date
}
```

### Project
```javascript
{
  title: String,
  description: String,
  technologies: [String],
  imageUrl: String,
  liveUrl: String,
  githubUrl: String,
  category: String, // 'web', 'mobile', 'fullstack'
  featured: Boolean,
  startDate: Date,
  endDate: Date
}
```

### Testimonial
```javascript
{
  name: String,
  position: String,
  company: String,
  content: String,
  avatar: String,
  rating: Number,
  approved: Boolean
}
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Build and deploy frontend
npm run build
vercel --prod
```

### Backend (Vercel/Railway/Render)
1. Update environment variables for production
2. Deploy using your preferred platform
3. Update frontend API URL

### Environment Variables for Production
**Frontend (.env.production):**
```env
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api
```

**Backend (.env.production):**
```env
NODE_ENV=production
CLIENT_URL=https://your-portfolio.vercel.app
MONGODB_URI=your-production-mongodb-uri
```

## 🛠️ Development Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend
```bash
npm run dev          # Start with nodemon
npm run simple       # Start simple server (no complex routes)
npm start           # Start production server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [MongoDB Atlas](https://www.mongodb.com/atlas) - Cloud database
- [React Icons](https://react-icons.github.io/react-icons/) - Beautiful icons

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact me at [rsinghranjeet7428@gmail.com](mailto:rsinghranjeet7428@gmail.com).

---

**⭐ Star this repo if you found it helpful!**

Built with ❤️ using Next.js and Node.js
