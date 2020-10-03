const form = document.querySelector('form');

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);

    return { cityDetails, weatherDetails }
}





form.addEventListener('sunmit', e=>{
    e.preventDefault();

    const city = form.name.value;
    form.reset();


    updateCity(city)
        .then(data=>console.log(data))
        .catch(err=console.log(err));
})


