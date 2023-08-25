$(() => {
    const map = initializeMap();
    let userLocationText = document.getElementById('userLocation');
    let marker;

    //Initial Location
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOption = {
            container: `map`,
            style: `mapbox://styles/mapbox/dark-v11`,
            zoom: 10,
            center: [-98.4916, 29.4252],
        }
        return new mapboxgl.Map(mapOption)
    }


    function findAndPrintAddress(coords) {
        reverseGeocode(coords, MAPBOX_TOKEN)
            .then((data) => {
                console.log(data);
                document.querySelector('h1').innerHTML = `${data}`;
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }


    function createMarker(lngLat) {
        if (marker) {
            marker.remove(); // Remove the existing marker if it exists
        }
        marker = new mapboxgl.Marker({draggable: true})
            .setLngLat(lngLat)
            .addTo(map);

        marker.on('dragend', function () {
            const coords = marker.getLngLat();
            findAndPrintAddress(coords);
            updateWeatherForecast(coords); // Update weather forecast when the marker is dragged
        });

        return marker;
    }

    function updateWeatherForecast(coords) {
        const latitude = coords.lat;
        const longitude = coords.lng;

        if (latitude !== undefined && longitude !== undefined) {
            // Fetch weather data and display forecast cards (similar to the existing code)
            const apiKey = '36d9fd8f72ad4838cff224a6a7fd75bf';
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

            $.ajax(forecastUrl)
                .done((data) => {
                    const forecastDays = data.list.filter((forecast, index) => index % 8 === 0);

                    const forecastCardsContainer = document.getElementById('forecastCards');
                    forecastCardsContainer.innerHTML = ''; // Clear previous cards

                    forecastDays.forEach((forecast) => {
                        const dateTime = forecast.dt_txt;
                        const temperature = forecast.main.temp;
                        const weatherDescription = forecast.weather[0].description;
                        const humidity = forecast.main.humidity;
                        const windSpeed = forecast.wind.speed;
                        const pressure = forecast.main.pressure;

                        const card = createForecastCard(dateTime, temperature, weatherDescription, humidity, windSpeed, pressure);
                        forecastCardsContainer.appendChild(card);
                    });
                })
                .fail(console.error);
        } else {
            console.log('Unable to retrieve coordinates for the specified address');
        }
    }


    //Search for state
    function createForecastCard(dateTime, temperature, weatherDescription, humidity, windSpeed, pressure) {
        const card = document.createElement('div');
        card.classList.add('card');

        const dateElement = document.createElement('p');
        dateElement.textContent = new Date(dateTime).toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
        card.appendChild(dateElement);

        let html = `
            <div class="weather-card">
                <p>Temperature: ${temperature}</p>
            </div>
        `

        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `Temperature: ${temperature} °C`;
        card.appendChild(temperatureElement);

        const weatherElement = document.createElement('p');
        weatherElement.textContent = `Weather: ${weatherDescription}`;
        card.appendChild(weatherElement);

        const humidityElement = document.createElement('p');
        humidityElement.textContent = `Humidity: ${humidity}%`;
        card.appendChild(humidityElement);

        const windElement = document.createElement('p');
        windElement.textContent = `Wind Speed: ${windSpeed} m/s`;
        card.appendChild(windElement);

        const pressureElement = document.createElement('p');
        pressureElement.textContent = `Pressure: ${pressure} hPa`;
        card.appendChild(pressureElement);

        return card;
    }


    function Place(event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            const address = document.querySelector('#place').value;
            document.getElementById('location').textContent = `Location: ${address}`;


            geocode(address, MAPBOX_TOKEN)
                .then((locationData) => {
                    console.log(locationData);
                    map.setCenter(locationData);
                    map.setZoom(10);

                    const latitude = locationData[1];
                    const longitude = locationData[0];

                    if (latitude !== undefined && longitude !== undefined) {
                        const lngLat = [longitude, latitude];
                        createMarker(lngLat);
                        ;

                        // Fetch weather data and display forecast cards (remaining code remains unchanged)
                        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

                        $.ajax(forecastUrl)
                            .done((data) => {
                                const forecastDays = data.list.filter((forecast, index) => index % 8 === 0);

                                const forecastCardsContainer = document.getElementById('forecastCards');
                                forecastCardsContainer.innerHTML = ''; // Clear previous cards

                                forecastDays.forEach((forecast) => {
                                    const dateTime = forecast.dt_txt;
                                    const temperature = forecast.main.temp;
                                    const weatherDescription = forecast.weather[0].description;
                                    const humidity = forecast.main.humidity;
                                    const windSpeed = forecast.wind.speed;
                                    const pressure = forecast.main.pressure;

                                    const card = createForecastCard(dateTime, temperature, weatherDescription, humidity, windSpeed, pressure);
                                    forecastCardsContainer.appendChild(card);
                                });
                            })
                            .fail(console.error);
                        updateWeatherForecast(lngLat);
                    } else {
                        console.log('Unable to retrieve coordinates for the specified address');
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        }
    }

    map.on('click', function (event) {
        const lngLat = event.lngLat.toArray();
        createMarker(lngLat); // Create the marker at the clicked location
        findAndPrintAddress(lngLat); // Update address when a marker is placed
        updateWeatherForecast(lngLat); // Update weather forecast when a marker is placed
    });

    document.querySelector('#place').addEventListener('keypress', Place);
});

