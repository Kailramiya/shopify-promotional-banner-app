# 🎉 Shopify Promotional Banner App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Shopify](https://img.shields.io/badge/Shopify-App-success.svg)](https://shopify.dev/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18+-blue.svg)](https://expressjs.com/)

A beautiful, professional Shopify app that displays customizable promotional banners with smooth animations, gradient backgrounds, and mobile-responsive design. Built as a demonstration of modern Shopify app development practices.

## ✨ Features

- 🎨 **Beautiful Design**: Stunning gradient backgrounds with smooth CSS animations  
- 📱 **Mobile Responsive**: Perfect display on all devices with adaptive layouts
- ⚙️ **Easy Configuration**: Customize colors, text, and animations through Shopify's theme editor
- 🚀 **High Performance**: Lightweight code with optimized animations and fast loading
- 🔒 **Production Ready**: Built with security, error handling, and scalability in mind
- 🛠️ **Developer Friendly**: Clean, documented code with modern architecture

## 🏗️ Architecture

shopify-promotional-banner-app/
├── 📁 server/ # Express.js backend
│ └── index.js # Main server with API endpoints
├── 📁 public/ # Admin interface
│ └── index.html # Professional dashboard
├── 📁 extensions/ # Shopify app extensions
│ └── promotional-banner/ # Theme app extension
│ ├── shopify.extension.toml
│ └── blocks/banner.liquid # Customizable banner component
├── 📁 .github/workflows/ # CI/CD automation
├── package.json # Dependencies and scripts
├── shopify.app.toml # Shopify app configuration
└── vercel.json # Deployment configuration

text

## 🚀 Live Demo

