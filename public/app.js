document.getElementById('travelForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value.trim();
    const date = document.getElementById('date').value;
    const resultsDiv = document.getElementById('results');

    // Clear previous results/errors
    resultsDiv.innerHTML = '<div class="loading">Loading...</div>';

    try {
        // Validate input
        if (!city || !date) {
            throw new Error('Please fill in all fields');
        }

        // --- Fetch Weather Data ---
        const weatherResponse = await fetch(
            `/api/weather?city=${encodeURIComponent(city)}&date=${encodeURIComponent(date)}`
        );
        
        if (!weatherResponse.ok) {
            const errorData = await weatherResponse.json();
            throw new Error(errorData.error || 'Weather API failed');
        }

        const weatherData = await weatherResponse.json();

        // --- Fetch Currency Data ---
        const currencyResponse = await fetch('/api/currency?base=USD&target=EUR');
        
        if (!currencyResponse.ok) {
            const errorData = await currencyResponse.json();
            throw new Error(errorData.error || 'Currency API failed');
        }

        const currencyData = await currencyResponse.json();

        // --- Display Results ---
        resultsDiv.innerHTML = `
            <div class="result-card">
                <h2>Weather in ${escapeHTML(city)}</h2>
                <p>📅 Date: ${escapeHTML(date)}</p>
                <p>🌡️ Temperature: ${(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
                <p>☁️ Conditions: ${escapeHTML(weatherData.weather[0].description)}</p>
            </div>
            <div class="result-card">
                <h2>Currency Exchange</h2>
                <p>💵 1 USD = ${currencyData.rate.toFixed(4)} EUR</p>
            </div>
        `;

    } catch (error) {
        resultsDiv.innerHTML = `
            <div class="error">
                ⚠️ Error: ${escapeHTML(error.message)}
            </div>
        `;
    }
});

// Helper function to prevent XSS attacks
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#039;');
}