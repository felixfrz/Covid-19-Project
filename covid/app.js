// let content = document.querySelector('.details');
// let button = document.querySelector('.btn');

// button.addEventListener('click', ()=>{
//     let getPost = async () =>{
//         let response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         let data = await response.json();
//         return data;
//     }
//     getPost()
//         .then(data=>{
//             let html = '<h2>USERS post</h2>';
//             data.forEach(post=>{
//                 html += `
//                     <ul>
//                         <li class="id">ID: ${post.id}</li>
//                         <li class="name">NAME: ${post.name}</li>
//                         <li>USERNAME: ${post.username}</li>
//                         <li>EMAIL: ${post.email}</li>
//                         <li>ADDRESS: ${post.address.street}, ${post.address.suite}, ${post.address.city}</li>
//                         <li>PHONE: ${post.phone}</li>
//                     </ul>
//                 `
//             })

//             content.innerHTML = html;
//             content.style.display = 'block'
//         })
// })

//       let name = {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: 92998-3874,
//         geo: {
//         lat: 37.3159,
//         lng: 81.1496
//       }
//     };

//     console.log(name.geo.lat, name.geo.lng);

// let name = [
//     {
//         name: 'deji', city: "ado"
//     },
//     {
//         name: "ayo", city: "akure"
//     },
//     {
//         name: "felix", city: "ondo"
//     },
//     {
//         name: "dj", city: "ekiti"
//     }

// ];
// let html = '';
// name.forEach(list=>{
//    html += `<li style="color:crimson;">${list.name} from ${list.city}</li>`;
// });
// document.body.innerHTML += html;

// let form = document.querySelector('form');
// let input = document.querySelector('input');

// form.addEventListener('submit', e=>{
//     e.preventDefault();
//     let value = input.value;
//     console.log(value);
// })

// const key = "1nNFate1fL9A0Yd2cGBghjtfRqR8UtXM";

// // get weather
// const getweather = async (id) => {
//     const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//     const query = `${id}?apikey=${key}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// };

// //get city info

// const getCity = async (city) => {
//     const base =
//       "http://dataservice.accuweather.com/locations/v1/cities/search";
//       const query = `?apikey=${key}&q=${city}`;
//       const response = await fetch(base + query);
//       const data = await response.json();

//      return data[0];
// };

// getCity('london')
//     .then(data=>getweather(data.Key))
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));

// const key = "1nNFate1fL9A0Yd2cGBghjtfRqR8UtXM";

// const getWeather = async (id) => {
//   const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${id}?apikey=${key}`;
//   const response = await fetch(base + query);
//   const data = await response.json();
//   return data[0];
// };

// const getCity = async (city) => {
//   const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?apikey=${key}&q=${city}`;
//   const response = await fetch(base + query);
//   const data = await response.json();
//   return data[0];
// };

let button = document.querySelector('.btn');
let div = document.querySelector('div');
let covid = async () => {
  let response = await fetch("https://covidnigeria.herokuapp.com/api");

  let data = await response.json();
  return data;
};


let html = `<h3 class="text-center text-uppercase text-primary display-4 jumbotron font-weight-bold">Covid-19 Update</h3>`;
button.addEventListener('click', ()=>{
covid().then(data=>{
  console.log(data);
  let result = data.data;
  html += `
            <ul class="list-group text-center">
            <li class="list-group-item-danger">	
            <i class="fas fa-skull-crossbones text-danger"></i></i> <strong>Death:</strong> ${result.death}</li>
            <li class="list-group-item-secondary"><i class="fas fa-sync text-success"></i>  <strong>Total Active Cases:</strong> ${result.totalActiveCases}</li>
            <li class="list-group-item-warning"><i class="fas fa-virus text-danger"></i> <strong>Total Confirmed Cases:</strong> ${result.totalConfirmedCases}</li>
            <li class="list-group-item-info"><strong>Total Samples Tested:</strong> ${result.totalSamplesTested}</li>
            </ul>`;
  let state = result.states.forEach(state=>{
    html += `
    <div class="card my-4">
          <ul class="list-group text-center">        
    <li class="list-group-item">State: <strong>${state.state}</strong>, Cases On Admission: <strong>${state.casesOnAdmission}</strong>, Confirmed Cases: <strong>${state.confirmedCases}</strong>, Dealth: <strong>${state.death}</strong>, Discharged: <strong>${state.discharged}</strong></li>
    </ul>
    </div>`;
    
  })
  div.innerHTML += html;
})
})