- **🌐 Deployed App**: [https://your-app-name.vercel.app](https://your-app-name.vercel.app)
- **📊 Health Check**: [https://your-app-name.vercel.app/health](https://your-app-name.vercel.app/health)
- **🎯 Banner API**: [https://your-app-name.vercel.app/api/banner/config](https://your-app-name.vercel.app/api/banner/config)

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Shopify**: Theme App Extensions, App Proxy, Partner API
- **Deployment**: Vercel with GitHub integration
- **CI/CD**: GitHub Actions
- **Version Control**: Git + GitHub

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18.0+) and **npm** installed
- **Shopify Partner Account** with development store
- **GitHub account** for version control
- **Vercel account** for deployment

## ⚡ Quick Start

### 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/shopify-promotional-banner-app.git
cd shopify-promotional-banner-app

text

### 2. Install Dependencies

npm install

text

### 3. Environment Configuration

Copy environment template
cp .env.example .env

Edit .env with your Shopify app credentials
SHOPIFY_API_KEY=your_shopify_client_id
SHOPIFY_API_SECRET=your_shopify_client_secret
HOST=http://localhost:3000
NODE_ENV=development

text

### 4. Start Development Server

npm start

text

Visit `http://localhost:3000` to see the admin interface.

## 🔧 Development

### Available Scripts

npm start # Start production server
npm run dev # Start development with Shopify CLI
npm run build # Build for production
npm run deploy # Deploy to Shopify

text

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Admin dashboard interface |
| `/health` | GET | Health check and status |
| `/api/banner/config` | GET | Banner configuration JSON |
| `/apps/promotional-banner` | GET | Banner HTML (App Proxy) |
| `/api/banner/update` | POST | Update banner settings |

## 📱 Installation on Shopify Store

### Step 1: Install the App
1. Access your Shopify Partner Dashboard
2. Navigate to your development store
3. Install the "Promotional Banner App"

### Step 2: Add to Theme
1. Go to **Online Store → Themes → Customize**
2. Add a new section or block
3. Search for **"Promotional Banner"**
4. Add the block to your header or desired location

### Step 3: Customize
1. **Banner Text**: Enter your promotional message
2. **Colors**: Choose primary and secondary colors
3. **Animation**: Enable/disable scrolling animation
4. **Timing**: Adjust animation speed
5. **Behavior**: Configure close button settings

### Step 4: Save and Test
1. **Save** your theme changes
2. **Preview** your store
3. **Test** on mobile devices
4. **Verify** functionality across different browsers

## 🎨 Customization Options

The banner supports extensive customization through Shopify's theme editor:

- **📝 Text Content**: Custom promotional messages
- **🎨 Colors**: Primary and secondary gradient colors
- **⚡ Animations**: Scrolling speed and direction
- **📏 Dimensions**: Banner height and padding
- **🔧 Behavior**: Close button, persistence settings
- **📱 Responsive**: Mobile-specific optimizations

## 🚀 Deployment

### Deploy to Vercel

1. **Connect GitHub to Vercel**:
   - Login to [Vercel](https://vercel.com)
   - Import your repository
   - Configure environment variables

2. **Set Environment Variables**:
SHOPIFY_API_KEY=your_client_id
SHOPIFY_API_SECRET=your_client_secret
NODE_ENV=production

text

3. **Deploy**:
- Vercel will automatically deploy on push to main
- Update Shopify app URLs with your Vercel domain

### Manual Deployment

Install Vercel CLI
npm install -g vercel

Deploy
vercel --prod

text

## 🧪 Testing

### Local Testing
Start server
npm start

Test endpoints
curl http://localhost:3000/health
curl http://localhost:3000/api/banner/config

text

### Production Testing
1. **Health Check**: Verify `/health` endpoint returns 200
2. **Banner Display**: Test banner appears on storefront  
3. **Mobile Responsive**: Check mobile device compatibility
4. **Close Functionality**: Verify close button works
5. **Theme Editor**: Test customization options

## 📊 Performance

- **⚡ Fast Loading**: < 100ms initial load time
- **📱 Mobile Optimized**: Responsive design for all devices
- **🎯 SEO Friendly**: Semantic HTML and accessibility features
- **🔄 Efficient**: Minimal DOM manipulation and optimized animations

## 🔐 Security

- **🛡️ Helmet.js**: Security headers and protection
- **🔒 CORS**: Configured for Shopify domains
- **🔑 Environment Variables**: Secure credential management
- **✅ Input Validation**: Sanitized user inputs
- **🚫 No Inline Scripts**: CSP-compliant code

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- 📧 Email: your.email@example.com
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 🌐 Portfolio: [Your Portfolio](https://yourportfolio.com)

## 🙏 Acknowledgments

- **Shopify** for excellent developer tools and documentation
- **Vercel** for seamless deployment platform
- **Express.js** community for robust web framework
- **GitHub** for version control and collaboration tools

## 📈 Project Status

- ✅ **Core Features**: Complete and functional
- ✅ **Theme Integration**: Fully implemented
- ✅ **Mobile Responsive**: Tested and optimized
- ✅ **Production Ready**: Deployed and monitored
- 🔄 **Future Enhancements**: Analytics integration, A/B testing

---

**⭐ If you found this project helpful, please give it a star!**

**🔗 [View Live Demo](https://your-app-name.vercel.app) | [Report Bug](https://github.com/yourusername/shopify-promotional-banner-app/issues) | [Request Feature](https://github.com/yourusername/shopify-promotional-banner-app/issues)**
Add and Commit README
bash
# Add README to staging
git add README.md

# Commit with descriptive message
git commit -m "docs: Add comprehensive README with installation and usage guide

- Complete project documentation with features and architecture
- Step-by-step installation and setup instructions  
- API endpoint documentation and usage examples
- Deployment guide for Vercel with environment configuration
- Professional formatting with badges and structured sections
- Contributing guidelines and project status information"

# Push to GitHub
git push origin main
📸 Step 5.6: Add Project Screenshots (Optional - 2 minutes)
Take Screenshots
Capture these key visuals:

Admin Interface: Your beautiful dashboard at localhost:3000

Banner Preview: The animated promotional banner

Theme Editor: Shopify customization interface (after Phase 6)

Mobile View: Responsive design on mobile

Add Screenshots to Repository
bash
# Create screenshots directory
mkdir screenshots

# Add your screenshot files (banner-demo.png, admin-interface.png, etc.)
# Then commit them:

git add screenshots/
git commit -m "docs: Add project screenshots and visual documentation

- Admin interface dashboard screenshot
- Banner animation preview image  
- Mobile responsive design examples
- Theme editor customization interface"

git push origin main
Update README with Screenshots
Add to your README.md after the description:

text
## 📸 Screenshots

### Admin Dashboard
![Admin Interface](screenshots/admin-interface.png)

### Promotional Banner
![Banner Demo](screenshots/banner-demo.png)

### Mobile Responsive
![Mobile View](screenshots/mobile-view.png)
