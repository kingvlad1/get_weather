const axios = require('axios');

// Функція для отримання погоди за назвою міста
async function getWeather(city) {
  try {
    const apiKey = 'YOUR_API_KEY'; // Потрібно отримати власний API-ключ на сайті
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(url);
    const weatherData = response.data;
    const temperature = Math.round(weatherData.main.temp - 273.15); // Конвертація з Кельвіна до Цельсія
    const weatherDescription = weatherData.weather[0].description;

    console.log(`Погода в місті ${city}: ${temperature}°C, ${weatherDescription}`);
  } catch (error) {
    console.error('Сталася помилка при отриманні погоди:', error.message);
  }
}

// Виклик функції для отримання погоди
getWeather('Kyiv');
// Кінець коду
