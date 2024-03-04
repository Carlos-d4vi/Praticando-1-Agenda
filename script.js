const form = document.querySelector('form')

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
    
}

const nomesSalvos = []
const telefonesSalvos = []

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const nomeTd = document.createElement('td')
    const nomeInput = document.getElementById('nomeInput')
    const telefoneTd = document.createElement('td')
    const telefoneInput = document.getElementById('telefoneInput')
    
    const tbody = document.querySelector('tbody')
    const tr = document.createElement('tr')
    
    if(nomeInput.value && telefoneInput.value != ''){
        
        if(nomesSalvos.includes(nomeInput.value.toUpperCase())){
                alert(`O nome: ${nomeInput.value} já foi adicionado anteriormente.`)
            }else if( telefonesSalvos.includes(telefoneInput.value)){
                alert(`O número: ${telefoneInput.value} já foi adicionado anteriormente.`)
            }
                else{
                const nomeFormatado = capitalize(nomeInput.value)
        
                nomeTd.textContent = nomeFormatado
                telefoneTd.textContent = telefoneInput.value
            
                nomesSalvos.push(nomeInput.value.toUpperCase())
                telefonesSalvos.push(telefoneInput.value)

                nomeInput.value = ''
                telefoneInput.value = ''
                
                tbody.append(tr)
                tr.append(nomeTd, telefoneTd)
            
            }
            
            
        }else{
            alert('Preencha os campos')
        }
})