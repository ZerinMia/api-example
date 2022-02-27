const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `<h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick= "loadCountryByName('${country.name.common}')">Details</button>
        `;

        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
   <h3>${country.name.common}</h3>
   <p>Population: ${country.population}</p>
   <img width="100px" src="${country.flags.svg}">
   `
}
