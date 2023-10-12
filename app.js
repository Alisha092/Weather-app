// https://api.openweathermap.org/data/2.5/weather?q=frankfurt&appid=eb2f5bf3b450eb22d529c6fc88ae2558


const apiKey = 'eb2f5bf3b450eb22d529c6fc88ae2558';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const searchBtn = document.querySelector('#search-btn');

const checkWeather = async (cityName) => {
    const weatherData = await axios.get(`${apiUrl}&q=${cityName}&appid=${apiKey}`);

    document.querySelector('.city-name').textContent = weatherData.data.name;
    document.querySelector('.temp-deg').textContent = Math.round(weatherData.data.main.temp);
    document.querySelector('.humidity').textContent = `${weatherData.data.main.humidity}%`;
    document.querySelector('.wind').textContent = `${weatherData.data.wind.speed} km/h`;

    const weatherStatusIcon = document.querySelector('.weather-icon');

    switch (weatherData.data.weather[0].main) {
        case 'Clear':
            weatherStatusIcon.src = 'assets/clear.png'
            break;
        case 'Clouds':
            weatherStatusIcon.src = 'assets/clouds.png'
            break;
        case 'Drizzle':
            weatherStatusIcon.src = 'assets/drizzle.png'
            break;
        case 'Mist':
            weatherStatusIcon.src = 'assets/mist.png'
            break;
        case 'Rain':
            weatherStatusIcon.src = 'assets/rain.png'
            break;
        case 'Snow':
            weatherStatusIcon.src = 'assets/snow.png'
            break;
        default:
            weatherStatusIcon.src = 'assets/clear.png'
            break;
    }

};

searchBtn.addEventListener('click', () => {
    const cityName = document.querySelector('#city-name-input').value;
    checkWeather(cityName);
});
