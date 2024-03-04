const form = document.querySelector('form')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const nomeTd = document.createElement('td')
    const nomeInput = document.getElementById('nomeInput')
    const telefoneTd = document.createElement('td')
    const telefoneInput = document.getElementById('telefoneInput')

    const tbody = document.querySelector('tbody')
    const tr = document.createElement('tr')
    

    if(nomeInput.value && telefoneInput.value != ''){
        nomeTd.textContent = nomeInput.value
        telefoneTd.textContent = telefoneInput.value
    
        nomeInput.value = ''
        telefoneInput.value = ''
        
        tbody.append(tr)
        tr.append(nomeTd, telefoneTd)
    
    }else{
        alert('Preencha os campos')
    }


})