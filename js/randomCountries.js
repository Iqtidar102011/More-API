const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json()
            .then(data => displayData(data)))
}

const displayData = datas => {
    //    for(const data of datas ){

    //    }
    const countryContainer = document.getElementById("country_container");
    datas.forEach(element => {
        // console.log(element)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>  Name:${element.name.common}</h3>
        <p>captal: ${element.capital ? element.capital[0] : 'No Capital'}</p>
        <button onclick="details('${element.cca2}')">Details</button>
        
        `
        countryContainer.appendChild(div);

    });
}
const details = (countryCode) => {
    // https://restcountries.com/v3.1/alpha/{code}
    // {code}thats means it has to be dynamic : use template string
    // add url dynamically
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    // fetch
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails
            (data[0]))

}
const displayDetails = countryDetail => {
    const detailContainer = document.getElementById("details")
    // we dont loop threough here as its not an array .. its object
    detailContainer.innerHTML = `
    <h2>Details:${countryDetail.name.common} </h2>
    <img src="${countryDetail.flags.png}">
    
    
    `

}



loadCountries()