# ☕️ BrewSpot - Cafe Finder Web App

A modern, interactive web application that helps users discover and save their favorite cafes nearby using swipe-based interactions, similar to popular dating apps.

## Preview<img width="1919" height="872" alt="BrewSpot-demo" src="https://github.com/user-attachments/assets/7b1f5ba0-7b1d-4e89-bd8c-442b5a166c02" />
)


## 🌟 Features

- **📍 Geolocation Integration**: Automatically detects user location to find nearby cafes
- **🃏 Swipeable Cards**: Intuitive Tinder-style swipe interface (left to skip, right to save)
- **💾 Local Storage**: Saves favorite cafes persistently using browser localStorage
- **🗺️ Google Places API**: Fetches real-time cafe data including ratings and photos
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Smart Caching**: Caches location data to reduce API calls and improve performance

## 🚀 Live Demo

[View Live Demo](https://priyanshimodi26.github.io/brewspot-cafe-finder/)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and Geolocation API
- **CSS3**: Custom styling with responsive design
- **JavaScript (ES6+)**: Async/await, localStorage, DOM manipulation
- **Google Places API**: Real cafe data integration
- **Hammer.js**: Touch gesture recognition for swipe functionality
- **CORS Anywhere**: Proxy for handling CORS restrictions

## 📋 Prerequisites

Before running this project, you'll need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Google Places API key (see Setup section)
- Internet connection for API calls

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cafe-finder.git
   cd cafe-finder
   ```

2. **Get Google Places API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Places API"
   - Create credentials → API Key
   - Copy your API key

3. **Configure API Key**
   - Open `script.js`
   - Replace the API key on line 2:
     ```javascript
     const apiKey = "YOUR_API_KEY_HERE";
     ```

4. **Run the Application**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

5. **Allow Location Access**
   - When prompted, click "Allow" to enable location services
   - The app will automatically load nearby cafes

## 📱 How to Use

1. **Find Cafes**:
   - Click "Find Cafes Near Me" button
   - Grant location permissions when prompted
   - Browse through cafe cards

2. **Save Favorites**:
   - Swipe right on a cafe card to save it
   - Swipe left to skip to the next cafe
   - Saved cafes are stored locally in your browser

3. **View Saved Cafes**:
   - Click "Show Saved Cafes" button
   - Browse through your collection of favorite spots

## 🎯 Key Learning Outcomes

This project demonstrates proficiency in:

- Working with external APIs and handling async operations
- Implementing HTML5 Geolocation API
- Using localStorage for data persistence
- Integrating third-party libraries (Hammer.js)
- Handling CORS issues in web applications
- Creating responsive and interactive UI/UX
- Managing application state in vanilla JavaScript

## 🏗️ Project Structure

```
cafe-finder/
│
├── index.html          # Main HTML structure
├── styles.css          # Custom styling
├── script.js           # Application logic and API calls
└── README.md           # Project documentation
```

## 🔮 Future Enhancements

Potential features to add:

- [ ] Interactive map view with cafe markers
- [ ] Filter cafes by rating, distance, or price
- [ ] Share saved cafes with friends
- [ ] Export saved cafes list
- [ ] Dark mode toggle
- [ ] Cafe details page with reviews
- [ ] Sort functionality (by rating, distance, etc.)
- [ ] "Undo" feature for accidental swipes

## 🐛 Known Issues

- **CORS Proxy**: The current CORS proxy (`cors-anywhere.herokuapp.com`) requires activation. Visit https://cors-anywhere.herokuapp.com/corsdemo and click "Request temporary access"
- **API Quota**: Free Google Places API has usage limits (check your quota in Google Console)
- **Location Caching**: Location is cached for 10 minutes to reduce API calls

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built as part of the [Codédex](https://www.codedex.io/) JavaScript projects curriculum
- Swipe functionality powered by [Hammer.js](https://hammerjs.github.io/)
- Cafe data provided by [Google Places API](https://developers.google.com/maps/documentation/places/web-service)
- Font: [Savate](https://fonts.google.com/specimen/Savate) from Google Fonts

## 📧 Contact

Your Name - Priyanshi Modi

Project Link: [https://github.com/priyanshimodi26/cafe-finder](https://priyanshimodi26.github.io/brewspot-cafe-finder/)

---

⭐️ If you found this project helpful, please consider giving it a star!
