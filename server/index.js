const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security and performance middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for development
  crossOriginEmbedderPolicy: false
}));
app.use(compression());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.HOST, /\.myshopify\.com$/] 
    : true,
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'Promotional Banner App is running successfully!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Main app route - serves admin interface
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// API route for banner configuration
app.get('/api/banner/config', (req, res) => {
  try {
    const config = {
      message: "🎉 Free Shipping on All Orders! 🎉",
      backgroundColor: "#FF6B6B",
      backgroundGradient: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
      textColor: "#FFFFFF",
      fontSize: "16px",
      fontWeight: "600",
      animation: "scroll",
      animationDuration: "15s",
      enabled: true,
      closeable: true,
      mobileEnabled: true,
      displayPosition: "top"
    };
    res.json(config);
  } catch (error) {
    console.error('Error fetching banner config:', error);
    res.status(500).json({ error: 'Failed to fetch banner configuration' });
  }
});

// App proxy endpoint - serves banner HTML to Shopify storefronts
app.get('/apps/promotional-banner', (req, res) => {
  try {
    const bannerHtml = `
      <div id="promotional-banner" style="
        background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
        color: white;
        text-align: center;
        padding: 12px 20px;
        font-size: 16px;
        font-weight: 600;
        position: relative;
        overflow: hidden;
        border-bottom: 2px solid rgba(255,255,255,0.2);
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <div class="banner-content" style="
          position: relative;
          z-index: 2;
        ">
          <div class="scrolling-text" style="
            animation: scroll-text 15s linear infinite;
            white-space: nowrap;
          ">
            🎉 Free Shipping on All Orders! 🎉 ✨ Limited Time Offer! ✨ 🚚 Fast Delivery! 🚚
          </div>
        </div>
        
        <button class="banner-close" onclick="closeBanner()" style="
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.2);
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: white;
          font-size: 18px;
          line-height: 1;
        " onmouseover="this.style.background='rgba(255,255,255,0.3)'" 
           onmouseout="this.style.background='rgba(255,255,255,0.2)'">
          ×
        </button>
      </div>

      <style>
        @keyframes scroll-text {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        #promotional-banner:hover {
          background: linear-gradient(45deg, #4ECDC4, #FF6B6B) !important;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          #promotional-banner {
            font-size: 14px !important;
            padding: 10px 40px 10px 15px !important;
          }
          
          .scrolling-text {
            animation: scroll-text 12s linear infinite !important;
          }
        }
      </style>

      <script>
        function closeBanner() {
          const banner = document.getElementById('promotional-banner');
          if (banner) {
            banner.style.animation = 'slideUp 0.3s ease-out forwards';
            setTimeout(() => {
              banner.style.display = 'none';
              localStorage.setItem('promotional-banner-closed', 'true');
            }, 300);
          }
        }
        
        // Check if banner was previously closed
        document.addEventListener('DOMContentLoaded', function() {
          if (localStorage.getItem('promotional-banner-closed') === 'true') {
            const banner = document.getElementById('promotional-banner');
            if (banner) banner.style.display = 'none';
          }
        });
        
        // Add slide up animation
        const style = document.createElement('style');
        style.textContent = \`
          @keyframes slideUp {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-100%); opacity: 0; }
          }
        \`;
        document.head.appendChild(style);
      </script>
    `;
    
    res.setHeader('Content-Type', 'text/html');
    res.send(bannerHtml);
  } catch (error) {
    console.error('Error serving banner:', error);
    res.status(500).send('<div>Error loading promotional banner</div>');
  }
});

// API endpoint for updating banner settings (future feature)
app.post('/api/banner/update', (req, res) => {
  try {
    const { message, backgroundColor, textColor, animation } = req.body;
    
    // Here you would typically save to database
    // For now, just return success
    res.json({ 
      success: true, 
      message: 'Banner settings updated successfully',
      settings: { message, backgroundColor, textColor, animation }
    });
  } catch (error) {
    console.error('Error updating banner:', error);
    res.status(500).json({ error: 'Failed to update banner settings' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl,
    message: 'The requested resource was not found on this server'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Promotional Banner App Server Started`);
  console.log(`🌐 Server running on: http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🎯 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📅 Started at: ${new Date().toISOString()}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

module.exports = app;
