const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');
const error404=document.querySelector('.notfound');

search.addEventListener('click', ()=>{
    const api='69ca9e5473c8ec848bb2c1a53cd68426'
    const city=document.querySelector('.search-box input').value;
    if(city==='')
        return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temp');
            const description = document.querySelector('.weather-box .desc');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'source images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'source images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'source images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'source images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'source images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });


});
search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const api='69ca9e5473c8ec848bb2c1a53cd68426'
    const city=document.querySelector('.search-box input').value;
    if(city==='')
        return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temp');
            const description = document.querySelector('.weather-box .desc');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'source images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'source images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'source images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'source images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'source images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });
    }
});
