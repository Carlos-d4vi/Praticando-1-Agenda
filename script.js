const form = document.querySelector('form')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const nomeTd = document.createElement('td')
    const nomeInput = document.getElementById('nomeInput')
    const telefoneTd = document.createElement('td')
    const telefoneInput = document.getElementById('telefoneInput')

    const tbody = document.querySelector('tbody')
    const tr = document.createElement('tr')
    

    nomeTd.textContent = nomeInput.value
    telefoneTd.textContent = telefoneInput.value

    tbody.append(tr)
    tr.append(nomeTd, telefoneTd)
})