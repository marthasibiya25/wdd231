const apiKey = "YOUR_API_KEY"; // replace this
const lat = -26.2041;
const lon = 28.0473;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    const weatherDiv = document.getElementById("weather-info");

    const temp = data.list[0].main.temp;
    const desc = data.list[0].weather[0].description;

    weatherDiv.innerHTML = `
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${desc}</p>
        <h3>3-Day Forecast</h3>
    `;

    for (let i = 8; i <= 24; i += 8) {
        weatherDiv.innerHTML += `<p>Day ${i / 8}: ${data.list[i].main.temp}°C</p>`;
    }
}

getWeather();