//method 1

// - Retrieve and display all the names of the countries available in the API
// https://restcountries.com/v3.1/all

// fetch('https://restcountries.com/v3.1/all')
//     .then((response) => {
//         return response.json();
//     })
//     .then((countries) => {
//         console.log(countries);
//         // select the ordered list
//         let countryList = document.getElementById('praveen');
//         for (let country of countries) {
//             // console.log(country.name.common);
//             let countryListItem = document.createElement('li');
//             countryListItem.textContent = country.name.common;
//             countryList.appendChild(countryListItem);
//         }
//     })
//     .catch((error) => {
//         console.error('error fetching data:', error);
//     })



// method 2

fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((countries) => {
        console.log(countries);
        // select the ordered list
        let countryList = document.getElementById('praveen');
        // for (let country of countries) {
        countries.forEach((country) => {
            
        
            // console.log(country.name.common);
            let countryListItem = document.createElement('li');
            countryListItem.textContent = country.name.common;
            countryList.appendChild(countryListItem);
            // }
            })
    })
    .catch((error) => {
        console.log('error fetching data:', error);
    })






// fetch('https://restcountries.com/v3.1/all')
//     .then((response) => {
//         return response.json();
//     })
//     .then((countries) => {
//         console.log(countries);
//         // select the ordered list
//         // let countryList = document.getElementById('praveen');
//         let selectOption = document.getElementById("kumar");
//         // for (let country of countries) {
//         countries.forEach((country) => {
            
        
//             // console.log(country.name.common);
//             // let countryListItem = document.createElement('li');
//             // countryListItem.textContent = country.name.common;
//             // countryList.appendChild(countryListItem);
//             // }
//             let Option = document.createElement("option");
//             Option.textContent = country.name.common;
//             selectOption.appendChild(Option);
            
//             })
//     })
//     .catch((error) => {
//         console.log('error fetching data:', error);
//     })

