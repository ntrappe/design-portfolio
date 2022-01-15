fetch ('http://ip-api.com/json')
    .then (res => res.json())
    .then (response => {
        console.log ("Country: ", response.country);
        console.log ("City: ", response.city);
        console.log ("Timezone: ", response.timezone);
        console.log ("Lat (", response.lat, ") Lon (", response.lon, ")");
    })
    .catch ((data, status) => {
        console.log('Request failed');
    })

