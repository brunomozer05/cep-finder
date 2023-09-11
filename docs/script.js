const fetchcep = async () => {
    const url = 'https://cep.awesomeapi.com.br/json/'
    const inputcep = document.getElementById('cepinput').value

    const {cep,address,state,district,city,ddd} = await fetch(url + inputcep)
        .then(adress => adress.json())
        
        console.log(cep);
      
        document.getElementById("printCity").innerHTML = `City: ${city}`
        document.getElementById("printState").innerHTML = ` ${state}`
        document.getElementById("printAddress").innerHTML = `Address: ${address}`
        document.getElementById("printDistrict").innerHTML = `District: ${district}`
    }
