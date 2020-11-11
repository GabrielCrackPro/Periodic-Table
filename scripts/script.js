//Select all items
const elements = document.querySelectorAll('.element')
const metals = document.querySelectorAll('.metal')
const semiMetals = document.querySelectorAll('.semi-metal')
const noMetals = document.querySelectorAll('.no-metal')
const nobleGases = document.querySelectorAll('.noble')

const elementName0 = document.querySelectorAll('.element h6')

const metalButton = document.querySelector('#metal-button')
const semiMetalButton = document.querySelector('#semi-metal-button')
const noMetalButton = document.querySelector('#no-metal-button')
const nobleGasButton = document.querySelector('#noble-gas-button')
const artificialButton = document.querySelector('#artificial-button')

const closeInfoButton = document.querySelector('#close-info-button')
const infoContainer = document.querySelector('.info')
const elementName = document.querySelector('.info h2')

//Add listeners
metalButton.addEventListener('click', () => {
    elements.forEach(element => {
        if (element.classList.contains('no-metal') || element.classList.contains('semi-metal') || element.classList.contains('noble') || element.classList.contains('artificial')) {
            element.classList.toggle('selected')
        }
    })
})
semiMetalButton.addEventListener('click', () => {
    elements.forEach(element => {
        if (element.classList.contains('metal') || element.classList.contains('no-metal') || element.classList.contains('noble') || element.classList.contains('artificial')) {
            element.classList.toggle('selected')
        }
    })
})
noMetalButton.addEventListener('click', () => {
    elements.forEach(element => {
        elements.forEach(element => {
            if (element.classList.contains('metal') || element.classList.contains('semi-metal') || element.classList.contains('noble') || element.classList.contains('artificial')) {
                element.classList.toggle('selected')
            }
        })
    })
})
nobleGasButton.addEventListener('click', () => {
    elements.forEach(element => {
        elements.forEach(element => {
            if (element.classList.contains('metal') || element.classList.contains('no-metal') || element.classList.contains('semi-metal') || element.classList.contains('artificial')) {
                element.classList.toggle('selected')
            }
        })
    })
})
artificialButton.addEventListener('click', () => {
    elements.forEach(element => {
        if (element.classList.contains('metal') || element.classList.contains('no-metal') || element.classList.contains('semi-metal') || element.classList.contains('noble')) {
            element.classList.toggle('selected')
        }
    })
})
closeInfoButton.addEventListener('click', () => {
    infoContainer.style.display = 'none'
})
elements.forEach(element => {
    element.addEventListener('click', () => {
        infoContainer.style.display = 'block'
        for (var i = 0; i < elements.length; i++) {
            elements.forEach(element => {
                elementName.textContent = elementName0[i].textContent
            })
        }
    })
})