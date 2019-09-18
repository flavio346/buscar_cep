function buscar_cep(){
    
    let cep = document.getElementById('txtcep')
    let cep2 = Number(cep.value)

    if(cep.value.length == 0){
        window.alert('[ERRO] CAMPO EM BRANCO! INSIRA O CEP.')
    }
    if(cep.value.length < 8 || cep.value.length > 8){
        window.alert('[ERRO] CPF POSSUI SOMENTE 8 DIGITOS!! TENTE NOVAMENTE')
    }

    
    fetch('https://viacep.com.br/ws/'+cep.value+'/json/')
        .then(function(response){
            if(response.ok){
              let blz = document.getElementById('status')
              blz.style.color = 'green'
             blz.innerHTML =  ''+String.fromCodePoint(10004)
              
            }
           
            return response.json()
        })
        .then(function(data){
            console.log(data)
            let ncep = document.getElementById('cepp')
            let nbairo = document.getElementById('bairro')
            let endereco = document.getElementById('logra')
            let cidade = document.getElementById('local')
            let estado = document.getElementById('uf')
            ncep.innerHTML = data.cep
            nbairo.innerHTML = data.bairro
            endereco.innerHTML = data.logradouro
            cidade.innerHTML = data.localidade
            estado.innerHTML = data.uf
            if(data.erro == true){
                let nda = document.getElementById('status')
                nda.style.color = 'red'
                nda.innerHTML = ''+String.fromCodePoint(10006)
                window.alert('[ERRO] CEP INVALIDO !! TENTE NOVAMENTE.')
               
                ncep.innerHTML = ''
                nbairo.innerHTML = ''
                endereco.innerHTML = ''
                cidade.innerHTML = ''
                estado.innerHTML = ''
            }
            
        })



   
    
    

}
function relogio(){
    let tempo = new Date()
    let hora = tempo.getHours()
    let minuto = tempo.getMinutes()
    let segundo = tempo.getSeconds()
    let dia =tempo.getDate()
    let mes = tempo.getMonth() + 1
    let ano = tempo.getFullYear()

    if(hora < 10){
        hora = '0'+hora
    }
    if(minuto < 10){
        minuto = '0'+minuto
    }
    if(segundo < 10){
        segundo = '0'+segundo
    }
    if(dia < 10){
        dia = '0'+dia
    }
    if(mes < 10){
        mes = '0'+mes
    }

    document.getElementById('dat').innerHTML = String.fromCodePoint(128197)+' Data : '+dia+'/'+mes+'/'+ano
    document.getElementById('hora').innerHTML = String.fromCodePoint(9200)+' Hora : '+hora+':'+minuto+':'+segundo
}
window.setInterval('relogio()', 1000)

