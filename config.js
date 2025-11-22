// config.js
const CONFIG = {
    // Production API URL (your Render deployment)
    API_BASE_URL: 'https://phone-shelf-life-tracker.onrender.com';
    console.log('🌐 Connected to API:', API_BASE_URL);
    
    const isDevelopment = window.location.hostname === 'localhost';
if (isDevelopment) {
    console.log('⚠️ Development mode - update API_BASE_URL if running local backend');
}
    
    // Alternative: Auto-detect environment
    // API_BASE_URL: window.location.hostname === 'localhost' 
    //     ? 'http://localhost:5000' 
    //     : 'https://phone-shelf-life-tracker.onrender.com'
};
