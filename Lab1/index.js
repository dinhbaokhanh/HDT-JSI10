
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
		'X-RapidAPI-Key': 'bcbecb588bmsh6344722e4d6dafdp145343jsn9c1f1f2d4a2f'
	}
};

const searchInput = document.getElementById("search-input");
const locations = document.querySelector(".country");
const deaths = document.querySelector(".deaths");
const confirmed = document.querySelector(".confirmed");
const recovered = document.querySelector(".recovered");


searchInput.addEventListener("change", (event) => {
    locations.innerHTML = 'Loading..';
    deaths.innerHTML = 'Loading..';
    confirmed.innerHTML = 'Loading..';
    // recovered.innerHTML = 'Loading..';
    console.log(event.target.value)
    fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${event.target.value}`,options)
        .then(async function(response) {
            const info = await response.json();
            console.log(info);
            locations.innerHTML = info.data.location ;
            deaths.innerHTML = info.data.deaths ;
            confirmed.innerHTML = info.data.confirmed ;
            // recovered.innerHTML = info.data.recovered ;
        })
})