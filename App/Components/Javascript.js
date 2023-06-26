function Realize(){
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")
    let bairro  = document.getElementById("bairro")
    let Logradouro = document.getElementById("Logradouro")
    let cep = document.getElementById("cep").value;
    // let endereco = document.getElementById("endereco")
    let cepValido = cep.substr(0,5) + "-" + cep.substr(5) + ".json"
    let url = "https://cdn.apicep.com/file/apicep/" + cepValido
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            cidade.value = data.city;
            estado.value = data.state;
            bairro.value = data.district;
            Logradouro.value = data.address;
        })
}

//substr  realiza a função de subitração de string
//.then
//fetch