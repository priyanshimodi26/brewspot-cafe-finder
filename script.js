// Replace with your actual Google API key
const apiKey = "AIzaSyCXKdczfWQ-R_7jmJjJ9haE2DPqR2Te28o";
const useProxy = true;
const proxy = "https://cors-anywhere.herokuapp.com/";

// Get user's location and find cafes
function getLocation() {
  const cache = JSON.parse(localStorage.getItem('cachedLocation') || '{}');
  const now = Date.now();

  // Check if we have a cached location less than 10 minutes old
  if (cache.timestamp && now - cache.timestamp < 10 * 60 * 1000) {
    useLocation(cache.lat, cache.lng);
  } else {
    // Get current location
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      
      // Cache the location
      localStorage.setItem('cachedLocation', JSON.stringify({ lat, lng, timestamp: now }));
      useLocation(lat, lng);
    }, () => alert("Location access denied or unavailable."));
  }
}

// Fetch cafes from Google Places API
async function useLocation(lat, lng) {
  const endpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=cafe&key=${apiKey}`;
  const url = useProxy ? proxy + endpoint : endpoint;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      displayCards(data.results);
    } else {
      alert("No cafes found.");
    }
  } catch (e) {
    console.error("Error fetching Places API:", e);
    alert("Error fetching cafes.");
  }
}

// Display cafe cards
function displayCards(cafes) {
  const container = document.querySelector('.cards');
  container.innerHTML = '';
  
  cafes.forEach((cafe, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'swipe-wrapper';
    wrapper.style.zIndex = 200 - i;
    
    const card = document.createElement('div');
    card.className = 'location-card';
    
    // Get cafe photo from Google Places
    const imgUrl = cafe.photos && cafe.photos[0] && cafe.photos[0].photo_reference
      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${cafe.photos[0].photo_reference}&key=${apiKey}`
      : "https://via.placeholder.com/250x150?text=No+Image";
    
    // Prepare cafe data for saving
    const cafeData = {
      name: cafe.name,
      place_id: cafe.place_id,
      photo: imgUrl,
      rating: cafe.rating || "N/A",
    };
    
    // Build card HTML
    card.innerHTML = `
      <img src="${imgUrl}" alt="${cafe.name}" />
      <h3>${cafe.name}</h3>
      <p>⭐️ Rating: ${cafe.rating || "N/A"}</p>
      <p><small>Swipe right to save 💖</small></p>
    `;
    
    wrapper.appendChild(card);
    container.appendChild(wrapper);
    
    // Add swipe functionality with Hammer.js
    const hammertime = new Hammer(wrapper);
    
    hammertime.on('swipeleft', () => {
      wrapper.style.transform = 'translateX(-150%) rotate(-15deg)';
      wrapper.style.opacity = 0;
      setTimeout(() => wrapper.remove(), 300);
    });
    
    hammertime.on('swiperight', () => {
      saveCafe(JSON.stringify(cafeData));
      wrapper.style.transform = 'translateX(150%) rotate(15deg)';
      wrapper.style.opacity = 0;
      setTimeout(() => wrapper.remove(), 300);
    });
  });
}

// Save cafe to localStorage
function saveCafe(cafeJSON) {
  const cafe = JSON.parse(cafeJSON);
  let saved = JSON.parse(localStorage.getItem('savedCafes') || '[]');
  
  // Check if cafe is already saved
  if (!saved.find(c => c.place_id === cafe.place_id)) {
    saved.push(cafe);
    localStorage.setItem('savedCafes', JSON.stringify(saved));
    alert(`${cafe.name} saved!`);
  } else {
    alert(`${cafe.name} is already saved.`);
  }
}

// Show saved cafes
function showSaved() {
  const container = document.querySelector('.cards');
  container.innerHTML = '';
  
  const saved = JSON.parse(localStorage.getItem('savedCafes') || '[]');
  
  if (saved.length === 0) {
    container.innerHTML = '<p>No saved cafes yet 😢</p>';
    return;
  }
  
  saved.forEach(cafe => {
    const card = document.createElement('div');
    card.className = 'location-card';
    card.innerHTML = `
      <img src="${cafe.photo}" alt="${cafe.name}" />
      <h3>${cafe.name}</h3>
      <p>⭐️ Rating: ${cafe.rating}</p>
    `;
    container.appendChild(card);
  });
}

// Initialize app when page loads
window.addEventListener('DOMContentLoaded', () => {
  getLocation();
  
  // Add event listeners for buttons
  const savedBtn = document.getElementById('savedBtn');
  const findBtn = document.getElementById('findBtn');
  
  if (savedBtn) {
    savedBtn.addEventListener('click', showSaved);
  }
  
  if (findBtn) {
    findBtn.addEventListener('click', getLocation);
  }
});