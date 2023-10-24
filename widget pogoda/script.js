const apiKey = 'd093594e09914fdb23a11db244a82750'; 
const cityInput = document.getElementById('city');
const searchButton = document.getElementById('search');
const forecastButton = document.getElementById('forecast-button');
const forecastContainer = document.getElementById('forecast');
const forecastList = document.getElementById('forecast-list');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
        forecastContainer.style.display = 'none';
    }
});

const weatherWidget = document.getElementById('weather-widget');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const currentDate = document.getElementById('current-date');

forecastButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getForecast(city);
    }
});

function getDayName(date) {
    const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    return days[date.getDay()];
}
 

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`);
        const data = await response.json();
        cityName.textContent = data.name;
        temperature.textContent = `Temperatura: ${data.main.temp}°C`;
        description.textContent = `Opis: ${data.weather[0].description}`;
        feelsLike.textContent = `Odczuwalna: ${data.main.feels_like}°C`;
        windSpeed.textContent = `Prędkość wiatru: ${data.wind.speed} m/s`;
        pressure.textContent = `Ciśnienie: ${data.main.pressure} hPa`;
        minMaxTemperature.textContent = `Min/Max Temp: ${data.main.temp_min}°C / ${data.main.temp_max}°C`;

        const currentDateLocal = new Date();
        const formattedDate = currentDateLocal.toLocaleDateString('pl-PL'); 
        currentDate.textContent = `Dzisiejsza data: ${formattedDate}`;

    } catch (error) {
        console.error('Błąd pobierania danych pogodowych', error);
        cityName.textContent = 'Błąd pobierania danych';
    }
}


async function getForecast(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pl`);
        const data = await response.json();
        cityName.textContent = data.city.name;
        temperature.textContent = '';
        description.textContent = '';
        forecastList.innerHTML = '';

        const noonData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
        
        noonData.forEach(item => {
            const date = new Date(item.dt * 1000);
            const dayName = getDayName(date);
            const temperature = item.main.temp;
            const description = item.weather[0].description;
            const listItem = document.createElement('p');
            listItem.textContent = `${dayName}: ${description}, Temperatura: ${temperature}°C`;
            forecastList.appendChild(listItem);
        });

        forecastContainer.style.display = 'block';
    } catch (error) {
        console.error('Błąd pobierania prognozy pogody', error);
        forecastContainer.style.display = 'none';
        cityName.textContent = 'Błąd pobierania danych';
    }
}

getWeatherData('Warsaw,PL');