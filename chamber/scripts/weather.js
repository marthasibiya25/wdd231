const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // replace with your key
const city = 'Johannesburg,ZA';

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();

    // Current weather
    const current = data.list[0];
    document.getElementById('temp').textContent = `Temp: ${current.main.temp}°C`;
    document.getElementById('description').textContent = `Condition: ${current.weather[0].description}`;

    // 3-day forecast
    let forecastHTML = '';
    for (let i = 1; i <= 3; i++) {
        const day = data.list[i * 8]; // 24-hour intervals
        forecastHTML += `<p>${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp}°C, ${day.weather[0].description}</p>`;
    }
    document.getElementById('forecast').innerHTML = forecastHTML;
}

getWeather();