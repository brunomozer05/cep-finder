const fetchcep = async () => {
    const url = 'https://cep.awesomeapi.com.br/json/'
    const inputcep = document.getElementById('cepinput').value

        adress = await fetch(url + inputcep)
        .then(adress => adress.json())
        .then (cep => cep)
        
        console.log(adress)
        console.log(inputcep)
}