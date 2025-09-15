# Flix TV Clone

A project to clone a video streaming website using pure HTML, CSS, and JavaScript.

## 📋 System Requirements

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **NPM** (usually comes with Node.js)

## 🚀 How to Run the Project

### Method 1: Using the Auto Script (Recommended)

1. **Run the start.bat file:**
	```bash
	# Just double-click the start.bat file
	# Or run in terminal:
	.\start.bat
	```
- If this is the first time running, it will install dependencies automatically. And then you need run `start.bat` again.

### Method 2: Manual Setup

1. **Install dependencies:**
	```bash
	npm install
	```

2. **Start the server (Choose one):**

	**Option 2a: Use the custom Node.js server**
	```bash
	npm start
	# or
	node server.js
	```

	**Option 2b: Use http-server**
	```bash
	npm run serve
	```

3. **Open your browser:**
	- Visit: `http://localhost:3000`
	- The server will auto-open the browser (with http-server)

## 🛠️ Available Commands

| Command         | Description                                 |
|-----------------|---------------------------------------------|
| `npm start`     | Start development server with Node.js        |
| `npm run dev`   | Same as npm start                            |
| `npm run serve` | Start with http-server (auto-reload enabled) |

## 📁 Project Structure

```
flix-tv-clone/
├── index.html              # Home page
├── catalog.html            # Movie catalog page
├── detail.html             # Movie detail page
├── loginAndRegister.html   # Login/Register page
├── profile.html            # User profile page
├── pricingplan.html        # Pricing plan page
├── Live.html               # Live TV page
├── contact.html            # Contact page
├── aboutUs.html            # About Us page
├── assets/                 # Static assets
│   ├── css/                # Stylesheets
│   ├── images/             # Images
│   └── webfonts/           # Fonts
├── data/                   # JSON data
├── js/                     # JavaScript files
├── server.js               # Custom Node.js server
├── package.json            # NPM configuration
└── start.bat               # Windows start script
```

## 🔧 Server Features

### Custom Node.js Server (server.js)
- ✅ Serve static files (HTML, CSS, JS, images)
- ✅ Automatic MIME type detection
- ✅ 404 error handling
- ✅ Security: prevents directory traversal
- ✅ Cache control
- ✅ Graceful shutdown

### HTTP-Server Package
- ✅ Live reload on file changes
- ✅ CORS support
- ✅ Automatic browser opening
- ✅ Gzip compression

## 🌐 Accessing Pages

Once the server is running, you can access:

- **Home:** `http://localhost:3000/`
- **Catalog:** `http://localhost:3000/catalog.html`
- **Detail:** `http://localhost:3000/detail.html`
- **Login/Register:** `http://localhost:3000/loginAndRegister.html`
- **Profile:** `http://localhost:3000/profile.html`
- **Pricing Plan:** `http://localhost:3000/pricingplan.html`
- **Live TV:** `http://localhost:3000/Live.html`
- **Contact:** `http://localhost:3000/contact.html`
- **About Us:** `http://localhost:3000/aboutUs.html`

## 🐛 Troubleshooting

### "Node.js not found" Error
- Make sure you have installed Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation
- Check with: `node --version`

### "Port 3000 already in use" Error
- Close other applications using port 3000
- Or change the port in `server.js`: `const port = 3001;`

### CSS/JS Files Not Loading
- Ensure file paths are correct
- Check browser console for 404 errors

## 📝 Development Notes

- This is a static website project, no database required
- Uses JavaScript modules (`type="module"`)
- Data is stored in JSON files in the `data/` folder
- Responsive design for mobile and desktop

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
